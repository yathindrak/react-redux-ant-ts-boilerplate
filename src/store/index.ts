import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { counterReducer, TypeCounterState } from 'src/store/counter'
import { booksReducer, TypeBooksState } from 'src/store/books'

export interface Store {
  counter: TypeCounterState,
  books: TypeBooksState
}

const reducers = combineReducers({
  counter: counterReducer,
  books: booksReducer
})

export const history = createBrowserHistory()

export const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
)
