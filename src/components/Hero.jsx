import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/HeroSecPic.png"
import { motion } from "framer-motion"

const Hero=()=>{
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:2}}
                    
                     className="pb-16 text-6xl font-thin tracking-thin lg:mt-16 lg:text8xl">Kaushik Borah</motion.h1>
                    <motion.span 
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> A FullStack Web Developer</motion.span>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={profilePic} className="" />

            </div>

            </div>

        </div>

        </div>
    );
}

export default Hero;