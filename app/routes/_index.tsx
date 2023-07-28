import type { LinksFunction} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react"
import { db } from "~/db.server";
import stylesURL from "~/tailwind.css"

export const links:LinksFunction = () => [
  {rel: "stylesheet", href: stylesURL}
]

export async function loader() {
  let profiles = await(db.profile.findMany({
      select: {
        id: true,
        name: true, 
        image: true,
        role: true
      }
  }
  ));
  let data = { profiles };
  return data;
}

export default function IndexRoute() {
  let profileData = useLoaderData<typeof loader>()
  let allProfiles = profileData.profiles
    return (

    <body>
      <div>
        <h1 className="text-center text-6xl font-normal leading-normal mt-0 mb-2">Homepage</h1>
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 mx-auto">
	<img src={allProfiles[0].image} />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">
        <li key ={allProfiles[0].id}>
          <Link to={allProfiles[0].id}>{allProfiles[0].name}</Link>
          </li></h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{allProfiles[0].role}</p>
		</div>
	
	</div>
</div>
      </div>

      <div>
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 mx-auto">
	<img src={allProfiles[1].image} />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">
        <li key ={allProfiles[1].id}>
          <Link to={allProfiles[1].id}>{allProfiles[1].name}</Link>
          </li></h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{allProfiles[1].role}</p>
		</div>
	
	</div>
</div>
      </div>

      <div>
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 mx-auto">
	<img src={allProfiles[2].image} />
	<div className="space-y-4 text-center divide-y divide-gray-700">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">
        <li key ={allProfiles[2].id}>
          <Link to={allProfiles[2].id}>{allProfiles[2].name}</Link>
          </li></h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-400">{allProfiles[2].role}</p>
		</div>
	
	</div>
</div>
      </div>
    </body>
    )
}
