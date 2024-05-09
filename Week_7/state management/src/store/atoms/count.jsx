import {atom, selector} from 'recoil';


// atom function accepts a single object as an argument 
// the object has key which needs to be unique for each atom
// default supposed to be the default value which this atom will hold

export const countAtom = atom({
    key: "countAtom",
    default: 0
})


// selectors can depend on one or multiple atoms or selctors
export const evenSelector = selector({
    key:"evenSelector",
    get : ({get})=>{
        // this the arguments of get are same as dependency of useMemo
        const  count = get(countAtom);
        return (count%2)==0;
    }
});