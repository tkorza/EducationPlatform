import style from './style.module.css'
import { Link } from 'react-router-dom'

function RegistrForm() {
    return (
        <div className ={style.wrapper}>
            <section className={style.sign}>
                <div className={style.leftPart}>
                    <h2>Sign Up</h2>
                    <input placeholder={'Placeholder text'}></input>
                    <input placeholder={'Placeholder text'}></input>
                    <input placeholder={'Placeholder text'}></input>
                    <input placeholder={'Placeholder text'}></input>
                    <button><Link to={'/courses'}>Sign Up</Link></button>
                </div>
                <div className={style.item}></div>
            </section>
        </div>
    )
}

export default RegistrForm