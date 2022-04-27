import axios from "axios";

const fetchUsersState={
    loading:false,
    user:[],
    error:''
}
const createLoading=()=>({
    type:'loading'
})
const createSuccess=(s)=>({
    type:'success',
    payload:s
})
const createError=(e)=>({
    type:'error',
    payload:e
})

export const fetchReducer=(state=fetchUsersState,action)=>{
switch(action.type){
    case 'loading':
        return{
            loading:true,
            user:[],
            error:''
        }
    case 'success':
        return{
            loading:false,
            user:action.payload,
            error:''
        }
        case 'error':
            return{
                loading:false,
                user:[],
                error:action.payload
            }
        default :
        return state
}
}

export const fetchUser=()=>{
    return function(dispatch){
        dispatch(createLoading())
        let z=axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>dispatch(createSuccess(response.data)))
        z.catch(e=>dispatch(createError(e)))
    }
}