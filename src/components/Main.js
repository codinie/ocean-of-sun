import React , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import List from './List';

const Main = () => {
    const navigate = useNavigate();
    const [list , setList] = useState([])

    const goUploadPage = ()=>{
        navigate('/upload')
    }

    const goMyPage = ()=>{
        navigate('/mypage')
    }

    useEffect(()=>{
        setList(data.list)
    },[])
  return (
    <div className='main-container'>
        <div className='main-topbar'>
            <div className='mypage-btn' onClick={goMyPage}>
                <img src="/img/account.png" alt="" />
            </div>
            <h2>Ocean Of Sun</h2>
            <div className='uploadpage-btn' onClick={goUploadPage}>
                <img src="/img/plus.png" alt="" />
            </div>
        </div>

        <div className='list-container'>
            <h4>어서오세요~ 용산동 갤러리 입니다.</h4>
            {
                list.slice(0).reverse().map((content, i)=>{
                    return(
                        <List content={content} key={i}></List>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Main