import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import "../styles/global.css" 
import "../styles/projects.css"
import Media from '../components/media'
import kapture from "../images/kapture.png"
import draw from "../images/drawApp.png"
import blog from "../images/blog.png"

const Projects = () => {
    return (
        <Layout pageTitle="Projects">
                    <p className="subtitle">Have a look at some of my work!</p>
                    <div className='projects'>
                       <canvas className="webgl"> </canvas>
                            
                            {/* kapture by slick - a S.T.A.R.F. analisys */}
                        
                        <div className='circles'>
                                <Link><a href="https://kapturebyslick.herokuapp.com/profile" 
                                         target="_blank" 
                                         rel="noopener noreferrer">
                                             <img src={kapture} 
                                                  className="image" 
                                                  alt="kapturebyslick"></img>
                               
                            <div className='circle'>
                            </div>
                            <p className='text'>Kapture</p></a></Link> 
                            <div className="parragraph">
                            <p className="plainText center">
                            Final project from Enspiral Dev Academy.  The aim of the project is to 
                            encourage interaction with nature by capturing images/descriptions of 
                            native birds.<br></br><br></br>
                            <strong>The situation:</strong><br/>
                            Develop and present the final project for Enspiral Dev Academy’s 
                            bootcamp, starting from an idea, problem statement, user stories, 
                            elements needed to make these stories, develop the solution using 
                            our existing capabilities.<br></br><br></br>
                            <strong>The task:</strong><br/>
                            We had 5 days and we were a team of 4 people, 2 front end and 2 back 
                            end developers.  I was working on the front end. We developed style 
                            standards that were to be for the overall design to be consistent 
                            across the web app.  I was also in charge of making the CSS animation 
                            the landing page to imitate a camera focusing on a bird.  The loader 
                            image that is to show up when ever the is a ‘loading time’ with is 
                            represented as a ‘bird flapping its wings’, and also help to make sure 
                            that the style was consistent and make sure that every element was in a 
                            proper position and that the user experience was optimised with proper 
                            design of elements on each page/card.<br></br><br></br>
                            <strong>Actions taken</strong><br/>
                            We had regular stand ups, code reviews and check ins.  We also fostered an 
                            open and collaborative team environment by have an open desk policy, there 
                            was no stupid question and every problem had to be discussed with the full 
                            team.  I researched how to make the CSS animation ‘on loading’ and page 
                            loader pages not using javascript. I also helped design the badges that 
                            were to be earnt by the user depending on which birds were spotted, we 
                            decided to implement this feature to add a sense of achievement and 
                            encourage the user to try to spot more birds.<br></br><br></br>
                            <strong>Result:</strong><br/>
                            The final project can be seen here:<br></br>
                            <a href="https://kapturebyslick.herokuapp.com/profile" target="_blank" rel="noopener noreferrer" className="link">Kapture</a><br></br>
                            We reached our MVP and were able to start some of the stretch goals.  
                            My big wins for the project was making the animation on the landing page, 
                            the page loader and tests.  The animation for the landing page was vital to the 
                            presentation of the project. Overall I reached the goals I had as front end 
                            developer in this project.<br></br><br></br>
                            <strong>How this made me feel?</strong><br/>
                            The final result made us, and me, very happy. It taught me important skills 
                            of working collaboratively with others, to give and receive support from my 
                            team members.  Another big lesson was the importance of keeping morale up.  
                            At the end of bootcamp everyone is tired, and it is a high stress, time 
                            pressured environment.  We focused on morale by having constant check ins 
                            with each other and our own ritual to say that we were a ‘super hero’ which 
                            boosted our morale and confidence, and even made the other teams laugh - 
                            boosting their spirits too.<br></br><br></br><hr/><br></br>
                            </p>   
                            </div>
                        </div>

                        {/* Draw application - a S.T.A.R.F. analisys */}

                        <div className='circles'>
                            <Link><a href="https://kapturebyslick.herokuapp.com/profile" 
                                     target="_blank" 
                                     rel="noopener noreferrer">
                                         <img src={draw} 
                                              className="image" 
                                              alt="drawApp"></img>
                            <div className='circle'>
                            </div><p className='text'>Draw app</p></a></Link>  
                            <div className="parragraph">
                            <p className="plainText center">
                            Personal project that I have been working on, it is a real life drawing 
                            canvas. The main goal is to every person that is on the app will be able 
                            to see what the main user is drawing. I think that this app could have a 
                            great implementation for presentations, specially in classrooms, when the 
                            teacher is drawing a sketch or a diagram to teach, so students can pay full 
                            attention without worrying to copy the diagram and just ‘screenshot’ it at 
                            the end.<br></br><br></br>
                            <strong>The situation:</strong><br/>
                            I want to have a personal project that I can be working on on my free time, 
                            if I have any ;P . 
                            This particular app I started using p5.js but I am in the process to pass 
                            it into three.js as I have been 
                            working a little bit with this.<br></br><br></br>
                            <strong>The task:</strong><br/>
                            Create a canvas that will allow the user to draw anything, and then, through 
                            sockets.io allow other users to be able to see what the main user is drawing in 
                            real time.<br></br><br></br>
                            <strong>Actions taken</strong><br/>
                            I created a first app, with works to a point, only the main user can draw and 
                            if someone else enters the app, will have an empty canvas to draw. 
                            At the moment, this app works with p5.js, which is a library for javascript which 
                            allows to create this drawing app.<br></br><br></br>
                            <strong>Result:</strong><br/>
                            At the moment, there is a working drawing app, it is simple and does the main job, 
                            which is to draw on a canvas.  Still need to work on the socket.io part and also, 
                            since I have been learning three.js which is a cross browser javascript library that 
                            allows to draw, animate and create elements in 2D and 3D, I want to work again this 
                            project but in three.js.<br></br><br></br>
                            <strong>How this made me feel?</strong><br/>
                            The current result made me feel like I can accomplish anything, it is a great sensation 
                            to see live and working what you imagined.  There is still job to do, and I’m looking 
                            forward to have a final full working project.<br></br><br></br><hr/><br></br>
                            </p>   
                            </div>
                        </div>

                        {/* 1st blog - a S.T.A.R.F. analisys */}

                        <div className='circles'>
                                <Link><a href="https://rodrigohdiaz.github.io/index.html" 
                                         target="_blank" 
                                         rel="noopener noreferrer">
                                             <img src={blog} 
                                                  className="image" 
                                                  alt="blog"></img>
                            <div className='circle'>
                            </div><p className='text'>1st blog</p></a></Link>
                            <div className="parragraph">
                            <p className="plainText center">
                            This is a blog that I had to do for the ‘foundations’ for Enspiral Dev Academy’s bootcamp, 
                            this was to be updated once a week for each of the weeks of the foundations (5 weeks)<br></br><br></br>
                            <strong>The situation:</strong><br/>
                            The blog is divided in 2 main parts: a cultural blog in which I explore my learning and my 
                            experience and how I’m feeling during different challenges; and a technical blog, in which 
                            I’m explain a couple of subjects of what I’m learning and also some examples on how I have 
                            overcome some challenges.<br></br><br></br>
                            <strong>The task:</strong><br/>
                            Create a website using what I know and of what I have been learning so far, in this case it 
                            is just html and css.<br></br><br></br>
                            <strong>Actions taken</strong><br/>
                            This is a simple website using exclusively html and css. I made some sketches of what I wanted 
                            from the beginning and started to build on top of that, adding new entries each week. I saw that 
                            I didn’t needed to use javascript as I wasn’t going to use any interactive element that I couldn’t 
                            do using css. I use some photos of mine and some screenshots as the images to use on this blog.<br></br><br></br>
                            <strong>Result:</strong><br/>
                            Being a simple website, it is simple but I like to think that it is elegant in a way, using 
                            transparencies over an image and tried to make it easier for the observer to look and interact 
                            with it.<br></br>
                            You can see it at:<br></br>
                            <a href="https://rodrigohdiaz.github.io/index.html" target="_blank" rel="noopener noreferrer" className="link">Rodrigo Díaz</a><br></br><br></br>
                            <strong>How this made me feel?</strong><br/>
                            The current result made me feel like I can accomplish anything, it is a great sensation 
                            to see live and working what you imagined.  There is still job to do, and I’m looking 
                            forward to have a final full working project.<br></br><br></br><br></br>
                            </p>   
                            </div>
                        </div>
                    </div>
                    <Media></Media>
        </Layout>
    )
}

export default Projects



     
