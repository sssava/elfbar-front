import React, {useState, useCallback} from 'react';
import {useDispatch} from "react-redux";
import debounce from 'lodash.debounce'
import {Link} from "react-router-dom";

import {setSearchValue} from "../redux/slices/filterSlice";

const Navbar = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 500), []
    )

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }


    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/">
                        <a className="navbar-brand" href="#">Elfbar</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-cart-shopping">
                                    <p className="circle"><p className="price">0</p></p>
                                </i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-regular fa-heart"></i> Favorite</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={onChangeInput}/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;