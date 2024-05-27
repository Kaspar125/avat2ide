# Welcome to Remix + Vite + shadcn/ui!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Getting Started

### Classic Route page starter.
 * loader tagastab json kujul nt kasutaja vmt mis db-st või mujalt pärida
 * About() nimi võib olla mida iganes aga peab olema default export, see mis on default export on see mis renderdataks
 * React komponentidel sisu kuvamiseks on {muutujaNimi} vaja kasutada
 * TS/JS on muutujad let või const. Nt let test = "test" või const test = "test"
```typescript
export async function loader({request}: LoaderFunctionArgs) {
    return json({test: "test"});
}

export default function About() {
    const {test} = useLoaderData<typeof loader>();
    return (
        <>
            <h1>Hello {test}</h1>
        </>
);
}
```

## Development

Run the Vite dev server:

```sh
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Setup your environment:

```sh
DB_PATH='/data' # a persistent volume
NODE_ENV='production'
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build` and the server

- `server.js`
- `build/server`
- `build/client`

Take a look at the provided Dockerfile for further details on how to configure a production environment.
