# Nokori API

Nokori is a universal data layer that allows developers to connect SQL databases, document stores, vector dbs, and any third party API via a very intuitive UI.

Once connected, developers can consume queries/endpoints globally via a univerally consistent, singular REST API without boilerplate code via the SDK or API.

Scaling up your API is as easy as adding more servers to the cluster.

## About

The Nokori API is a universal data layer that allows developers to connect SQL databases and any third party API via a very intuitive [UI](https://github.com/getnokori/nokori-ui) in seconds, and then consume queries/endpoints globally without boilerplate code via the [SDK](https://www.npmjs.com/package/@nokori/js-sdk) or API.

![image](https://github.com/getnokori/api/assets/1544125/4c3b8d63-d2ab-4857-9f79-5ddabbe69c15)

![image](https://github.com/getnokori/api/assets/1544125/bc4ed21a-020d-41f5-a636-14a5a767dc3c)

## Technical Documentation

All technical documentation is available by cloning and running the [docs repo](https://github.com/getnokori/docs).

## To create the database

Use the sql file found in `./scripts/db/schema-create.sql`

## To run locally

`npm i`

`npm run dev`

## Github Actions

There is a deployment actions file in the `.github/workflows` folder that serves as a good base for deploying to AWS. Assumes you are running ubuntu >18.04 on EC2.
