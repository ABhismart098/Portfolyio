import axios from "axios"

export const getUser = () =>async(dispatch) =>{
    try{
        dispatch({
            type: "GET_USER_REQUEST",
        })
        const {data} = await axios.get("api/v1/user")
        console.log(data)

        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user,
        })

    }catch(error) {

        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message
        })

    }
}



export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: "LOGIN_REQUEST" });
  
      const { data } = await axios.post(
        `/api/v1/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // needed if backend sets cookies
        }
      );
  
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      console.error("Login error:", error);
  
      dispatch({
        type: "LOGIN_FAILURE",
        payload:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      });
    }
  };


export const logout = () =>async(dispatch) =>{
    try{
        dispatch({
            type: "LOGOUT_REQUEST",
        })
        const {data} = await axios.get("/api/v1/logout")

        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message,
        })

    }catch(error) {

        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response.data.message
        })

    }
}

export const loaduser = () =>async(dispatch) =>{
    try{
        dispatch({
            type: "LOAD_USER_REQUEST",
        })
        const {data} = await axios.get("/api/v1/me")

        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: data.user,
        })

    }catch(error) {

        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response.data.message
        })

    }
}


export const updateUser = (email, password,name, skills, about) =>async(dispatch) =>{
    try{
        dispatch({
            type: "UPDATE_USER_REQUEST",
        })
        const {data} = await axios.put("api/v1/admin/update",{
            email,
            password,
            name,
            skills,
            about
        },{
            headers: {
                "Content-Type": "application/json",
            }
        })

        dispatch({
            type: "UPDATE_USER_SUCCESS",
            payload: data.message,
        })

    }catch(error) {

        dispatch({
            type: "UPDATE_USER_FAILURE",
            payload: error.response.data.message
        })

    }
}
