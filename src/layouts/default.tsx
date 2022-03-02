// default

import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { LStack, LCenter, AppHeader } from '@/components'
import { primary } from '@/utils/colors'

// ----------------------------------------
// Types
// ----------------------------------------

export type DefaultLayoutProps = {
  /** 子要素 */
  children?: ReactNode
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div css={rootStyle}>
      <LCenter max="630px" gutters="24px">
        <LStack>
          <AppHeader />
          <div>{props.children}</div>
        </LStack>
      </LCenter>
    </div>
  )
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = css`
  min-height: 100vh;
  background-color: ${primary[50]};
`
