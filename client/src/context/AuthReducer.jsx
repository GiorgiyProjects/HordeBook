const AuthReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "LOGIN_START":
            console.log("starting login");
            return {
                user: null,
                isFetching: false,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default AuthReducer;