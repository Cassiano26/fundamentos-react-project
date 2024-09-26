import styles from './Sidebar.module.css'
import ImageTop from '../assets/Rectangle4240.svg'
import { PencilLine } from 'phosphor-react'

export function Sidebar(props) {
    return (
        <aside className={styles.sidebar}>
            <img src={ImageTop} alt="" />
            <div className={styles.profile}>
                <img src="https://github.com/Cassiano26.png" />
                <strong>Cassiano Candido</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    );
}