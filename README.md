# Hubs

Hubs is a rapidly scalable data gateway platform.

Build data-rich applications without building backend APIs and boilerplate code for basic CRUD operations to your favorite database and/or third party APIs.

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

Hubs is accessible via REST API or SDK. 

To get started, init a new project, configure basic project settings, and the build script will generate your API Key that can be used for API Requests, SDK, and to enable [Nokori UI](https://github.com/getbokori) to connect with your Hubs instance.

### Install the Project

```bash
npm i
```

### Init Build

```bash
npm run init
```

<img width="619" alt="Screenshot 2024-01-27 at 10 33 55 PM" src="https://github.com/getnokori/core/assets/1544125/c00fc890-8b6f-451a-9ace-f08d6f4c72d1">

Save your API key at the end of the process and include it in API requests using the header `X-Nokori-API` if not using the SDK or UI.

## To run locally

`npm run dev`

## Consuming Queries & APIs

To consume data once endpoints are saved/deployed is as easy as: 

### SDK

```js
import nokori from '@nokori/js-sdk'
const nk = nokori('api_key')

const { data, error } = await nk.query.execute({
		queryId: 'nk.q.-ddqHfqeZNihbChcAbf', //Global Cloud Query ID
		context: {
			name: formData.get('name'),
		},
	})
```

### cURL

```bash {{ title: 'cURL' }}
curl https://api.nokori.com/v1/queries/execute \
  -X POST
  -H 'x-nokori-api-key: {{apiKey}}' \
  -H 'Content-Type: application/json' \
  -d '{"queryId": "nk.q.Yum6RAQFvj2eMf5kLKR", "context": {}}'
```

## Full Documentation
Full documentation coming soon...

## Github Actions

There is a deployment actions file in the `.github/workflows` folder that serves as a good base for deploying to AWS. Assumes you are running ubuntu >18.04 on EC2.
