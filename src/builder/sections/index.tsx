import { ISanitySections } from './query/interface';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorBoundarySection from '@sections/error-boundary';
import Container from '@components/container';
import dynamic from 'next/dynamic';
import LoaderSection from '@sections/loader';
const DoubleColumnCTABuilder = dynamic(() => import('./double-column-cta'), {
  loading: () => <LoaderSection level={'section'} />,
});

interface Props {
  sections: ISanitySections | null;
}

export function SectionBuilder({ sections }: Props) {
  return (
    <>
      {sections?.map((section, index: number) => {
        switch (section._type) {
          case 'doubleColumnCTASection':
            return (
              // <ErrorBoundary
              //   fallbackRender={(props) => {
              //     return (
              //       <ErrorBoundarySection
              //         {...props}
              //         componentName="Double Column CTA Section"
              //         preview={preview}
              //       />
              //     );
              //   }}
              //   key={index}
              // >
              <DoubleColumnCTABuilder data={section} key={index} />
              // </ErrorBoundary>
            );
          default:
            return (
              <Container key={index}>
                <div className="flex min-h-screen items-center justify-center">
                  <div className="mx-auto  max-w-[1200px] rounded-10 bg-primary px-6 py-10 text-black">
                    <h2 className="text-center text-5xl font-bold ">
                      Section builder not implemented
                    </h2>
                  </div>
                </div>
              </Container>
            );
        }
      })}
    </>
  );
}
