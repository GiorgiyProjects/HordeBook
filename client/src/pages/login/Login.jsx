import "./login.css"
import { useRef } from "react";
import {loginCall} from "../../apiCalls"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();

    const {isFetching, dispatch} = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(dispatch);

        loginCall({
            email : email.current.value, 
            password: password.current.value
        }, dispatch);
        console.log("isFetching", isFetching);
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
                        <input placeholder="Email" type = "email" required className="loginInput"  ref={email}/>
                        <input placeholder="Password" type="password" required minLength = '6' className="loginInput" ref={password}/>
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Log In"
                            )}
                        </button>
                        <span className="loginForgot"> Forgot password </span>
                        <button className="loginRegisterButton">Create </button>
                    </form>
                </div>
            </div>
        </div>
    )
}