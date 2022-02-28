// App

import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/default'
import { Page as IndexPage } from '@/pages/index'
import { Page as NotFoundPage } from '@/pages/404'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultLayout>
  )
}
