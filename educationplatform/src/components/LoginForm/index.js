import { Link } from 'react-router-dom'
import style from './style.module.css'

function LoginForm() {
    return (
        <div className ={style.wrapper}>
            <section className={style.loginForm}>
                <div className={style.leftPart}>
                    <h2>Login</h2>
                    <input placeholder={'Placeholder text'}></input>
                    <input placeholder={'Placeholder text'}></input>
                    <button><Link to = {'/courses'}>Login</Link></button>
                </div>
                <div className={style.item}></div>

            </section>
        </div>
    )
}
export default LoginForm