import renderer from 'react-test-renderer';

import Button from '../UI/button';

describe('Button', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(<Button />);
  });

  it('should render button correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});