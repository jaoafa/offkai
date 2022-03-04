// user

import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { LCenter, LIcon, LStack } from '@/components'
import { gray } from '@/utils/colors'
import { rem } from '@/utils/sizes'

// ----------------------------------------
// JSX
// ----------------------------------------

export const Page = () => {
  const { userId } = useParams()
  return (
    <div css={rootStyle()}>
      <LStack space="16px">
        <LCenter andText intrinsic>
          <img
            src="https://gravatar.com/avatar/8fd43c0ce852b1dacd0ad04c458040b1?s=120"
            alt={userId}
            css={iconStyle()}
          />
        </LCenter>
        <LStack space="8px">
          <LCenter>
            <h1 css={titleStyle()}>ひらたけ</h1>
          </LCenter>
          <LCenter>
            <p css={placeStyle()}>
              <LIcon space="8px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" />
                </svg>
              </LIcon>
              Osaka, Japan
            </p>
          </LCenter>
        </LStack>
      </LStack>
    </div>
  )
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = () => {
  return css`
    color: ${gray[800]};
  `
}

const iconStyle = () => {
  return css`
    max-width: 120px;
    border-radius: 50%;
  `
}

const titleStyle = () => {
  const fontSize = rem(36)
  return css`
    font-family: 'Reggae One', cursive;
    font-size: ${fontSize};
  `
}

const placeStyle = () => {
  const fontSize = rem(14)
  return css`
    font-size: ${fontSize};
  `
}
