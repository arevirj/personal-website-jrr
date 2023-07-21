import stylesURL from "~/tailwind.css"
import type { LinksFunction } from "@remix-run/node";
export const links:LinksFunction = () => [
  {rel: "stylesheet", href: stylesURL}
]


export default function ProfileIdRoute() {
    return(
        <div>
            <h1 className="text-red-500">Hello</h1>
        </div>
    )


}