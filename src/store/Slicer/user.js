export const Users=(state=[],action)=>{
    switch(action.type){
        case 'ADD':
            return [...state, action.payload.user]
            default :
            return state
    }

}

export function addUsers(val){
    return{
        type: 'ADD',
        payload:{
            user:val
        }
    }
}