import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react"
import stylesURL from "~/tailwind.css"
export const links:LinksFunction = () => [
  {rel: "stylesheet", href: stylesURL}
]

export default function NewRoute() {
    return <body>
      <div>
        <h1 className="text-center">This placeholder</h1>
        
      </div>
    </body>
}
