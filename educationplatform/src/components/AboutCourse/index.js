import style from './style.module.css'

function AboutCourse() {
    return (
        <div className={style.wrapper}>
            <div className={style.course}>
                <div className={style.leftPart}>
                    <div className={style.subWrapper}>
                        <div className={style.image}></div>
                        <div className={style.textPart}>
                            <h2>JavaScript</h2>
                            <p>JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>
                        </div>
                    </div>
                    <button>Go to course</button>
                </div>
                <div className={style.rightPart}>
                    <h2>15 lessons</h2>
                    <div className={style.wrapperP}>
                        <p>1. Test</p>
                        <p>1. Test</p>
                        <p>1. Test</p>
                        <p>1. Test</p>
                        <p>1. Test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutCourse