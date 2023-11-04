import { useState } from 'react'
import {styles} from '../styles'
import { Link } from 'react-router-dom';


const Hero = () => {

  const [active,setActive] = useState('')

  return (
  <section className='relative w-full h-screen mx-auto flex flex-col'>
      <div className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='test2'>
          <h1  className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-gradient_blue'>Manos</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-500`}>Just a 20 years old programmer</p>
        </div>
      </div>
      <div className=' inset-0 absolute top-[600px] h-[100px]  flex '>
      
        <button type='button' className='mx-auto custom-button'>
        <a href="#about">Learn About me!</a></button>
      
      </div>
    </section>
  )
}

export default Hero