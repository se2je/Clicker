import s from './GameCanvas.module.scss'
import {useRef, useEffect, useState, createContext} from "react";
import GameField from "./GameField/GameField.jsx";
import GameStats from "./GameStats/GameStats.jsx";
import Upgrades from "./Upgrades/Upgrades.jsx";
export const ClickerContext = createContext('ХУЙ');
const GameCanvas = () => {


    const error = () => {
        errorSound()
        alert('Не хватает бабок!!!')
    }

    const [clickCounter, setClickCounter] = useState(0)
    const [countsPerClick, setCountsPerClick] = useState(1)
    const [clickUpgradeCost, setClickUpgradeCost] = useState(25)
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
    const buyWorker = (money, cost) => {
        if (clickCounter >= cost) {
            setCurrentAuto(prev => prev + money)
            setClickCounter(prev => prev - cost)
            upgradeSound();
        } else {
            error()
        }
    }

    const addCount = () => {
        setClickCounter(clickCounter + countsPerClick)
    }
    const addClicks = () => {
        if (clickCounter >= clickUpgradeCost) {
            setCountsPerClick(countsPerClick + 1)
            setClickCounter(clickCounter - clickUpgradeCost)
            setClickUpgradeCost(Math.floor(clickUpgradeCost * 1.25))
            upgradeSound()
        } else {
            error()
        }
    }
    const resetCount = () => {
        if (confirm('Вы уверены? Все бабки будут проебаны')) {
            setClickCounter(-200000)
            setCountsPerClick(1)
            setClickUpgradeCost(50)
            setCurrentAuto(0)
        }
    }
    // Sounds
    const errorSound = () => {
        let audio = new Audio()
        audio.src = './erro.mp3'
        audio.autoplay = true
    }
    const upgradeSound = () => {
        let audio = new Audio()
        audio.src = './buy.mp3'
        audio.autoplay = true
    }
    const coinsSound = () => {
        let audio = new Audio()
        audio.src = './click.wav'
        audio.autoplay = true
    }
    const logoClick = () => {
        setClickCounter(prev => prev + 1000)
        coinsSound()
    }

    return (
            <div className={s.wrapper}>
                <GameStats logoClick={logoClick} currentAuto={currentAuto} countsPerClick={countsPerClick}/>
                <GameField addCount={addCount} clickCounter={clickCounter}/>
        <ClickerContext.Provider value={clickCounter}>
                <Upgrades buyWorker={buyWorker} addClicks={addClicks}
                          clickUpgradeCost={clickUpgradeCost}/>
        </ClickerContext.Provider>
                {clickCounter > 0 ?
                    <button className={s.resetCount} onClick={resetCount}>Уволиться нахуй</button> : null}
            </div>
    )
}

export default GameCanvas