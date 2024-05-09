import {atom,selector,atomFamily} from 'recoil'
import {Todos} from "./todos"

export const todosFamily = atomFamily({
    key : "todosAtomFamily",
    default: id => {
        return Todos.find(todo => todo.id === id)
    }
})