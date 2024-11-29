import logo from './assets/hiologo.svg'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'

const App = () => {
  return (

    <div>

      <div className='flex justify-center'>
        <img className='w-[150px]' src={logo}></img>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />

    </div>

  )
}
export default App