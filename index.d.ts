import * as React from 'react'

export interface AnchorLinkProps {
    to: string
    title?: string
    children?: React.ReactNode
}

export function AnchorLink(props: AnchorLinkProps): any