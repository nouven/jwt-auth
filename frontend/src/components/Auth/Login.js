import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../Input';
import Button from '../Button';
import request from '../api'
import style from '../Auth'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("hahaal");
  let navigate = useNavigate();
  const handleClick = () => {
    const res = request.login(username, password)
    res.then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      return navigate("/");
    })
      .catch(err => {
        return setMessage("username or password is incorrect!!")
      })
  }
  return (
    <div className={style.container}>
      <label className={style.label}>LOGIN</label>
      <Input inputName="Username" typeInput="text" valueInput={username} setValueInput={setUsername} />
      <Input inputName="Password" typeInput="password" valueInput={password} setValueInput={setPassword} />
      <div className="flex gap-4">
        <Button buttonName="Login" handleClick={handleClick} rotate="hover:rotate-12" />
        <Link to="/register">
          <Button buttonName="Sign up" rotate="hover:-rotate-12" />
        </Link>
      </div>
      <div className="text-red-500 p-4 font-xl text-lg">*{message}</div>
    </div>
  )
}
export default Login;
