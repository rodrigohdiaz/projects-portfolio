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
                            <div className='circle'>
                                <Link><a href="https://github.com/horoeka-2020/kapture" target="_blank"></a></Link>
                            </div>
                            <p className='text'>Kapture</p>
                        </div>
                        <div className='circles'>
                            <div className='circle'>
                                <Link><a href="https://github.com/rodrigohdiaz/draw" target="_blank"></a></Link>
                            </div>
                            <p className='text'>Draw app</p>
                        </div>
                        <div className='circles'>
                            <div className='circle'>
                                <Link><a href="https://github.com/horoeka-2020/NOWhere" target="_blank"></a></Link>
                            </div>
                            <p className='text'>NOWhere</p>
                        </div>
                        <div className='circles'>
                            <div className='circle'>
                                <Link><a href="https://github.com/rodrigohdiaz/three-course" target="_blank">.</a></Link>
                            </div>
                            <p className='text'>Three.js</p>
                        </div>
                        <div className='circles'>
                            <div className='circle'>
                                <Link><a href="https://github.com/rodrigohdiaz/code-player/blob/master/codeplayer.html" target="_blank"></a></Link>
                            </div>
                            <p className='text'>Code Player</p>
                        </div>
                    </div>
                    <Media></Media>
        </Layout>
    )
}

export default Projects



     
