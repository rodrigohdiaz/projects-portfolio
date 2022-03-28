import * as React from 'react'
import Layout from '../components/layout'
import Media from '../components/media'
import contact from '../images/contactMe.png'
import kapture from "../images/kapture.png"

const Contact = () => {
    return (
        <Layout pageTitle="Contact">
                <h1>Need to reach me?</h1>
                    <p>You can do so in any of my social media!</p>
                    <img src={contact} 
                        className="imageContact" 
                        lt="contact"></img>
        <Media></Media>
      </Layout>
    )
}

export default Contact
