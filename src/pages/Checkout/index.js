import { useLocation } from 'react-router-dom';
import styles from './Checkout.module.scss';
export const Checkout = () => {
    const location = useLocation();
    const { selectedPackage } = location.state || { selectedPackage: null };

    return (
        <div className={styles.ibbzi}>
            <div className={`${styles.iggpb} ${styles.fkRow}`}>
                <div className={`${styles.ihacf} ${styles.fkCol} ${styles.col}`}>
                    <div className={styles.headerContent}>
                        <div className={styles.logoContainer}>
                            <img
                                src="https://assets.checkoutchamp.com/d95940e3-bb5d-4058-95c6-d509b146af7e/1766065125020_logo_c850d8ea_8fc1_4628_9f1e_4660a0808612.png"
                                className={styles.logo}
                                alt="Logo"
                                loading="lazy"
                            />
                        </div>
                        <img
                            src="https://assets.checkoutchamp.com/4cf1db40-3b4e-11ed-ba82-b71148b38a69/1739545766863_4781813_bag_buy_cart_market_shop_icon_1_.png"
                            className={styles.cartIcon}
                            alt="Cart"
                            loading="lazy"
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                (window.location.href = 'https://trysculptique.com/products/lymph-cc-select')
                            }
                        />
                    </div>
                </div>
            </div>
            <div className={`${styles.content} ${styles.fkRow} ${styles.flexWrap}`}>
                <div className={styles.leftContent}>
                    <div style={{ width: '100%' }}>
                        <div className={styles.swollenLegsAdContainer}>
                            <div className={styles.swollenLegsAdContent}>
                                <img
                                    src="https://assets.checkoutchamp.com/d95940e3-bb5d-4058-95c6-d509b146af7e/1766065371601_1762118247033_customers_three.webp"
                                    className={styles.swollenLegsAdImage}
                                ></img>
                                <div className={styles.swollenLegsAdText}>
                                    <p className={styles.swollenLegsAdHeadline}>
                                        Over <strong>93,000+ Women Like You</strong> Beat Swollen Legs
                                    </p>
                                    <div className={styles.swollenLegsAdRating}>
                                        <span className={styles.swollenLegsAdLabel}>Excellent</span>
                                        <span className={styles.swollenLegsAdScore}>4.6</span>
                                        <span className={styles.swollenLegsAdStars}>★★★★★</span>
                                        <span className={styles.swollenLegsAdCount}>11,304+ Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={styles.wrap}>
                        <div className={styles.io2r2}>
                            <div style={{ width: '100%' }}></div>
                            <div className={`${styles.iej0z2} ${styles.chExpressCheckoutGroupTitle}`}>
                                Express Checkout
                            </div>
                            <div className={`${styles.id4vz2} ${styles.chExpressCheckoutGroupBody}`}>
                                <button
                                    class="btn btnApplePay btn-apple-pay-black-styles fk-cc-id-86SKYCfYO3Fu"
                                    className={`${styles.ccId86SKYCfYO3Fu} ${styles.btnApplePay} ${styles.btn}`}
                                    style={{
                                        backgroundImage:
                                            'url("https://config.checkoutchamp.com/production/ApplePayButtonBlack.png")',
                                    }}
                                    type="button"
                                ></button>
                                <div
                                    style={{
                                        // backgroundImage: 'none',
                                        // backgroundColor: 'transparent',
                                        padding: '0',
                                        height: 'auto',
                                        width: 'auto',
                                        display: 'inline-flex',
                                        border: 'none',
                                        pointerEvents: 'auto',
                                    }}
                                    className={`${styles.ccIdLE2g1eE2L7ak} ${styles.btnPayPal2} ${styles.btn}`}
                                >
                                    <div
                                        className={styles.zoidPaypalButtons}
                                        style={{ height: '35px', transition: '0.2s ease-in-out' }}
                                    ></div>
                                </div>
                            </div>
                            <div className={`${styles.iu62du22} ${styles.chExpressCheckoutGroupOrLine}`}>
                                <span className={styles.i9ptpj}>OR&nbsp;</span>
                            </div>
                        </div>

                        <div className={styles.ieyjp}></div>
                        <div className={styles.icamgj}></div>
                        <div className={styles.io2r2} style={{ padding: '12px 10px', width: '100%' }}></div>
                        <hr className={`${styles.iveqb} ${styles.horizontalLineDefault}`}></hr>
                        <div className={styles.i9n3rb}></div>
                    </section>
                </div>
                <div className={styles.rightContent}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

{
    /* <h1>Your Cart</h1>
            {selectedPackage ? (
                <>
                    <h2>{selectedPackage.title}</h2>
                    <p>{selectedPackage.info}</p>
                    <p>Price: {selectedPackage.price}</p>
                    <p>Compare at: <s>{selectedPackage.compare}</s></p>
                </>
            ) : (
                <p>No package selected.</p>
            )} */
}
