import logo from '../img/logo.png';
import RootLayout from '../layout/RootLayout';
export default function Header() {
  return (
    <header className='w-screen fixed'>
    <div className="header bg-white  mx-5 h-20  flex justify-between items-center rounded-md">
        <div className="left ml-10 cursor-pointer ">
          <img src={logo} alt="logo" className='w-32' />

        </div>
        <div className="middle text-lg text-text-color">
       <RootLayout/>
        </div>
        <div className="right cursor-pointer text-white">
          <button className='bg-green-700 opacity-95 hover:opacity-100  mr-10 px-10 py-[18px] rounded-lg tracking-widest uppercase font-semibold text-xs transition-all'>
            Reservation
          </button>
        </div>
        </div>
        <div className="transparent bg-white  h-5 -mt-2 mx-10 mr-[5%]  opacity-20 rounded-full">
          </div>
    </header>
  )
}
