import { useEffect } from "react"

const setStarWidth = (rating) => {
    const stars = document.getElementById('rating-stars');
    stars.style.width = `${rating * 20}%`;
}

export const StarRating = ({rating}) => {

    useEffect(() => {
        setStarWidth(rating)
    },[]);
    return (
        <div className="d-flex align-items-end">
            <div className="rating-body fs-1">
                <p className="rating-active" id="rating-stars"></p>
            </div>
        </div>
    )
}