import Container from './Container'

describe('container', () => {
  it('should render a <Container />', () => {
    expect(shallow(<Container />)).toMatchSnapshot()
  })
})
