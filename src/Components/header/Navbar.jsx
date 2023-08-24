
import styles  from '../../styles/header/navbar.module.css'
 
 function Navbar() {
    return (
      <>
    <nav className={styles.navbar}>
        <ul>
            <li>home</li>
            <li>about me</li>
            <li>portfolio</li>
            <li>blog</li>
            <li>Contact</li>
        </ul>
       <select name="" id="">
        <option value="">US</option>
        <option value="">ES</option>
       </select>
    </nav>
    </>  
    )
}

export default  Navbar;