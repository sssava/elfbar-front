import React, {useState, useCallback, useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";
import debounce from 'lodash.debounce'
import {Link} from "react-router-dom";

import {setSearchValue} from "../redux/slices/filterSlice";
import {selectCardData} from "../redux/slices/cardSlice";
import {useSelector} from "react-redux";

const Navbar = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const isMounted = useRef(false)

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 500), []
    )

    const onChangeInput = (event) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    const {storage} = useSelector(selectCardData)

    useEffect(() => {
        if(isMounted.current){
            const json = JSON.stringify(storage)
            localStorage.setItem("elfbars", json)
        }
        isMounted.current = true
    }, [storage])


    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="text-decoration-none" to="/">
                        <a className="navbar-brand">Elfbar</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="cart/"><li className="nav-item">
                                <a className="nav-link decoration_none" aria-current="page"><i className="fa-solid fa-cart-shopping custom-img">
                                    <p className="circle"><p className="price">{storage.reduce((total, count) => total + count.quantity, 0)}</p></p>
                                </i></a>
                            </li></Link>
                            <Link className="text-decoration-none" to="/">
                                <li className="nav-item">
                                    <a className="nav-link"><i className="fa-regular fa-heart"></i> Favorite</a>
                                </li>
                            </Link>
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