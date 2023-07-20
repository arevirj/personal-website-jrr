import { Outlet, LiveReload, Links } from "@remix-run/react";
import styles from './tailwind.css'

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
        <div>
          <Outlet />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
