import Companies from "../../src/component/Companies/Companies"

const INITIALSTATE={
   Students:[],
   Companies:[],
   current_user:'',
  
}


export default (state=INITIALSTATE,action)=>{
    console.log("current_user",action.current_users)
    
    console.log("current_std",action.Students)
    switch(action.type)
    {
        case "Students":
        return({
            ...state,
            Students:[...state.Students,action.payload],

        })
        case "Companies":
            return({
                ...state,
                Companies:[...state.Companies,action.payload],
    
            })
        case "current_user":
            return({
                ...state,
                current_user:action.current_users,
    
            })
    }
    return state;
}