import { Link } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'
import style from '../Auth'
function Register() {
  return (
    <div className={style.container}>
      <div className={style.label}>REGISTER</div>
      <Input inputName="Username" />
      <Input inputName="Email" />
      <Input inputName="Password" />
      <div className="flex gap-4">
        <Link to="/" >
          <Button buttonName="Login" rotate="hover:rotate-12" />
        </Link>
        <Button buttonName="Sign up" rotate="hover:-rotate-12" />
      </div>
    </div>

  )
}
export default Register;
