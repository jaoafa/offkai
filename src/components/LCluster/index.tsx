// LCluster

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Types
// ----------------------------------------

export type LayoutClusterProps = {
  /** 使用するタグ */
  tag?: ElementType
  /** 子要素 */
  children?: ReactNode
  /** 水平方向の配置 */
  justify?: CSSProperties['justifyContent']
  /** 垂直方向の配置 */
  align?: CSSProperties['alignItems']
  /** コンテンツ間の最小限の余白 */
  space?: CSSProperties['gap']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCluster = (props: LayoutClusterProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = (props: LayoutClusterProps) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${props.space};
    align-items: ${props.align || 'flex-start'};
    justify-content: ${props.justify || 'flex-start'};
  `
}
