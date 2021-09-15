import React from 'react'
// import ReactDOM from "react-dom";
// import { Canvas } from "react-three-fiber";
import { Canvas } from '@react-three/fiber'
import Layout from '../components/layout'
import Media from '../components/media'
import Environment from "../components/Environment";

const Draw = () => {
  return (
    <div className="Draw">
      <Layout pageTitle = "Draw">
      <Canvas>
      
        <Environment>
          <sphereBufferGeometry></sphereBufferGeometry>
        </Environment>
      </Canvas>
      <Media></Media>
      </Layout>
    </div>
  )
}

export default Draw
