import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "#0a0720" : "white"
    }

    return (
        <div className='container my-3' style={myStyle}>
            <h1>About TxtUtils</h1>
            <div className="accordion my-4" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Introduction</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Welcome to TxtUtils, the premier text utility web application designed to streamline your text-related tasks and enhance your productivity. Whether you're a student, professional, writer, or just someone who deals with text regularly, TxtUtils is here to simplify your work and elevate your experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Word, Character Count & Time</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Accurate word and character counting is crucial for essays, reports, emails, and more. TxtUtils provides an instant word and character count, ensuring that your content fits within specified limits and requirements. Not just that, it also provides time required to read your content which is beneficial if your are preparing for speech or presentation.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>User-Friendly Interface along with Dark-Mode</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Designed with simplicity in mind, TxtUtils offers an intuitive and user-friendly interface. Navigate effortlessly through the app's features and accomplish tasks with just a few taps. <br />
                        TxtUtils cares about your eyesight and comfort. Switch to dark mode to reduce eye strain during nighttime use.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={myStyle}>
                            <strong>Why TxtUtils?</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        TxtUtils was developed with the vision of simplifying your text-related tasks, saving you time, and enhancing the quality of your work. Whether you're a student aiming for academic excellence, a professional striving for polished communication, or a creative writer expressing your thoughts, TxtUtils is the tool that empowers you to achieve your goals effortlessly.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
