import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        < Avatar hasBorder src="https://github.com/Cassiano26.png" />
                        <div className={styles.authorInfo}>
                            <strong>Cassiano Candido</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>
                    <time title='11 de maio as 8:13h' datetime="2022-05-11 08:13:30">Publicado a 1 hora</time>
                </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p><a href="">👉 jane.design/doctorcare</a></p>
                    <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
                </div>
                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea placeholder='deixe seu comentário'></textarea>
                    <footer>
                        <button>Publicar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </article>
    )
}