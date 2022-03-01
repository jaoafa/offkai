// LCenter

import * as CSS from 'csstype'
import { ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Types
// ----------------------------------------

export type LayoutCenterProps = {
  /** 子要素 */
  children?: ReactNode
  /** コンテンツの最大幅 */
  max?: CSS.Properties['maxWidth']
  /** コンテンツ両端の最小限の余白 */
  gutters?: CSS.Properties['paddingRight'] | CSS.Properties['paddingLeft']
  /** 子要素を中央揃えにするか */
  intrinsic?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCenter = (props: LayoutCenterProps) => {
  return <div css={rootStyle(props)}>{props.children}</div>
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = (props: LayoutCenterProps) => css`
  box-sizing: content-box;
  max-width: ${props.max || '32em'};
  padding-right: ${props.gutters};
  padding-left: ${props.gutters};
  margin-right: auto;
  margin-left: auto;

  ${props.intrinsic && intrinsicStyle}
`

const intrinsicStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
