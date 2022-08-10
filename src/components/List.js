import React ,{ useState, useEffect } from 'react'

const List = ({content}) => {
    const [text, setText] = useState(false);
    const [more, setMore] = useState(true);
    const [moreText, setMoreText] = useState(false);
    useEffect(()=>{
        if(content.desc.length > 86){
            setText(true);
        }
    },[])
  return (
    <div className='list-box'>
        <div className='list-title'>
            <div className='list-title-userimg'>
                <img src={content.userimage} alt="" />
            </div>
            <h4>{content.username}</h4>
            <p>{content.date}</p>
        </div>
        <div className='list-img'>
            <img src={content.image} alt="" />
        </div>
        {text 
        ?<>
        <div className={!moreText ?"list-body" :"list-body-full"}>
                {content.desc}
        </div>
        <div className={more ?'more-btn' :'hidden'} onClick={()=>{
            setMore(false)
            setMoreText(true)
        }}>
           더보기    
        </div>
        </>
        :<div className='list-body-full'>
            {content.desc}
        </div>}
    </div>
  )
}

export default List