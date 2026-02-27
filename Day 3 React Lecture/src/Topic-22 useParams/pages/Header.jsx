import {NavLink} from 'react-router-dom';
import styles from "./Header.module.css"

const Header = () => {

    const handleStyle = ({isActive})=>{
        isActive ?{textDecoration :"2px solid underline crimson", textUnderlineOffset :"10px",
            color :"crimson"
        }:{textDecoration:"none"}
    }


  return (
    <header>
    <div className={styles["center-container"]}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.navbar}>
            <NavLink style={handleStyle} to="">Home</NavLink>
            <NavLink style={handleStyle} to="about">About</NavLink>
            <NavLink style={handleStyle} to="career">Career</NavLink>
            <NavLink style={handleStyle} to="services">Services</NavLink>
        </nav>
      
    </div>
    </header>
  )
}

export default Header
