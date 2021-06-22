import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Input from '../../../component/atoms/input'
import Button from '../../atoms/Button'

function Index() {
    const history = useHistory()
    const {
        firstName,
        lastName,
        jobDesc,
        gender,
        email,
        laptop,
        address,
        phone,
    } = useSelector(state => state.user)
    const handleNext =()=>{
        localStorage.setItem('firsName',firstName)
        localStorage.setItem('lastName',lastName)
        localStorage.setItem('jobDesc',jobDesc)
        localStorage.setItem('gender',gender)
        localStorage.setItem('email',email)
        localStorage.setItem('laptop',laptop)
        localStorage.setItem('address',address)
        localStorage.setItem('phone',phone)
        history.push('/signup/finish')
    }
    return (
        <div>
            <div className="loginContainer">
                <div className="loginCanvasPerview">
                    <div className="loginCanvasLeft">
                        <div className="perviewData">
                            <div className="prevText" >
                                <span>Fullname</span>
                                <Input val={`${firstName} ${lastName}`} width='100%'/>
                            </div>
                            <div className="prevText">
                                <span>Jobdesc</span>
                                <div className="prevTextJob">
                                    {jobDesc.map((item)=>{return(
                                        <p style={{marginRight:'5px'}}>{item}</p>
                                    )})}
                                </div>
                            </div>
                            <div className="prevText">
                                <span>Gender</span>
                                <Input val={gender}/>
                            </div>
                            <div className="prevText">
                                <span>E-mail</span>
                                <Input val={email}/>
                            </div>
                            <div className="prevText">
                                <span>Have a Laptop/PC</span>
                                <Input val={laptop}/>
                            </div>
                            <div className="prevText">
                                <span>Address</span>
                                <Input val={address}/>
                            </div>
                        </div>
                    </div>
                    <div className="buttonNextStepTwo">
                        <Button title="Back" width='100px' backcolor='#FF7314' color='#f4f4f4' func={()=>{history.push('/signup/step-two')}}/>
                        <Button title="Next" width='100px' backcolor='#FF7314' color='#f4f4f4' func={()=>{handleNext()}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
