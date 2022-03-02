// AppHeader

import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { LCluster } from '@/components'
import { gray } from '@/utils/colors'
import { rem } from '@/utils/sizes'

// ----------------------------------------
// JSX
// ----------------------------------------

export const AppHeader = () => {
  return (
    <header css={rootStyle()}>
      <LCluster align="center" justify="space-between" space="24px">
        <Link to="/" css={titleStyle()}>
          offkai
        </Link>
        <div></div>
      </LCluster>
    </header>
  )
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = () => {
  return css`
    padding: 8px 0;
  `
}

const titleStyle = () => {
  const fontSize = rem(32)

  return css`
    font-family: 'Reggae One', cursive;
    font-size: ${fontSize};
    color: ${gray[800]};
    text-decoration: none;
    transition: color 0.1s;

    &:hover {
      color: ${gray[600]};
    }
  `
}
