import * as React from "react";

export interface AnchorLinkProps {
  to: string;
  title?: string;
  className?: string;
  stripHash?: boolean;
  children?: React.ReactNode;
  options?: { offset?: number };
}

export function AnchorLink(props: AnchorLinkProps): any;
