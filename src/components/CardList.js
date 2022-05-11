import { useEffect, useState } from "react"
import { getItems } from "../api"
import { ItemCard } from "./ItemCard"
import { Loader } from "./Loader";

export const CardList = () => {

    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        (async () => {
            setList(await getItems());
            setLoader(true)
        })();
    }, [])

    return (
        <div className="container">
            <h1 className="text-center my-4 text-uppercase">Items</h1>
            { !loader &&
                <Loader/>
            }
            { loader &&
                <ul className="row g-4 justify-content-center ul-fix">
                    {
                        list.map((item) => {
                            return (
                                <li key={item.id} className='col-auto'>
                                    <ItemCard id={item.id} title={item.title} description={item.description} image={item.image} price={item.price}/>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}