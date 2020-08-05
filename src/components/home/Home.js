import React from 'react';
import Lottie from "react-lottie";
import Teamwork from "../../animation/teamwork.json";
import { FaGithub, FaAngleRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className="pattern">
            <div
                id="top"
                className="flexTopRes"
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem 2rem",
                color: "white",
                height: "calc(100vh - 100px)",
                backgroundColor: "#eee",
                }}
            >
                <div
                style={{
                    margin: "auto",
                    width: "100%",
                    textAlign: "center",
                }}
                >
                <h1>Lorem ipsum dolor sit amet</h1>
                <h3>Here is your website</h3>
                <p style={{ maxWidth: "700px", margin: "auto" }}>
                    Hello World! Here is everything that you want. Praesent pulvinar,
                    ante non fringilla hendrerit, augue mi mollis diam, vel finibus
                    metus urna nec metus. Sed efficitur enim ut neque rutrum, tincidunt
                    blandit purus hendrerit. Fusce in iaculis turpis.
                </p>
                    <div>
                        <a
                        href="https://github.com/ahsinrasheed5/animated-web"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <button
                            className="primary white"
                            style={{
                            marginTop: "1.5rem",
                            fontSize: "1.2rem",
                            padding: "10px",
                            }}
                        >
                            <FaGithub /> Github
                        </button>
                        </a>
                        <a href="/page">
                        <button
                            className="primary white"
                            style={{
                            marginTop: "1.5rem",
                            fontSize: "1.2rem",
                            padding: "10px",
                            marginLeft: "20px",
                            }}
                        >
                            Get Started <FaAngleRight />
                        </button>
                        </a>
                    </div>
                </div>
                <Lottie
                    options={{
                        animationData:Teamwork,
                    }}
                    height={"100%"}
                    width={"100%"}
                    style={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "700px",
                    }}
                />
            </div>
        </div>


    )
}

export default Home
