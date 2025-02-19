import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css' 
import Home from './pages/home/Home.jsx'
import Quiz from './pages/quiz/Quiz.jsx'
import Notfound from './pages/not found/Notfound.jsx'
import Heart from './heart/Heart.jsx'
import HighBloodPreasure from './heart/high-blood-preasure/HighBloodPreasure.jsx'
import LowBloodpreasure from './heart/low-blood-preasure/LowBloodpreasure.jsx'
import Layout from './layout/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home />} />
        <Route path="quiz" element={<Quiz />}/>
        <Route path="*" element={<Notfound />} />
        <Route path="corazon" element={<Heart />} >
          <Route path="presion-alta" element={<HighBloodPreasure />} />
          <Route path="presion-baja" element={<LowBloodpreasure />} />
        </Route>
      </Routes>
      </Layout>
  </BrowserRouter>
)
