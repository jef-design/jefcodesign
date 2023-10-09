import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { data } from "../data";
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

function Featured() {
    return (
        <motion.section
            className="project"
            exit={{ opacity: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
        >
            <div style={{ paddingTop: "5rem" }} id="sectionProjects"></div>
            <div>
                <h2 className="section__title">
                    Some Projects I&apos;ve Built
                </h2>
            </div>
            <div className="selected__project__wrapper">
                {data?.slice(0, 3).map((project, index) => {
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
            </div>
            <Link to="/project">
                <div className="more__works__cta">
                    <h2>See all projects .</h2>
                    <i className="bx bx-chevron-right"></i>
                </div>
            </Link>
            <div>
                {/* <h2 className="section__title">
                    Read my blogs.
                </h2>
                <div> */}
                <Link to="/about">
                    <div className="more__works__cta">
                        <h2>About Jefcodesign .</h2>
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </Link>
                {/* <Link to="/blogs">
                    <div className="more__works__cta">
                        <h2>Read my Blogs .</h2>
                        <i className="bx bx-chevron-right"></i>
                    </div>
                </Link> */}
                {/* <h3>
                    More about &mdash; <br />
                    Jefcodesign
                </h3>
                <h3>
                    Read my &mdash; <br />
                    Blogs
                </h3> */}
                <div>
                    {/* <BlogCards
            // key={index}
            title={title}
            publishedAt={publishedAt}
            backgroundUrl={backgroundUrl}
            description={description}
            /> */}
                </div>
            </div>
        </motion.section>
    );
}

export default Featured;
