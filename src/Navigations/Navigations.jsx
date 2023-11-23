import React, { useState } from "react";
import "../Styles/Navigation.css";
import './style.css'

function Navigations(){
    const[checkUser, setCheckUser]= useState(false)
    return(
        <div className="navigation">
           <nav className="navbar navbar-expand-lg navbar-light my-nav">
            <div className="container-fluid">
                <a href="/" className="navbar-brand text-white"><h4> <i class="bi bi-cart mx-1 my-2"></i> Ecomoo</h4></a>

                <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent">
                <i class="bi bi-list text-white" ></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 mb-lg-0">
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white">Home</a>
                        </li>
                        <li className="nav-item dropdown ">
                            <a href="/" className="nav-link text-white dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle='dropdown' aria-expanded='true'>Categories</a>
                            <ul className="dropdown-menu" aria-aria-labellebdy="bavbarDropdown">
                                <li ><a href="/" className="dropdown-item">Mobile</a></li>
                                <li><a href="/" className="dropdown-item">Laptops</a></li>
                                <li><a href="/" className="dropdown-item">Clothing</a></li>
                                <li><a href="/" className="dropdown-item">Groceries</a></li>
                                <li><a href="/" className="dropdown-item">Electronics</a></li>
                                <li><a href="/" className="dropdown-item">Vehicles</a></li>
                                <li><a href="/" className="dropdown-item">Tickets</a></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white">Cart</a>
                    
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white">Deals</a>
                        </li>



                    </ul>

                </div>

             <div className="d-flex align-items-center gap-3">

             <div className="d-flex align-item-center gap-3 bg-white px-3 rounded-5">
                    <input type="search" placeholder="serach here" name="search"className="form-control border-0 search-box" />
                    <i class="bi bi-search-heart"></i>

                </div>
                {
                    checkUser?(
                        null
                    ):(
                        <button className="btn bg-warning"><i class="bi bi-person-fill-add"></i>Create Account</button>
                    )


                }
             </div>

                



            </div>
            
           </nav>
        </div>
    )
}
export default Navigations