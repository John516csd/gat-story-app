import { animated, useSpring } from '@react-spring/web';
import React from 'react'

interface IProp {
    number: number,
    fixedNum?: number,
    numberStyle?: any
}

const GrowNumber: React.FC<IProp> = ({ number, fixedNum = 0, numberStyle = {} }) => {
    const { num } = useSpring({
        from: {
            num: 0,
        },
        num: number,
        delay: 500,
        // config: config.molasses
    })

    return <>
        <animated.div style={numberStyle}>
            {num.to(n => n.toFixed(fixedNum))}
        </animated.div>
    </>
}

export default GrowNumber