import { Link } from 'react-router-dom'
import Input from '../Input';
import Button from '../Button';
import style from '../Auth'
function Login() {
  return (
    <div className={style.container}>
      <label className={style.label}>LOGIN</label>
      <Input inputName="Username" />
      <Input inputName="Password" />
      <div className="flex gap-4">
        <Button buttonName="Login" rotate="hover:rotate-12" />
        <Link to="/register">
          <Button buttonName="Sign up" rotate="hover:-rotate-12" />
        </Link>
      </div>
    </div>
  )
}
export default Login;
