import React from "react";
import { motion } from "framer-motion";

export default function LoginPage(){
    return(
        <motion.section className="flex justify-center items-center mx-auto min-h-screen"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        >

        </motion.section>
    )
}
    