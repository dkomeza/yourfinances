import { useAuth } from '../Auth/context/AuthContext';
import Sidebar from './components/Sidebar';

function Dashboard() {
  const { currentUser, signout } = useAuth();
  return (
    <main>
      {currentUser && 
      <div>
        <Sidebar />
        <button onClick={signout}>Signout</button>
      </div>
      }
    </main>
  )
}

export default Dashboard