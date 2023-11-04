import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
 <section className='relative w-full h-screen mx-auto'>
    <div className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-7 h-7 rounded-full bg-[#5ed1ff]'/>
          <div className='w-1 sm:h-80 h-40 blue-gradient'/>
        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-gradient_blue'>Manos</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-500`}>Just a 20 years old programmer</p>
        </div>
    </div>
   </section>
  )
}

export default Hero