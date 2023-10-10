import './App.css'
import Note  from './Component/Note'
import Navbar  from './Component/Navbar'
function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='canvas'>
          <Note />
        </section>
      </main>
     
    </>
  )
}

export default App
