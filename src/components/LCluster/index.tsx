// LCluster

import * as CSS from 'csstype'
import { ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Types
// ----------------------------------------

export type LayoutClusterProps = {
  /** 子要素 */
  children?: ReactNode
  /** 水平方向の配置 */
  justify?: CSS.Properties['justifyContent']
  /** 垂直方向の配置 */
  align?: CSS.Properties['alignItems']
  /** コンテンツ間の最小限の余白 */
  space?: CSS.Properties['gap']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCluster = (props: LayoutClusterProps) => {
  return <div css={rootStyle(props)}>{props.children}</div>
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = (props: LayoutClusterProps) => css`
  display: flex;
  flex-wrap: wrap;
  gap: ${props.space};
  align-items: ${props.align || 'flex-start'};
  justify-content: ${props.justify || 'flex-start'};
`
