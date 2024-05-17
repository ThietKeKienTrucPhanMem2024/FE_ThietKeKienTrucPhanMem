import { Route, Routes } from 'react-router-dom'

import { LoginScores, RegisterSource } from '../pages'

function Stack() {
  return (
    <Routes>
      <Route path="/" element={<LoginScores />} />
      <Route path="/LoginScores" element={<LoginScores />} />
      <Route path="/RegisterSource" element={<RegisterSource />} />
    </Routes>
  )
}

export default Stack
