import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItem } from "../api";
import { Loader } from "./Loader";

export const ItemPage = () => {

    const { id }  = useParams();

    const [item, setItem] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        (async () => {
            setItem(await getItem(id));
            setLoader(false);
        })();        
    })

    return (
        <>
            { loader &&
                <Loader />
            }
            { !loader &&
                <div className="container m-auto mt-4">
                    <h1 className="text-center">{item.title}</h1>
                    <div className="content d-flex justify-content-between">
                        <div className="main-info" style={{width: '30vw'}}>
                            <img src={`${item.image}`} alt="item" style={{width: '100%'}}/>
                            <div className="description">
                                <h2>Description</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <div className="extra-info">
                            <ul className="d-flex flex-column justify-content-between" style={{height: '80%'}}>
                                <li>{item.price} <span>$</span></li>
                                <li>{item.rating.rate} stars</li>
                                <li>{item.rating.count} asked</li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}