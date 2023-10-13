import React, { useEffect } from "react";
import { motion } from "framer-motion";
const easing = [0.8, -0.05, 0.01, 0.99];

const FadeUp = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
            // delay: .4
        },
    },
};
const stagger = {
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
const SEO = {
    title: "Jeff Bermejo | About",
    description: "Hi i'm Jeff Front-end Web Developer i specialise in creating beautiful, usable, professional website using best practice. all my works are lovingly hand coded.",
    openGraph: {
        title: "Jeff Bermejo | About",
        description: "Hi i'm Jeff Front-end Web Developer i specialise in creating beautiful, usable, professional website using best practice. all my works are lovingly hand coded.",
        url: 'https://jeffcodesign.vercel.app/about',
        images: [
            {
              url: 'https://lh3.googleusercontent.com/-ZvZrpMcVihC0OA84FZd9FEPmnFnG5p1UnSU1pwzk0r1ltvD8eZIWq4sgnU9jJHfrpoUuRJEcSboHq5uyNUm83Cvi_IC58tZTSHJYUfVQr25lRvDW-MP9L0zhipQS8Gu998YMRA7TxndB5GHogMIus3oeGBKu9oDmIJNKlpsDb4504nn1LWjnQpVOwfr0FPlqwwb8W7Ki1uyipaef09VllyN_n8uumbYIcAwHWM43ecxx9LSx6auSNKMifiFWoES_TPX9_rXLG8lQp2YcQ__BNCzmnoVHfz1eVEI3a1oA2UjuJ1XsyHIaOXFTzdRVGNS-wDlmvQ47RU0Hx3bQQ2Lv-_MUcd0I_86OaaFbaql2tKULgvqRii6t8hVuTBVgxuGqkVP_QrKlbwZ57PXK9b8DTWGuAlmJkTejPsr7G21J_B8UnAz24ouJr11_XF-eeHw4foRCQXxpFgZAvOyZDxSY9sMSrnpIq_bA-ZDu-pO4Ft7YFEEk6h1HfCl27c6apt_vuXrFpaaf4D5wezSEj7AeaCWXgWY0pSbO4rrDDYxFc2l_5VE6ZnwfOZECOu_31NWQDOaFWqZvp5KGuix-WXallHv1DUroWE2jF5co0b_nst8w7BO5J-DnsMB4CTUUqU9S79RYYeRKPjizyQnQb4uZDLYc8CC-FB6HqUw99SIYWjbiirjWRRYqbfj9lT-cdiyHHxLlbfvAv11nnVVLzi12_0L5EJav-WM1nryjNq_tDOLT4Qj5PdXpfMCCQ=w1742-h923-no?authuser=0',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
      },
}

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <React.Fragment>
            {/* <Meta title="About - Jeff Bermejo" /> */}
            {/* <NextSeo {...SEO} /> */}
            <motion.section className="about helper__top"
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{once:true}}
                    variants={stagger}>
                <h1 className="section__title">Some things about me.</h1>
                <div className="about__wrapper">
                    <motion.div className="about__info">
                        <motion.p variants={FadeUp}>
                            &nbsp;&nbsp;&nbsp;&nbsp;Hi i&apos;m <b>Jeff</b>,{" "}
                            <b>Full Stack Web Developer</b> i specialise in
                            creating beautiful, usable, professional website
                            using best practice. all my works are lovingly hand
                            coded.
                        </motion.p>
                        <motion.p variants={FadeUp}>
                            I&apos;m open to learning, adapt to work with the
                            team, freelance opportunities, contract jobs and use
                            skills to solve complex UI challenges and provide
                            value to the growth of an organization.
                        </motion.p>
                    </motion.div>
                    <div className="about__skill">
                        <div className="skill__container">
                            <h3 className="skill__title">
                                Here are a few technologies I&apos;ve been
                                working with recently:
                            </h3>
                            <h4>Languages / Database</h4>
                            <motion.div className="skill__wrapper" initial={"hidden"} whileInView={"visible"} variants={stagger} viewport={{once:true,amount:0.5}}>
                                <motion.div variants={FadeUp} className="skill">
                                    <i className="bx bxl-html5"></i>
                                    <p>HTML</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                    <i className="bx bxl-css3"></i>
                                    <p>CSS</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                    <i className="bx bxl-sass"></i>
                                    <p>SASS</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                    <i className="bx bxl-javascript"></i>
                                    <p>Javascript</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                 <i className='bx bxl-typescript'></i>
                                    <p>Typescript</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                    <i className="bx bxl-nodejs"></i>
                                    <p>Nodejs</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                <i className='bx bxl-mongodb'></i>
                                    <p>MongoDB</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                <img
                                      
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                        }}
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                    <p>Php</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                <img
                                        
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                        }}
                                        src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                    <p>MySql</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill">
                                    <i className='bx bxl-firebase'></i>
                                    <p>Firebase</p>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="skill__container">
                            <h4>Libraries/Frameworks</h4>
                            <motion.div className="skill__wrapper" initial={"hidden"} whileInView={"visible"} variants={stagger} viewport={{once:true,amount:0.5}}>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <i className="bx bxl-react"></i>
                                    <p>React.js</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <img
                                     
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                        }}
                                        src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                    <p>Next.js</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <img
                                    
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                        }}
                                        src="https://thelogofinder.com/wp-content/uploads/edd/2021/11/vitejs.svg"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                    <p>Vite.js</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <i className="bx bxl-redux"></i>
                                    <p>Redux</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <img
                                 
                                        style={{ width: "48px" }}
                                        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                    <p>Tailwind CSS</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <img
                               
                                        style={{ height: "48px" }}
                                        src="https://cdn.hashnode.com/res/hashnode/image/upload/jbhiqodxlyhaqogfuqwy/1486104606.png?w=400&h=400&fit=crop&crop=entropy&auto=compress"
                                        alt="Styled-Components"
                                        width={48}
                                        height={48}
                                    />
                                    <p>Styled-Components</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <i className="bx bxl-bootstrap"></i>
                                    <p>Bootstrap</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill2">
                                    <img
                                        
                                        style={{ height: "48px" }}
                                        src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
                                        alt="Framer Motion"
                                        width={48}
                                        height={48}
                                    />
                                    <p>Framer Motion</p>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="skill__container">
                            <h4>Tools</h4>
                            <motion.div className="skill__wrapper" initial={"hidden"} whileInView={"visible"} variants={stagger} viewport={{once:true,amount:0.5}}>
                                <motion.div variants={FadeUp} className="skill skill3">
                                    <i className="bx bxl-figma"></i>
                                    <p>Figma</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill3">
                                    <i className="bx bxl-git"></i>
                                    <p>Git</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill3">
                                    <i className="bx bxl-github"></i>
                                    <p>Github</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill3">
                                    <img
                                       
                                        style={{ width: "48px" }}
                                        src="https://s3-us-west-2.amazonaws.com/assertible/integrations/postman-mark.png"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                    <p>Postman</p>
                                </motion.div>
                                <motion.div variants={FadeUp} className="skill skill3">
                                    <img
                                    
                                        style={{
                                            height: "48px",
                                            width: "48px",
                                        }}
                                        src="https://raw.githubusercontent.com/npm/logos/cc343d8c50139f645d165aedfe4d375240599fd1/npm%20logo/npm-logo-red.svg"
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
                                    <p>npm</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </React.Fragment>
    );
}

export default About;
