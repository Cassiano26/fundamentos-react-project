import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({author, publishedAt, content}) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
    return (
        <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        < Avatar hasBorder src={author.avatarUrl} />
                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>
                    <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
                </header>
                <div className={styles.content}>
                    {/* <p>Fala galeraa 👋</p>
                        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                        <p><a href="">👉 jane.design/doctorcare</a></p>
                        <p><a href="">#novoprojeto #nlw #rocketseat</a></p> */
                        content.map(line => {
                            if (line.type == 'paragraph') {
                                return <p>{line.content}</p>;
                            } else if(line.type == 'link') {
                                return <p><a href="#">{line.content}</a></p>
                            }
                        })
                    }
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