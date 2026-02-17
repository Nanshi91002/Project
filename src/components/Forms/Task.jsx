import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Task = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [password, setPassword] = useState("")

    const submitHandler = (data) => {
        alert("Form submitted successfully")
        console.log(data);
    }

    
    const checkPassword = (value) => {

        let hasUpper = false;
        let hasLower = false;
        let hasDigit = false;
        let hasSpecial = false;

        for (let i = 0; i < value.length; i++) {
            let ch = value[i];

            if (ch >= 'A' && ch <= 'Z') {
                hasUpper = true;
            }
            else if (ch >= 'a' && ch <= 'z') {
                hasLower = true;
            }
            else if (ch >= '0' && ch <= '9') {
                hasDigit = true;
            }
            else {
                hasSpecial = true;
            }
        }

        if (!hasUpper) return "Must contain 1 uppercase character";
        if (!hasLower) return "Must contain 1 lowercase character";
        if (!hasDigit) return "Must contain 1 digit";
        if (!hasSpecial) return "Must contain 1 special character";
        if (value.length < 8) return "Minimum 8 characters required";

        return true;
    };

    
    const checkCondition = (type) => {

        let hasUpper = false;
        let hasLower = false;
        let hasDigit = false;
        let hasSpecial = false;

        for (let i = 0; i < password.length; i++) {
            let ch = password[i];

            if (ch >= 'A' && ch <= 'Z') hasUpper = true;
            else if (ch >= 'a' && ch <= 'z') hasLower = true;
            else if (ch >= '0' && ch <= '9') hasDigit = true;
            else hasSpecial = true;
        }

        if (type === "upper") return hasUpper;
        if (type === "lower") return hasLower;
        if (type === "digit") return hasDigit;
        if (type === "special") return hasSpecial;
        if (type === "length") return password.length >= 8;
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Task</h1>

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>PASSWORD:</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required*",
                            validate: checkPassword
                        })}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div style={{ marginTop: "15px", textAlign: "left", display: "inline-block" }}>

                    <p style={{ color: checkCondition("upper") ? "green" : "black" }}>
                        • 1 Uppercase Character
                    </p>

                    <p style={{ color: checkCondition("lower") ? "green" : "black" }}>
                        • 1 Lowercase Character
                    </p>

                    <p style={{ color: checkCondition("digit") ? "green" : "black" }}>
                        • 1 Digit
                    </p>

                    <p style={{ color: checkCondition("special") ? "green" : "black" }}>
                        • 1 Special Character
                    </p>

                    <p style={{ color: checkCondition("length") ? "green" : "black" }}>
                        • Minimum 8 Characters
                    </p>

                </div>

                <div style={{ color: "red", marginTop: "10px" }}>
                    {errors.password?.message}
                </div>

                <div style={{ marginTop: "20px" }}>
                    <input type="submit" />
                </div>

            </form> 
        </div>
    )
}
