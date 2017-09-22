import Row from './Row'

describe('container', () => {
  it('should render a <Row />', () => {
    expect(shallow(<Row />)).toMatchSnapshot()
  })
})
