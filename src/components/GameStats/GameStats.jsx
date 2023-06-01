import s from "./GameStats.module.scss";

const GameStats = ({countsPerClick}) =>{
    return(
        <div className={s.gameStats}>
            <img className={s.logo} src="/logo.svg" alt=""/>
            <h1>Farm simulator</h1>
            <p className={s.countsPerClick}>Один клик добавляет: +{countsPerClick}$</p>
            <p className={s.autoclicksPerSecond}>Автокликов в секунду: 0</p>
        </div>
    )
}

export default GameStats