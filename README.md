# Nokori Core

Nokori Core is a rapidly scalable microservice API server enabling teams of all sizes to forego data source fetching/updating boilerplating that comprises large amounts of the code written for most projects.

With Core, connect the world's most popular SQL databases and any HTTP Rest API in seconds within the same interface you test adhoc queries and connections.


## About

<p align="center" >
 <img src="https://github.com/getnokori/api/assets/1544125/4c3b8d63-d2ab-4857-9f79-5ddabbe69c15" width="500px" />
</p>

Core acts as a universal data layer that allows developers to connect SQL databases, document stores, vector dbs, and any third party API via a very intuitive UI.

Core organizes logically grouped data souces/connections in to data "Hubs" that allow developers to organize connections not by database or api endpoint, but by related kind/type for ease of access and rapid development.

Compose SQL queries directly in the UI, test them, then deploy them as consumable REST endpoints that can be consumed by any application or service.

Once connected, developers can consume both SQL queries and REST endpoints globally via a univerally consistent, singular REST API endpoint via SDK or API.

## Roadmap

We have an exciting list of features planned for Core, including:

- [x] MySQL Support
- [x] Postgres Support
- [x] MariaDB Support
- [x] HTTP Rest API Support
- [x] SQL Query Composing & Testing
- [x] One-Click REST Endpoint Deployment
- [ ] Triggers [WIP]
- [ ] Webhooks
- [ ] Event Subscriptions
- [ ] Data Pipelines
- [ ] Write Throughput Multipliers
- [ ] Query Analytics
- [ ] Query Caching
- [ ] Query Rate Limiting
- [ ] Respone Transformers
- [ ] Multi-Source Real-Time Materialized Views

## Configuration

Backend data sources can be configured via [the UI](https://github.com/getnokori/nokori-ui):

![image](https://github.com/getnokori/api/assets/1544125/bc4ed21a-020d-41f5-a636-14a5a767dc3c)


## Getting Started

All technical documentation is available by cloning and running the [docs repo](https://github.com/getnokori/docs).

## To create the database

Use the sql file found in `./scripts/db/schema-create.sql`

## To run locally

`npm i`

`npm run dev`

## Github Actions

There is a deployment actions file in the `.github/workflows` folder that serves as a good base for deploying to AWS. Assumes you are running ubuntu >18.04 on EC2.
