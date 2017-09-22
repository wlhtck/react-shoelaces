import Col from '../Col'

describe('container', () => {
  it('should render a <Col />', () => {
    expect(shallow(<Col />)).toMatchSnapshot()
  })
})
