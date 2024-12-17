import { Link } from 'react-router-dom'
import style from './style.module.css'

function HeaderOut() {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <p>Hschool</p>
                <button><Link to={'/'}>Sign Out →</Link></button>
            </div>
        </header>
    )
}
export default HeaderOut