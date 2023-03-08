import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSort, selectSort} from "../redux/slices/filterSlice";

export const sortNames = [
    {name: 'Немає сортування', sortProperty: '', type: 'ordering'},
    {name: 'Ціна(DESC)', sortProperty: 'price', type: 'ordering'},
    {name: 'Ціна(ASC)', sortProperty: '-price', type: 'ordering'},
    {name: '1500', sortProperty: 1500, type: 'filter'},
    {name: '4000', sortProperty: 4000, type: 'filter'},
]


const Sort = () => {
    const [visibleSort, setVisibleSort] = useState(false)
    const sortRef = useRef()

    const dispatch = useDispatch()
    const {sort} = useSelector(selectSort)

    useEffect(() => {
        const handleVisible = (event) => {
            console.log(event.composedPath())
            if (!event.composedPath().includes(sortRef.current)){
                setVisibleSort(false)
            }
        }

        document.body.addEventListener('click', handleVisible)

        return () => {
            document.body.removeEventListener('click', handleVisible)
        }
    }, [])


    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортування по: </b>
                <span onClick={() => setVisibleSort(!visibleSort)}>{sort.name}</span>
            </div>
            {visibleSort &&
                <div className="sort__popup">
                    <ul>
                        {sortNames.map((item, index) => {
                            return(
                                <li className={sort.sortProperty === item.sortProperty ? 'active' : ''} key={index} onClick={() => {
                                    dispatch(setSort(item))
                                    setVisibleSort(false)
                                }}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            }

        </div>
    );
};

export default Sort;