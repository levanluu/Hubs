import "dotenv/config"
import chalk from 'chalk';
import figlet from 'figlet';
import envinfo from 'envinfo';
import db from '../src/models/mysql'
import PackageInfo from '../package.json'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url';

const out = console.log;
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const buildSQL = fs.readFileSync(path.join(__dirname, './schema.sql'), 'utf8');
  if (!buildSQL) { out(chalk.red('\u2717 Error: Failed to read schema.sql file \n')); process.exit(1) }

  const showEnvInfo = async () => {
    console.log(chalk.black.bgWhite.bold('\nEnvironment Info:'))

    const options = {
      System: ['OS', 'CPU'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
      npmGlobalPackages: ['nuxt', 'create-nuxt-app']
    }

    const result = await envinfo.run(options)
    const jsonResult = await envinfo.run(options, { json: true }).then(JSON.parse)

    if (jsonResult['Binaries']['Node']['version'].split('.')[0] < 18) {
      out(chalk.red(`Error: Node version must be at least 18.0.0, but you are using ${jsonResult['Binaries']['Node']['version']}`))
      process.exit(1)
    }
    out(chalk.green(result))

    sleep(500)

    out(chalk.white.bgGreen('Environment Info Check Passed.'))
    console.log('\n')
  }

  const nokoriBanner = await figlet(`Nokori v${PackageInfo.version}`, {
    font: "Slant",
    whitespaceBreak: true,
  });
  console.log(nokoriBanner)

  await sleep(1000)

  out(chalk.black.bgWhite.bold('Checking Environment Info...'))
  showEnvInfo()

  await sleep(1000)

  out(chalk.black.bgWhite.bold('Verifying Environmental Configurations...'))

  if (!process.env.DB_HOST) { out(chalk.red('\u2717 Error: DB_HOST is not defined in .env file \n')); process.exit(1) }
  out('\u2713 DB_HOST found ')
  if (!process.env.DB_PORT) { out(chalk.red('\u2717 Error: DB_PORT is not defined in .env file \n')); process.exit(1) }
  out('\u2713 DB_PORT found ')
  if (!process.env.DB_USER) { out(chalk.red('\u2717 Error: DB_USER is not defined in .env file \n')); process.exit(1) }
  out('\u2713 DB_USER found ')
  if (!process.env.DB_PASS) { out(chalk.red('\u2717 Error: DB_PASS is not defined in .env file \n')); process.exit(1) }
  out('\u2713 DB_PASS found ')
  out(chalk.green('\u2713 All environmental configurations found \n'))

  out(chalk.black.bgWhite.bold('Init database setup \n'))

  out('Attempting to connect to database... \n')

  try {
    const verified = await db.verifyConnection()

    if (verified) {
      out(chalk.green('\u2713 Connected successfully to the database. \n'))
    } else {
      out(chalk.red('\u2717 Error: Failed to connect to the database. \n'))
      process.exit(1)
    }

  } catch (error) {
    out(chalk.red('\u2717 Error: ' + error.message + '\n'))
    process.exit(1)
  }

  out('Attempting to create database... \n')

  try {
    db.query(buildSQL, (err: any) => {
      if (err) throw err;
      console.log('Database setup completed.');
      db.end();
    });

  } catch (error) {
    out(chalk.red('\u2717 Error: ' + error.message + '\n'))
    process.exit(1)
  }

  out(chalk.black.bgWhite.bold('Database setup completed. \n'))

  out(chalk.black.bgWhite.bold('Generating API Keys... \n'))

})()
