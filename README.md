# Hubs

Hubs is a rapidly scalable data gateway platform.

Teams spend countless hours writing repetitive code to fetch and put data to a variety of backend data sources. The majority of data connections in modern times connect via a handful of protocols, leaving developers largely copying and pasting mostly verbatim code to simply get and put data for their applications.

With Hubs, we've abstracted the repetitive boilerplating, freeing developers to connect the world's most popular SQL databases and any HTTP Rest API in seconds within the same interface you test adhoc queries and connections via [Nokori UI](https://github.com/getnokori/nokori-ui).


## About

<p align="center" >
 <img src="https://github.com/getnokori/api/assets/1544125/4c3b8d63-d2ab-4857-9f79-5ddabbe69c15" width="500px" />
</p>


Hubs organizes logically grouped data souces/connections in to data "Hubs" that allow developers to organize connections not by database or api endpoint, but by related kind/type for ease of access and rapid development.

Compose SQL queries directly in the UI, test them, then deploy them as consumable REST endpoints that can be consumed by any application or service.

Once connected, developers can consume all connected data sources globally via a univerally consistent, singular REST API endpoint via SDK or API.

The goal is rapid development and deployment of new applications via ease of data access.

## Roadmap

We have an exciting list of features planned for Hubs, including:

- [x] MySQL Support
- [x] Postgres Support
- [x] MariaDB Support
- [x] HTTP Rest API Support
- [x] SQL Query Composing & Testing
- [x] One-Click REST Endpoint Deployment
- [ ] 🚧 Triggers [WIP]
- [ ] 🚧 Webhooks
- [ ] Data Enrichers
- [ ] Event Subscriptions
- [ ] Data Pipelines
- [ ] Write Throughput Multipliers
- [ ] Query Analytics
- [ ] Query Caching
- [ ] Query Rate Limiting
- [ ] Respone Transformers
- [ ] Multi-Source Real-Time Materialized Views

Feature request? Open an issue to get the convo started.


## Getting Started

Hubs is accessible via REST API. To get started, you must first init a new project, configure basic project settings, and the build script will generate your API Key that can be used for API Requests, SDK, and to enable [Nokori UI](https://github.com/getbokori) to connect with Hubs.

### Install the Project

```bash
npm i
```

### Init Build

```bash
npm run build
```

<img width="619" alt="Screenshot 2024-01-27 at 10 33 55 PM" src="https://github.com/getnokori/core/assets/1544125/c00fc890-8b6f-451a-9ace-f08d6f4c72d1">

Save your API key at the end of the process and include it in API requests using the header `X-Nokori-API` if not using the SDK or UI.

## To run locally

`npm run dev`

## Github Actions

There is a deployment actions file in the `.github/workflows` folder that serves as a good base for deploying to AWS. Assumes you are running ubuntu >18.04 on EC2.
