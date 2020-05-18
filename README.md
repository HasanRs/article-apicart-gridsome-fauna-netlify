# Apicart, Gridsome, FaunaDB e-commerce template

This is a code for article
The application runs on the [https://apicart-fauna-gridsome-example.netlify.app/](https://apicart-fauna-gridsome-example.netlify.app/).

### 1. Usage

1. Install dependencies `yarn install`
2. Move `template.env` into the `.env` file.
3. Sign up on [Fauna.com](https://fauna.com/), create server token and add it into the `.env` file (`FAUNADB_SECRET`)
4. Sign up on [Apicart.net](https://apicart.net/en-us/product/apicart-store/getting-started/installation/), copy store sdk tokens and paste them into the `.env` file (`GRIDSOME_APICART_STORE_TOKEN`)
5. Add products and translations into the FaunaDB according to the article
6. Run build `yarn build`
7. The app should be available on [http://localhost](http://localhost).

Note, that Apicart is not able to get product files from http://localhost.
You have to deploy the app somewhere and then get the files from accessible url. The url can be easily modified
in the .env file. Just change the `DATA_PROVIDER` url to that, where the app is running.
