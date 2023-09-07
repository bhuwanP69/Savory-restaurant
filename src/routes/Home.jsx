import Header from '../components/Header'
import bg from '../img/bg.jpg';
export default function Home() {
  return (
    <>
    <div className="main-home w-screen  grid" id='home'>
      <img src={bg} alt="" className='relative' />
      <div className="absolute">
       <Header/>
      </div>
    
    </div>
    
       
    </>
  )
}