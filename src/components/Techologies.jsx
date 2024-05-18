import {RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { motion, transform } from "framer-motion"


const iconVarinats=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

const Techologies=()=> {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className="my-20 text-center text-4xl">Technical Skills</motion.h1>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVarinats(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVarinats(3)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVarinats(5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-blue-800"/>
            </motion.div>
            <motion.div
            variants={iconVarinats(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandMongodb className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
            variants={iconVarinats(6)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div
            variants={iconVarinats(4)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVarinats(5.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVarinats(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-300"/>
            </motion.div>

           
        </motion.div>
      
    </div>
  );
};

export default Techologies
