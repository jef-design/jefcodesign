import React, {useEffect} from "react";
import {data} from "../data";
import { Link, useParams } from "react-router-dom";
import {motion} from "framer-motion";
const easing = [0.8, -0.05, 0.01, 0.99];

const FadeRight = {
    hidden: {
        x: 40,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
            // delay: .4
        },
    },
};
const FadeLeft = {
    hidden: {
        x: -40,
        opacity: 0,
    },
    visible: {
        x: 0,
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
            delayChildren: 0.2,
            staggerChildren: 0.2,
        },
    },
};

function ProjectInfo() {
    const router = useParams();
    const {title} = router;
    console.log(title)

    const filteredData = data.filter(info => info.title.toLowerCase() === title);
    console.log(filteredData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const SEO = {
        title: `Projects | Projects`,
        description:
            "Jeff Bermejo is a front-end web developer who specializes in building and designing exceptional digital experience.",
        openGraph: {
            title: "Projects | Projects",
            description:
                "Jeff Bermejo is a front-end web developer who specializes in building and designing exceptional digital experience.",
            url: "https://jeffcodesign.vercel.app/project",
        },
    };

    return (
        <React.Fragment>
            {/* <NextSeo {...SEO}/> */}
            <section className="project">
                <motion.div className="project__wrapper" exit={{opacity: 0}} initial="hidden" animate="visible">
                    {data &&
                        data
                            .filter(info => info.title.toLowerCase().replace(/ /g, "-") === title)
                            .map((project, index) => {
                                const {
                                    img,
                                    mobile_view,
                                    desktop_view,
                                    alt,
                                    description,
                                    publish_date,
                                    status,
                                    platform,
                                    category,
                                    title,
                                    tech_use,
                                    site_link,
                                    og_url,
                                    github_repo,
                                } = project;
                                return (
                                    <React.Fragment key={index}>
                                    
                                        <h2>{title}</h2>
                                        <div className="project__container">
                                            <motion.div
                                                // variants={FadeLeft}
                                                className="project__image"
                                            >
                                                <img
                                                    src={img}
                                                    alt={alt}
                                                    loading="lazy"
                                                />
                                            </motion.div>
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{once: true}}
                                                variants={stagger}
                                                className="project__description"
                                            >
                                                <div>
                                                    <h4>Publish Date</h4>
                                                    <motion.p variants={FadeRight}>{publish_date}</motion.p>
                                                </div>
                                                <div>
                                                    <h4>Status</h4>
                                                    <motion.p variants={FadeRight}>{status}</motion.p>
                                                </div>
                                                <div className="project__btn">
                                                    <Link to={site_link} >
                                                        <a target="_blank" rel="noopener noreferrer">
                                                            <motion.div className="project__link">
                                                                View live site <i className="bx bx-chevron-right"></i>
                                                            </motion.div>
                                                        </a>
                                                    </Link>

                                                    <Link to={github_repo} >
                                                        <a target="_blank" rel="noopener noreferrer">
                                                            <motion.div className="project__link">
                                                                Github Repository{" "}
                                                                <i className="bx bx-chevron-right"></i>
                                                            </motion.div>
                                                        </a>
                                                    </Link>
                                                </div>
                                                <motion.p variants={FadeRight}>{description}</motion.p>
                                                <div>
                                                    <h4>Platform</h4>
                                                    <motion.p variants={FadeRight}>{platform}</motion.p>
                                                    <h4>Category</h4>
                                                    <motion.p variants={FadeRight}>{category}</motion.p>
                                                </div>
                                                <h4>Tech used:</h4>
                                                <motion.ul
                                                    className="project__techuse"
                                                    variants={stagger}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{once: true}}
                                                >
                                                    {tech_use.map((tech, i) => {
                                                        return (
                                                            <motion.li
                                                                key={i}
                                                                className="project__techlist"
                                                                variants={FadeRight}
                                                            >
                                                                {tech.name}
                                                            </motion.li>
                                                        );
                                                    })}
                                                </motion.ul>
                                            </motion.div>
                                        </div>
                                        <motion.div
                                            className="project__device__type"
                                            initial={"hidden"}
                                            variants={stagger}
                                        >
                                            <div className="desktop__view">
                                                <div className="device__view__icon">
                                                    <i className="bx bx-desktop"></i>
                                                    <h3>Desktop preview</h3>
                                                </div>
                                                <motion.div
                                                    className="desktop__view__img"
                                                    variants={FadeLeft}
                                                    initial={"hidden"}
                                                    whileInView={"visible"}
                                                    viewport={{once: true}}
                                                >
                                                    <img src={desktop_view} alt={alt} />
                                                </motion.div>
                                            </div>
                                            <div className="mobile__view">
                                                <div className="device__view__icon">
                                                    <i className="bx bx-mobile"></i>
                                                    <h3>Mobile preview</h3>
                                                </div>
                                                <motion.div
                                                    className="desktop__view__img"
                                                    variants={FadeRight}
                                                    initial={"hidden"}
                                                    whileInView={"visible"}
                                                    viewport={{once: true}}
                                                >
                                                    {mobile_view == null ? <p>Mobile preview not availble</p> : <img src={mobile_view} alt={alt} />}
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                        {/* <div>
                                            <h1>paginate</h1>
                                            <h2>{filteredData.title}</h2>
                                        </div> */}
                                    </React.Fragment>
                                );
                            })}
                </motion.div>
            </section>
        </React.Fragment>
    );
}

export default ProjectInfo;
