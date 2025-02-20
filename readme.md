# products-module-federation

## Context

There are 3 applications:

- `host`: Next.js app
- `products`: Next.js app
- `basket`: `React + Webpack 5`

## Setup

- run `yarn` - Install all the dependencies to run the apps in parallel.
- run `npm run start` - Start `host` and `basket` and `products`
- `host` on `localhost:3000`
- `basket` on `localhost:3002`
- `products` on `localhost:3001`

- Navigate to `localhost:3000` - Products and shopping cart must be loaded from remote applications.

- You can add/delete cards
