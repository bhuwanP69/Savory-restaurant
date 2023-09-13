
import { Outlet } from "react-router-dom";
import { Link } from 'react-scroll';
export default function RootLayout() {
    return (
        <div className="root">
           <nav className='flex justify-between items-center gap-16 cursor-pointer text-xs font-semibold uppercase tracking-widest '>

          <Link  to="home"
            spy={true}
            smooth={true}
            duration={500}
             className=" home   relative " >Home
               <span className="s-home opacity-0 absolute  left-0 -bottom-[26px] w-full h-[5px] bg-green-600 pointer-events-none transition-all "></span>
             </Link>
         
          <Link  to="about"
            spy={true}
            smooth={true}
            duration={500}
             className="about relative" >About
                <span className="s-home opacity-0 absolute  left-0 -bottom-[26px] w-full h-[5px] bg-green-600 pointer-events-none transition-all "></span>
             </Link>
          <Link  to="menu"
            spy={true}
            smooth={true}
            duration={500}
           className="menu relative" >Menu
              <span className="s-home opacity-0 absolute  left-0 -bottom-[26px] w-full h-[5px] bg-green-600 pointer-events-none transition-all "></span>
           </Link>
          <Link  to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className="blog relative" >Blog
               <span className="s-home opacity-0 absolute  left-0 -bottom-[26px] w-full h-[5px] bg-green-600 pointer-events-none transition-all "></span>
            </Link>
          <Link  to="contact"
            spy={true}
            smooth={true}
            duration={500}
          className="contact relative" >Contact
             <span className="s-home opacity-0 absolute  left-0 -bottom-[26px] w-full h-[5px] bg-green-600 pointer-events-none transition-all "></span>
          </Link>
                </nav>
      <main>
        <Outlet />

      </main>
     
      
      </div>
      )
    }