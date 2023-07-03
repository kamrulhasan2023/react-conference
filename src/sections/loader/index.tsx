import clsx from 'clsx';
import { ILoaderSection } from './interface';
import styles from './loader-section.module.scss';

export default function LoaderSection({ level }: ILoaderSection) {
  const wrapperClasses = clsx(
    'grid place-items-center bg-black',
    { 'min-h-screen w-full': level === 'section' },
    { 'min-h-screen h-screen w-screen': level === 'page' }
  );
  return (
    <div className={wrapperClasses} role="presentation">
      <div className={styles['loader']}></div>
    </div>
  );
}
