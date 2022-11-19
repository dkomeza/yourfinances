import { useRef } from "react";

import { useAuth } from "../../Auth/context/AuthContext";

import "./scss/style.scss";

import searchIcon from "./assets/search.svg";

function Dashboard() {
  const { currentUser, signout } = useAuth();
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    if (searchRef.current?.value) {
      document.getElementsByClassName("search-label")[0].classList.add("valid");
      document.getElementsByClassName("search-icon")[0].classList.add("valid");
    } else {
      document
        .getElementsByClassName("search-label")[0]
        .classList.remove("valid");
      document
        .getElementsByClassName("search-icon")[0]
        .classList.remove("valid");
    }
  }

  return (
    <main>
      <div className="dashboard">
        <div className="header">
          <h1>Dashboard</h1>
          <div className="search">
            <input type="search" onInput={handleSearch} ref={searchRef} />
            <span className="search-label">search</span>
            <span className="search-icon">
              <img src={searchIcon} alt="" />
            </span>
          </div>
        </div>
        <div className="accounts">
          <h2>My accounts</h2>
          <div className="accounts-wrapper"></div>
        </div>
        <div className="analysis">
          <h2>Analysis</h2>
          <div className="chart-wrapper"></div>
          <div className="stats-wrapper"></div>
        </div>
      </div>
      <div className="profile">
        <h2>Profile</h2>
        <div className="profile-wrapper">
          <div className="profile-picture-wrapper">
            <img src={currentUser.photoURL} alt="profile" />
          </div>
          <div className="username">
            <h3>{currentUser.displayName}</h3>
          </div>
          <div className="icons-wrapper"></div>
        </div>
        <div className="transactions">
          <div className="title-wrapper">
            <h2>Transactions</h2>
            <span className="">see more</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
