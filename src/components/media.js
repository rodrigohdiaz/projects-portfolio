import React from "react"
import { Link } from 'gatsby'
import "../styles/media.css"
import "../styles/global.css"
import git from "../images/github.png"
import code from "../images/codepen.png"
import twit from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import insta from "../images/instagram.png"
import mail from "../images/mail.png"


const Media = () => {
    return (
        <main>
            <nav>
                <ul className='icons'>
                    <li><Link><a href="https://github.com/rodrigohdiaz" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={git} 
                                    className="icon" 
                                    alt="git">
                                    </img>
                                </a>
                                </Link>
                                </li>
                    <li><Link><a href="https://codepen.io/rodrigohdiaz" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={code} 
                                    className="icon" 
                                    alt="codepen">
                                    </img>
                                </a>
                                </Link>
                                </li>
                    <li><Link><a href="https://twitter.com/rodrigohdiaz" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={twit} 
                                    className="icon" 
                                    alt="twitter">
                                        </img>
                                    </a>
                                    </Link>
                                    </li>
                    <li><Link><a href="https://www.linkedin.com/in/rodrigohdiaz/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={linkedin} 
                                    className="icon" 
                                    alt="linkedin">
                                    </img>
                                </a>
                                </Link>
                                </li>
                    <li><Link><a href="https://www.instagram.com/rodrigohdiaz/"
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={insta} 
                                    className="icon" 
                                    alt="instagram">
                                    </img>
                                </a>
                                </Link>
                                </li>
                    <li><Link><a href="mailto: rodrigohdiaz@gmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                    <img src={mail} 
                                    className="icon" 
                                    alt="email">
                                    </img>
                                </a>
                                </Link>
                                </li>
                </ul>
            </nav>
        </main>
    )
}

export default Media
