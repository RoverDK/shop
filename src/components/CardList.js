import { useEffect, useState } from "react"
import { ffetch } from "../api"
import { ItemCard } from "./ItemCard"

import loaderImg from '../images/loaderImg.png'

export const CardList = () => {

    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        (async () => {
            setList(await ffetch());
            setLoader(true)
        })();
    }, [])

    return (
        <div className="container">
            <h1 className="text-center my-4">Items</h1>
            { !loader &&
                <img src={loaderImg} alt="loader" className="loader"/>
            }
            { loader &&
                <ul className="row g-4 justify-content-center ul-fix">
                    {
                        list.map((item) => {
                            return (
                                <li key={item.id} className='col-auto'>
                                    <ItemCard title={item.title} description={item.description} image={item.image} price={item.price}/>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}