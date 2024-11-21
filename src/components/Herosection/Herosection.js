import React, { useEffect, useState } from 'react'
import './Herosection.css'

const Herosection = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const fullText = "Hi, I'm Varun Jain";
    const typingSpeed =  150;

    useEffect(() => {
        const handleTyping = () => {
            if (index < fullText.length) {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            } else {
                setTimeout(() => {
                    setText("");
                    setIndex(0);
                },1000);
            }
        };

        const timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout);
    }, [index, fullText]);


    return (
        <section className='hero-container'>
            <div className="content">
                <h1 className="hero-title">{text}
                    <span className='cursor'>|</span>
                </h1>
                <p className="description">
                Ipassionate web developer dedicated to creating responsive and user-centric applications.
                </p>
                <a href="mailto:CoderVJain@outlook.com" className='contactbtn'>Contact me</a>
            </div>
            <img src="/assests/heroSection.png" alt="" className='hero-img' />
            <div className='topBlur' />
            <div className='bottomBlur' />
        </section>
    )
}

export default Herosection
