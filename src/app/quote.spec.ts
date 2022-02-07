import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    return expect(new Quote(0, "", "", "", Date)).toBeTruthy();
  });
});
