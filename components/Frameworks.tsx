import React from "react";
import Styles from "../styles/Frameworks.module.css"
import datos from "../frameworks.json"
import { motion } from "framer-motion"
const Frameworks = ()=>{
const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}
const items = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }
    return (
        <motion.div className={Styles.logoContainer}     initial="hidden"
        animate="visible"
        variants={list}>
            {datos.map((item, index)=>{
                return <motion.img variants={items} className={Styles.logo} alt={item.alt} src={item.src} key={index}  />
            })}
        </motion.div>
    )
}

export default Frameworks;