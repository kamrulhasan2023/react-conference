import Link from 'next/link';
import { ICustomLink } from './interface';

export default function CustomLink(props: ICustomLink) {
  return (
    <Link
      href={props.href}
      target={props.isOpenNewTab ? '_blank' : '_self'}
      className={props.className || ''}
    >
      {'label' in props ? props.label : props.children}
    </Link>
  );
}
