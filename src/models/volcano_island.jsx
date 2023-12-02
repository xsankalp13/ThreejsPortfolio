import React from 'react'
import Volcano_island from '../models/volcano_island'
import { useGLTF } from '@react-three/drei'

const volcano_island = () => {
    const volcano_island = useGLTF(volcano_island) 
  return (
    <mesh>
        <primitive object={volcano_island.scene} />
    </mesh>
  )
}

export default volcano_island