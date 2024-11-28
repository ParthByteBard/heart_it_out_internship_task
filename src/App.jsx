import logo from './assets/hiologo.svg'
import Section1 from './components/Section1'
const App = () => {
  return (
    <div className='font-bold flex justify-center flex-col items-center mt-5'>
      <img className='w-[150px]' src={logo}></img>
      <div>
        <Section1 />
      </div>

    </div>
  )
}

export default App