import { actionCreatorFactory } from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

const actionCreator = actionCreatorFactory('books')

export interface TypeBooksState {
  name: string
}

export const booksInitialState: TypeBooksState = {
  name: 'elementary'
}

export const booksAction = {
  reset: actionCreator('RESET'),
  add: actionCreator<string>('ADD'),
  edit: actionCreator<string>('EDIT'),
  delete: actionCreator<string>('DELETE')
}

export type TypeBooksAction = typeof booksAction

export const booksReducer = reducerWithInitialState(booksInitialState)
  .case(booksAction.reset, () => booksInitialState)
  .case(booksAction.add, (state, payload) => ({
    ...state,
    name: payload
  }))
  .case(booksAction.edit, (state, payload) => ({
    ...state,
    name: payload
  }))
  .case(booksAction.delete, (state, payload) => ({
    ...state,
    name: payload
  }))
  .build()
