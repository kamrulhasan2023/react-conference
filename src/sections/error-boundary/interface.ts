import { FallbackProps } from 'react-error-boundary';

export interface IErrorBoundary extends FallbackProps {
  componentName: string;
  preview: boolean;
}
