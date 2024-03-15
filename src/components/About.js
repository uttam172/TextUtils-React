import React, { useState } from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark mode")
        }
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className='my-4'>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque nostrum et dicta optio exercitationem fuga quisquam incidunt, animi consectetur delectus, voluptates asperiores aliquam nihil, nam officia non corrupti accusantium. Vel suscipit deleniti possimus eaque, numquam maxime repudiandae dolor laudantium eveniet sed et soluta modi facere dolorum inventore voluptatibus quos, asperiores dolore similique dolorem.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde voluptatum porro provident esse dolorem possimus veritatis quod culpa fugiat tenetur suscipit doloremque delectus dolor expedita error eos modi qui iure vitae ipsam, molestiae minus! Optio, quia unde. Unde magnam corrupti sit eligendi, voluptates non ipsum culpa, ullam at voluptatem asperiores harum obcaecati. Repellat.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.lorem</div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}
