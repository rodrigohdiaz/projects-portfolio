import React from 'react'
// import ReactDOM from "react-dom";
import { Canvas } from '@react-three/fiber'
import Layout from '../components/layout'
import Media from '../components/media'
import Environment from "../components/Environment";
import "../styles/draw.css"

const Draw = () => {
  return (
    <div className="Draw">
      <Layout pageTitle = "Draw">
      <Canvas id="canvas-container">
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
            <Environment>
                
            </Environment>
         </mesh>
      
      </Canvas>
      <Media></Media>
      </Layout>
    </div>
  )
}

export default Draw

