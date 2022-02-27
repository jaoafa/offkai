// App

import { css } from '@emotion/react'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return <div css={rootStyle}></div>
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = css`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`
