import style from './style.module.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo} >Hschool</div>
                <div className={style.login} >
                    <button className={style.btn_login}><Link to={'/login'}>Login →</Link></button>
                    <button className={style.btn_sign}><Link to={'/reg'}>Sign Up</Link></button>
                </div>
            </div>  
        </header>
    )
}
export default Header