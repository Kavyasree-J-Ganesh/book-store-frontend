import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import "./Signup.css"
import { signup, signin  } from "../../services/userService";
import { useNavigate } from "react-router-dom";


const emailRegex = /^[A-Za-z0-9][A-Za-z0-9+-]*[.]?[A-Za-z0-9+-]+@[A-Za-z0-9][A-Za-z0-9+-]*(.[A-Za-z0-9]+)?.[A-Za-z]{2,6}$/
const passwordRegex = /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/
const mobileRegex = /^[0-9]{10}$/

const Signup = props => {

    const [signupObj, setsignupObj] = useState({
        email: "",
        password: "",
        fullname: "",
        mobilenumber: ""
    })

    const [validityObj, setValidityObj] = useState({
        emailHelper: "",
        isEmailInvalid: false,
        passwordHelper: "",
        isPasswordInvalid: false,
        fullNameHelper: "",
        isfullNameInvalid: false,
        mobileNumberHelper: "",
        isMobileNumberInvalid: false,
    })

    const [isLogin, setIsLogin] = useState(false);

    const navigate = useNavigate();

    function onEmailChange(event) {
        setsignupObj((prev) => { return { ...prev, email: event.target.value } })
    }
    function onPasswordChange(event) {
        setsignupObj((prev) => { return { ...prev, password: event.target.value } })
    }
    function onfullNameChange(event) {
        setsignupObj((prev) => { return { ...prev, fullname: event.target.value } })
    }
    function onMobileChange(event) {
        setsignupObj((prev) => { return { ...prev, mobilenumber: event.target.value } })
    }
    


    async function onSubmit() {
        let isEmailValid = emailRegex.test(signupObj.email)
        let passwordValid = passwordRegex.test(signupObj.password)
        let fullNameValid = firstnameRegex.test(signupObj.fullname) || isLogin
        let mobileValid = mobileRegex.test(signupObj.mobilenumber) || isLogin


        console.log(signupObj)

        if (!isEmailValid) {
            setValidityObj(prev => { return { ...prev, isEmailInvalid: true, emailHelper: "Invalid email" } })
        } else {
            setValidityObj(prev => { return { ...prev, isEmailInvalid: false, emailHelper: "" } })
        }

        if (!passwordValid) {
            setValidityObj(prev => { return { ...prev, isPasswordInvalid: true, passwordHelper: "Invalid password" } })
        } else {
            setValidityObj(prev => { return { ...prev, isPasswordInvalid: false, passwordHelper: "" } })
        }

        if (!fullNameValid) {
            setValidityObj(prev => { return { ...prev, isfullNameInvalid: true, fullNameHelper: "Invalid firstname" } })
        } else {
            setValidityObj(prev => { return { ...prev, isfullNameInvalid: false, fullNameHelper: "" } })
        }

        if(!mobileValid) {
            setValidityObj(prev => { return { ...prev, isMobileNumberInvalid: true, mobileNumberHelper: "Invalid mobileNumber" } })
        } else {
            setValidityObj(prev => { return { ...prev, isMobileNumberInvalid: false, mobileNumberHelper: "" } })
        }

        
        

        if (isEmailValid && passwordValid && fullNameValid && mobileValid) {

            try {
                const result = isLogin ? await signin({email:signupObj.email, password: signupObj.password}) : await signup(signupObj)
                if(isLogin){
                    const token = result.data.token;
                    localStorage.setItem("auth", token)
                    navigate("dashboard")
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    function goToLogin(event) {
        navigate("/")
    }

    return (
        <div className="container">
            <div className="container_signup">
                <div className="container_signup_logo">
                    <img className="container_signup_img" src="./2766594.png" alt="cart" />
                    <h3 className="container_signup_head">Online Book Shopping</h3>
                </div>
                <div className="container_signup_details">
                    <div className="container_signup_link">
                        <a className={`${isLogin ? "active": ""}`} onClick={()=> setIsLogin(true)}>LOGIN</a>
                        <a className={`${!isLogin ? "active": ""}`} onClick={()=> setIsLogin(false)}>SIGNUP</a>
                    </div>
                    {!isLogin && (<div className="container_details_field">
                        <TextField
                            id="outlined-basic"
                            label="Full name"
                            variant="outlined"
                            size="small"
                            error={validityObj.isfullNameInvalid}
                            helperText={validityObj.fullNameHelper}
                            onChange={onfullNameChange} />
                    </div>)}
                    <div className="container_details_field">
                        <TextField
                            id="outlined-basic"
                            label="Email id"
                            variant="outlined"
                            size="small"
                            error={validityObj.isEmailInvalid}
                            helperText={validityObj.emailHelper}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className="container_details_field">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size="small"
                            error={validityObj.isPasswordInvalid}
                            helperText={validityObj.passwordHelper}
                            onChange={onPasswordChange} />
                    </div>
                    {!isLogin && (<div className="container_details_field">
                        <TextField
                            id="outlined-basic"
                            label="Mobile Number"
                            variant="outlined"
                            size="small"
                            error={validityObj.isMobileNumberInvalid}
                            helperText={validityObj.mobileNumberHelper}
                            onChange={onMobileChange} />
                    </div>)}
                    <div className="container_details_footer">
                        <button className="button_warn" onClick={onSubmit}>{isLogin? "Login" : "Signup"}</button>
                    </div>
                    {isLogin && (<div className="container_seperator">
                      <div className="container_seperator_line"></div>
                      <p>OR</p>
                      <div className="container_seperator_line"></div>
                    </div>)}
                    {isLogin && (<div className="container_other">
                      <button className="container_other_facebook">Facebook</button>
                      <button className="container_other_google">Google</button>
                    </div>)}
                </div>
            </div>
        </div>

    )
}



export default Signup
