import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFullElf, selectFullElf} from "../redux/slices/fullElfbarSlice";


const FullElfbar = () => {

    const [value, setValue] = useState(1)

    const {slug} = useParams()
    const dispatch = useDispatch()
    const {elfbar, status} = useSelector(selectFullElf)


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

    useEffect(() => {
        async function fetchData(){
            dispatch(fetchFullElf({
                slug
            }))
        }

        fetchData()
    }, [slug])

    return (
        <div className="main">
            {
                status === 'success'
                ? <div className="elf-info">
                        <img className="info-img" src={elfbar.image} alt="" />
                        <div className="info">
                            <button className="back"><i className="fa-sharp fa-solid fa-arrow-left"></i> Назад</button>
                            <h3>{elfbar.name}</h3>
                            <p className="cost">{elfbar.price} uah</p>
                            <div className="tastes">
                                <span className="taste_active">Pinapple mango orange</span>
                                <span className="taste">Kiwi Passionfruit guava</span>
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
                            <span className="desc_name active_name">Про Ельфбар</span>
                            <span className="charact_name">Характеристики</span>
                        </div>
                        <div className="description">
                            <h2>ОДНОРАЗОВА POD СИСТЕМА ELF BAR 2000 LUX Kiwi passion fruit guava</h2>
                            <p>Електронні сигарети Elf ​​Bar 2000 LUX відрізняє зручність та безпека. Це те, що потрібно
                                сучасному споживачеві. І причина, через яку вони стали такими популярними в Україні – їхня
                                безпека порівняно із звичайними тютюновими цигарками. Саме тому швидкі, дешеві та прості
                                пристрої Elf Bar 2000 LUX Kiwi passion fruit guava призначені для того, щоб допомогти людям
                                перейти від куріння до вейпінгу. Факти про Elf Bar 2000 LUX Ківі маракуя гуава:

                                Вейпінг визнаний найуспішнішим способом відмови від куріння
                                Одноразові сигарети ElfBar 2000 LUX Ківі маракуя гуава – дешевий та простий спосіб кинути палити
                                Доведено, що електронні сигарети Elf ​​Bar 2000 LUX Kiwi passion fruit guava принаймні на 95%
                                безпечніші за горючі тютюнові вироби.
                                Pod система Elf Bar 2000 LUX – компактний пристрій, усередині якого розташований нагрівач нового
                                покоління, що рівномірно підігріває і підтримує температуру протягом усієї сесії куріння. Ресурс
                                одноразової сигарети – 2000 затяжок. Пристрій не обслуговується після завершення всіх затяжок,
                                підлягає знищенню. Це дуже просто та зручно – купив, відкрив, затягнувся. Безпечно, завдяки
                                розумному нагрівачеві, який не перегріває курильну суміш, тільки ароматна чиста пара, мінімум
                                шкідливих речовин. Замовити ElfBar 2000 LUX Kiwi passion fruit guava можна 24/7 на нашому
                                сайті.</p>
                        </div>
                    </div>
                    : <div></div>
            }
        </div>
    );
};

export default FullElfbar;