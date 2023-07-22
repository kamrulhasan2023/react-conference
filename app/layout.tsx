import '../styles/globals.css';
import '../styles/code-component-styles.css';
import { primary, secondary } from '../fonts';
import clsx from 'clsx';
import Header from 'src/layout/header';
import Footer from 'src/layout/footer';
import { headerProps } from 'src/layout/header/mock-data';
import { draftMode } from 'next/headers';
import Button from '@components/button';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = draftMode();

  return (
    <html
      lang="en"
      className={clsx(primary.variable, secondary.variable, 'font-primary')}
    >
      <body>
        {/* Show exit draft link when in draft mode. */}
        {isEnabled && (
          <div className="fixed bottom-4 left-2 z-444">
            <Button.Redirect
              colorScheme="bg-primary-text-white"
              hoverColorScheme="bg-white-text-black"
              isOpenNewTab={false}
              label="Exit Preview"
              size="lg"
              href={`/api/draft-disable`}
            />
          </div>
        )}
        <Header {...headerProps} />
		{children}
        <Footer />
      </body>
    </html>
  );
}
