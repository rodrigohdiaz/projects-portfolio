import React from 'react'
// import ReactDOM from "react-dom";
import { Canvas } from '@react-three/fiber'
import Layout from '../components/layout'
import Media from '../components/media'
import Environment from "../components/Environment";
import "../styles/draw.css"

const Draw = () => {
  return (
    <div className="Draw"  >
      <Layout pageTitle = "Draw">
      <div id="canvas-container" >
      <Canvas>
            <pointLight position={[10, 10, 10]} />
        <mesh>
            <meshToonMaterial />
        </mesh>
  </Canvas>
      </div>
      </Layout>
      <Media></Media>
    </div>
  )
}

export default Draw


