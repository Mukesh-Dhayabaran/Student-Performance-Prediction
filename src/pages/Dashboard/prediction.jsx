import { Button } from '@mui/material'
import React from 'react'

export default function Prediction({predict,setPredict}) {
  

  return (
    <div className=' max-auto m-8 pb-4 bg-white shadow-md rounded-lg'>
            <h2 className='text-white text-5xl p-9 font-bold text-center bg-violet-900 rounded-t-lg'>Prediction Result</h2>
            <div className='text-9xl font-medium  text-center p-28'>
                9/10
            </div>
            <div className='flex items-center justify-end mr-12'>

            <Button 
            sx={{
                backgroundColor: "var(--color-violet-900)",
                fontSize: "20px",
              textAlign: "center",
              color: "#fff",
              fontWeight:"500",
              cursor: "pointer",
              padding: "5px 25px",
              textTransform: "capitalize",
              "&:hover": {
                  backgroundColor: "var(--color-violet-500)",
                },
            }}

            onClick={()=>
                setPredict(!predict)
            }
            
            >Back</Button>
            </div>
    </div>
  )
}
