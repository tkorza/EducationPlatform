import style from './style.module.css'
function Progress() {
    return (
        <div className={style.wrapper}>
            <section className={style.Progress}>
                <div className={style.wrapperItem}></div>
                <div className={style.rightPart}>
                    <h2>Watch your progress every day</h2>
                    <p>Save statistics on your achievements and mistakes</p>
                    <button>Statistics →</button>
                </div>
            </section>
        </div>

    )
}

export default Progress