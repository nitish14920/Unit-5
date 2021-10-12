const init = 1;

const changeTheNumber = (state = init,action)=>{
    switch (action.type){
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        case "MULTIPLY": return state * action.payload;

        case "DEVIDE": if(state%action.payload == 0){return state / action.payload;}
                        else{
                            alert("cannot devide")
                        }

        default:return state;
    }
}
export default changeTheNumber