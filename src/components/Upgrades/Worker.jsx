import s from './Upgrades.module.scss'
import {useContext, useEffect, useState} from "react";
import {ClickerContext} from '../GameCanvas.jsx'

const Worker = (worker) => {
    const context = useContext(ClickerContext);

    console.log(context)

    const [timesBought, setTimesBought] = useState(0)

    const buyWorker = () => {
        if (context >= cost) {
            setTimesBought(prevTimesBought => prevTimesBought + 1)
            console.log(timesBought)
        }
    }

    const {img, name, description, money, cost, id,} = worker
    return (
        <div onClick={() => {buyWorker()}} className={s.worker}>
            <img src={`${img}.jpg`} alt=""/>
            <p>Нанять {name}</p>
            <p>{cost}$</p>
            <p className={s.moneyIncome}>+{money}$</p>
            <p className={s.timesBought}>{timesBought}</p>
        </div>
    )
}
export default Worker