import { shallow } from 'enzyme'
import * as React from 'react'
import { Counter } from 'src/components/pages/counter'
import { counterAction, counterInitialState } from 'src/store/counter'

describe('src/components/Counter', () => {
  test('Rendered <Counter />', () => {
    shallow(<Counter counter={counterInitialState} action={counterAction} />)
  })
})
