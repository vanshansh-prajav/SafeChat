import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Button from '../Button/Button';
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [match, setMatch] = useState(false);

    const Submit = () => {
        
    }
    useEffect(() => {
        console.log(username);
        console.log(password);
    }, [username, password])

    return (
        <div className='flex flex-col border-2 rounded-md bg-slate-600 opacity-70 h-fit w-fit p align-center'>
            <div className='flex flex-col self-center p-4 gap-2 items-center'>
                <h1 className='text-4xl'>Sign Up</h1>
                <div>
                    <div className='text-xl text-semibold'>UserName</div>
                    <input className='p-1 rounded-md outline-0' type="text" placeholder='UserName' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <div className='text-xl text-semibold'>Password</div>
                    <input className='p-1 rounded-md outline-0' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <div className='text-xl text-semibold'>Confirm Password</div>
                    <input className='p-1 rounded-md outline-0' type="password" placeholder='Password' onChange={(e) => {
                        let pass = e.target.value;
                        if (pass === password)
                            setMatch(true);
                        else setMatch(false);
                    }} />
                    {match && password !== "" && <div className='text-green-500'>✔️matches</div>}
                    {!match && password !== "" && <div className='text-red-500'>❌does not match</div>}
                </div>
                <div>
                    <Button type="submit" data="Sign Up" click={Submit}/>
                </div>
                <div>
                    <div className='text-blue-300 hover:text-blue-500' ><Link to="/">Already have an account?</Link></div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage