import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Countdown = (launch:any) => {
    const [number, setNumber] = useState(0);

    useEffect(
    ()=>{
        for (let index = 0; index < 101; index++) {
            setTimeout(()=> {
                    setNumber(index);
            }, 10);
        }
    }
    ,[]);

    return (
            <AnimatePresence>
                <motion.div id="countdown"
                    key={number}
                    exit={{opacity: 0, position: "absolute" }}
                    initial={{opacity: 1, visibility: "visible"}}
                    animate={{
                        y: 0,
                        transitionEnd: {
                            opacity: "0",
                            visibility: "hidden",
                            transitionDelay: ".1s",
                            transitionDuration: ".3s",
                            },
                    }}
                    transition={{
                        ease: "linear",
                        duration: 0.00001,
                    }}
                >
                    {number}%
                </motion.div>
            </AnimatePresence>
    )
}
