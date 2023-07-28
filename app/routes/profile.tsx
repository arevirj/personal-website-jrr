import { Outlet, useLoaderData} from "@remix-run/react"
import { CSSProperties } from "react";
import { db } from "~/db.server";
import  type {LoaderFunction} from "@remix-run/node"
import { Profile } from "@prisma/client";
import { PrismaClient} from '@prisma/client'

//Defining Loader Function for the database

// Declaring type for profiles loader
export async function loader() {
    let profiles = await(db.profile.findMany({
        include: {
            portfolio: {
                select: {
                    name: true,
                    link: true,
                    image: true,
                }
            }
        }
    }
    ));
    let data = { profiles };
    console.log(data);
    return data;
}
export default function ProfilesRoute() {
    //let profileData = useLoaderData<typeof loader>()
return(
    <div>
    <Outlet />
    </div>
)
}