import { useAuth } from '../../Auth/context/AuthContext';
import Sidebar from '../Sidebar/Sidebar';

import "./scss/style.scss"

function Dashboard() {
  const { currentUser, signout } = useAuth();
  return (
    <main>
      {currentUser && 
      <div className='dashboard'>
        <Sidebar signout={signout}/>
        <button onClick={signout}>Signout</button>
      </div>
      }
    </main>
  )
}

export default Dashboard