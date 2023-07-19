import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react"
import stylesURL from "~/tailwind.css"
export const links:LinksFunction = () => [
  {rel: "stylesheet", href: stylesURL}
]

export default function IndexRoute() {
    return <div className="bg-gray-900 text-white min-h-screen">
       
    <div className="container mx-auto pt-10 px-4 bg-gradient-to-r from-indigo-600 to-pink-400 p-8 rounded-lg shadow-lg">
      <div className="mt-10">
        <h2 className="text-4xl text-white font-semibold text-center">About Me</h2>
        <p className="mt-2">
          Hello! I'm Justin Rivera, a developer who enjoys coding while listening
          to relaxing lo-fi beats. In my free time, I like to explore new
          music and experiment with new technologies.
        </p>
      </div>
    </div>

    <div className="container mx-auto pt-10 px-4 bg-gradient-to-r from-indigo-600 to-pink-400 p-8 rounded-lg shadow-lg">
      <p className = "mt-2">
        My name is Justin Rivera and osdnfnoisdnf oi sondf oshdfosoidf oisd foisndfo nsodvn s
        d osdn osdn fosdin osdn 
         sdnosdn o n sd on osdif oisdn osdinf osidnf osdifn nosidifn osdnf osdinf osdnf osdnf osndf osidnf osidnf 
         sd osdn ocnburgfowesnf
      </p>
    </div>
  </div>
}
