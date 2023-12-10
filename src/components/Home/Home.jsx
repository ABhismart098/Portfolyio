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

    const moongeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonmaterial = new THREE.MeshStandardMaterial({ color:0xffffff })
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.z=10;

    const moon = new THREE.Mesh(moongeometry, moonmaterial)
    scene.add(moon);
    scene.add(pointLight);
    
    camera.position.z=10;
    const animation = () => {
      requestAnimationFrame(animation);
      moon.rotation.z +=0.01;
      
      renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
              

    }

    animation();
      },[])


  return (
    <div className='Home'>
<canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home