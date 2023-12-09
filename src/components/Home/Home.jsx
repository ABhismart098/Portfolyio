import React, { useEffect } from 'react'
import "../Home/Home.css"
import * as THREE from 'three'


function Home() {

      useEffect(() => {
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
       75,
       window.innerWidth / window.innerHeight,
       0.1,
       1000
       );
            
       const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const geometry = new THREE.BoxGeometry(1, 1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color:0x00ff00 })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh);
    camera.position.z=5;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
              
      },[])


  return (
    <div className='Home'>
<canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home