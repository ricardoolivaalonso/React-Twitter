import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducers } from './reducers'
import { createStore } from 'redux'
import { User } from './initialState'

const twUsers = localStorage.getItem('tw-users') ? JSON.parse(localStorage.getItem('tw-users')) : User

const store = createStore(
    rootReducers,
    twUsers,
    composeWithDevTools()
)

store.subscribe(()=>{
    localStorage.setItem('tw-users', JSON.stringify( store.getState() ))
})

export default store
