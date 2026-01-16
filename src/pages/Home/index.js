import styles from './Home.module.scss';
import { ReactComponent as LeafLeft } from 'src/assets/icons/leafLeft.svg';
import { ReactComponent as LeafRight } from 'src/assets/icons/leafRight.svg';
import { ReactComponent as CloseButton } from 'src/assets/icons/closeButton.svg';
import { ReactComponent as IconBadge } from 'src/assets/icons/badge.svg';
import { ReactComponent as IconDeliver } from 'src/assets/icons/deliver.svg';
import { ReactComponent as IconRefill } from 'src/assets/icons/refill.svg';
import { useState } from 'react';

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBottomRightVisible, setIsBottomRightVisible] = useState(true);
    const [activePackage, setActivePackage] = useState('three');
    const [expandedTabs, setExpandedTabs] = useState([]); 

  const toggleTab = (index) => {
    if (expandedTabs.includes(index)) {
      setExpandedTabs(expandedTabs.filter((i) => i !== index)); 
    } else {
      setExpandedTabs([...expandedTabs, index]); 
    }
  };
    return (
        <div className={styles.mainSection}>
            <div className={styles.pageWidth}>
                <div className={styles.mainProductContainer}> 
                    <div style={{width: '100%'}}>
                        <div className={styles.mainProductImages}>
                            <div className={styles.mainProduct1st}>
                                <img className={styles.img1st} loading="eager" src="//trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674"/>
                            </div>
                            <div className={styles.mainProduct2nd}>
                                <div>
                                    <img loading="eager" src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"/>
                                </div>
                                <div>
                                    <img loading="eager" src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"/>
                                </div>
                            </div>
                            <div className={styles.mainProduct3rd}>
                                <div>
                                    <img loading="eager" src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"/>
                                </div>
                                <div>
                                    <img loading="eager" src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"/>
                                </div>
                                <div>
                                    <img loading="eager" src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"/>
                                </div>
                            </div>
                            <div className={styles.mainProduct2ndBottom}>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216"/>
                                </div>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%'}}>
                        <div className={styles.mainProductReviews}>
                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"/>
                            </div>
                            <div>
                                <p>4.8/5 Excellent | Based on 2381 Reviews</p>
                            </div>
                        </div>
                        <h1 className={styles.mainProductTitle}>New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™</h1>
                        <div className={styles.mainProductFeatures}>
                            <div className={styles.mainProductFeatureLine}>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413"/>
                                </div>
                                <div>
                                    <p>Join over 93 Thousand who say - it WORKS!</p>
                                </div>
                            </div>
                            <div className={styles.mainProductFeatureLine}>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910"/>
                                </div>
                                <div>
                                    <p>Restores your body's natural 24-hour lymphatic cycle</p>
                                </div>
                            </div>
                            <div className={styles.mainProductFeatureLine}>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413"/>
                                </div>
                                <div>
                                    <p>Helps reduce fluid retention and the appearance of puffiness and bloating</p>
                                </div>
                            </div>
                            <div className={styles.mainProductFeatureLine}>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414"/>
                                </div>
                                <div>
                                    <p>Helps fall asleep faster, stay asleep longer and wake up energized</p>
                                </div>
                            </div>
                            <div className={styles.mainProductFeatureLine}>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414"/>
                                </div>
                                <div>
                                    <p>Eliminates joint stiffness, pain, morning creakiness and feel more grounded</p>
                                </div>
                            </div>
                            <div className={styles.mainProductFeatureLine}>
                                <div>
                                    <img loading="lazy" src="//trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413"/>
                                </div>
                                <div>
                                    <p>Boosts energy, mental clarity and emotional balance</p>
                                </div>
                            </div>
                        </div>
                        {isBottomRightVisible ? (
                            <BottomRight 
                                onClose={() => setIsBottomRightVisible(false)}
                                onLearnMore={() => setIsModalOpen(true)}
                            />
                        ) : (
                            <div 
                                className={styles.bottomRightPlaceholder}
                                onClick={() => setIsBottomRightVisible(true)}s
                            >
                            </div>
                        )}
                        {isModalOpen && (
                            <div className={styles.modalOverlay}>
                            <div className={styles.modalContent}>
                                <button 
                                className={styles.modalClose}
                                onClick={() => setIsModalOpen(false)}
                                >
                                x
                                </button>
                                <h2>Thông tin chi tiết về Clinicians' Choice</h2>
                                <p>
                                Đây là nội dung bạn muốn hiển thị trong modal.<br />
                                Bạn có thể custom thoải mái: thêm form, video, list bác sĩ, bảng so sánh...
                                </p>
                                {/* Thêm gì tùy ý */}
                            </div>
                            </div>
                        )}
                        <AddToCartPart setActivePackage={setActivePackage} activePackage={activePackage} toggleTab={toggleTab} expandedTabs={expandedTabs}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const BottomRight = ({ onClose, onLearnMore}) => {
    return (
        <div style={{marginBottom: '6px'}}>
            <div style={{opacity: 1, display: 'flex'}}>
                <div className={styles.background}>
                    <div className={styles.heading}>
                        <span>
                            <LeafLeft />
                        </span>
                        <p>
                            Clinicians' 
                            <br/>
                            Choice
                        </p>
                        <span>
                            <LeafRight />
                        </span>
                    </div>
                    <div className={styles.column}>
                        <p>
                            <span className={styles.bold}>373 clinicians </span>
                            share this on {' '}
                            <span className={styles.italics}>FrontrowMD </span>
                            without compensation. {' '}
                            <button onClick={onLearnMore} className={styles.learnMore}>
                                <p>Learn more</p>
                            </button>
                        </p>
                        <div className={styles.cta}>
                            <span className={styles.images}>
                                <img src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0" alt="Dr. Kimberly Rogers, MD" style={{zIndex: 0}}/>
                                <img src="https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4" alt="Ageless Aesthetics &amp; Beauty Bar" style={{zIndex: 1}}/>
                                <img src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a" alt="Dr. Green" style={{zIndex: 2}}/>
                            </span>
                            <button className={styles.testimonialCta}>
                                <p>Read their reviews</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className={styles.closeButton}>
                    <CloseButton style={{cursor: 'pointer'}}/>
                </button>
            </div>
        </div>
    )
}

export const AddToCartPart = ({ activePackage, setActivePackage, toggleTab, expandedTabs }) => {
    return (
        <div>
            <div className={styles.productSelectorContent} style={{marginTop: '0px'}}>
                <div className={styles.productSelectorOuter}>
                    <div key="one" className={`${styles.productSelectorBlock} ${activePackage === 'one' ? styles.active : ''}`} onClick={() => setActivePackage('one')}>
                        <div className={styles.productSelectorHead}>
                            <div>
                                <div className={styles.productSelectorBubble}>
                                    <div className={styles.productSelectorBubbleIn}></div>
                                </div>
                            </div>
                            <div>
                                <p className={styles.productSelectorTitle}>1 Bottle</p>
                                <p className={styles.productSelectorInfo}>1 bottle total | Save $27.99</p>
                            </div>
                            <div>
                                <p className={styles.productSelectorPrice}>$31.96</p>
                                <s className={styles.productSelectorCompare}>$59.95</s>
                            </div>
                        </div>
                        <div className={styles.productSelectorPerks}>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"/>
                                </div>
                                <div>
                                    <p><span className={styles.kachingBundlesFree} >Free USA Shipping</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key="two" className={`${styles.productSelectorBlock} ${activePackage === 'two' ? styles.active : ''}`} onClick={() => setActivePackage('two')}>
                        <div className={styles.productSelectorBadge}>
                            <IconBadge />
                        </div>
                        <div className={styles.productSelectorHead}>
                            <div>
                                <div className={styles.productSelectorBubble}>
                                    <div className={styles.productSelectorBubbleIn}></div>
                                </div>
                            </div>
                            <div>
                                <p className={styles.productSelectorTitle}>Buy 2 Get 1 Free</p>
                                <p className={styles.productSelectorInfo}>3 bottles total | Save $115.93</p>
                            </div>
                            <div>
                                <p className={styles.productSelectorPrice}>$63.92</p>
                                <s className={styles.productSelectorCompare}>$179.85</s>
                            </div>
                        </div>
                        <div className={styles.productSelectorPerks}>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"/>
                                </div>
                                <div>
                                    <p><span className={styles.kachingBundlesFree} >Free USA Shipping</span></p>
                                </div>
                            </div>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943"/>
                                </div>
                                <div>
                                    <p><span className={styles.kachingBundlesFree} >Free Anti-Bloating Protocol E-book</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key="three" className={`${styles.productSelectorBlock} ${activePackage === 'three' ? styles.active : ''}`} onClick={() => setActivePackage('three')}>
                        <div className={styles.productSelectorHead}>
                            <div>
                                <div className={styles.productSelectorBubble}>
                                    <div className={styles.productSelectorBubbleIn}></div>
                                </div>
                            </div>
                            <div>
                                <p className={styles.productSelectorTitle}>Buy 3 Get 2 Free</p>
                                <p className={styles.productSelectorInfo}>5 bottles total | Save $203.87</p>
                            </div>
                            <div>
                                <p className={styles.productSelectorPrice}>$95.88</p>
                                <s className={styles.productSelectorCompare}>$299.75</s>
                            </div>
                        </div>
                        <div className={styles.productSelectorPerks}>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"/>
                                </div>
                                <div>
                                    <p><span className={styles.kachingBundlesFree} >Free USA Shipping</span></p>
                                </div>
                            </div>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943"/>
                                </div>
                                <div>
                                    <p><span className={styles.kachingBundlesFree} >Free Anti-Bloating Protocol E-book</span></p>
                                </div>
                            </div>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309"/>
                                </div>
                                <div>
                                    <p><span className={styles.kachingBundlesFree} >$20 Gift Card</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.colPP}>
                <div>
                    <IconDeliver />
                </div>
                <div>
                    <p>Delivered on <span className={styles.colPPDeliver}>Thứ Tư, 21 Tháng 1</span> with Express Shipping</p>
                </div>
            </div>

            <div className={styles.productSelectorAtc}>
                ADD TO CART
            </div>

            <div className={styles.productAtcFooterLine}>
                <div className={styles.productAtcFooterInLine}>
                    <div>
                        <IconRefill />
                    </div>
                    <div>
                        <p className={styles.productAtcRefills} data="1">Refills Ship Monthly</p>
                        <p className={styles.productAtcRefillsHide} data="2">Refills Ship Bi-Monthly</p>
                        <p className={styles.productAtcRefillsHide} data="3">Refills Ship Every 12 Week</p>
                    </div>
                </div>
                <div className={styles.productAtcFooterInLine}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0779/0673/9384/files/clock.webp"/>
                    </div>
                    <div>
                        <p>Stop or Cancel Anytime</p>
                    </div>
                </div>
            </div>

            <img className={styles.productPaymentIcon} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654"/>
        
            <img loading="lazy" className={styles.desktopProductBF} src="//trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486"/>

            <div className={styles.productAtcIcons}>
                <div className={styles.productAtcIconLine}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"/>
                    </div>
                    <div>
                        <p>60-Day Money-Back Guarantee</p>
                    </div>
                </div>
                <div className={styles.productAtcIconLine}>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"/>
                    </div>
                    <div>
                        <p>Free Shipping From USA Included </p>
                    </div>
                </div>
            </div>

            <div className={styles.mainProductReview}>
                <div className={styles.mainProductReviewMeta}>
                    <div>
                        <img loading="lazy" src="//trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"/>
                    </div>
                    <div>
                        <p>Margaret Ellison | FL<span><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"/></span></p>
                        <img className={styles.mainProductReviewStars} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267"/>
                    </div>
                </div>
                <div className={styles.mainProductReviewContent}>
                    <p><strong>Even my husband noticed... the spark came back.  </strong></p>
                    <p>After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I've been present. Even my marriage feels renewed, not just in how I look but in how I feel. It's hard to explain, but once you try it you'll get it. I'd recommend this to my closest friends without question.</p>
                </div>
            </div>

            <div className={styles.productTabBlockOut}>
                <div className={`${styles.productTabBlock} ${expandedTabs.includes(0) ? styles.active : ''}`}>
                    <div className={styles.productTabThumb} onClick={() => toggleTab(0)}>
                        <p>Ingredients proven by science</p>
                        <span>
                            <img style={{ transform: expandedTabs.includes(0) ? 'rotate(45deg)' : 'rotate(0deg)' }} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"/>
                        </span>
                    </div>
                    <div className={styles.productTabContent} >
                        <p style={{fontWeight: 'bolder'}}>Sculptique Ingredients:</p>
                        <ul><li><strong>Echinacea purpurea Extract</strong> <span className={styles.liDesc}>- Known for its anti-inflammatory properties, it may support skin health.</span></li><li><strong>Dandelion Extract</strong> - Traditionally used as a diuretic, it may help reduce water retention.<br/><strong>Burdock Powder</strong> - Contains antioxidants that may promote skin clarity.</li><li><strong>Cleavers Extract</strong> - Believed to support lymphatic drainage and detoxification.</li><li><strong>Rutin</strong> - A flavonoid that may strengthen blood vessels and improve circulation.</li><li><strong>Bromelain Powder</strong> - An enzyme from pineapple that may reduce inflammation and support tissue repair.</li><li><strong>Lemon Powder</strong> - Rich in vitamin C, it may aid in collagen production and skin rejuvenation.</li><li><strong>Kelp Extract</strong> - A source of iodine and minerals that may support skin metabolism.</li></ul>
                        <p>These natural ingredients work together to reduce puffiness, bloating, fluid retention.</p>
                    </div>
                </div>
                <div className={`${styles.productTabBlock} ${expandedTabs.includes(1) ? styles.active : ''}`}>
                    <div className={styles.productTabThumb} onClick={() => toggleTab(1)}>
                        <p>How does it actually work?</p>
                        <span>
                            <img style={{ transform: expandedTabs.includes(1) ? 'rotate(45deg)' : 'rotate(0deg)' }} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"/>
                        </span>
                    </div>
                    <div className={styles.productTabContent} >
                        <p>Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid buildup that causes puffiness, inflammation, and water retention. It also reduces inflammation and boosts collagen production to help skin become firmer and smoother.</p>
                    </div>
                </div>
                <div className={`${styles.productTabBlock} ${expandedTabs.includes(2) ? styles.active : ''}`}>
                    <div className={styles.productTabThumb} onClick={() => toggleTab(2)}>
                        <p>Shipping and returns</p>
                        <span>
                            <img style={{ transform: expandedTabs.includes(2) ? 'rotate(45deg)' : 'rotate(0deg)' }} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"/>
                        </span>
                    </div>
                    <div className={styles.productTabContent} >
                        <p>All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are usually shipped out within 1-2 working days, and you should receive the order within 3-7 working days for domestic USA orders, and within 10 working days for International orders.</p>
                        <p>We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you can take advantage of our guarantee and ship back the product to us to get your return within 60 days of receiving your order.</p>
                    </div>
                </div>
            </div>


        </div>        
    )
}