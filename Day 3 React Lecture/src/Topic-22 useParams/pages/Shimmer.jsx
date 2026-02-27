import React from 'react'
import styles from "./Shimmer.module.css"

const Shimmer = () => {
  return (
   <div className={styles.home}>
          <div className={styles.centerContainer}>
               <h2 className={styles.title}>Shop All</h2>
               <div className={styles.cardContainer}>
                     {Array(30).fill("").map((_,i) => <div key={i} className={styles.card}></div>)}            
            </div>
       </div>
    </div>
  )
}

export default Shimmer