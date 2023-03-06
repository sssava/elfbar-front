import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

import {useDispatch, useSelector} from "react-redux";
import {fetchElfbars, selectCardData} from "./redux/slices/cardSlice";
import {selectSort} from "./redux/slices/filterSlice";
import Skeleton from "./components/Skeleton";

function App() {
    const dispatch = useDispatch()
    const {items, status} = useSelector(selectCardData)
    const {searchValue} = useSelector(selectSort)

    useEffect(() => {
        async function fetchData(){
            dispatch(fetchElfbars())
        }

        fetchData()
    }, [])

    const elfbars = items.filter(obj => {
        return obj.name.toLowerCase().includes(searchValue.toLowerCase())
    }).map(obj => <Card key={obj.id} {...obj} />)


  return (
      <div className="App">
        <Navbar/>
        <Carousel/>
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
}

export default App;

