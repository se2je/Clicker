import s from "./GameStats.module.scss";

const GameStats = ({countsPerClick, currentAuto, logoClick}) =>{
    return(
        <div className={s.gameStats}>
            <img onClick={logoClick} className={s.logo} src="/logo.svg" alt=""/>
            <h1>Farm simulator</h1>
            <p className={s.countsPerClick}>Один клик добавляет: +{countsPerClick}$</p>
            <p className={s.autoclicksPerSecond}>Бабок в секунду: {currentAuto}$</p>
        </div>
    )
}

export default GameStats