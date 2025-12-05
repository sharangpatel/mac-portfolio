import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

//componets
import Navbar from '#components/Navbar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'

//windows
import Terminal from '#windows/Terminal';

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
    </main>
  )
}

export default App