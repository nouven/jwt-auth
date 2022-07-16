import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import request from '../api'
import Input from '../Input'
import Button from '../Button'
import style from '../Auth'
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    if (username && password && email) {
      const user = {
        username,
        password,
        email
      }
      const res = request.register(user);
      res.then(res => {
        navigate("/login");
      })
        .catch(err => setErrorMsg(err))
    } else {
      setErrorMsg("fields cannot empty!")
    }
  }
  return (
    <div className={style.container}>
      <div className={style.label}>REGISTER</div>
      <Input inputName="Username" valueInput={username} setValueInput={setUsername} typeInput="text" />
      <Input inputName="Email" valueInput={email} setValueInput={setEmail} typeInput="text" />
      <Input inputName="Password" valueInput={password} setValueInput={setPassword} typeInput="password" />
      <div className="flex gap-4">
        <Link to="/login" >
          <Button buttonName="Login" rotate="hover:rotate-12" />
        </Link>
        <Button buttonName="Sign up" rotate="hover:-rotate-12" handleClick={handleClick} />
      </div>
      <div className="pl-2 text-red-500 text-xl">###{errorMsg}</div>
    </div>

  )
}
export default Register;
