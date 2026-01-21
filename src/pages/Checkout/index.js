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
                    <section className={styles.wrap}>
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

                        <div className={styles.ieyjp}>
                            <div className={styles.ccIdQr1eJyFHSoZo}>
                                <div className={styles.i4deo6}>Contact Information</div>
                            </div>
                            <div className={styles.i5goz}>
                                <input
                                    type="text"
                                    name="emailAddress"
                                    placeholder="Email Address"
                                    className={`${styles.ip2vry} ${styles.formInput}`}
                                    inputmode="email"
                                ></input>
                            </div>
                            <div className={`${styles.ih7y4i} ${styles.formCheck} ${styles.fkFormRadioButtonParent}`}>
                                <input
                                    type="checkbox"
                                    value="value1"
                                    name="emailOptIn"
                                    className={`${styles.ijwvm5} ${styles.fkFormGeneralRadioCheckbox} ${styles.fkFormCheckbox}`}
                                ></input>
                                <label className={`${styles.izx1bw} ${styles.formCheckLabel}`}>
                                    <span className={`${styles.ccId9RHMHbpqydjt} ${styles.rteStyledText}`}>
                                        Keep me up to date with news and exclusive offers
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.icamgj}>
                            <div className={styles.irrbkt}>Shipping Information</div>

                            <div className={styles.ivalt3}>
                                <div className={`${styles.icv3tm} ${styles.field}`} class="col-12">
                                    <div className={`${styles.i81gl} ${styles.selectWrap}`}>
                                        <select
                                            name="shipCountry"
                                            type="select"
                                            className={`${styles.itruo} ${styles.formControl} ${styles.chSelect} ${styles.chDirty} ${styles.pristine} ${styles.untouched} ${styles.valid} ${styles.fkFormSelect}`}
                                        >
                                            <option value="US">United States</option>
                                        </select>
                                        <div className={`${styles.ccIdFXbssby5wluW} ${styles.chSelectArrow}`}></div>
                                        <div className={`${styles.ccIdX3oja3fn3i2B} ${styles.textDanger}`}>
                                            <span className={styles.ccIdLBpk6zzActdB}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-xl-6 pr-xl-0" className={`${styles.i85oh} ${styles.field}`}>
                                    <div className={`${styles.isx2uw} ${styles.inputWrap}`}>
                                        <input
                                            name="shipFirstName"
                                            type="text"
                                            placeholder="First Name "
                                            className={`${styles.is0hm} ${styles.formControl} ${styles.chInput} ${styles.pristine} ${styles.untouched}`}
                                        />
                                        <label
                                            htmlFor="shipping_first_name"
                                            className={`${styles.ccIdYwSudKXpTKip} ${styles.inputLabel}`}
                                        ></label>
                                        <div className={`${styles.ccId7iA5QYFFv5El} ${styles.textDanger}`}>
                                            <span className={styles.ccIdHo5X442JgcrW}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-xl-6" className={`${styles.ind3g} ${styles.field}`}>
                                    <div className={`${styles.ipgaf} ${styles.inputWrap}`}>
                                        <input
                                            name="shipLastName"
                                            type="text"
                                            placeholder="Last Name"
                                            id="il49q"
                                            className={`${styles.il49q} ${styles.formControl} ${styles.chInput} ${styles.pristine} ${styles.untouched}`}
                                        />
                                        <label
                                            htmlFor="shipping_last_name"
                                            className={`${styles.ccIdWrJA64UUWkAD} ${styles.inputLabel}`}
                                        ></label>
                                        <div className={`${styles.ccIdM8G9Q3iKxHFS} ${styles.textDanger}`}>
                                            <span className={styles.ccId58OsHiTe5JA7}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12" className={`${styles.iwfdm} ${styles.field}`}>
                                    <div className={`${styles.ibin1} ${styles.inputWrap}`}>
                                        <input
                                            name="shipAddress1"
                                            type="text"
                                            placeholder="Address"
                                            className={`${styles.inl3f} ${styles.formControl} ${styles.chInput} ${styles.pristine} ${styles.untouched} pac-target-input`}
                                        />
                                        <label
                                            htmlFor="shipping_address1"
                                            className={`${styles.ccIdRcWy1l5lHHfO} ${styles.inputLabel}`}
                                        ></label>
                                        <div className={`${styles.ccId6aNHTfdY5uXS} ${styles.textDanger}`}>
                                            <span className={styles.ccIdSlFuxy8ZY68T}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12" className={`${styles.if8lgy} ${styles.field}`}>
                                    <div className={`${styles.ieon0q} ${styles.inputWrap}`}>
                                        <input
                                            name="shipAddress2"
                                            type="text"
                                            placeholder="Apartment, suite, etc. (optional)"
                                            className={`${styles.iwxytv} ${styles.formControl} ${styles.chInput} ${styles.pristine} ${styles.untouched} pac-target-input`}
                                        />
                                        <label className={`${styles.ccIdQ0l7N3HACQ4y} ${styles.inputLabel}`}></label>
                                        <div className={`${styles.ccIdAXxTMM6tQqF8} ${styles.textDanger}`}>
                                            <span className={styles.ccIdP2JHtR9FnmZu}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class=" col-lg-4" className={`${styles.ibouz} ${styles.field}`}>
                                    <div className={`${styles.i61qk} ${styles.inputWrap}`}>
                                        <input
                                            name="shipCity"
                                            type="text"
                                            placeholder="City"
                                            className={`${styles.icynp} ${styles.formControl} ${styles.chInput} ${styles.pristine} ${styles.untouched}`}
                                        />
                                        <label className={`${styles.ccIdMTqfd26j9dWX} ${styles.inputLabel}`}></label>
                                        <div className={`${styles.ccIdIIvASZrXxQcP} ${styles.textDanger}`}>
                                            <span className={styles.ccIdA4YzXxxbsrut}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="pr-xl-0  col-lg-4" className={`${styles.ilmow1} ${styles.field}`}>
                                    <div className={`${styles.i7n8s} ${styles.selectWrap}`}>
                                        <select
                                            name="shipState"
                                            type="select"
                                            className={`${styles.ifjbi} ${styles.formControl} ${styles.chSelect} ${styles.chDirty} ${styles.pristine} ${styles.untouched} ${styles.fkFormSelect}`}
                                        >
                                            <option value="">Select State</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="AR">Arkansas</option>
                                            <option value="AE">Armed Forces Africa</option>
                                            <option value="AA">Armed Forces Americas</option>
                                            <option value="AE">Armed Forces Canada</option>
                                            <option value="AE">Armed Forces Europe</option>
                                            <option value="AE">Armed Forces Middle East</option>
                                            <option value="AP">Armed Forces Pacific</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="DE">Delaware</option>
                                            <option value="DC">District of Columbia</option>
                                            <option value="FM">Federated States of Micronesia</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="GU">Guam</option>
                                            <option value="HI">Hawaii</option>
                                            <option value="ID">Idaho</option>
                                            <option value="IL">Illinois</option>
                                            <option value="IN">Indiana</option>
                                            <option value="IA">Iowa</option>
                                            <option value="KS">Kansas</option>
                                            <option value="KY">Kentucky</option>
                                            <option value="LA">Louisiana</option>
                                            <option value="ME">Maine</option>
                                            <option value="MD">Maryland</option>
                                            <option value="MA">Massachusetts</option>
                                            <option value="MI">Michigan</option>
                                            <option value="MN">Minnesota</option>
                                            <option value="MS">Mississippi</option>
                                            <option value="MO">Missouri</option>
                                            <option value="MT">Montana</option>
                                            <option value="NE">Nebraska</option>
                                            <option value="NV">Nevada</option>
                                            <option value="NH">New Hampshire</option>
                                            <option value="NJ">New Jersey</option>
                                            <option value="NM">New Mexico</option>
                                            <option value="NY">New York</option>
                                            <option value="NC">North Carolina</option>
                                            <option value="ND">North Dakota</option>
                                            <option value="MP">Northern Mariana Islands</option>
                                            <option value="OH">Ohio</option>
                                            <option value="OK">Oklahoma</option>
                                            <option value="OR">Oregon</option>
                                            <option value="PA">Pennsylvania</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="MH">Republic of Marshall Islands</option>
                                            <option value="RI">Rhode Island</option>
                                            <option value="SC">South Carolina</option>
                                            <option value="SD">South Dakota</option>
                                            <option value="TN">Tennessee</option>
                                            <option value="TX">Texas</option>
                                            <option value="UT">Utah</option>
                                            <option value="VT">Vermont</option>
                                            <option value="VI">Virgin Islands of the U.S.</option>
                                            <option value="VA">Virginia</option>
                                            <option value="WA">Washington</option>
                                            <option value="WV">West Virginia</option>
                                            <option value="WI">Wisconsin</option>
                                            <option value="WY">Wyoming</option>
                                        </select>
                                        <div className={`${styles.ccIdKZmgSv2tbUCa} ${styles.chSelectArrow}`}></div>
                                        <div className={`${styles.ccIdCWKPPP5dRpfd} ${styles.textDanger}`}>
                                            <span className={styles.ccIdLH18C4GedrIg}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class=" col-lg-4" className={`${styles.iub7a} ${styles.field}`}>
                                    <div lassName={`${styles.i8d7f} ${styles.inputWrap}`}>
                                        <input
                                            name="shipPostalCode"
                                            type="text"
                                            placeholder="Postal Code"
                                            className={`${styles.ixux3d} ${styles.formControl} ${styles.chInput} ${styles.pristine} ${styles.untouched}`}
                                        />
                                        <label className={`${styles.ccIdCExhe1FCpjtC} ${styles.inputLabel}`}></label>
                                        <div className={`${styles.ccIdFL6HArMXP6j2} ${styles.textDanger}`}>
                                            <span className={styles.ccId9USa5xOQBaFr}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12" className={`${styles.isk5ht} ${styles.field}`}>
                                    <div className={`${styles.iyvul4} ${styles.inputWrap}`}>
                                        <div className={`${styles.ccIdN6ObUNDGqdii} ${styles.fkCardPaymentFieldIcon}`}>
                                            <div className={`${styles.ccIdCI4UVhQgIh99} ${styles.tooltipper4}`}>
                                                <div className={styles.ccIdRXxus7AxHcFx}>
                                                    <i
                                                        aria-hidden="true"
                                                        className={`${styles.ccIdNX3B8g7KrVOx} ${styles.faQuestionCircle}`}
                                                    ></i>
                                                    <div className={styles.tooltipper4box}>
                                                        In case we need to contact you about your order
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            name="phoneNumber"
                                            type="text"
                                            placeholder="Phone (optional)"
                                            className={`${styles.ib1bpx} ${styles.formControl} ${styles.chInput} ${styles.pristine} ${styles.untouched} pac-target-input`}
                                        />
                                        <label className={`${styles.ccIdT2wU4Gr8JpZA} ${styles.inputLabel}`}></label>
                                        <div className={`${styles.ccIdRKtRTD5PXswH} ${styles.textDanger}`}>
                                            <span className={styles.ccId8g056Adetgtc}></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12" className={styles.iwrim6}>
                                    <ul
                                        id="cc-id-ga9IIgsRcPhj"
                                        className={`${styles.ccIdGa9IIgsRcPhj} ${styles.borderedUl} ${styles.withHover} ${styles.confirmTextForm}`}
                                    >
                                        <li id="cc-id-X5lJEDSRYhTh">
                                            <label id="cc-id-d9vD8gOwAU9a" className="info-summary-line">
                                                <span
                                                    className={`${styles.ccIdYtJD7G0zYuva} ${styles.chCustomLabel} ${styles.paddingLeft20}`}
                                                ></span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-12 field" className={`${styles.iywh43}  ${styles.bsFlexWrapClass}`}>
                                    <h3 className={styles.iqxgi}>Shipping method</h3>
                                    <div className={`${styles.dNone} ${styles.enterShippingMessage}`}>
                                        <p className={styles.ccIdTnMTtKcxxLcd}>
                                            Enter your shipping address to view available shipping methods.
                                        </p>
                                    </div>
                                    <div className={`${styles.shippingContainer} ${styles.ccIdOLVrW6REerF1}`}>
                                        <div
                                            style={{ paddingTop: '12px', width: '100%' }}
                                            className={styles.ccId4FYJ1AY7ButA}
                                        >
                                            <div className={styles.shipping} class="col-12">
                                                <div
                                                    className={`${styles.ih8fj9} ${styles.formCheck} ${styles.fkFormRadioButtonParent} ${styles.shipProf}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        value="2"
                                                        name="shipProfileId"
                                                        className={`${styles.i0zcsx} ${styles.fkFormProductRadioCheckbox} ${styles.fkFormRadio}`}
                                                    />
                                                    <label className={`${styles.iho1ip} ${styles.formCheckLabel} `}>
                                                        FREE USPS Premium Shipping 2-5 Days
                                                    </label>
                                                    <i className={styles.i5l5r7}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.ccIdNTsIclk5Ai0H} ${styles.clearfix}`}></div>
                            </div>

                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.io2r2} style={{ padding: '12px 10px', width: '100%' }}></div>
                        <hr className={`${styles.iveqb} ${styles.horizontalLineDefault}`}></hr>
                        <div className={styles.i9n3rb}></div>
                    </section>
                </div>
                <div className={styles.rightContent}>
                    <div>
                        {' '}
                        <h1>Cart</h1>
                        {selectedPackage ? (
                            <>
                                <h2>{selectedPackage.title}</h2>
                                <p>{selectedPackage.info}</p>
                                <p>Price: {selectedPackage.price}</p>
                                <p>
                                    Compare at: <s>{selectedPackage.compare}</s>
                                </p>
                            </>
                        ) : (
                            <p>No package selected.</p>
                        )}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
