import {useState, useEffect} from 'react';
import styles from "./Home.module.css";

import Card from '../components/Card';
import Shimmer from './Shimmer';
import {Link} from "react-router-dom";

const Home = () => {
    const [response, setResponse] = useState([]); // response = [], Array = (10)[ {}, {}, {}, {}, {}, {}]

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setResponse(data);
    }


  return (response.length === 0)?  <Shimmer/> : (
    <div className={styles.home}>
       <div className={styles.centerContainer}>
            <h2 className={styles.title}>Shop All</h2>
            <div className={styles.cardContainer}>
                {
                    response.map(element => 
                        <Link 
                           key={element.id} 
                           to={`user/${element.id}`} 
                        >
                            <Card  {...styles} {...element}/>
                        </Link>
                    )
                }
                
            </div>
       </div>
    </div>
  )
}

export default Home;