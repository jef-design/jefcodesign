

const Contact = () => {

    return (
        <section>
            <div className="footer__contact">
                <h2>Interested in working together?</h2>
                <p>
                    I&apos;m here to answer any questions you may have. Reach
                    out to me and i&apos;ll respond as soon as i can.
                </p>
                <a href="mailto:bermejojeffreyg@gmail.com">Reach out to me</a>
            </div>
            <div className="phone-svg" data-hide-on-theme="dark" >

                <img
                    src="https://vuesax.com/vuesax-white-2.svg"
                    alt="svg-phone"
                    loading="lazy"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
};

export default Contact;
