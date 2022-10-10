import React from 'react'
import "./sidebar.scss"

import dashboardIcon from './assets/dashboard.svg'
import statisticsIcon from './assets/statistics.svg'
import investmentsIcon from './assets/investments.svg'
import loansIcon from './assets/loans.svg'
import budgetIcon from './assets/budget.svg'
import settingsIcon from './assets/settings.svg'

import infoCardIcon from './assets/info-card.png'

function Sidebar(children: any) {
  console.log(children.signout)
  return (
    <aside className='sidebar'>
      <div className='menu-wrapper'>
        <h1>YOURFINANCES</h1>
        <nav>
          <ul>
            <a href="" className='active'><li><img src={dashboardIcon} alt=""></img><span>Dashboard</span></li></a>
            <a href=""><li><img src={statisticsIcon} alt=""></img><span>Statistics</span></li></a>
            <a href=""><li><img src={investmentsIcon} alt=""></img><span>Investments</span></li></a>
            <a href=""><li><img src={loansIcon} alt=""></img><span>Loans</span></li></a>
            <a href=""><li><img src={budgetIcon} alt=""></img><span>Budget</span></li></a>
            <a href=""><li><img src={settingsIcon} alt=""></img><span>Settings</span></li></a>
            <div className="hover-background"></div>
          </ul>
        </nav>
      </div>
      <div className='info-wrapper'>
        <section className="info-card">
          <img src={infoCardIcon} alt="" />
          <h2>Info card</h2>
          <p>A sample info card with link to some article</p>
          <div className='button-wrapper' onClick={children.signout}><a href="">More details</a></div>
        </section>
      </div>
    </aside>
  )
}

export default Sidebar