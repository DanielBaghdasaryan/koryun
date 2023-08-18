import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Page } from './Pages'

const App = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/բոլորը" element={<Home />} />
            <Route path="/:region" element={<Page />} />
        </Routes>
    )
}

export default App
