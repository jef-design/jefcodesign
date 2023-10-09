import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const easing = [0.8, -0.05, 0.01, 0.99];

const FadeUp = {
    hidden: {
        y: 70,
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


const myLoader = ({ src, width, quality }) => {
    return `${src}?&q=${quality || 75}`;
};

function ProjectCard({ index, img, alt, title, description, publish_date }) {
    const onClickLink = () => {
        // window.scrollTo(0, 0);
    };
    return (
        <Link
            to={`/project/${title.toLowerCase().replace(/ /g,'-')}`}
            onClick={onClickLink()}
            key={index}
        >
            <motion.div
                variants={FadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once:true}}
                className="card"
            >
                <div className="selected__project__img">
                    <img
                        src={img}
                        alt={alt}
                        className="img_project"
                        placeholder="blur"
                        loading="lazy"
                    />
                </div>
                <div className="selected__project__desc">
                    <div className="card__title">
                        <h3>{title}</h3>
                        <p><span>&#183;  </span>{publish_date}</p>
                    </div>
                    <p className="card__desc">{description}</p>
                </div>
            </motion.div>
        </Link>
    );
}

export default ProjectCard;
