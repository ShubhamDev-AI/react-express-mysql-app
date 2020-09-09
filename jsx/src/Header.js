import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="bs-example">
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a href="#" className="navbar-brand">Data Displayer</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse1">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse1">
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">
                  <i className="fa fa-home"></i>Home</a>
                <a href="#" className="nav-item nav-link">
                  <i className="fa fa-user"></i>About</a>
               <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-                      toggle="dropdown">
                      <i className="fa fa-envelope"></i>
                      Messages</a>
                    <div className="dropdown-menu">
                      <i className="fa fa-line-chart"></i>
                        <a href="#" className="dropdown-item">Inbox</a>
                        <a href="#" className="dropdown-item">Sent</a>
                        <a href="#" className="dropdown-item">Drafts</a>
                    </div>
                </div>
            </div>
            <form className="form-inline ml-auto">
                <input type="text" className="form-control mr-sm-2" placeholder="Search" />
                <button type="submit" className="btn btn-outline-light">Search</button>
            </form>
           <div className="navbar-nav">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
          <div className="navbar-nav">
                <a href="#" class="nav-item nav-link">Register</a>
            </div>
        </div>
    </nav>
	
    
    
    
    
    
</div>
        </div>
    )
}

export default Header
