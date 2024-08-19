import React from 'react'
import { useState } from 'react'
import CodingAchive from './CodingAchive'
function Home() {
    const [show, setShow] = useState(false)

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand mx-md-5" href="">Darshan Ahire</a>
                        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item mx-lg-3">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li> */}
                                <li className="nav-item mx-lg-3">
                                    <a className="nav-link active" aria-current="page" href="#moreaboutmeid">About Me</a>
                                </li>
                                <li className="nav-item mx-lg-3">
                                    <a className="nav-link active" aria-current="page" href="#myprojectid">My
                                        Projects</a>
                                </li>
                                <li className="nav-item mx-lg-3">
                                    <a className="nav-link active" aria-current="page" href="#achievement">Coding
                                        Achievement</a>
                                </li>
                                <li className="nav-item mx-lg-3">
                                    <a className="nav-link active" aria-current="page" href="#contactmeid">Contact Me</a>
                                </li>
                            </ul>
                            <div >

                                <a href="pdf/DarshanAhire.pdf" className="btn btn-outline-light mr-md-5" target=' ' id="downloadbtn">Download
                                    Resume</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <canvas className="background" style={{ "position": "absolute" }}></canvas>
                <div className="container-fluid" >
                    <div className="row fb-bg" style={{ "position": "relative" }}>
                        <div className="col-12 my-md-auto col-md-6 px-5  order-2 order-md-1 details pb-md-3">

                            <h4 className="mx-md-5 mt-5">Hello, I am</h4>
                            <h2 className="h2 mx-md-5">Darshan Raghunath Ahire.</h2>
                            <h5 className="mx-md-5">System Engineer at Tata Consultancy Services
                            </h5>
                            <h5 className="mx-md-5 mt-4 mb-3 zoom-text">My Coding Profiles :
                            </h5>
                            <h6 className="row coding-profile-row">
                                <a className='col-5' href='https://leetcode.com/darshanahire' target=' '><img className="coding-img mx-auto my-md-1 my-2" src={window.location.origin + "/img/leetcode.png"} alt="" width="120" /></a>
                                <a className='col-6' href='https://auth.geeksforgeeks.org/user/darshanahire101' target=' '><img className="coding-img mx-auto my-md-1 my-2 gfg-img" src={window.location.origin + "/img/gfg.png"} alt="" width="150" /></a>
                                <a className='col-5 mt-1' href='https://codechef.com/users/darshanahire' target=' '><img className="coding-img mx-auto my-md-1 mb-3 mt-2 mt-md-0" src={window.location.origin + "/img/cc.png"} alt="" width="120" /></a>
                                <a className='col-6 mt-1 mt-md-0' href='https://codeforces.com/profile/darshanahire101' target=' '><img className="coding-img mx-auto mb-5 mb-md-2 mt-4 cf-img" src={window.location.origin + "/img/cf.png"} alt="" width="150" /></a>
                            </h6>

                            <div className="mx-md-5 mt-3">
                                <a type="button" className="btn btn-dark get-touch-btn" href="#contactmeid">Get in Touch</a>
                                <a className="btn btn-dark get-touch-btn mx-3" href="pdf/DarshanAhire.pdf" target=' '>Download Resume</a>
                            </div>


                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2 d-flex mx-auto " style={{ 'justifyContent': "center", "alignItems": "center" }}>
                            <img className="bg-blue rounded-circle myphoto" src={window.location.origin + "/img/darshan.png"} alt="photo" width="375" />
                        </div>
                    </div>
                </div>
                <div className="row py-2 mx-0" id="moreaboutmeid">
                    <h2 className="text-center ">More About Me</h2>
                    <div className="small-container col-12 col-md-6">
                        <img src={window.location.origin + "/png/5.png"} alt="photo" width="450px" />
                    </div>
                    <div className="small-container col-12 col-md-6">
                        <p className="para infopara p-4 p-md-0">I am <b>Full stack developer</b> with <b>3+ years </b> of Personal and 1+ Year of Professional experience and having good knowledge in developing applications using different frontend and backend Technologies like JavaScript, React.Js, Vue.Js, Node.Js, C++ also solved more than <b> 1500+ Data Structure and Algorithmic problems </b> on various platforms like LeetCode, GFG, Codeforces, etc.
                            I am eager to learn new things and excited to use my knowledge in real world.
                        </p>
                        <a type="button" className="btn btn-outline-dark" href="#contactmeid">Contact Me</a>
                    </div>
                    <div className="small-container col-12 col-md-6 my-5 my-md-0">
                        <h2>Skill IN</h2>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-html5 fa-2x" style={{ "color": "#e34c26" }}></i>HTML5 </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-css3-alt fa-2x" style={{ "color": "#264de4" }}></i>CSS3 </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-git-alt fa-2x" style={{ "color": "orange" }}></i>Git </div>
                        </div>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"> <i
                                className="fab fa-bootstrap fa-2x" style={{ "color": "#563d7c" }}></i>
                                BootStrap </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-js-square fa-2x" style={{ "color": "#f0db4f" }}></i>
                                Javascript </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-github fa-2x"></i>
                                Github </div>
                        </div>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"> <i
                                className="fab fa-node-js fa-2x" style={{ "color": "#68a063" }}></i>
                                Node.js </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"> <i
                                className="fab fa-react fa-2x" style={{ "color": "#7cc5d9" }}></i>
                                React.js </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column">
                                <img className="overflowImg2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="" width="30" />
                                Python </div>
                        </div>
                        <div className="row w-100 my-2" style={{ 'justifyContent': "center" }}>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column">
                                <img className="overflowImg2" src="/img/plsql.png" alt="" width="35" />
                                PL/Sql </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column"><i
                                className="fab fa-vuejs fa-2x" style={{ "color": "#42b883" }}></i>
                                Vue.js </div>
                            <div className="col-3 d-flex justifyContent-center align-items-center flex-column">
                                <img className="overflowImg mb-1" src="https://www.freeiconspng.com/uploads/c--logo-icon-0.png" alt="" width="35" />
                                C++ </div>
                        </div>
                    </div>
                    <div className="small-container col-12 col-md-6">
                        <img src={window.location.origin + "/png/8.png"} alt="photo" width="450px" />

                    </div>
                </div>
            </div>
            <div id="myprojectid">
                <h2 className="center" id="h1">My Projects</h2>
                <div id="card-conainer" className="MoreAbout-div mt-5">
                    <div >
                        <div className="row">
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/amzon.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Amazon Clone</h5>
                                        <p className="card-text">This is an E-commerce web application created with MERN Stack. It supports Features like Add items to cart,Buy items,Track orders,Like items,View delivery status, etc.</p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://amazon-clone-by-darshan.vercel.app/" target="__blank"
                                                className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/darshanahire/Amazon-Clone-2.0" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2">
                                <div className="card cards" style={{ "zIndex": "4" }}>
                                    <img src={window.location.origin + "/img/whatsapp.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Whatsapp Clone</h5>
                                        <p className="card-text">It is a messenger application created with VueJs and Socket.io. By which we can send messages ,emojis to any registered user Also, edit Profile Picture , etc. </p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://whatsapp-clone-by-darshan.onrender.com/" target="__blank"
                                                className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>

                                        <a href="https://github.com/darshanahire/Whatapp-clone" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}> Read more...
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 my-2 ">
                                <div className="card" id="noteCard" style={{ "zIndex": show ? "100" : "-1" }}>
                                    <img src={window.location.origin + "/img/blockchain.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">BlockChian based Certification System</h5>
                                        <p className="card-text">Certification System created using React.js and Solidity Programming Language.
                                        </p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://blockchain-based-certification.onrender.com"
                                                target="__blank" className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/akashghadge/Final-Year-Project-Blockchain" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 my-2 ">
                                <div className="card" id="calCard" style={{ "zIndex": show ? "100" : "-1" }}>
                                    <img src={window.location.origin + "/img/mrc.png"} className="card-img-top proj-img w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Movie Recommendation System</h5>
                                        <p className="card-text">
                                            Machine Learning Project Created with React.js, ML Algorithms likes Cosine similarity and TMD Dataset.
                                        </p>
                                        <div className="btn-parent" style={{ "height": "50px" }}>
                                            <a href="https://github.com/darshanahire/Movie-Recommender-2.0"
                                                target="__blank" className="btn btn-outline-dark" type="button">View
                                                Project</a>
                                        </div>
                                        <a href="https://github.com/darshanahire/Movie-Recommender-2.0" target="__blank"
                                            className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                    </div>
                                </div>
                            </div>
                            {show ? <>
                                <div className="col-12 col-md-6 my-2">
                                    <div className="card cards">
                                        <img src={window.location.origin + "/img/auto.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Automatic Email Sender</h5>
                                            <p className="card-text">It is an Automatic Email sender Website Also created with MERN
                                                stack. By which we can send mail easily.
                                            </p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <a href="https://github.com/darshanahire/automatic-email-sender" target="__blank"
                                                    className="btn btn-outline-dark" type="button">View
                                                    Project</a>
                                            </div>
                                            <a href="https://github.com/darshanahire/automatic-email-sender" target="__blank"
                                                className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 my-2">
                                    <div className="card cards" >
                                        <img src={window.location.origin + "/img/weatherapp.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Weather App</h5>
                                            <p className="card-text">This website will gives Temperature of searching City along with
                                                that it will also gives Atmospheric Pressure ,Humidity and Much More.</p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <a href="https://github.com/darshanahire/weather_app" target="__blank"
                                                    className="btn btn-outline-dark" type="button">View Project</a>
                                            </div>
                                            <a href="https://github.com/darshanahire/weather_app" target="__blank" className="readmore"
                                                style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 my-2 ">
                                    <div className="card cards">
                                        <img src={window.location.origin + "/img/covidtracker.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Covid Tracker</h5>
                                            <p className="card-text">Covid Tracker Website which gives Current Corona Virus updates
                                                from
                                                all over the World with single click.
                                            </p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <a href="https://darshanahire.github.io/Covid_Tracker_by_Fetch_Api/"
                                                    target="__blank" className="btn btn-outline-dark" type="button">View
                                                    Project</a>
                                            </div>
                                            <a href="https://github.com/darshanahire/Covid_Tracker_by_Fetch_Api" target="__blank"
                                                className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 my-2">
                                    <div className="card cards">
                                        <img src={window.location.origin + "/img/calculater.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">calculator</h5>
                                            <p className="card-text">Calculator Website where we can perhtmlForm all mathematical
                                                operations.It supports to Dark mode also along with the Light Mode.</p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <a href="https://darshanahire.github.io/Calculator_in_Pure_VanillaJS/"
                                                    target="__blank" className="btn btn-outline-dark" type="button">View
                                                    Project</a>
                                            </div>
                                            <a href="https://github.com/darshanahire/Calculator_in_Pure_VanillaJS" target="__blank"
                                                className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                        </div>
                                    </div>
                                </div >
                                <div className="col-12 col-md-6 my-2">
                                    <div className="card cards">
                                        <img src={window.location.origin + "/img/noteapp.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Note Taking App</h5>
                                            <p className="card-text">Basic Note Taking Website by using Vanilla JS, Css3, Html5 and
                                                Bootstrap.Where we can Read ,Write and Delete notes which are Store in Your
                                                Local
                                                Storage.</p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <button className="btn btn-outline-dark" type="button">View Project</button>
                                            </div>
                                            <a href="" target="__blank" className="readmore"
                                                style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                        </div>
                                    </div>
                                </div >
                                <div className="col-12 col-md-6 my-2">
                                    <div className="card cards">
                                        <img src={window.location.origin + "/img/mypostman.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">mypostman Api</h5>
                                            <p className="card-text">This is a website where we can perhtmlForm Get and Post request on
                                                sample data and get Json data. </p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <button className="btn btn-outline-dark" type="button">View Project</button>
                                            </div>
                                            <a href="" target="__blank" className="readmore"
                                                style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                        </div>
                                    </div>
                                </div >
                                <div className="col-12 col-md-6 my-2">
                                    <div className="card cards">
                                        <img src={window.location.origin + "/img/library.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Library Management website</h5>
                                            <p className="card-text">This is a simple library management system where we can add,
                                                get,see
                                                books available on website.</p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <button className="btn btn-outline-dark" type="button">View Project</button>
                                            </div>
                                            <a href="" target="__blank" className="readmore"
                                                style={{ "float": "right", "textDecoration": "none" }}>Read more...</a>
                                        </div>
                                    </div>
                                </div >

                                <div className="col-12 col-md-6 my-2">
                                    <div className="card cards">
                                        <img src={window.location.origin + "/img/portfolio.png"} className="card-img-top proj-img w-100" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">portfolio</h5>
                                            <p className="card-text">This is My Personal Website created by using
                                                node.js,Express.ja,hbs
                                                and MongoDB Atlas as a Database.where you contact me, Download my Resume.</p>
                                            <div className="btn-parent" style={{ "height": "50px" }}>
                                                <a href="https://ahire.vercel.app/"
                                                    target="__blank" className="btn btn-outline-dark" type="button">View
                                                    Project</a>
                                            </div>
                                            <a href="https://github.com/darshanahire/portfolio-3.0" target="__blank"
                                                className="readmore" style={{ "float": "right", "textDecoration": "none" }}>Read
                                                more...</a>
                                        </div>
                                    </div>
                                </div>
                            </> : <></>}
                        </div >
                    </div >
                </div >
                <div className="btn-parent" id="moreProj">
                    <button type="button" className="btn btn-outline-dark" onClick={() => { setShow(!show) }}>View {show ? "Less" : "More"} Projects</button>
                </div>
                <div className="hiddenProjects" id="hiddenProjects"></div>
            </div >
            <span id="achievement"><CodingAchive /> </span>
            <div className="container-fluid">
                <div className="row" id="contactmeid">
                    <h2 className="center mb-5 mx-0">Get In Touch</h2>
                    <div className="small-container col-12 col-md-6">
                        <img src={window.location.origin + "/png/13.png"} alt="photo" width="800px" />
                    </div>
                    <div className="container form-container col-12 col-md-4">
                        <form className=" row display my-md-5">
                            <div className="col-12 col-md-11 mt-md-0 mt-5">
                                <label htmlFor="inputEmail4" className="form-label">First name</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                                    name="fname" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="inputEmail4" className="form-label">Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                                    name="lname" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="name@gmail.com"
                                    name="email" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="Number" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" name="mnumber" autoComplete="off" />
                            </div>
                            <div className="col-12 col-md-11">
                                <label htmlFor="Suggetion" className="form-label">Any Suggestion</label>
                                <input type="text" className="form-control" name="suggetion" autoComplete="off" />
                            </div>

                            <div className="col-12 col-md-11 text-center">
                                <button className="btn btn-light w-75 my-5 my-md-0 mt-md-5 mx-auto" type='button'>Submit</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ "display": "flex", "justifyContent": "center", "height": "50px" }}>
                <a id="linkedin" className="pointer fab fa-linkedin fa-2x mx-3"
                    style={{ "color": "black", "textDecoration": "none", "height": "fit-content" }}
                    href="https://www.linkedin.com/in/darshan-ahire-6b8a601b7/" target="__blank"></a>
                <a id="github" className="pointer fab fa-github-square fa-2x mx-3"
                    style={{ "color": "black", "textDecoration": "none", "height": "fit-content" }} href="https://github.com/darshanahire"
                    target="__blank"></a>
                <a id="whatsapp" className="pointer fab fa-whatsapp fa-2x mx-3" style={{ "color": "black", "textDecoration": "none", "height": "fit-content" }}
                    href="https://wa.me/+919309941438" target="__blank"></a>
                <a id="instagram" className="pointer fab fa-instagram fa-2x mx-3" style={{ "color": "black", "textDecoration": "none", "height": "fit-content" }}
                    href="https://www.instagram.com/ahire_darshan_" target="__blank"></a>
            </div>
            <div className="bg-body-tertiary text-center text-lg-start">
                <div className="text-center p-3">

                    {/* <p className="text-body" >&copy; {new Date().getFullYear()} Darshan Ahire - All rights reserved.</p> */}
                    <p className="text-body" >Build with ❤️ by Darshan - (2020-{new Date().getFullYear()}).</p>
                </div>
            </div>
        </>
    )
}

export default Home