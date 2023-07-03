interface ICommonLinkProps {
  href: string;
  isOpenNewTab: boolean;
  className?: string;
}

export interface ILabelLink extends ICommonLinkProps {
  label: string;
}

export interface IComponentLink extends ICommonLinkProps {
  children: JSX.Element;
}

export type ICustomLink = ILabelLink | IComponentLink;
