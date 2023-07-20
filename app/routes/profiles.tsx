import { Outlet } from "@remix-run/react"
import { CSSProperties } from "react";
export default function ProfilesRoute() {

return(
<div className = "bg-gradient-to-r from-indigo-600 to-pink-400">
    <div className="p-16">
    <div className="p-8 bg-white shadow mt-24">
    <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
        </div>
        <div className="relative">
        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
    </svg>
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
        <h1 className="text-4xl font-medium text-gray-700">Justin Rivera, <span className="font-light text-gray-500">20</span></h1>
        <p className="font-light text-gray-600 mt-3">Chapel Hill, NC</p>

        <p className="mt-8 text-gray-500">Compupter Science/Statitics major</p>
        <p className="mt-2 text-gray-500">University of Chapel Hill at North Carolina</p>
    </div>

    <div className="mt-12 flex flex-col justify-center">
        <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
        <button
    className="text-indigo-500 py-2 px-4  font-medium mt-4"
    >
    Show more
    </button>
    </div>

    </div>
    </div>
    <div className="container my-24 mx-auto md:px-6">
    <section className="mb-32">

    <h2 className="mb-12 text-center text-3xl font-bold">
      Projects
    </h2>

    <div className="grid gap-6 lg:grid-cols-3">
      <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://prasannaseshadri.files.wordpress.com/2021/08/p517blog.png"
          className="w-full align-middle transition duration-300 ease-linear" />
        <a href="https://github.com/arevirj/a09-akari-arevirj">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold text-white">
                Akari
              </h5>
            </div>
          </div>
          <div>
            <div
              className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </a>
      </div>

      <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg"
          className="w-full align-middle transition duration-300 ease-linear" />
        <a href="#!">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold text-white">Genius Loci</h5>
            </div>
          </div>
          <div>
            <div
              className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </a>
      </div>

      <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/045.jpg"
          className="w-full align-middle transition duration-300 ease-linear" />
        <a href="#!">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold text-white">Big Apple</h5>
            </div>
          </div>
          <div>
            <div
              className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</div>
    <footer className="text-center text-white bg-gradient-to-r from-indigo-600 to-pink-400" >
  <div className="container p-6">
    <div className="">
      <p className="flex items-center justify-center">
        <span className="mr-4">Register for free</span>
        <button
          type="button"
          className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light">
          Sign up!
        </button>
      </p>
    </div>
  </div>
  <div
    className="p-4 text-center
    bg-gradient-to-r from-indigo-600 to-pink-400">
    © 2023 Copyright:
    <a className="text-white" href="https://tailwind-elements.com/"
      >Tailwind Elements</a>
  </div>
</footer>
</div>
)
}