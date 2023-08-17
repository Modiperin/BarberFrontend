import React from 'react'
import './button.css'

const Button = () => {
    return (
            <div className="button__toggle">
            <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" align='center'/>
                    MALE
                    <div class="toggle-switch"></div>
                    <span class="toggle-label"></span>
                    FEMALE
            </label>
            </div>
    )
}

export default Button