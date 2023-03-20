import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFullElf, fetchAddTastes, selectFullElf} from "../redux/slices/fullElfbarSlice";
import {Link} from "react-router-dom";


const FullElfbar = () => {

    const [value, setValue] = useState(1)
    const [description, setDescription] = useState(true)

    const {slug, charge} = useParams()
    const dispatch = useDispatch()
    const {elfbar, status, additionalTastes} = useSelector(selectFullElf)


    const onChangeClick = (event) => {
        setValue(event.target.value)
    }

    const onClickPlus = () => {
        setValue(value + 1)
    }

    const onClickMinus = () => {
        if (value > 1){
            setValue(value - 1)
        }

    }

    const handleDescTrue = () => {
        setDescription(true)
    }

    const handleDescFalse = () => {
        setDescription(false)
    }


    useEffect(() => {
        async function fetchData(){
            dispatch(fetchFullElf({
                slug
            }))
            dispatch((fetchAddTastes({
                charge
            })))
        }

        fetchData()


    }, [slug, charge])



    return (
        <div className="main">
            {
                status === 'success'
                ? <div className="elf-info">
                        <img className="info-img" src={elfbar.image} alt="" />
                        <div className="info">
                            <Link to="/"><button className="back"><i className="fa-sharp fa-solid fa-arrow-left"></i> Назад</button></Link>
                            <h3>{elfbar.name}</h3>
                            <p className="cost">{elfbar.price} uah</p>
                            <div className="tastes">
                                {
                                    additionalTastes.map(item => {
                                        return(
                                            <Link replace={true} to={`/elfbar/${item.slug}/${item.charge}`}><button className={item.taste.name === elfbar.taste.name ? 'taste_active' : 'taste'}>{item.taste.name}</button></Link>
                                        )
                                    })
                                }

                            </div>
                            <hr></hr>
                            {
                                elfbar.taste.count_in_stock > 0
                                    ? <p className="in_stock"><i className="fa-solid fa-check"> Є в наявності</i></p>
                                    : <p className="not_in_stock"><i className="fa-solid fa-xmark"> Немає в наявності</i></p>
                            }

                            {
                                elfbar.taste.count_in_stock > 0
                                ? <div className="in_cart">
                                    <div className="in_cart__count">
                                        <button onClick={onClickMinus}><i className="fa-solid fa-minus"></i></button>
                                        <input type="number" min="1" value={value} onChange={onChangeClick}></input>
                                        <button onClick={onClickPlus}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    <button className="add_to_cart">Додати в кошик</button>
                                  </div>

                                : <div className="in_cart">
                                    <div className="in_cart__count">
                                        <button disabled={true} onClick={onClickMinus}><i className="fa-solid fa-minus"></i></button>
                                        <input disabled={true} type="number" min="0" value="0" onChange={onChangeClick}></input>
                                        <button disabled={true} onClick={onClickPlus}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    <button disabled={true} className="add_to_cart">Додати в кошик</button>
                                  </div>
                            }
                            <p className="in_liked">Додати у <i className="fa-regular fa-heart"></i></p>
                            <hr></hr>
                        </div>
                    </div>
                    : <div></div>
            }
            {
                status === 'success'
                ? <div className="elf-description">
                        <div className="titles">
                            <span className={description === true ? 'desc_name active_name' : 'desc_name'} onClick={handleDescTrue}>Про Ельфбар</span>
                            <span className={description === false ? 'charact_name active_name' : 'charact_name'} onClick={handleDescFalse}>Характеристики</span>
                        </div>
                        {
                            description === true ?
                                <div className="description">
                                    <h2>{elfbar.name}</h2>
                                    <p>{elfbar.description}</p>
                                </div> :
                                <div className="characteristics">
                                    <div className="characteristics__type">
                                        <span className="characteristics__first">Смак</span>
                                        <span className="characteristics__second">{elfbar.taste.name}</span>
                                    </div>
                                    <hr/>
                                    <div className="characteristics__type">
                                        <span className="characteristics__first">Кількість затяжок</span>
                                        <span className="characteristics__second">{elfbar.charge}</span>
                                    </div>
                                    <hr/>
                                    <div className="characteristics__type">
                                        <span className="characteristics__first">Нікотин</span>
                                        <span className="characteristics__second">{elfbar.nicotine}</span>
                                    </div>
                                    <hr/>
                                    <div className="characteristics__type">
                                        <span className="characteristics__first">Ємність аккумулятору</span>
                                        <span className="characteristics__second">{elfbar.battery}</span>
                                    </div>
                                    <hr/>
                                    <div className="characteristics__type">
                                        <span className="characteristics__first">Бренд</span>
                                        <span className="characteristics__second">{elfbar.brand}</span>
                                    </div>
                                    <hr/>

                                </div>
                        }
                    </div>
                    : <div></div>
            }
        </div>
    );
};

export default FullElfbar;