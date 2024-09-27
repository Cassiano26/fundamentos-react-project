import { Header } from "./component/Header"
import './global.css'
import { Post } from "./component/Post"
import styles from "./App.module.css"
import { Sidebar } from "./component/Sidebar"

const posts = [
  {
    id: 1,
    Author: {
      avatarUrl: 'https://github.com/Cassiano26.png',
      name: 'Cassiano Candido da Silva',
      role: 'CTO @ Rocktseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2022-05-03 20:20:00')
  },
  {
    id: 1,
    Author: {
      avatarUrl: 'https://github.com/alsdede.png',
      name: 'André Silveira',
      role: 'Senior Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'nskjnfkjsnfjsndkfjnskjfnksnfkjsnfkjdsnfkjsnfkjnskjfnskdjfnsjnfkjsnfkjsnfkjsnfkjnsdkjfnrCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2022-05-03 20:20:00')
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.Author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </div>
    
  )
}

export default App