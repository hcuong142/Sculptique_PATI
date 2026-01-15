import styles from './Home.module.scss';
import { ReactComponent as LeafLeft } from 'src/assets/icons/leafLeft.svg';
import { ReactComponent as LeafRight } from 'src/assets/icons/leafRight.svg';
import { ReactComponent as CloseButton } from 'src/assets/icons/closeButton.svg';
import { useState } from 'react';

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBottomRightVisible, setIsBottomRightVisible] = useState(true);
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
                    </div>
                </div>
            </div>
        </div>
    )
};

export const BottomRight = ({ onClose, onLearnMore }) => {
    
    return (
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
                <CloseButton />
            </button>
        </div>
    )
}