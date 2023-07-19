// This page will showcase some projects I've worked on, with images and descriptions.
import { Outlet } from "@remix-run/react"
export default function PortfolioRoute(){
    return(
        <div>
            <h1>My Work</h1>
            <main>
                <Outlet />
            </main>
        </div>
    );
}