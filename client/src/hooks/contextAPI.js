import { createContext,useReducer } from "react";


export const StatusContext=createContext({
    status:null,
    message:null
})

export const StatusContextProvider=({children})=>{
   
    
    const statusReducer=(state,action)=>{
        if(action.type==="1"){
           return {
            status:"Eligible for Loan",
            message:"Congratulations, you are eligible for Loan!!!"
           }
        }
        else{
            return {
                status:"Not Eligible for Loan",
                message:"Sorry, you are not eligible for loan."
            }
        }
    }
    const [state,dispatch]=useReducer(statusReducer,{status:null,message:null})
    return <StatusContext.Provider value={{state,dispatch}}>
        {children}
    </StatusContext.Provider>
}