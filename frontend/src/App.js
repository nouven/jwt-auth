import { Routes, Route } from 'react-router-dom'
import { Login, Register } from './components/Auth'
function App() {
  return (
    <div className="h-screen w-screen bg-darkBackground bg-no-repeat bg-cover bg-center relative
    " id="vanta">
      <div className="m-auto h-full 
      bg-transparent overflow-hidden 
      flex flex-col
      w-full
      sm:w-[30rem]
      " >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
