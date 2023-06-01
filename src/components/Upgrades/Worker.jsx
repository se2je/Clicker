import s from './Upgrades.module.scss'

const Worker = (worker, {buyWorker}) => {

    const {img, name, description, money, cost, id} = worker
    return (
            <div className={s.worker}>
                <img src={`${img}.jpg`} alt=""/>
                <p>Нанять {name}</p>
                <p>{cost}$</p>
            </div>
    )
}
export default Worker