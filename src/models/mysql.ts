import { promisify } from 'util'
import mysql, { createPool } from 'mysql2'

const config = {
  connectionLimit: 5,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'nokori',
  charset: 'utf8mb4',
  multipleStatements: true,
  dateStrings: true,
}

const verifyConnection = async () => {
  return new Promise((resolve, reject) => {
    const { database, ...modifiedConfig } = config
    const connection = mysql.createConnection(modifiedConfig);

    connection.connect(err => {
      if (err) {
        reject(new Error('Error connecting to the database: ' + err.message));
      } else {
        console.log('Connected successfully to the database.');

        // Check if the database exists or create it
        const dbName = 'nokori';
        connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`, (err, result) => {
          if (err) {
            console.error('Error creating database: ' + err.stack);
            return;
          }
          console.log(`Database ${dbName} is ready.`);
        });

        connection.end();
        resolve(true);
      }
    });
  });
};

const pool = createPool(config)

if (process.env.NODE_ENV !== 'test') {
  pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST')
        console.error('Database connection was closed.')

      if (err.code === 'ER_CON_COUNT_ERROR')
        console.error('Database has too many connections.')

      if (err.code === 'ECONNREFUSED')
        console.error('Database connection was refused.')
    }
    if (connection) connection.release()
  })
}

const convertMySqlPacketsToObjects = async (results: any) => {
  if (!results.map || typeof results.map !== 'function') return results

  return results.map((result: any) => ({
    ...result,
  }))
}

export const poolAsync = {
  query(sql: string, values: any): any {
    return promisify(pool.query).call(pool, { sql, values })
  },
}

export const query = async (sql: string, values: any[] = []): Promise<any> => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, resp) => {
      if (err)
        return reject(err)

      resolve(resp)
    })
  })
  // const results = await promisify(pool.query).call(pool, { sql, values })
  // return await convertMySqlPacketsToObjects(results)
}

const rollback = (err) => {
  return new Promise((resolve, reject) => {
    pool.query('ROLLBACK;', [], (err, resp) => {
      if (err) {
        // Fall back to torching the connection
        pool.end()
        console.error(err)
        return reject(err)
      }

      return resp
    })
  })
}

export const end = async () => {
  return await pool.end()
}

export default {
  verifyConnection,
  pool: poolAsync,
  end,
  rollback,
  query,
  convertMySqlPacketsToObjects,
}
