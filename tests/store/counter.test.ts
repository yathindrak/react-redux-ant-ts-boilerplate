import { counterAction, counterInitialState, counterReducer } from 'src/store/counter'

describe('store/counter#reducer', () => {
  it('counter/reset', () => {
    expect(counterReducer(counterInitialState, counterAction.reset())).toEqual({
      count: 0
    })
  })

  it('counter/inc', () => {
    expect(counterReducer(counterInitialState, counterAction.inc())).toEqual({
      count: 1
    })
  })

  it('counter/dec', () => {
    expect(counterReducer(counterInitialState, counterAction.dec())).toEqual({
      count: -1
    })
  })

  it('counter/plus', () => {
    expect(counterReducer(counterInitialState, counterAction.plus(10))).toEqual({
      count: 10
    })
  })

  it('counter/minus', () => {
    expect(counterReducer(counterInitialState, counterAction.minus(10))).toEqual({
      count: -10
    })
  })
})
