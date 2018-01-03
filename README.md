# hyperapp-crypto

The most 2018 static web app using Hyperapp.js bundled with Parcel.js to show cryptocurrency prices (source: api.coinmarketcap.com)

`npm start` to develop on localhost

# Libraries used

Hyperapp: https://github.com/hyperapp/hyperapp

Parcel: https://github.com/parcel-bundler/parcel

Cryptocurrency Icons: https://github.com/cjdowner/cryptocurrency-icons

SpinKit: https://github.com/tobiasahlin/SpinKit

#### Deployed with Netlify https://github.com/netlify

## Testing

End to end tests (see [spec.js](cypress/integration/spec.js)) using [Cypress.io](https://www.cypress.io/)

- start server `npm start`
- open Cypress GUI with `npm run cy:open` and click on the spec file
- on CI run `npm test` (starts the server, runs the tests, shuts the server)
