import banner from '../img/banner-1.jpg';
import bg from '../img/bg.jpg';
export default function Main() {
  return (
    <main>
    <div className="main z-10 pt-32 text-white font-sans relative">

        <div className="wrap pl-20">
        <p className='uppercase text-sm font-bold pb-5 tracking-widest  '>Hey, there!</p>
        <h1 className='text-8xl w-[800px] font-bold pb-10'>View our delicious menu.</h1>
        <p className='w-96 text-lg text-gray-300 tracking-wide'>Our menu caters to a wide variety of palettes
            I'm sure you'll find something you love.</p>
            <div className="button  relative font-semibold text-xs  flex gap-10 pt-20">
              <button className=' reservation bg-green-700 tracking-widest px-5 py-4 rounded-lg'>RESERVATION
               
                </button>
                
                <button className='hover:bg-green-700 tracking-widest px-4 py-4 rounded-lg'>VIEW MENU</button>
                
          </div>
            <div className=" transparent bg-white -mt-[1px]  w-[118px] ml-1 h-[7px]  opacity-20 rounded-xl">
                </div>
            </div>
        </div>
    </main>
  )
}
