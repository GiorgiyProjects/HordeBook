import "./register.css"
import {useRef} from "react";
import {loginCall} from "../../apiCalls";
import {useNavigate} from "react-router";
import axios from "axios";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordRepeat = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordRepeat.current.value !== password.current.value) {
            console.log(password,passwordRepeat);
            passwordRepeat.current.setCustomValidity("Passwords do not match!");
        } else {
            console.log('Register');
            const userCred = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            };
            console.log('Register2');
            try {
                console.log("res");
                const res = await axios.post(process.env.REACT_APP_SERVER_HOST + "/auth/register", userCred);
                console.log(res);
                //const res = await axios.post(process.env.REACT_APP_SERVER_HOST + "/auth/login", userCredentials);
                console.log('Loggin');
                history("/login", { replace: true });
            } catch(e) {
                console.log("something is wrong with registration");
                console.log(e);
            }

        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> HordeBook </h3>
                    <span className="loginDesc">
                        Connect with orcs all around the World!
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username"  ref = {username} className="loginInput"/>
                        <input placeholder="Email"  ref = {email} type = "email" className="loginInput"/>
                        <input placeholder="Password" ref = {password} type = "password" minLength = '6'  className="loginInput"/>
                        <input placeholder="Password Again" ref = {passwordRepeat} type = "password" minLength = '6' className="loginInput"/>
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Log into account </button>
                    </form>
                </div>
            </div>
        </div>
    )
}