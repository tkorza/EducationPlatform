import style from './style.module.css'

function ErrorFunc() {
    return (
        <div className={style.wrapper}>
            <section className={style.Error}>
                <div className={style.leftPart}>
                    <p className={style.errorText}>Error 404</p>
                    <h2>Hey Buddy</h2>
                    <p>We can’t seem to find the page you are looking for.</p>
                    <button>Go home</button>
                </div>
                <div className={style.imgWrapper} ></div>
            </section>
        </div>
    )
}

export default ErrorFunc
