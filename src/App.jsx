import { Header } from "./component/Header"
import './global.css'
import { Post } from "./component/Post"
import styles from "./App.module.css"
import { Sidebar } from "./component/Sidebar"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      <main>
        < Post />
        < Post />
        < Post />
        < Post />
      </main>
    </div>
    </div>
    
  )
}

export default App