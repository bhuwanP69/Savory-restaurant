import Header from '../components/Header'
import Main from '../components/Main';
import bg from '../img/bg.jpg';
import banner1 from '../img/banner-1.jpg';
import banner2 from '../img/banner-2.jpg';
import banner3 from '../img/banner-3.jpg';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';

 function Slide1({ isVisible }) {
  return (
    <div className={`slide1 w-screen grid transition-transform ${
      isVisible ? 'translate-x-0 scale-110' : 'translate-y-[-100%] hidden'
    }`} id='home'>
      <div className="image relative">
      <img src={bg} alt="" className='w-full h-auto' />
      <img src={banner1} alt="" className='absolute -top-20 left-0  h-auto' />
      </div>
      <div className="absolute">
       <Header/>
       <Main/>
      </div>
    </div>
    
  )
}
 function Slide2({ isVisible }) {
  return (
    <div className= {`slide2 w-screen grid transition-transform ${
      isVisible ? 'translate-x-0 scale-110' : 'translate-y-[-100%] hidden'
    }`} id='home'>
      <div className="image relative">
      <img src={bg} alt="" className='w-full h-auto' />
      <img src={banner2} alt="" className='absolute -top-20 left-0  h-auto' />
      </div>
      <div className="absolute">
       <Header/>
       <Main/>
      </div>
    </div>
  )
}
 function Slide3({ isVisible }) {
  return (
    <div className={`slide3 w-screen grid transition-transform ${
      isVisible ? 'translate-x-0 scale-110' : 'translate-y-[-100%] hidden'
    }`} id='home'>
      <div className="image relative">
      <img src={bg} alt="" className='w-full h-auto' />
      <img src={banner3} alt="" className='absolute -top-20 left-0  h-auto' />
      </div>
      <div className="absolute">
       <Header/>
       <Main/>
      </div>
    </div>
  )
}

export default function Home() {
  const slideData = [Slide1,Slide2,Slide3];
   
     const [activeSlide, setActiveSlide] = useState(0);
     const [isPlaying, setIsPlaying] = useState(true);

     useEffect(() =>{
       let interval;
       if(isPlaying){
         interval = setInterval(() => {
           setActiveSlide((prevSlide)  => (prevSlide+1) % slideData.length);
           
         }, 4000);
       }else{
         clearInterval(interval);
       }
       return  () => clearInterval(interval);
     },[isPlaying,slideData.length]);
   
   
     const handlePauseClick = () => {
       setIsPlaying(false);
     };
     const handlePlayClick = () => {
       setIsPlaying(true);
     };
     const handleCircleClick = (index) => {
       setActiveSlide(index);
     };
      
const renderCircles = () => {
  return slideData.map((_, index) => (
    <div key={index}
    onClick={() => handleCircleClick(index)}
     className="circle flex justify-between w-5 cursor-pointer "
    >
      <FontAwesomeIcon
        icon={index === activeSlide ? faCircleSolid : faCircleSolid}
        className={index === activeSlide ? 'solid-circle text-[9px] ' : 'solid-circle text-[9px] text-circle'}
      />
    </div>
  ));
 };
     
  return (
    <>
    <div className="main">
    {slideData.map((Slide, index) => (
          <Slide key={index} isVisible={index === activeSlide} />
        ))}
      
    {/* {slideData[activeSlide]} */}
    <div className="circle z-20 h-96 ">
    {isPlaying ? (
       <i class={`fa-solid fa-circle-pause text-2xl sm:text-3xl hover:scale-105 cursor-pointer transition-all pt-1 text-blue-600`}   onClick={handlePauseClick}></i>
        ) : (
         <i class="fa-solid fa-circle-play text-2xl sm:text-3xl hover:scale-105 cursor-pointer transition-all pt-1 text-blue-500" onClick={handlePlayClick}></i>
                    )}
            <div className="circle flex text-blue-500 h-20">
                {renderCircles()}
             </div>

    </div>
    </div>
   
    
       
    </>
  )
}