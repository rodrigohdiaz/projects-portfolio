import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import "../styles/global.css" 
import "../styles/projects.css"
import Media from '../components/media'

const Projects = () => {
    return (
        <Layout pageTitle="Projects">
                    <p className="subtitle">Have a look at what I have been working on!</p>
                    <div className='projects'>
                       <canvas className="webgl"> </canvas>
                        <div className='circles'>
                                <a href="https://kapturebyslick.herokuapp.com/profile" target="_blank" rel="noopener noreferrer">
                            <div className='circle'>
                            </div>
                            <p className='text'>Kapture</p></a>  
                            <div className="parragraph">
                            <p className="plainText center">
                            Final project from Enspiral Dev Academy.  The aim of the project is to 
                            encourage interaction with nature by capturing images/descriptions of 
                            native birds.<br></br><br></br>
                            <strong>The situation:</strong>
                            Develop and present the final project for Enspiral Dev Academy’s 
                            bootcamp, starting from an idea, problem statement, user stories, 
                            elements needed to make these stories, develop the solution using 
                            our existing capabilities.<br></br><br></br>
                            <strong>The task:</strong>
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
                            <strong>Actions taken</strong>
                            We had regular stand ups, code reviews and check ins.  We also fostered an 
                            open and collaborative team environment by have an open desk policy, there 
                            was no stupid question and every problem had to be discussed with the full 
                            team.  I researched how to make the CSS animation ‘on loading’ and page 
                            loader pages not using javascript. I also helped design the badges that 
                            were to be earnt by the user depending on which birds were spotted, we 
                            decided to implement this feature to add a sense of achievement and 
                            encourage the user to try to spot more birds.<br></br><br></br>
                            <strong>Result:</strong>
                            The final project can be seen in
                            <a href="https://kapturebyslick.herokuapp.com/profile" target="_blank" rel="noopener noreferrer">Kapture</a>.
                            We reached our MVP and were able to start some of the stretch goals.  
                            My big wins for the project was making the animation on the landing page, 
                            the page loader and tests.  The animation for the landing page was vital to the 
                            presentation of the project. Overall I reached the goals I had as front end 
                            developer in this project.<br></br><br></br>
                            <strong>How this made me feel?</strong>
                            The final result made us, and me, very happy. It taught me important skills 
                            of working collaboratively with others, to give and receive support from my 
                            team members.  Another big lesson was the importance of keeping morale up.  
                            At the end of bootcamp everyone is tired, and it is a high stress, time 
                            pressured environment.  We focused on morale by having constant check ins 
                            with each other and our own ritual to say that we were a ‘super hero’ which 
                            boosted our morale and confidence, and even made the other teams laugh - 
                            boosting their spirits too.
                            </p>   
                            </div>
                        </div>
                        <div className='circles'>
                                <Link to="/draw" target="_blank" rel="noopener noreferrer">
                            <div className='circle'>
                            </div><p className='text'>Draw app</p></Link>  
                        </div>
                        <div className='circles'>
                                <a href="https://github.com/horoeka-2020/NOWhere" target="_blank" rel="noopener noreferrer">
                            <div className='circle'>
                            </div><p className='text'>NOWhere</p></a>  
                        </div>
                        <div className='circles'>
                                <a href="https://github.com/rodrigohdiaz/three-course" target="_blank" rel="noopener noreferrer">
                            <div className='circle'>
                            </div><p className='text'>Three.js</p></a>  
                        </div>
                        <div className='circles'>
                                <a href="https://github.com/rodrigohdiaz/code-player/blob/master/codeplayer.html" target="_blank" rel="noopener noreferrer">
                            <div className='circle'>
                            </div><p className='text'>Code Player</p></a>  
                        </div>
                    </div>
                    <Media></Media>
        </Layout>
    )
}

export default Projects



     
