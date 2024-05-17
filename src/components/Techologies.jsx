import {RiReactjsLine} from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";




const Techologies=()=> {
  return (
    <div className="border-b border-neutral-800p pb-24">
        <h1 className="my-20 text-center text-4xl">Technical Skills</h1>
        <div className="flex flex-wrap items-center justify-center">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-blue-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandMongodb className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-red-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrMysql className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-300"/>
            </div>

           
        </div>
      
    </div>
  );
};

export default Techologies
