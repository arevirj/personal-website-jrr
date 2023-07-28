import { Outlet, useLoaderData} from "@remix-run/react"
import { CSSProperties } from "react";
import { db } from "~/db.server";
import  type {LoaderFunction} from "@remix-run/node"
import { Profile } from "@prisma/client";


//Defining Loader Function for the database

// Declaring type for profiles loader

type LoaderData = {profiles: Array<Profile>}
export let loader: LoaderFunction = async() =>{
    let profiles = await(db.profile.findMany());
    let data: LoaderData = { profiles };
    return data;
    }
export default function ProfilesRoute() {
   

    let profileData = useLoaderData<LoaderData>()
    let thisProfile = profileData.profiles.at(0)

return(
    <div>
    <Outlet />
    </div>
)
}