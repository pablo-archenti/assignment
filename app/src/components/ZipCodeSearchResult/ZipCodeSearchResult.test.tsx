import { render, screen } from '@testing-library/react';
import ZipCodeSearchResult from './ZipCodeSearchResult';

describe('ZipCodeSearchResult', () => {
  test('Loading', () => {
    render(<ZipCodeSearchResult loading={true} zipCode={null} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('Not Found', () => {
    render(<ZipCodeSearchResult loading={false} zipCode={null} />);
    expect(screen.getByText('Not Found!')).toBeInTheDocument();
  });

  test('Empty', () => {
    const { container } = render(
      <ZipCodeSearchResult loading={false} zipCode={undefined} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  test('With Data', () => {
    render(
      <ZipCodeSearchResult
        loading={false}
        zipCode={{
          city: 'Los Angeles',
          state: 'California'
        }}
      />
    );
    expect(screen.getByText('City: Los Angeles')).toBeInTheDocument();
    expect(screen.getByText('State: California')).toBeInTheDocument();
  });
});
