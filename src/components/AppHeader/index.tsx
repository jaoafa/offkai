// AppHeader

import { siGithub } from 'simple-icons/icons'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { LCluster, LIcon } from '@/components'
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
        <LCluster align="center" space="16px">
          <a
            href="https://github.com/jaoafa/offkai"
            target="_blank"
            rel="noreferrer noopener"
            css={socialLinkStyle()}
          >
            <LIcon label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d={siGithub.path} />
              </svg>
            </LIcon>
          </a>
        </LCluster>
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
    color: ${gray[800]};
  `
}

const titleStyle = () => {
  const fontSize = rem(32)
  return css`
    font-family: 'Reggae One', cursive;
    font-size: ${fontSize};
    color: inherit;
    text-decoration: none;
    transition: color 0.1s;

    &:hover {
      color: ${gray[600]};
    }
  `
}

const socialLinkStyle = () => {
  const fontSize = rem(30)
  return css`
    font-size: ${fontSize};
    color: inherit;

    &:hover {
      color: ${gray[600]};
    }
  `
}
