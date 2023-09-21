import React, { Suspense, lazy, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalState } from './context/context'

const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))


const App = () => {

    const { state } = useContext(GlobalState)

  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={state.user ? <Dashboard />: <Login />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}
export default App