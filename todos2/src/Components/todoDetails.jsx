
import { Container,Paper,TextField } from "@mui/material"
import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
export const TodoDetails = ()=>{
    const {id} = useParams()
    
    
    const [detail,setDetail] = useState("")

    const handleEnter = (event)=>{
        
        if(event.key == "Enter"){
            setDetail(event.target.value)
        }
    }
   
    return (
        <div>
            
            <TextField style={{height:"40vh",width:"50vw",margin:"auto",marginTop:"10vh"}}
          id="outlined-multiline-flexible"
          label="Enter Details and Hit Enter"
          multiline
          maxRows={10}
          onKeyPress={handleEnter}
          
        />
        <Container><h2>{detail}</h2></Container>
        </div>       
    )
}