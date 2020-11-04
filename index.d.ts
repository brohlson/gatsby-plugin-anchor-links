import * as React from 'react'

export interface AnchorLinkProps {
    to: string
    title?: string
    className?: string
    stripHash?: boolean
    children?: React.ReactNode
    gatsbyLinkProps?: object
    onAnchorLinkClick?: () => void
}

export function AnchorLink(props: AnchorLinkProps): any