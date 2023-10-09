import React from "react";
import { data } from "../data";
import ProjectCard from "../components/ProjectCard";
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
            delayChildren: 0.1,
            staggerChildren: 0.3,
        },
    },
};

function Projects() {
    const SEO = {
        title: "Jeff Bermejo | Projects",
        description:
            "Jeff Bermejo is a front-end web developer who specializes in building and designing exceptional digital experience.",
        openGraph: {
            title: "Jeff Bermejo | Projects",
            description:
                "Jeff Bermejo is a front-end web developer who specializes in building and designing exceptional digital experience.",
            url: "https://jeffcodesign.vercel.app/project",
            images: [
                {
                    url: "https://lh3.googleusercontent.com/sA48ZfMautdN6aqJAQs0xQ_ftwk65DwVm0lX4-1XMnr_Uj53z1JrJCo6RHJS_ye7by2pg2b0VwFtwFRARSwqcyxkL8EIhPFP9vm2CIZ6pKZOu6tbYy_IGvoNpBIR8KtscA1rUeP5kvKrVZmUU_GfhPwBSb-mcvmz7_usiMHuUbjRbNZCYhH7tFPT2lFZRJDgSQq25MOcE9LvPMC7QFyg4_C_59AqfDWI8_ZOMMFdKzxJKsoBI_2h00ar43srRk5ClrAHJyC4AGuLkZ0gz6g25sRwx0s08SsiF787Xm0EPUi-RpVNo1mygbaraKvy5CDp55_QvSc2i_im_zbUKD72c6mWh2gUBXZeeSOyVaDR5xfz86eBVUYEb5F2zK4aP9jPP5iQXBaLRAs9rqgJMEmduQ1b-PheLz6ABs_b2jE_qLc_J1E-ox_c4ihuXSigpAK7xEr-RO_NX0R3Jy7lcR2DoPxKNsOIYzv4awLJJY7VlJDUaGIoaBRfvSktDAYW2K_MwdlHTnbMUGguub_efU7x5moUvyxrokauk9AG9xOKf6HzI5FwJNJrAUkop_8S8tBgyC4B3dUKKH9XwvCPB47hnCAu8D9dSlXaqUxaCWAw4f6gDXWiEmhEhqXlBKMmYDyQ-wzzR2umWdaDI4cfrw6K7ZKT9ZF0YxWBoLJw064lB-M5WYiAkWCg30JVcBkj8200XwALFnIXBdZnQyDfWw24tyHZFmxkX0QhnNe-YIGnBZso9w3yPUXmWfKJfw=w1764-h903-no?authuser=0",
                    width: 800,
                    height: 600,
                    alt: "Og Image Alt",
                    type: "image/jpeg",
                },
            ],
        },
    };

    return (
        <>
            <section className="project helper__top">
                {/* <Meta title="Project - Jeff Bermejo" /> */}
                <div>
                    <h1 className="section__title">Projects I&apos;ve Built.</h1>
                    <p>Sharing with you some of the projects I have done.</p>
                </div>
                <motion.div
                    className="selected__project__wrapper"
                    exit={{ opacity: 0 }}
                    initial="hidden"
                    whileInView="visible"
                    variants={stagger}
                >
                    {data.map((project, index) => {
                        const { img, alt, description, publish_date, title } =
                            project;
                        return (
                            <motion.div
                                className="selected__project__container"
                                variants={FadeUp}
                                key={index}
                            >
                                <ProjectCard
                                    img={img}
                                    alt={alt}
                                    title={title}
                                    description={description}
                                    publish_date={publish_date}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>
        </>
    );
}

export default Projects;
