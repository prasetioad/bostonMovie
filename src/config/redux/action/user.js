
export const updateFirstName = (data)=>(dispatch)=>{
    dispatch({type: "FIRSTNAME", payload: data})
}
export const updateLastName = (data)=>(dispatch)=>{
    dispatch({type: "LASTNAME", payload: data})
}
export const updateJobDesc = (data)=>(dispatch)=>{
    dispatch({type: "JOBDESC", payload: data})
}
export const updateGender = (data)=>(dispatch)=>{
    dispatch({type: "GENDER", payload: data})
}
export const updateEmail = (data)=>(dispatch)=>{
    dispatch({type: "EMAIL", payload: data})
}
export const updateLaptop = (data)=>(dispatch)=>{
    dispatch({type: "LAPTOP", payload: data})
}
export const updateAddress = (data)=>(dispatch)=>{
    dispatch({type: "ADDRESS", payload: data})
}
export const updatePhone = (data)=>(dispatch)=>{
    dispatch({type: "PHONE", payload: data})
}
export const deleteJobdesc = (data)=>(dispatch)=>{
    dispatch({type: "DELETE_JOBDESC", payload: data})
}
