import axios from 'axios'
//constantes
const url:string = `https://reqres.in/api/users`;

const dataInitial:object = {

  users: []

}
const GET_USERS_SUCESS = 'GET_USERS_SUCESS';

//reducer 

export default function userReducer(state = dataInitial, action:any){


  switch(action.type){
    
    case GET_USERS_SUCESS:
      return {...state, users:action.payload}
    default:
      return state

  }

}

// acciones 

export const getUsersAction = () =>  async (dispatch:any, getState:any) => {

  try{
    const response:any = await axios(url)
    dispatch({
      type: GET_USERS_SUCESS,
      payload: response.data,
    })
  }catch(error){
    console.log(error)
  }
}