// LCenter

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Types
// ----------------------------------------

export type LayoutCenterProps = {
  /** 使用するタグ */
  tag?: ElementType
  /** 子要素 */
  children?: ReactNode
  /** コンテンツの最大幅 */
  max?: CSSProperties['maxWidth']
  /** コンテンツ両端の最小限の余白 */
  gutters?: CSSProperties['paddingRight'] | CSSProperties['paddingLeft']
  /** 子要素を中央揃えにするか */
  intrinsic?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCenter = (props: LayoutCenterProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = (props: LayoutCenterProps) => {
  return css`
    box-sizing: content-box;
    max-width: ${props.max || '32em'};
    padding-right: ${props.gutters};
    padding-left: ${props.gutters};
    margin-right: auto;
    margin-left: auto;

    ${props.intrinsic && intrinsicStyle()}
  `
}

const intrinsicStyle = () => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
}
