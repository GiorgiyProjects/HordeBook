import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        console.log(userCredentials);
        const res = await axios.post(process.env.REACT_APP_SERVER_HOST + "/auth/login", userCredentials);
        dispatch(
            {
                type: "LOGIN_SUCCESS",
                payload: res.data
            });
    } catch (err) {
        dispatch(
            {
                type: "LOGIN_FAILURE",
                payload: err
            });
    }
}