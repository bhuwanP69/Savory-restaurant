
import { Outlet } from "react-router-dom";
import { Link } from 'react-scroll';
export default function RootLayout() {
    return (
        <div className="root">
           <nav className='flex justify-between items-center cursor-pointer text-xs font-semibold uppercase tracking-widest '>

          <Link  to="home"
            spy={true}
            smooth={true}
            duration={500}
             className=" home mr-12  relative " >Home
               <span className="s-home opacity-0 absolute  left-0 -bottom-[26px] w-full h-[5px] bg-green-600 pointer-events-none transition-all "></span>
             </Link>
         
          <Link  to="about"
            spy={true}
            smooth={true}
            duration={500}
             className="mr-12" >About</Link>
          <Link  to="menu"
            spy={true}
            smooth={true}
            duration={500}
           className="mr-12" >Menu</Link>
          <Link  to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="mr-12" >Blog</Link>
          <Link  to="contact"
            spy={true}
            smooth={true}
            duration={500}
          className="mr-12" >Contact</Link>
                </nav>
      <main>
        <Outlet />

      </main>
     
      
      </div>
      )
    }