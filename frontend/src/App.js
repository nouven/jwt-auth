import { Routes, Route } from 'react-router-dom'
import { Login, Register } from './components/Auth'
import User from './components/User'
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
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<User />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
