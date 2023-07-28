import {Link, NavLink, useLocation} from '@remix-run/react'
// eslint-disable-next-line no-use-before-define
import React from 'react'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()
  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])
  const renderNavigationItems = () => {
    const linkClasses =
      'relative before:absolute before:bottom-[-6px] md:before:bottom-[-4px] before:h-[4px] before:w-[0] before:mt-[4px] before:bg-white md:before:bg-primary before:transition-all before:duration-300'
    return (
      <>
        <li>
            <NavLink to="/" className={linkClasses}>
            <button
    className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
    >
    Home
    </button>
            </NavLink>
        </li>
       
      </>
    )
  }

  const LogoLetter = ({letter}: {letter: string}) => (
    <span className="letter inline-block top-0 relative">{letter}</span>
  )



  return (
    <>
      <nav className="fixed bg-purple transition-colors dark:bg-darkgrey text-text h-16 w-full z-50">
        <div className="flex h-full container mx-auto justify-between items-center px-4 lg:px-16">
          <ul className="hidden md:flex md:gap-6">{renderNavigationItems()}</ul>
          <ul
            className={`md:hidden absolute flex flex-col w-full top-16 left-0 py-4 transition-transform items-center text-white bg-primary transform gap-4 ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {renderNavigationItems()}
          </ul>
          <button
            aria-label="Toggle mobile menu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden order-3 cursor-pointer relative w-5 h-6"
          >
            <span
              className={`transform transition-transform duration-300 absolute h-1 w-full bg-primary rounded-lg left-0 ${
                mobileMenuOpen ? 'rotate-135 top-3' : 'rotate-0 top-1'
              }`}
            />
            <span
              className={`absolute transition-opacity duration-300 h-1 w-full bg-primary rounded-lg left-0 top-3 ${
                mobileMenuOpen ? 'opacity-0 -left-[10rem]' : 'opacity-100'
              }`}
            />
            <span
              className={`transform transition-transform duration-300 absolute h-1 w-full bg-primary rounded-lg left-0 ${
                mobileMenuOpen ? '-rotate-135 top-3' : 'rotate-0 top-5'
              }`}
            />
          </button>

          
        </div>
      </nav>
    </>
  )
}

export default Navigation