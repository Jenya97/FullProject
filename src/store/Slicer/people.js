


export const addReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD':
            return [...state,{
                id:Date.now(),
                name:action.payload.user
            }]
            default :
            return state
    }
}

export const createPeople=(a)=>(
    {
    type:'ADD',
    payload:{
        user:a
    }
    }
)