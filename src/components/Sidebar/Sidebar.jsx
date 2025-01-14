import React,{useState,useContext} from 'react'
import '../../styles/_sidebar.scss'
import {assets} from '../../assets/assets'
import {Context} from '../../context/Context'
const Sidebar = () => {
    const [extended,setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return (
    <div className="sidebar">
        <div className="top">
            <i onClick={()=>setExtended(prev=>!prev)} class="fa-solid fa-bars"></i>
            <div onClick={()=>newChat()} className="new-chat">
                <i class="fa-solid fa-plus"></i>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                            
                        
                        <li key = {index}>
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                <i class="fa-regular fa-message"></i>
                                {item.length>18?(
                                    <p>{item.slice(0,18)}...</p>
                                ):(
                                    <p>{item}</p>
                                )}
                            </div>
                        </li>
                            
                    )
                })}
            </div>
            :null}
        </div>
        <div className="bottom">
            <div className="bottom-item">
                <i class="fa-regular fa-circle-question"></i>
                <p className='disclaimer'>
                Disclaimer: The information provided may not always be accurate. Verify independently.
                </p>
                {extended?<p>Help</p>:null}
            </div>
            {/* <div className="bottom-item">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>   */}
            {/* <div className="bottom-item">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div> */}
        </div>
    </div>
  )
}

export default Sidebar