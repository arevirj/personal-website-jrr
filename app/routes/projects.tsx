export default function ProjectsRoute() {


// Page to display projects
return(
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
        <img src="https://th.bing.com/th/id/OIP.KS4bFAcbQbL1fhjnWh7bHwHaHa?pid=ImgDet&rs=1"
          className="w-full align-middle transition duration-300 ease-linear" />
        <a href="https://github.com/arevirj/TicTacToeTerminal">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold text-white">Unbeatable Tic-Tac-Toe Bot</h5>
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
        <img src="https://user-images.githubusercontent.com/97718079/255044397-3a1801c1-fe44-4c0a-82e7-ec5a58e064fd.png"
          className="w-full align-middle transition duration-300 ease-linear" />
        <a href="https://twitter.com/siegmeyer_bot?s=20">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold text-white">Twitter Bot</h5>
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
)
}