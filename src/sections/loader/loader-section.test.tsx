import { render } from '@testing-library/react';
import LoaderSection from '.';
import { loaderSectionProps } from './mock-data';

it('renders loader section correctly', () => {
  const { getAllByRole } = render(<LoaderSection {...loaderSectionProps} />);
  const element = getAllByRole('presentation')[0];

  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
