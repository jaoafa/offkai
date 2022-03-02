// LStack

import { ReactNode, CSSProperties } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Types
// ----------------------------------------

export type LayoutStackProps = {
  /** 子要素 */
  children?: ReactNode
  /** コンテンツ間の余白 */
  space?: CSSProperties['marginBlockStart']
  /** 余白が再帰的に適用されるか */
  recursive?: boolean
  /** 区分けするための margin を適用する位置 */
  splitAfter?: number
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LStack = (props: LayoutStackProps) => {
  return <div css={rootStyle(props)}>{props.children}</div>
}

// ----------------------------------------
// Styles
// ----------------------------------------

const rootStyle = (props: LayoutStackProps) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & ${props.recursive ? '' : '>'} * + * {
      margin-block-start: ${props.space};
    }

    ${props.splitAfter && splitStyle(props.splitAfter)}
  `
}

const splitStyle = (index: Required<LayoutStackProps>['splitAfter']) => {
  return css`
    &:only-child {
      block-size: 100%;
    }

    & > *:nth-of-type(${index}) {
      margin-block-end: auto;
    }
  `
}
