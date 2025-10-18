import React from 'react'
import styles from './PcOnly.module.css'
import pc from '../assets/pc.gif'

function PcOnly() {
    return (
        <div className={styles["main-box"]}>
            <div>
                <img src={pc} alt="" />
            </div>
            <div>
                <h1>Please access using PC/Desktop</h1>
            </div>
        </div>
    )
}

export default PcOnly