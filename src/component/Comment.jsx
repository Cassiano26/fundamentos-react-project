import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Cassiano26.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cassiano Candido</strong>
                            <time title='11 de maio as 8:13h' datetime="2022-05-11 08:13:30">Cerca de 1 hora atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            < Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        < ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}