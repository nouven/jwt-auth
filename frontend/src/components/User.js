import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import request from './api';

function User() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/login");
    }
    let res = request.getAllUser(token);
    res.then(res => {
      setUsers(res.data);
    })
  }, []);

  const handleClickDetailBtn = (elmt) => {
    setUser(elmt);
    setShowDetail(true);
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="h-full bg-transparent overflow-y-auto scrollbar-medium pt-32 grap-2 flex flex-col gap-2 relative">
      <button onClick={handleLogout} className=" w-fit absolute right-2 top-8 rounded-xl p-2 text-red-500 text-xl border border-red-500 cursor-pointer hover:border hover:border-cyan-500 hover:text-cyan-500">log out</button>
      {showDetail && <div className="absolute bg-black bg-opacity-75 top-24 right-0 left-0 rounded-xl pt-28">
        <div onClick={() => setShowDetail(false)} className="bg-red-500 rounded-full  p-[10px]  border border-cyan-500 w-fit absolute top-8 right-8"></div>

        <div className="flex-auto flex justify-center items-center border border-cyan-500 rounded-xl text-xl
    text-gray-100 mb-8 py-8 mx-4
    hover:border hover:border-red-500
    transition-all
    ">id: {user._id}</div>
        <div className="flex-auto flex justify-center items-center border border-cyan-500 rounded-xl text-xl
    text-gray-100 mb-8 py-8 mx-4
    hover:border hover:border-red-500
    transition-all
    ">username: {user.username}</div>
        <div className="flex-auto flex justify-center items-center border border-cyan-500 rounded-xl text-xl
    text-gray-100 mb-8 py-8 mx-4
    hover:border hover:border-red-500
    transition-all
    ">email: {user.email}</div>
        <div className="flex-auto flex justify-center items-center border border-cyan-500 rounded-xl text-xl
    text-gray-100 mb-8 py-8 mx-4
    hover:border hover:border-red-500
    transition-all
    ">isAdmin: {user.isAdmin.toString()}</div>
      </div>}

      {users && users.map(elmt =>
        <div key={elmt.id} className="bg-transparent flex justify-between items-center shadow-lg shadow-cyan-500
    hover:shadow-lg hover:shadow-red-500 mb-8
    ">
          <div className="flex-auto flex justify-center items-center h-full border border-cyan-500 rounded-xl text-2xl
    text-gray-100 font-bold
    hover:border hover:border-red-500
    transition-all
    ">{elmt.username}</div>
          <button onClick={() => { handleClickDetailBtn(elmt) }} className="px-8 py-4 text-lg text-gray-100 border border-cyan-500 rounded-xl ml-2
    hover:border hover:border-red-500 font-bold
    hover:scale-75 
    transition-all
    ">Detail</button>
        </div>
      )}
    </div >
  )
}
export default User;
