import React from 'react'
import LoadingAnimation from './components/LoadingAnimation'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="main w-full min-h-screen font-HelveticaNowTextMedium">
      <LoadingAnimation />
      <Navbar />
    </div>
  )
}

export default App