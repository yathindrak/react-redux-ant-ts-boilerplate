import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Store } from 'src/store'
import { counterAction, TypeCounterAction, TypeCounterState } from 'src/store/counter'

interface Props {
  action: TypeCounterAction
  counter: TypeCounterState
}

export const Counter = (props: Props) => (
  <React.Fragment>
    <div>count: {props.counter.count}</div>
    <button onClick={() => props.action.inc()}>inc</button>
    <button onClick={() => props.action.dec()}>dec</button>
    <button onClick={() => props.action.plus(10)}>+10</button>
    <button onClick={() => props.action.minus(10)}>-10</button>
    <button onClick={() => props.action.reset()}>reset</button>
  </React.Fragment>
)

const mapStateToProps = (state: Store) => ({
  counter: state.counter
})

const mapDisptachToProps = (dispatch: Dispatch) => ({
  action: bindActionCreators({ ...counterAction }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Counter)
