import style from './style.module.css'
function Learning() {
    return (
        <section className={style.Learning}>
            <div className={style.item}></div>
            <div className={style.rightPart}>
                <h2>Learn a language in a playful way</h2>
                <p>Make learning programming languages more fun with mini-games</p>
                <div className={style.wrapper}>
                    <button className ={style.btn1}>
                        <div className={style.wrapItem}></div>
                        <div>
                            <p>Sprint →</p>
                        </div>
                    </button>
                    <button className ={style.btn2}>
                        <div className={style.wrapItem}></div>
                        <div>
                            <p>Tasks →</p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Learning