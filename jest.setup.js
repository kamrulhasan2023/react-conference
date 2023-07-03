// Configure or set up a testing framework before each test.
import '@testing-library/jest-dom';

// TODO: Update this mock to include other functions. Create test for portable text.
jest.mock('src/backend/generate-image', () => ({
  generateImageUrl: jest.fn(() => {
    return {
      src: '/image-error/index.jpg',
      height: 400,
      width: 400,
      alt: 'error image',
    };
  }),
}));
