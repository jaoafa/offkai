// default

import { ReactNode } from 'react'

// ----------------------------------------
// Types
// ----------------------------------------

export type DefaultLayoutProps = {
  children?: ReactNode
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return <>{props.children}</>
}
