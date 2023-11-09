
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { socialMedia } from '../constants'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between pt-6 mb-[14px] box_shadow_t">
      <p className="font-poppins font-normal text-[16px] leading-[20px] text-center text-white">Copyright © 2023 Manos, All Rights Reserved.</p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social,index) => (
          <a href={`${social.link}`} target="_blank">
            <img key={social.id} src={social.icon} alt="social_media" className={`md:w-[35px] md:h-[35px] w-[27px] h-[27px] object-contain cursor-pointer hover:opacity-70 md:hover:w-[36px] md:hover:h-[36px] hover:w-[28px] hover:h-[28px] ${index !== socialMedia.length ? "mr-6" : "mr-0"} `}/>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')