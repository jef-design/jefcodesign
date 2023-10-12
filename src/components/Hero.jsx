import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Featured from './Featured';

const delay = ".8";
const easing = [.8,-.05,0.01,0.99]


const FadeUp = {
    hidden: {
        y:30,
        opacity: 0
    },
    visible: {
        y:0,
        opacity: 1,
        transition: {
            duration: .6,
            ease :easing
        }
    }
}
const stagger = {
    visible: {
      transition: {
        delayChildren: .7,
        staggerChildren: .2
      }
    }
  }

const FadeInUp ={
    hidden:{
        y: 30,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: `${delay}`,
        }
    }
}

const Hero = () => {
    const hour = new Date().getHours();
    // "September 02, 2022 12:00:00"
    return (
        <motion.div exit={{opacity: 0}} initial="hidden" animate="visible" className="hero">
            <div>
                <motion.div initial={{x: 100}} animate={{x: 0}} className="greetings">
                    <p>
                        {" "}
                        {(hour < 3 && "Whoa, early bird!") ||
                            (hour < 12 && "Good Morning!") ||
                            (hour < 18 && "Good Afternoon!") ||
                            (hour < 22 && "Good Evening!") ||
                            "Working late"}
                        &#128522;
                    </p>
                </motion.div>
                <div className="dots-init">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="dots-right">
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </div>

            </div>
            <motion.div variants={stagger}>
            <motion.h1 variants={FadeUp} className="hero__bigheader">
                    Hi I&apos;m <span className="hero__span">Jeff</span>
                </motion.h1>
                <motion.h1 variants={FadeUp} className="hero__bigheader">
                    <span><span className="hero__span">specialize</span> in turning <span className="hero__span">ideas</span> into <span className="hero__span">digital</span> reality</span>
                    {/* I <span className="hero__span">build</span> things for the{" "}
                    <span className="hero__span">Web.</span> */}
                </motion.h1>
                <motion.p className="hero__text" variants={FadeUp}>
                    I design and build quality responsive websites, clean user
                    interfaces and interactive web apps. Mainly focusing in
                    Reactjs,Nodejs and other web development technologies.
                </motion.p>

            <motion.div variants={FadeUp} className="hero__cta">
                <a href="#sectionProjects" className="project__cta">view projects</a>
                <h3>
                    Get in touch
                    <i className="bx bx-mail-send"></i>
                    <Link
                        to="mailto:bermejojeffreyg@gmail.com"

                    >
                        bermejojeffreyg@gmail.com
                    </Link>
                </h3>
            </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
