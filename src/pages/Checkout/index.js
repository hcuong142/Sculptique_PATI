import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { selectedPackage } = location.state || { selectedPackage: null }; // Lấy gói đã chọn
    console.log('selectedPackage', selectedPackage);
    

    return (
        <div>
            <h1>Your Cart</h1>
            {selectedPackage ? (
                <>
                    <h2>{selectedPackage.title}</h2>
                    <p>{selectedPackage.info}</p>
                    <p>Price: {selectedPackage.price}</p>
                    <p>Compare at: <s>{selectedPackage.compare}</s></p>
                </>
            ) : (
                <p>No package selected.</p>
            )}
        </div>
    );
};

export default Checkout;