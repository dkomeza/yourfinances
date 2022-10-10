import React from 'react'
import { Link } from "react-router-dom";
import "./sidebar.scss"

import dashboardIcon from './assets/dashboard.svg'
import statisticsIcon from './assets/statistics.svg'
import investmentsIcon from './assets/investments.svg'
import loansIcon from './assets/loans.svg'
import budgetIcon from './assets/budget.svg'
import settingsIcon from './assets/settings.svg'

import infoCardIcon from './assets/info-card.png'

function Sidebar(children: any) {
  return (
    <aside className='sidebar'>
      <div className='menu-wrapper'>
        <h1>YOURFINANCES</h1>
        <nav>
          <ul>
            <Link to={"/"} className='active'><li><img src={dashboardIcon} alt=""></img><span>Dashboard</span></li></Link>
            <Link to={"/statistics"}><li><img src={statisticsIcon} alt=""></img><span>Statistics</span></li></Link>
            <Link to={"/investments"}><li><img src={investmentsIcon} alt=""></img><span>Investments</span></li></Link>
            <Link to={"/loans"}><li><img src={loansIcon} alt=""></img><span>Loans</span></li></Link>
            <Link to={"/budget"}><li><img src={budgetIcon} alt=""></img><span>Budget</span></li></Link>
            <Link to={"/settings"}><li><img src={settingsIcon} alt=""></img><span>Settings</span></li></Link>
            <div className="hover-background"></div>
          </ul>
        </nav>
      </div>
      <div className='info-wrapper'>
        <section className="info-card">
          <img src={infoCardIcon} alt="" />
          <h2>Info card</h2>
          <p>A sample info card with link to some article</p>
          <div className='button-wrapper' onClick={children.children}><a>More details</a></div>
        </section>
      </div>
    </aside>
  )
}

export default Sidebar