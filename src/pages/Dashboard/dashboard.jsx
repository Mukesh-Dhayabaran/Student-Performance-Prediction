
import { Button, Checkbox, Input, TextField } from '@mui/material';
import { useState } from 'react'
// import { removeUserData } from '../../services/storage';
import { removeUserData } from '../Authentication/services/storage';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Authentication/firebase';
import Forms from './forms';
import Prediction from './prediction';
// import { useNavigate } from 'react-router-dom';
// import {auth} from '../../firebase';
// import { removeUserData } from '../../services/storage';

export default function Dashboard() {
  
    const navigate = useNavigate();
    const [predict, setPredict] = useState(false);
  
  return (

    <div className='m-0 p-0'>
      <div className='flex  bg-violet-900 items-center justify-center p-8'>
      <h1 className='flex-1 text-white text-6xl font-bold text-center'>Student Performance Prediction</h1>
      <Button  sx={{
  backgroundColor: "white",
  color:"var(--color-violet-900)",
  fontSize: "15px",
  padding: "10px",
  textAlign: "center",
  cursor: "pointer",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#F3F1F2",
  }}}
  
  onClick={() => {
    auth.signOut();
    removeUserData();
    navigate("/");
  }}

  >Sign Out</Button>
    </div>
    {
      predict ? <Prediction predict={predict} setPredict={setPredict}/> : <Forms predict={predict} setPredict={setPredict}/>
    }
    </div>
  );
}
