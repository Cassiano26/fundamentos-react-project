import { Header } from "./component/Header"
import './global.css'
import { Post } from "./Post"
import styles from "./App.module.css"
import { Sidebar } from "./component/Sidebar"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      <main>
        < Post 
          author="Tom cruise" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aspernatur eos optio eius repellat harum atque aliquid, ab unde voluptatum saepe eaque cum incidunt iste debitis adipisci iure quod minima!"
        />
      </main>
    </div>
    </div>
    
  )
}

export default App