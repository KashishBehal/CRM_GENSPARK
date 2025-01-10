import React, { useRef } from "react";
import "./parallax.css";
import {motion , useScroll, useTransform} from "framer-motion";


export const  Parallax=({type})=>{
    const ref=useRef()
    const {scrollYProgress}=useScroll({
        target:ref ,
        offset:["start start" ,"end start"]
    })
    const yTex=useTransform(scrollYProgress , [0 , 1] , ["0%" , "50%"])
    // const yBg=useTransform(scrollYProgress , [0 , 1] , ["0%" , "50%"])
    return(
        <div className="parallax"
         style={{
            background: type === "services"?
            "linear-gradient(180deg , #111132 , #0c0c1d":
            "linear-gradient(180deg , #111132 , #505064"
         }}   >
            <motion.h1 style={{y:yTex}}>Recently Added Tickets?<br/> Once Swipe away..</motion.h1>
            <motion.div className="mountains"></motion.div>
            {/* <motion.div  className="planets"
             style={{y:yBg , backgroundImage:`url(/planets.png"})`}}
            ></motion.div> */}
            {/* <motion.div  style={{x:yBg}} className="stars"></motion.div> */}
        </div>
    )
}
