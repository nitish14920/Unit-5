import { useState } from "react";
import { Question } from "./Question";

export function Slider({questions}){
    const [i,setI] = useState(0)
    var disable = false
    var disable2 = false
    const Prev = ()=>{
        if(i>0){
        setI(i-1)
        }
        
    }
    if(i==0 ){
        disable = true
    }
    else if(i==questions.length-1){
        disable2 = true
    }
    
    const Next = ()=>{
        if(i<questions.length-1){
        setI(i+1)
        }
    }
    return(
        <div>
            <Question  i={i} questions={questions}/>
            <div>
                <button data-testid="prevBtn" disabled={disable} onClick={()=>{Prev()}}>Prev</button>
                <button data-testid="nextBtn" disabled={disable2} onClick={()=>{Next()}}>Next</button>
                
            </div>
        </div>
    )
}