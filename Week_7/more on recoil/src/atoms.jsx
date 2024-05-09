import {atom , selector} from 'recoil' 

//don't repeat the keys it should be unique 
export const networkAtom = atom({
    key:"networkAtom",
    default: 104
});
export const jobsAtom = atom({
    key:"jobsAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 20
});

export const messagingAtom = atom({
    key:"messagingAtom",
    default: 12
});

export const totalNotificationSelector= selector({
    key: "totalNotificationSelector",
    get : ({get})=>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount;
    }
})