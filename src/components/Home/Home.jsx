import React, { useEffect } from 'react'
import "../Home/Home.css"
import * as THREE from 'three'
import moonImage from "../../img/moon.jpg"
import venusImage from "../../img/venus.jpg"
import spaceImage from "../../img/space.jpg"
import {Typography} from "@mui/material"
import TimeLine from '../TimeLine/TimeLine'
import Developer from '../../img/download.jpeg'
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard'



function Home() {

      useEffect(() => {


        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
       75,
       window.innerWidth / window.innerHeight,
       0.1,
       1000
       );
            
       const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    
    const moongeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture})
    const moon = new THREE.Mesh(moongeometry, moonMaterial)

    const venusgeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture})
    const venus = new THREE.Mesh(venusgeometry, venusMaterial)
    venus.position.set(8, 5, 5)


   
    const pointLight = new THREE.PointLight(0xffffff, 100)
    const pointLight2 = new THREE.PointLight(0xffffff, 10)
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    
    
    const lightHelper = new THREE.PointLightHelper(pointLight)
    
    scene.add(moon);
    scene.add(venus);
    
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;
   
    scene.add(lightHelper);
    const constspeed = 0.01;
    window.addEventListener("mousemove", (e)=>{

      if(e.clientX<=window.innerWidth/2){
        moon.rotation.x -=constspeed;
        moon.rotation.y +=constspeed;
        venus.rotation.x -=constspeed;
        venus.rotation.y +=constspeed;
      }
      if(e.clientX>window.innerWidth/2){
        moon.rotation.x -=constspeed;
        moon.rotation.y -=constspeed;
        venus.rotation.x -=constspeed;
        venus.rotation.y -=constspeed;
      }
      if(e.clientY>window.innerHeight/2){
        moon.rotation.x -=constspeed;
        moon.rotation.y +=constspeed;
        venus.rotation.x -=constspeed;
        venus.rotation.y +=constspeed;
      }
      if(e.clientY<=window.innerHeight/2){
        moon.rotation.x -=constspeed;
        moon.rotation.y -=constspeed;
        venus.rotation.x -=constspeed;
        venus.rotation.y -=constspeed;
      }

    })
    
    
    
    camera.position.set(4, 4, 8);
    const animation = () => {
      requestAnimationFrame(animation);
      moon.rotation.y+=0.01;
      venus.rotation.y+=0.01;
      
      renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
              

    }

    animation();
      },[])


  return (
    <div className='Home'>
<canvas className='homeCanvas'></canvas>
     <div className='homeContainer'>
      <Typography variant='h3'>TimeLine</Typography>
      <TimeLine timelines={[1,2,3,4]} />
      
      
     </div>
     <div className='homeSkills'>
          <Typography variant='h3'>SKILLS</Typography>
          <div className='homeCubeSkills'>
            <div className='homeCubeSkillsFace homeCubeSkillsFace1' >
              <img src='data:image/png;base64,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' alt='React'>
                
              </img>
            </div>
            <div className='homeCubeSkillsFace homeCubeSkillsFace2' >
              <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/1*bc9pmTiyKR0WNPka2w3e0Q.png' alt='NodeJs'>
                
              </img>
            </div>
            <div className='homeCubeSkillsFace homeCubeSkillsFace3' >
              <img src='https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png' alt='Express'>
                
              </img>
            </div>
            <div className='homeCubeSkillsFace homeCubeSkillsFace4' >
              <img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*doAg1_fMQKWFoub-6gwUiQ.png' alt='MongoDB'>
                
              </img>
            </div>
            <div className='homeCubeSkillsFace homeCubeSkillsFace5' >
              <img src='https://store-images.microsoft.com/image/apps.28863.13510798882852657.9e17bad2-e4f9-4677-bf16-4f971d0b77ee.9be6c818-4421-4abc-91d1-b9641017a912?h=464' alt='Java'>
              </img>
                
            </div>
            <div className='homeCubeSkillsFace homeCubeSkillsFace6' >
              <img src='https://www.webdevelopmenthelp.net/wp-content/uploads/2015/09/Advantages-of-HTML5-and-CSS3.png' alt='Html5'>
                
              </img>
            </div>
          </div>
          <div className='cubeShadow'> </div>
          <div className='homeSkillsBox'>
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          
          
             </div>
     </div>
     <div className='homeYoutube'>
      <Typography variant='h3'>YOUTUBE VIDEOS</Typography>
      <div className='homeYoutubeWrapper'>
      <YoutubeCard
                        image={Developer}
                        title="Sample_Video"
                    />
                    <YoutubeCard
                        image={Developer}
                        title="Sample_Video"
                    />
                    <YoutubeCard
                        image={Developer}
                        title="Sample_Video"
                    />
                    <YoutubeCard
                        image={Developer}
                        title="Sample_Video"
                    />
               

      
      
      </div>
     </div> 
    </div>

  )
}

export default Home