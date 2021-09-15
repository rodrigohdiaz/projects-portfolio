import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import "../styles/global.css" 
import Media from '../components/media'

const Projects = () => {
    return (
        <Layout pageTitle="Projects">
                    <p>Have a look at what I have been working on!</p>
                    <div className='projects'>
                        <div className='circles'>
                                <a href="https://github.com/horoeka-2020/kapture" target="_blank" rel="noopener noreferrer">
                            <div className='circle'>
                            </div><p className='text'>Kapture</p></a>  
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



     
