import styles from '../../styles/common/dropdown.module.css'
import LanguageButton from './LanguageButton.jsx';

function Dropdown() {
    return (
        <>
        <div className={styles.btnContainer}>
            <button>
                {<span>
                    language
                </span>}
            <LanguageButton className={styles.icon} />
            
            </button>
        </div>
            {/* <div className={styles.dropdown} id="dropdown">
                <a>spanish</a>
                <a>english</a>
            </div> */}
        </>
    )
    
}

export default Dropdown;