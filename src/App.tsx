// App

import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '@/layouts/default'
import { Page as IndexPage } from '@/pages'
import { Page as UsersPage } from '@/pages/users'
import { Page as UserPage } from '@/pages/users/[id]'
import { Page as NotFoundPage } from '@/pages/404'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultLayout>
  )
}
