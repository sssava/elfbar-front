import React, {useEffect} from 'react';
import Carousel from "../components/Carousel";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import {fetchElfbars, selectCardData} from "../redux/slices/cardSlice";
import {selectSort} from "../redux/slices/filterSlice";
import Card from "../components/Card";

const Home = () => {
    const dispatch = useDispatch()
    const {items, status} = useSelector(selectCardData)
    const {searchValue, sort} = useSelector(selectSort)

    useEffect(() => {
        async function fetchData(){
            const ordering = sort.type === 'ordering' ? `?ordering=${sort.sortProperty}` : ''
            const charge = sort.type === 'filter' ? `?charge=${sort.sortProperty}` : ''
            dispatch(fetchElfbars({
                ordering,
                charge
            }))
        }

        fetchData()
    }, [sort])

    const elfbars = items.filter(obj => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase())
    }).map(obj => <Card key={obj.id} {...obj} />)

    return (
        <div>
            <Carousel/>
            <Sort/>
            <div>
                <div className="container mb-5">
                    <div className="row">
                        {
                            status === 'loading'
                                ? [...new Array(8)].map((item, index) => <Skeleton key={index}/>)
                                :elfbars
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;