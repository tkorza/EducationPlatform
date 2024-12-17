import style from './style.module.css'
function Preview() {
    return (
        <div className={style.wrapper}>
            <section className={style.preview}>
                <div className={style.leftPreview}>
                    <h2>E-COURSE PLATFORM</h2>
                    <h1>Learning and
                        teaching online,
                        made easy.</h1>
                    <p>Any subject, in any language, on any device, for all ages!</p>
                    <button className={style.btn}>About platform</button>
                    <div className={style.item}></div>
                </div>

                <div className={style.rightPreview}>

                </div>
            </section>
        </div>
    )
}

export default Preview