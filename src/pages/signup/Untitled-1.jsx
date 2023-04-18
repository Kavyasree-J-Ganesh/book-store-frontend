<div className="container_signup">
            <div className="container_details">
                <div className="container_details_image">
                    <img src="/google_PNG102344.png" />
                </div>
                <h1 className="container_details_heading">
                    Create your Google Account
                </h1>
                <div className="container_details_field container_field_split2">
                    <TextField
                        id="outlined-basic"
                        label="First name"
                        variant="outlined"
                        size="small"
                        error={validityObj.isFirstNameInvalid}
                        helperText={validityObj.firstNameHelper}
                        onChange={onfirstnameChange} />

                    <TextField
                        id="outlined-basic"
                        label="Last name"
                        variant="outlined"
                        size="small"
                        error={validityObj.isLastNameInvalid}
                        helperText={validityObj.firstNameHelper}
                        onChange={onlastnameChange} />
                </div>
                <div className="container_details_field">
                    <TextField
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        size="small"
                        error={validityObj.isEmailInvalid}
                        helperText={validityObj.emailHelper}
                        onChange={onEmailChange}
                    />
                    <p className="container_details_field_hint">You can use letters, numbers and full stops</p>
                </div>
                <div className="container_details_link">
                    <a href="/">Use my current email address instead</a>
                </div>
                <div className="container_details_field container_field_split2">
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        size="small"
                        error={validityObj.isPasswordInvalid}
                        helperText={validityObj.passwordHelper}
                        onChange={onPasswordChange} />

                    <TextField
                        id="outlined-basic"
                        label="Confirm"
                        variant="outlined"
                        size="small"
                        error={validityObj.isConfirmPasswordInvalid}
                        helperText={validityObj.confirmPasswordHelper}


                        onChange={onconfirmpasswordChange} />
                    <p className="container_details_field_hint">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                </div>
                <div className="container_details_footer">
                    <a onClick= {goToLogin} className="button_primary">Sign in instead</a>
                    <button className="button_info" onClick={onSubmit}>Next</button>
                </div>
            </div>
            <div className="container_logo">
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" height="244" width="244" alt="Google" />
                <p>One account. All of Google working for you.</p>
            </div>

        </div>