import logo from './assets/hiologo.svg'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
const App = () => {
  return (
    // <div className='font-bold flex justify-center flex-col items-center mt-5'>
    //   <img className='w-[150px]' src={logo}></img>
    //   <div>
    //     {/* <Section1 /> */}
    //     <Section1 />
    //   </div>

    // </div>
    <div>

      <Section2 />
      <Section3 />
    </div>

  )
}

export default App