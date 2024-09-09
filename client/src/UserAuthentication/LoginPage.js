import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        console.log(username);
        console.log(password);
    }, [username, password])
return (
    <div className='flex flex-col border-2 rounded-md bg-slate-600 opacity-70 h-fit w-fit align-center'>
        <div className='flex flex-col self-center p-4 gap-2 items-center'>
            <h1 className='text-4xl'>Login</h1>
            <div>
                <div className='text-xl text-semibold'>UserName</div>
                <input className='p-1 rounded-md outline-0' type = "text" placeholder='UserName' onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <div className='text-xl text-semibold'>Password</div>
                <input className='p-1 rounded-md outline-0' type = "text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <Button type="submit" data="Login"/>
            </div>   
            <div>
                <div className='text-blue-300 hover:text-blue-500'><Link to="/signup">Dont have an account?</Link></div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage