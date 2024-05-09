import {atomFamily,selectorFamily } from 'recoil'

export const todosFamily = atomFamily({
    key:"todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get : (id)=>{
            return async ({get})=>{
                const res = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);

                const json = await res.json();
                return json.todo;
            }
        }
    })
})