import { render } from '@testing-library/react';
import DoubleColumnCtaSection from '.';
import { doubleColumnCtaSectionProps } from './mock-data';

it('renders double column cta section correctly', () => {
  const { getAllByRole } = render(
    <DoubleColumnCtaSection {...doubleColumnCtaSectionProps} />
  );
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
