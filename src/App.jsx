import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Authroutes from './Routes/Authroutes'
import Protectedroutes from './Routes/Protectedroutes'
import Apidata from './pages/Apidata'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route element={<Authroutes />}>
          <Route index element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Route>

        <Route element={<Protectedroutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/apiData/:id' element={<Apidata/>} />
        </Route>

      </Routes >

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition:Bounce
      />


      
    </>


    /*{ <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>}
    
   */
  )
}

export default App
