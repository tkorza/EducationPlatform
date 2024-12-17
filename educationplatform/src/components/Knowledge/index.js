import style from './style.module.css'

function Knowledge() {
    return (
        <div className={style.wrapper}>

            <section className={style.Knowledge} >
                <div className={style.leftPart}>
                    <h2>Increase your knowledge</h2>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <button>Textbook →</button>
                </div>
                <div className={style.wrapperItem}></div>
            </section>
        </div>
    )
}
export default Knowledge