import { Route, Routes } from 'react-router-dom'

import { LoginScores, RegisterSource, LoginToLookSchedule } from '../pages'

function Stack() {
  return (
    <Routes>
      <Route path="/" element={<LoginScores />} />
      <Route path="/LoginScores" element={<LoginScores />} />
      <Route path="/RegisterSource" element={<RegisterSource />} />
      <Route path="/LoginToLookSchedule" element={<LoginToLookSchedule />} />
    </Routes>
  )
}

export default Stack
