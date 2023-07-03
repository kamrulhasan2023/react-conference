import { render } from '@testing-library/react';
import CustomPortableText from '.';
import { richTextContent } from './mock-data';

it('should render rich text section', () => {
  const { getAllByRole } = render(
    <CustomPortableText content={richTextContent} />
  );
  const element = getAllByRole('article')[0];
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});
