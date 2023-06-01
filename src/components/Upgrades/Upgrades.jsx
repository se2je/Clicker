import s from "./Upgrades.module.scss";
import {workers} from './UpgradesData/upgradesWorkersData.js'
import Worker from "./Worker.jsx";

const Upgrades = ({addClicks, clickUpgradeCost, buyWorker}) => {

    return (
        <div className={s.upgrades}>

            <div className={s.upgradeClickWrapper}>
                <button className={s.upgradeClick} onClick={addClicks}>Улучшить клик</button>
                <p>Стоимость улучшения: {clickUpgradeCost}$</p>
            </div>

            <div className={s.upgradeWorkers}>
                <h2>Нанять пездюков</h2>
                <div className={s.workersWrapper}>
                    {workers.map((worker) => {
                        return <button className={s.workerButton} ><Worker key={worker.id} {...worker}/></button>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Upgrades