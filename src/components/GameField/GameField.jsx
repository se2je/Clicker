import s from './GameField.module.scss'
import {useSpring, animated} from "@react-spring/web";
import {useState} from "react";

const GameField = ({addCount, clickCounter}) => {

    const [bounceState, setBounceState] = useState(true)

    const {x} = useSpring({
        from: {x: 0},
        x: bounceState ? 1 : 0,
        config: {duration: 300},
    })

    return (
        <div className={s.gameField}>
            <animated.div className={s.moonWrapper} onClick={() => {
                addCount();
                setBounceState(!bounceState);
            }}
                          style={{
                              scale: x.to({
                                  range: [0, 0.5, 1],
                                  output: [1, 1.05, 1],
                              }),
                          }}>
                <img src={`${clickCounter > 10000 ? '/lvl3.jpg' : 
                    clickCounter > 5000 ?  '/lvl2.jpg' : '/lvl1.jpg'}`} alt=""/>
            </animated.div>
            <p className={s.timesClicked}>Заработано: {clickCounter}$
                {clickCounter < 0 ? <p>Читайте контракт)))</p> : null}
            </p>

        </div>
    )
}

export default GameField