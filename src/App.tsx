// App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Page as IndexPage } from '@/pages/index'
import { Page as NotFoundPage } from '@/pages/404'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
