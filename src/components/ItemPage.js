import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItem } from "../api";
import { BuyForm } from "./BuyForm";
import { Loader } from "./Loader";
import { StarRating } from "./StarRating";

export const ItemPage = () => {

    const { id }  = useParams();

    const [item, setItem] = useState([]);
    const [loader, setLoader] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        (async () => {
            setItem(await getItem(id));
            setLoader(false);
        })();        
    },[])

    return (
        <>
            { loader &&
                <Loader />
            }
            { !loader &&
                <div className="container mt-5">
                    <div className="row g-4 d-flex justify-content-between">
                        <div className="col-md-6">
                            <img src={item.image} alt="item" className="img-fix-page"/>
                        </div>
                        <div className="col-md-5 d-flex flex-column justify-content-around">
                            <h1 className="item-name h1">{item.title}</h1>
                            <p className="h3">{item.price}<span> $</span></p>
                            <StarRating rating={item.rating.rate}/>
                            <p className="fs-4">{item.description}</p>
                            <button className="btn btn-outline-dark mt-2 px-2" onClick={() => setModal(true)}>Buy</button>
                        </div>
                    </div>
                    
                </div>
            }
            <BuyForm modal={modal} setModal={setModal} item={item.title}/>
        </>
    )
}