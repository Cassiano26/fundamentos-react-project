import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'post muito bacana, Hein?'
    ])
    const [newCommentText, setNewCommentText] = useState([''])
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
    function handleCreateNewComment() {
        event.preventDefault()
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        });
        setComments(commentWithoutDeletedOne);
    }
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }
    const isNewCommentEmpty = newCommentText.length == 0;
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
                                return <p key={line.content}>{line.content}</p>;
                            } else if(line.type == 'link') {
                                return <p key={line.content}><a href="#">{line.content}</a></p>
                            }
                        })
                    }
                </div>
                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea required onInvalid={handleNewCommentInvalid} value={newCommentText} onChange={handleNewCommentChange} name='comment' placeholder='deixe seu comentário'></textarea>
                    <footer>
                        <button disabled={isNewCommentEmpty} type='submit' >Publicar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return < Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })}
                </div>
            </article>
    )
}