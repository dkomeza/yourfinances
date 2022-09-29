import React from 'react'


import dashboardIcon from '../assets/Sidebar/dashboard.svg'
import statisticsIcon from '../assets/Sidebar/statistics.svg'
import investmentsIcon from '../assets/Sidebar/investments.svg'
import loansIcon from '../assets/Sidebar/loans.svg'
import budgetIcon from '../assets/Sidebar/budget.svg'
import settingsIcon from '../assets/Sidebar/settings.svg'

function Sidebar() {
  function handleHover() {

  }
  return (
    <aside className='sidebar'>
      <h1>YOURFINANCES</h1>
      <nav>
        <ul>
          
          <a href=""><li><img src={dashboardIcon} alt=""></img><span>Dashboard</span></li></a>
          <a href="" className='active'><li><img src={statisticsIcon} alt=""></img><span>Statistics</span></li></a>
          <a href=""><li><img src={investmentsIcon} alt=""></img><span>Investments</span></li></a>
          <a href=""><li><img src={loansIcon} alt=""></img><span>Loans</span></li></a>
          <a href=""><li><img src={budgetIcon} alt=""></img><span>Budget</span></li></a>
          <a href=""><li><img src={settingsIcon} alt=""></img><span>Settings</span></li></a>
          <div className="hover-background"></div>
        </ul>
      </nav>
      <div>
        <button>Signout</button>
      </div>
    </aside>
  )
}

export default Sidebar