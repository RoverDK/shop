export const BuyForm = ({modal, setModal}) => {

    const sendEmail = (e) => {
        console.log('Email sent')
        setModal(false);
        e.preventDefault();
    }

    return (
        <>
            { modal &&
                <div className="modal-buy d-flex justify-content-center align-items-center">
                    <form onSubmit={sendEmail} className="form-buy">
                        <h1>Send request</h1>
                        <div className="form-item">
                            <label htmlFor="email" className="fs-4">Email</label>
                            <input id="email" required type="email" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-outline-dark">Submit</button>
                    </form>
                </div>
            }
        </>
    )
}