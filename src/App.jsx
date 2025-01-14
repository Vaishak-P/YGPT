import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat'
// require('dotenv').config();

const App = () => {
  return (
    <>
    <Sidebar></Sidebar>
    <Chat></Chat>
    </>
  )
}

export default App