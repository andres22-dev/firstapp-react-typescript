
export const Login = () => {


  return(
    <div className="Login">
      <form className="Login__Form">
        <div>
          <label htmlFor="user" className="Form__label1">Usuario: </label>
          <input type="text" name="user"/>
        </div>
        <div>
          <label htmlFor="pass" className="Form__label2">Password : </label>
          <input type="password" name="pass"/>
        </div>
      </form>
    </div>
  )

}
