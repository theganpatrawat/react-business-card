import React from "react";

function Headings(){
    return(
        <div className="headings">
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <h3>lalurasmith.website</h3>
        </div>
    );
};

function ButtonContainer(){
    return(
        <div className="btn-container">
                <button className="btn email">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </button>
                <button className="btn linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>Linkedin</span>
                </button>
        </div>
    );
};

function Text(){
    return(
        <div className="text">
                <article className="about">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making 
                        things simple and automating daily tasks. I try to keep up with
                         security and best practices, and am always looking for new things to learn.
                    </p>
                </article>
                <article className="interests">
                    <h2>interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
                       Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </article>
        </div>
    );
};
export default function Main(){
    return (
        <main className="main-content">
            <Headings/>
            <ButtonContainer/>
            <Text/>
        </main>
    );
};