import React, { useState, useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [moveImg,setMoveImg] = useState(false);
    const [name, setName] = useState('')
    const ref = useRef();
    const navigate = useNavigate();

    const onChangeName = (e) =>{
        e.preventDefault();
        setName(e.target.value);
    }

    const mainImg = "https://firebasestorage.googleapis.com/v0/b/ocean-of-sun.appspot.com/o/login-img%2F000026020033.jpg?alt=media&token=3117d396-f6c6-4972-a3b3-71839f63cc89"

    useEffect(()=>{
        if(window.localStorage.getItem('username') !== null){
            navigate('/main')
        } else {
        setMoveImg(true)
        ref.current.focus();
    }},[])

    const LoginDo = () =>{
        if(name === ''){
            alert('이름을 입력해주세요.')
        } else{
            window.localStorage.setItem('username', name)
            navigate('/main');
        }
    }
    

  return (
    <div className='login-container' >
        <img src={mainImg} alt="" className={(moveImg ? 'go' : "login-backimg")}/>
        <div className='login-form-container'>
            <p>이름을 입력해주세요.</p>
            <input type="text" name='name' value={name} ref={ref} onChange={onChangeName} />
            <div className='login-btn' onClick={LoginDo}>용산동 입장 {'>'}</div>
        </div>
    </div>
  )
}

export default Login