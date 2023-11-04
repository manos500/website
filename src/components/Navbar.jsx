import React, {useState, useEffect} from "react";
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import {logo,menu,close} from '../assets'
import { navLinks } from "../constants";

const Navbar = () => {
    const [active,setActive] = useState('')
    const [toggle,setToggle] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        if (newWidth > 630) {
          setToggle(false);
        }
        setWindowWidth(newWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowWidth]); 
  return (
    <nav className={`${styles.paddingX} w-full flex flex-col items-center py-5 fixed top-0 z-20 bg-primary box_shadow_b test`}>
           <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
            <Link to='/' className="flex items-center gap-2" onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
        }}>
        <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
        <p className="text-white text-[18px] font-bold cursor-pointer flex">Manos &nbsp;
          <span className="sm:block hidden">| Nikitakis
          </span>
          </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
                <li key={link.id}  className={`font-poppins cursor-pointer font-normal text-[16px] hover-underline-animation`} onClick={() => setActive(link.title)}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
          </ul>
         

          <div className="sm:hidden flex flex-1 justify-end items-center ">
            <img src={toggle ? close : menu} alt="menu" className="cursor-pointer w-[28px] h-[28px] object-contain z-9" onClick={() => setToggle(!toggle)}/>
            </div>
             </div>
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary block w-full h-[300px] z-1 sidebar box_shadow_t`}>
        
                <ul className="list-none flex flex-col justify-center items-start gap-12">{navLinks.map((link) => (
            <li 
            key={link.id}
            className={`font-poppins cursor-pointer font-normal text-[18px] hover-underline-animation`}
            onClick={() => {
              setToggle(!toggle);
              setActive(link.title)}}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
                ))}
                </ul>
            </div>
         
    
    </nav>
  )
}

export default Navbar