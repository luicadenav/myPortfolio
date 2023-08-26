import Dropdown from '../common/Dropdown.jsx';
import logo from '../../assets/buho-01.svg';
import styles from '../../styles/header/navbar.module.css'

 function Navbar() {
    return (
      <>
    <nav className={styles.navbar}>
        <div className={styles.navcontainer}>
            <img src={logo} alt="" />
            <ul>
                <li>home</li>
                <li>about me</li>
                <li>portfolio</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <Dropdown/>
        </div>
        
    </nav>
    </>  
    )
}

export default  Navbar;