import { formatRating } from './store-app-util-formatters';

describe('storeAppUtilFormatters', () => {
  it('should work', () => {
    expect(formatRating(1.22222)).toEqual(1.2);
  });
});
