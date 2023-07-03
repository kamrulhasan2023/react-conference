import Button from '@components/button';
import Container from '@components/container';
import IconStore from '@components/icons';
import clsx from 'clsx';
import { IErrorBoundary } from './interface';

export default function ErrorBoundarySection({
  error,
  resetErrorBoundary,
  componentName,
  preview,
}: IErrorBoundary) {
  const errorTitle = 'Oops! We faced an error while rendering this section.';
  let errorMessage;

  if (preview) {
    errorMessage =
      "Please fix the content for this section in sanity and click the 'Reset' button.";
  } else {
    errorMessage =
      'We are not able to render this section at the moment. Please kindly report this issue so that we can fix it as soon as possible.';
  }

  const paragraphClasses = clsx('text-black');

  return (
    <div role="alert" className="section-padding-primary bg-gray-light">
      <Container>
        <div className="mx-auto w-full max-w-[1320px] space-y-3 rounded-lg bg-white  p-6 text-black shadow-[0_5px_20px_rgba(0,0,0,.1)] md:p-10 lg:space-y-5 2xl:p-12">
          <span className="block text-2xl text-danger lg:text-4xl">
            <IconStore iconName="Error" />
          </span>
          <h3 className="text-lg md:text-3xl">{errorTitle}</h3>
          <p className="text-danger/[.8]">{errorMessage}</p>
          {preview && (
            <div className="space-y-2 rounded-lg border border-[#e38888] bg-[#f6c8c8] p-4 lg:p-8">
              <p className={paragraphClasses}>Section Name: {componentName}</p>
              <p className={paragraphClasses}>Error Name: {error.name}</p>
              <p className={paragraphClasses}>Error Message: {error.message}</p>
            </div>
          )}
          <div>
            <div className="mt-6 flex flex-wrap justify-end gap-3 lg:mt-8 lg:gap-5">
              {preview && (
                <Button
                  label="Reset"
                  colorScheme="bg-black-text-white"
                  clickHandler={() => resetErrorBoundary()}
                  size="md"
                  variant="fill"
                />
              )}
              <Button
                isDisabled
                label="Report"
                colorScheme="bg-transparent-text-primary"
                clickHandler={() => resetErrorBoundary()}
                size="md"
                hoverColorScheme="bg-transparent-text-success"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
