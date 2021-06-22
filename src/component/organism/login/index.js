import React, { useEffect, useState } from 'react'
import './style.css'
import Input from '../../atoms/input'
import Button from '../../atoms/Button'
import { FaPlus, FaTimes } from 'react-icons/fa'
import {deleteJobdesc, updateFirstName , updateLastName, updateGender, updateAddress, updateEmail, updateJobDesc, updateLaptop, updatePhone} from '../../../config/redux/action/user'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Index() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [job, setJob] = useState([])
    const [fill, setfill] = useState({
        firstName: null,
        lastName: null,
        jobDesc: null,
        gender: null,
        email: null,
        laptop: null,
        address: null,
        phone: null,
    })

    const {firstName,
        lastName,
        jobDesc,
        gender,
        email,
        laptop,
        address,
        phone,} = useSelector(state => state.user)

    
    const handleChange=(e)=>{
        let target = e.target 
        let name = target.name
        let value = target.value
        if(name == 'firstName'){
            dispatch(updateFirstName(value))
            if(firstName == null || firstName.length < 4){
                setfill({
                    ...fill,
                    firstName: false
                })
            }else{
                setfill({
                    ...fill,
                    firstName: true
                })
            }
        }else if(name == 'lastName'){
            dispatch(updateLastName(value))
            if(lastName == null || lastName.length < 4){
                setfill({
                    ...fill,
                    lastName: false
                })
            }else{
                setfill({
                    ...fill,
                    lastName: true
                })
            }
        }else if(name == 'jobDesc'){
            setJob(value)
        }else if(name == 'gender'){
            dispatch(updateGender(value))
            if(gender == null || gender.length < 5){
                setfill({
                    ...fill,
                    gender: false
                })
            }else{
                setfill({
                    ...fill,
                    gender: true
                })
            }
        }else if(name == 'phone'){
            dispatch(updatePhone(value))
            if(phone == null || phone.length < 5){
                setfill({
                    ...fill,
                    phone: false
                })
            }else{
                setfill({
                    ...fill,
                    phone: true
                })
            }
        }else if(name =='email'){
            dispatch(updateEmail(value))
            if(email == null || email.length < 5){
                setfill({
                    ...fill,
                    email: false
                })
            }else{
                setfill({
                    ...fill,
                    email: true
                })
            }
        }else if(name =='laptop'){
            dispatch(updateEmail(value))
            if(laptop == null || laptop.length < 5){
                setfill({
                    ...fill,
                    laptop: false
                })
            }else{
                setfill({
                    ...fill,
                    laptop: true
                })
            }
        }else{
            dispatch(updateAddress(value))
            if(name == null || name.length < 5){
                setfill({
                    ...fill,
                    name: false
                })
            }else{
                setfill({
                    ...fill,
                    name: true
                })
            }
        }
    }
    const handleJobDesc =() =>{
        dispatch(updateJobDesc(job))
    }
    const handleDeleteJobDesc=(data)=>{
        dispatch(deleteJobdesc(data))
    }
    const handleNext =()=>{
        if(firstName == null  || firstName.length < 4){
            alert('Your first name cant be empty!')
            return
        }else if(lastName == null || lastName.length < 4){
            alert('Your last name cant be empty!')
            return
        }else if(jobDesc.length == 0){
            alert('1 jobDesc minimun required!')
            return
        }else if(gender === null){
            alert('Choose your gender!')
            return
        }else if(email == null || email.length < 10){
            alert('Your email cant be empty!')
            return
        }else{
            history.push('signup/step-two')
        }
    }
    return (
        <div>
            <div className="loginContainer">
                <div className="loginCanvas">
                    <p>Regsiter step 1</p>
                    <div className="inputLoginFrom">
                        <div className="inputFrom">
                            <Input val={firstName} func={(e)=>{handleChange(e)}} name='firstName' title="First Name" backColor="#393534" color="#393534" width='100%' padding='5px'value='First Name'/>
                            {firstName && firstName.length < 4 &&
                            <p style={{color:'red', fontSize:'10px'}}>Min 4 character!</p> }
                        </div>
                        <div className="inputPassForm">
                            <Input val={lastName} func={(e)=>{handleChange(e)}} name='lastName' title="Last Name" backColor="#393534" color="#393534" width='100%' padding='5px'value='Last Name'/>
                            {lastName && lastName.length < 4 &&
                            <p style={{color:'red', fontSize:'10px'}}>Min 4 character!</p> }
                        </div>
                    </div>
                    <div className="jobdescInput">
                        <div className="jobdescInputForm">
                            <Input func={(e)=>{handleChange(e)}} title="Jobdesc" name='jobDesc'/>
                            {jobDesc && jobDesc.length < 1 &&
                            <p style={{color:'red', fontSize:'10px'}}>Min 1 Jobdesc!</p> }
                        </div>
                        <div className="jobDescInputIcon" >
                            {job ?
                            <FaPlus  style={{cursor:'pointer'}}  style={{color:'#FF7314'}} onClick={()=>{handleJobDesc()}}/> :
                            <FaPlus  style={{cursor:'pointer'}}  />
                            }
                        </div>
                    </div>
                    {jobDesc.length > 0 && 
                    <div className="jobdescListInput">
                    {jobDesc.length > 0 && jobDesc.map((item) =>{return(
                        <div style={{display: 'flex', alignItems:'baseline',  margin:'5px', }}>
                            <FaTimes style={{fontSize:'10px', borderRadius:'6px',border:'1px solid grey',cursor:'pointer'}} onClick={()=>{handleDeleteJobDesc(item)}}/>
                            <p>{item}</p>
                        </div>
                            )})}
                    </div>
                    }
                    <div className="genderForm">
                        <p>Gender</p>
                        <select name='gender' onChange={(e)=>{handleChange(e)}} value={gender}>
                            <option value={null}>Choose gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {gender && gender.length < 1 &&
                            <p style={{color:'red', fontSize:'10px'}}>Choose your gender!</p> }
                    </div>
                    <div className="emailForm">
                        <Input val={email} func={(e)=>{handleChange(e)}}  name='email' title="Email" width="100%" type='email' />
                        {email && email.length < 10 &&
                            <p style={{color:'red', fontSize:'10px'}}>fill your email correctly!</p> }
                    </div>
                    <div className="buttonNext">
                        <Button title="Next" width='100px' backcolor='#FF7314' color='#f4f4f4' func={()=>{handleNext()}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
