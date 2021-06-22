import React, { useEffect, useState } from 'react'
import './style.css'
import Input from '../../atoms/input'
import Button from '../../atoms/Button'
import { FaPlus, FaTimes, FaChevronLeft } from 'react-icons/fa'
import {deleteJobdesc, updateFirstName , updateLastName, updateGender, updateAddress, updateEmail, updateJobDesc, updateLaptop, updatePhone} from '../../../config/redux/action/user'
import TextArea from '../../atoms/textArea'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Index() {
    const history = useHistory()
    const [fill, setfill] = useState({
        address: null,
        laptop: null,
        phone: null,
    })
    const dispatch = useDispatch()
    const [job, setJob] = useState([])
    const {jobDesc, laptop, address, phone} = useSelector(state => state.user)

    const handleChange=(e)=>{
        let target = e.target 
        let name = target.name
        let value = target.value
        if(name == 'address'){
            dispatch(updateAddress(value))
            if(address == null || address.length < 10){
                setfill({
                    ...fill,
                    address: false
                }
                )} else{
                    setfill({
                        ...fill,
                        address: true
                    })
                }
        }else if(name =='phone'){
            dispatch(updatePhone(value))
            if(phone == null || phone.length < 9){
            setfill({
                ...fill,
                phone: false
            }
            )} else{
                setfill({
                    ...fill,
                    phone: true
                })
            }
        }
    }
    const handleNext=()=>{
        if(phone == null || phone.length < 1){
            alert('phone number cant be null!')
            return
        }else if(address == null) {
            setfill({
                ...fill,
                address: false
            })
            alert('address cant be null!')
            return
        }else if(laptop == null){
            alert('choose  you have laptop / not')
        }
        history.push('/signup/perview-data')
    }
    return (
        <div>
            <div className="loginContainer">
                <div className="loginCanvas">
                    <div className="loginCanvarStepTwo">
                        <div className="loginCanvaseIcon">
                            <p>Register step 2</p>
                        </div>
                    </div>
                    <div style={{marginTop:'25px'}}>
                        <p style={{fontWeight:600}}>Have a Laptop / PC</p>
                        <div className="inputLoginFromStepTwo">
                            <div className="inputFrom">
                                <input value={laptop} name='laptop' type="radio" id="male" name="gender" value="male" onChange={()=>dispatch(updateLaptop('Yes'))}/>
                                <label for="male">Yes</label><br/>
                            </div>
                            <div className="inputPassForm">
                                <input value={laptop}  name='laptop' type="radio" id="female" name="gender" value="female" onChange={()=>dispatch(updateLaptop('No'))}/>
                                <label for="female">No</label><br/>
                            </div>
                            {fill.laptop !== null && fill.laptop == false  &&
                            <p style={{color:'red'}}>Required!</p> 
                            }
                        </div>
                    </div>
                    <div className="textAreaStepTwo">
                        <TextArea val={address} name='address' title="Address" func={(e)=>{handleChange(e)}}/>
                        {
                            address && fill.address == false && <p style={{color:'red', fontSize:'10px'}}>Required minimum 10 character!</p>
                        }
                    </div>
                    <div className="mobileNumberLogin">
                        <Input name='phone' val={phone}  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  type='tel' width='100%' title="Input Mobile Number" func={(e)=>{handleChange(e)}}/>
                        {
                            phone && fill.phone == false && <p style={{color:'red', fontSize:'10px'}}>Required minimum 10 character!</p>
                        }
                    </div>
                    <div className="buttonNextStepTwo">
                        <Button title="Back" width='100px' backcolor='#FF7314' color='#f4f4f4' func={()=>{history.push('/signup')}}/>
                        <Button title="Next" width='100px' backcolor='#FF7314' color='#f4f4f4' func={()=>{handleNext()}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
