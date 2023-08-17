import React from 'react'
import './forgotPassword.css'
export const ForgotPassword = () => {
    return (
        <div>
            <>
                <title>Forgot Password Form</title>
                <div className='container forgot__main'>

                <h1>Forgot your password?</h1>
                <hr />
                <h3 >Enter your email address to reset your password</h3>
                </div>
                <form action="index.html" className='forgot__form'  method="post">
                    <label htmlFor="mail">Email</label>
                    <br />
                    <input
                        type="email"
                        id="name"
                        name="name"
                        placeholder="Enter your email address"
                        required=""
                        onblur="validateName(name)"
                    />
                    <button type="submit" className='submit' >Submit</button>
                    <span id="nameError" style={{ display: "none" }}>
                        There was an error with your email
                    </span>
                </form>
            </>
        </div>
    )
}
