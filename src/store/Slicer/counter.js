
const Counter=20;

export const Countering=(state=Counter,action)=>{
    console.log(state);
    switch(action.type){
        case 'INCREMENT':    
        return state+1
        default :
        return state
    }
       
}

export const createAdd=()=>({
    type:'INCREMENT',
})