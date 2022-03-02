// LIcon

import { ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'
import { CSSProperties } from '@emotion/serialize'

// ----------------------------------------
// Types
// ----------------------------------------

export type LayoutIconProps = {
  /** 使用するタグ */
  tag?: ElementType
  /** 子要素 */
  children?: ReactNode
  /** テキストとアイコンとの間の余白 */
  space?: CSSProperties['marginInlineEnd']
  /** アイコンに適用するラベル */
  label?: string
  /** アイコンの大きさ */
  size?: number
  /** アイコンに適用する色 */
  color?: CSSProperties['fill']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LIcon = (props: LayoutIconProps) => {
  const ComponentTag = props.tag || 'span'
  return (
    <ComponentTag
      role={props.label && 'img'}
      aria-label={props.label}
      css={rootStyle(props)}
    >
      {props.children}
    </ComponentTag>
  )
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = (props: LayoutIconProps) => {
  return css`
    & > svg {
      width: ${props.size ? `${props.size}px` : '0.75em'};
      height: ${props.size ? `${props.size}px` : '0.75em'};
      fill: ${props.color || 'currentcolor'};
    }

    ${props.space && withIconStyle(props.space)}
  `
}

const withIconStyle = (space: Required<LayoutIconProps>['space']) => {
  return css`
    display: inline-flex;
    align-items: baseline;

    & > svg {
      margin-inline-end: ${space};
    }
  `
}
