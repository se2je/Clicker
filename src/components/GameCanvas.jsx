import s from './GameCanvas.module.scss'
import {useRef, useEffect, useState} from "react";
import GameField from "./GameField/GameField.jsx";
import GameStats from "./GameStats/GameStats.jsx";
import Upgrades from "./Upgrades/Upgrades.jsx";
import {workers} from "./Upgrades/UpgradesData/upgradesWorkersData.js";
import Worker from "./Upgrades/Worker.jsx";

const GameCanvas = () => {
    const error = () => {
        alert('Не хватает бабок!!!')
    }

    const [clickCounter, setClickCounter] = useState(0)
    const [countsPerClick, setCountsPerClick] = useState(1)
    const [clickUpgradeCost, setClickUpgradeCost] = useState(50)


    const [currentAuto, setCurrentAuto] = useState(0)


    // return при разрендер // useEffect при рендере
    useEffect(() => {
        const intervalId = setInterval(() => {
            setClickCounter(prev => prev + currentAuto)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [currentAuto])

    const addCount = () => {
        setClickCounter(clickCounter + countsPerClick)
    }
    const addClicks = () => {
        if (clickCounter >= clickUpgradeCost) {
            setCountsPerClick(countsPerClick + 1)
            setClickCounter(clickCounter - clickUpgradeCost)
            setClickUpgradeCost(Math.floor(clickUpgradeCost * 1.5))
        } else {
            error()
        }
    }
    const resetCount = () => {
        if (confirm('Вы уверены? Все бабки будут проебаны')) {
            setClickCounter(0)
            setCountsPerClick(1)
            setClickUpgradeCost(50)
        }
    }

    return (
        <div className={s.wrapper}>
            <GameStats countsPerClick={countsPerClick}/>
            <GameField addCount={addCount} clickCounter={clickCounter}/>
            <Upgrades   addClicks={addClicks} clickUpgradeCost={clickUpgradeCost}/>
            {clickCounter > 0 ? <button className={s.resetCount} onClick={resetCount}>Уволиться нахуй</button> : null}
        </div>
    )
}

export default GameCanvas