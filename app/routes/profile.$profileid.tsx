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

<div className = "bg-gradient-to-r from-indigo-600 to-pink-400">
    <div className="p-16">
    <div className="p-8 bg-white shadow mt-24">
    <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
        </div>
        <div className="relative">
        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
             
        <img className="rounded-full w-48 h-48" src="https://media.licdn.com/dms/image/D5603AQG4iJU2d9xAvg/profile-displayphoto-shrink_200_200/0/1683835082781?e=1695254400&v=beta&t=BRbDsbulI69IDwfC6THeNR4UThZMWHZrU7qdeKC3uC0" alt="image not found"></img>
        </div>
        </div>

        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
    <button
    className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    >
    Connect
    </button>
        <button
    className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    >
    Message
    </button>
        </div>
    </div>

    <div className="mt-20 text-center border-b pb-12">
        <h1 className="text-4xl font-medium text-gray-700">{thisProfile.name}, <span className="font-light text-gray-500">{thisProfile.age}</span></h1>
        <p className="font-light text-gray-600 mt-3">{thisProfile.location}</p>

        <p className="mt-8 text-gray-500">{thisProfile.role}</p>
        <p className="mt-2 text-gray-500">{thisProfile.place}</p>
    </div>

    <div className="mt-12 flex flex-col justify-center">
        <p className="text-gray-600 text-center font-light lg:px-16">{thisProfile.aboutme}</p>
    </div>

    </div>
    </div>

</div>
)
}