export const ItemCard = ({title, description, image, price}) => {
    return (
        <div className="card p-2" style={{width: '12rem'}}>
            <div className="img-fix" >
                <img src={`${image}`} className="card-img-top" alt="item"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description.length > 20 ? `${description.substring(0, 40)}...` : description}</p>
                <div className="buy d-flex justify-content-between align-items-center">
                    <p className='fw-bold m-0 fs-4'>{price}<span className='fst-italic'> $</span></p>
                    <button href="/" className="btn btn-outline-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon-fix" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}