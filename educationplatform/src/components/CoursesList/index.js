import style from './style.module.css'
import { Link } from 'react-router-dom'

function Courses() {
    return (
        <div className={style.wrapper}>
            <section className={style.coursesList}>
                <div className={style.logo}>
                    <div className={style.item}></div>
                    <h1>Courses</h1>
                </div>
                <div className={style.wrapperCourse}>

                    <Link to={'/aboutcourse'} >
                        <div className={style.jsItem}></div>
                        <div className={style.rightPart}>
                            <h2>JavaScript</h2>
                            <p>JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>
                        </div>
                    </Link>


                </div>
                <div className={style.wrapperCourse}>
                    <Link to={'/aboutcourse'} >
                        <div className={style.tsItem}></div>
                        <div className={style.rightPart}>
                            <h2>TypeScript</h2>
                            <p>TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules</p>
                        </div>
                    </Link>
                </div>
                <div className={style.wrapperCourse}>
                    <Link to={'/aboutcourse'} >
                        <div className={style.pyItem}></div><div className={style.rightPart}>
                            <h2>Python</h2>
                            <p>Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.</p>
                        </div>
                    </Link>
                </div>
                <div className={style.navigation}>
                    <div className={style.borderNav}>
                        <div className={style.leftArrow}></div>
                    </div>
                    <div className={style.borderNav}><p>1</p></div>
                    <div className={style.borderNav}><p>2</p></div>
                    <div className={style.borderNav}><p>3</p></div>
                    <div className={style.wrapperPoint}><span>...</span></div>
                    <div className={style.borderNav}><p>27</p></div>
                    <div className={style.borderNav}><p>28</p></div>
                    <div className={style.borderNav}><p>29</p></div>
                    <div className={style.borderNav}>
                        <div className={style.rightArrow}></div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Courses