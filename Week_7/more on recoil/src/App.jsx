import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'
import { RecoilRoot, useRecoilValue } from 'recoil'


function App() {
  // const [count, setCount] = useState(0) 
   
  //recoil root ke andar wrap all the recoil hooks 
  return <>
  <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
  </>
}

function MainApp(){
  const networkNotificationCount= useRecoilValue(networkAtom);
  const jobsAtomCount= useRecoilValue(jobsAtom);
  const notificationsAtomCount= useRecoilValue(notificationAtom);
  const messagingAtomCount= useRecoilValue(messagingAtom);
  // the value on me button will be the sum of all above four values
  // we can use selector for it or useMemo also works 
  //better is selector 
  
  const totalSelector = useRecoilValue(totalNotificationSelector);
  return (
    <>
    
      <button>Home</button>
      <button>My network ({networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>
      <button>Me ({totalSelector})</button>
    
    </>
  )
}

export default App