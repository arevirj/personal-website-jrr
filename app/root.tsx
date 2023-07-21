import { Outlet, LiveReload, Links } from "@remix-run/react";
import styles from './tailwind.css'
import Layout from "./components/Layout";

export function links() {
  return [{rel: 'stylesheet', href: styles}]
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>Justin Rivera</title>
        <Links />
      </head>
      <body>
        <Layout>
        <div>
          <Outlet />
          <LiveReload />
        </div>
        </Layout>
      </body>
    </html>
  );
}
