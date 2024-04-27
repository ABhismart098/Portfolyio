import React, { useState, useEffect } from 'react'
import "./AdminPannel.css"
import { Typography, Button } from '@mui/material'
import {AiOutlineProject} from "react-icons/ai"
import {FaYoutube}from 'react-icons/fa'
import {MdTimeline} from "react-icons/md"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../action/user"
import { useAlert } from 'react-alert'
const AdminPannel = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const {message, error} = useSelector((state)=> state.login)
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [skills, setskills] = useState({});
    const [about, setAbout] = useState({});
const submitHandler = (e)=>{
        e.preventDefault();
    }
    const logoutHandler = (e)=>{
        dispatch(logout());
    }
    const handleAboutImage= (e)=>{
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = ()=>{
            if(Reader.readyState === 2){
                setAbout(...about, { avatar: Reader.avatar})
            
        }
        
    }
    }
    const handleImage= (e, value)=>{
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = ()=>{
            if(Reader.readyState === 2){
                if(value === 1)
                {
                setskills( ...skills, {image1: Reader.result});
                }
                if(value === 2)
                {
                setskills( ...skills, {image2: Reader.result});
                }
                if(value === 3)
                {
                setskills( ...skills, {image3: Reader.result});
                }
                if(value === 4)
                {
                setskills( ...skills, {image4: Reader.result});
                }
                if(value === 5)
                {
                setskills( ...skills, {image5: Reader.result});
                }
                if(value === 6)
                {
                setskills( ...skills, {image6: Reader.result});
                }            
        }
    }
    }
    useEffect(()=>{
        if(error){
         alert.error(error);
         dispatch({ type: "CLEAR_ERROR", })
        }if(message){
         alert.success(message);
         dispatch({type: "CLEAR_MESSAGE", })
        }
     
       }, [alert,error,message, dispatch])
  return (
    <div className='adminPannel'>
        <div className='adminPannelCointainer'>
        <Typography variant='h4'>
                   <p>A</p>
                   <p>D</p>
                   <p>M</p>
                   <p>I</p>
                   <p style={{ marginRight: "1vmax"}}>N</p>


                   <p>P</p>
                   <p>A</p>
                   <p>N</p>
                   <p>E</p>
                   <p>L</p>
          </Typography>
          <form onSubmit={submitHandler}>
            <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='adminPannelInput'
            />
            <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='adminPannelInput'
            />
<input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='adminPannelInput'
            />
            <div className='adminPannelSkills'> 
            <div>
            <Typography>Skills 1</Typography>
            <input
            className='adminPannelFileUpload'
            type='file'
            onChange={(e)=> handleImage(e,1)}
            accept='image/*'
            />
            </div>
            <div>
            <Typography>Skills 2</Typography>
            <input
            className='adminPannelFileUpload'
            type='file'
            onChange={(e)=> handleImage(e,2)}
            accept='image/*'
            />
            </div>
            <div>
            <Typography>Skills 3</Typography>
            <input
            className='adminPannelFileUpload'
            type='file'
            onChange={(e)=> handleImage(e,3)}
            accept='image/*'
            />
            </div>
            <div>
            <Typography>Skills 4</Typography>
            <input
            className='adminPannelFileUpload'
            type='file'
            onChange={(e)=> handleImage(e,4)}
            accept='image/*'
            />
            </div>
            <div>
            <Typography>Skills 5</Typography>
            <input
            className='adminPannelFileUpload'
            type='file'
            onChange={(e)=> handleImage(e,5)}
            accept='image/*'
            />
            </div>
            <div>
            <Typography>Skills 6</Typography>
            <input
            className='adminPannelFileUpload'
            type='file'
            onChange={(e)=> handleImage(e,6)}
            accept='image/*'
            />
            </div>
            </div>
            <div className='adminPannelAbout'>
                <fieldset>
                    <legend>About</legend>
                    <input
                    type='text'
                    placeholder='Name'
                    value={about.name}
                    onChange={(e)=> setAbout({...about,name: e.target.value})}
                    className='adminPannelInput'
                    />
<input
                    type='text'
                    placeholder='Title'
                    value={about.title}
                    onChange={(e)=> setAbout({...about,title: e.target.value})}
                    className='adminPannelInput'                    
                    />
                    <input
                    type='text'
                    placeholder='SubTitle'
                    value={about.subtitle}
                    onChange={(e)=> setAbout({...about,subtitle: e.target.value})}
                    className='adminPannelInput'
                    />
                    <input
                    type='text'
                    placeholder='Description'
                    value={about.description}
                    onChange={(e)=> setAbout({...about,description: e.target.value})}
                    className='adminPannelInput'
                    />
<input
                    type='text'
                    placeholder='Quate'
                    value={about.quate}
                    onChange={(e)=> setAbout({...about,quate: e.target.value})}
                    className='adminPannelInput'
                    />
                    <input
                    type='file'
                    onChange= {handleAboutImage}
                    placeholder='choose Avatar'
                    className='adminPannelFileUpload'
                    accept = "image/*"
                    />
                </fieldset>
            </div>
            <Link to='/admin/timeline'>
                TIMELINE <MdTimeline />
            </Link>
            <Link to='/admin/youtube'>
                YOUTUBE <FaYoutube/>
                
            </Link>
            <Link to='/admin/project'>
               PROJECT< AiOutlineProject/>
                
            </Link>
            <Button  type='submit' variants= "contained">
             update
             </Button>             
          </form>
          <Button 
             variant="contained"
             color="error"
             style= {{display:"block", margin:"4vmax auto"}}
             onClick = {logoutHandler}
             >
             LOGOUT
             </Button>
        </div>
    </div>
  )
}
export default AdminPannel