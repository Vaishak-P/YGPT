import React from 'react'
import '../../styles/_chat.scss'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { useContext } from 'react'
// import '../../../public/favicon.png';
const Chat = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  return (
    <div className='main'>
        <div className="main-container">

            {!showResult ?
                <>
                    <div className="greet">
                    <p><span>Hello Dude,</span></p>

                    <p>Lets have a chat ..</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest some beautiful places to see in malappuram</p>
                        <i class="fa-regular fa-compass"></i>
                    </div>
                    <div className="card">
                        <p>How to prepare thalasseri biriyani easily</p>
                        <i class="fa-solid fa-utensils"></i>
                    </div>
                    <div className="card">
                        <p>Suggest tips to improve muscle recovery</p>
                        <i class="fa-regular fa-lightbulb"></i>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <i class="fa-solid fa-code"></i>
                    </div>
                </div>
                </>
                :
                <div className='result'>
                    <div className="result-title">
                        <i class="fa-solid fa-user"></i>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                        {/* <img src={assets.gemini_icon} alt="" /> */}
                        {loading ?
                            <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
            }
            

            <div className="main-bottom">
                <div className="search-box">
                    <input 
                    onChange={(e)=>setInput(e.target.value)} 
                    value={input}
                    //event should be passed to determine which key is that
                    onKeyDown={(e)=>{
                        if (e.key === 'Enter'){ //NOT: 'enter'
                            onSent();
                        }
                    }}
                    type="text" 
                    placeholder="Enter a prompt" />
                    <div>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
            </div>
            <p className="bottom-info">
                Disclaimer: The information provided may not always be accurate. Verify independently.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Chat