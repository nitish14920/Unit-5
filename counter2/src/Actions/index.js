export const incNum = (num)=>{
    return {
        type:"INCREMENT",
        payload:Number(num)
    }
}
export const decNum = (num)=>{
    return {
        type:"DECREMENT",
        payload:Number(num)
    }
}
export const multiplyNum = (num)=>{
    return {
        type:"MULTIPLY",
        payload:Number(num)
    }
}
export const devideNum = (num)=>{
    return {
        type:"DEVIDE",
        payload:Number(num)
    }
}