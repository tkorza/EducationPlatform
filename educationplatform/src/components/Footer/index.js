import style from './style.module.css'
function Footer() {
    return (
        <div className ={style.wrapper}>
        <footer className = {style.footer}>
            <div className ={style.wrapper1}>
                <div>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>
            <div className ={style.wrapper2}>
                <div className ={style.wrapperItem}>
                    <div className = {style.item1}></div>
                    <div className = {style.item2}></div>
                    <div className = {style.item3}></div>
                </div>
                <div>
                    <p>©2021 Hschool. Project for <span>Hschool</span>.</p>
                </div>
            </div>
        </footer>
        </div>
    )
}
export default Footer