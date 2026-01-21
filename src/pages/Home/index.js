import styles from './Home.module.scss';
import { ReactComponent as LeafLeft } from 'src/assets/icons/leafLeft.svg';
import { ReactComponent as LeafRight } from 'src/assets/icons/leafRight.svg';
import { ReactComponent as CloseButton } from 'src/assets/icons/closeButton.svg';
import { ReactComponent as IconBadge } from 'src/assets/icons/badge.svg';
import { ReactComponent as IconDeliver } from 'src/assets/icons/deliver.svg';
import { ReactComponent as IconRefill } from 'src/assets/icons/refill.svg';
import { ReactComponent as IconBack } from 'src/assets/icons/iconBack.svg';
import { ReactComponent as IconClose } from 'src/assets/icons/close.svg';
import { ReactComponent as IconPlus } from 'src/assets/icons/iconPlus.svg';
import { ReactComponent as IconMinus } from 'src/assets/icons/iconMinus.svg';
import { ReactComponent as IconReview } from 'src/assets/icons/iconReview.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import { AsSeeIn } from '../AsSeeIn';
import { JudgeOuter } from '../JudgeOuter';
import { HiddenSystem } from '../HiddenSystem';
import { AskQuestion } from '../AskQuestion';
import { useNavigate } from 'react-router-dom';
import { productImages, SPECIAL_IMAGE_INDEX, packages, providers } from '~/data/data';

export const Home = ({ productId = 2691 }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenNutri, setIsModalOpenNutri] = useState(false);
    const [isBottomRightVisible, setIsBottomRightVisible] = useState(true);
    const [expandedTabs, setExpandedTabs] = useState([]);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const navigate = useNavigate();
    const [activePackage, setActivePackage] = useState('two');
    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const thumbnailRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth > 678);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth > 678);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (!thumbnailRef.current) return;

        const container = thumbnailRef.current;
        const activeThumb = container.children[currentSlide];

        if (!activeThumb) return;

        const containerRect = container.getBoundingClientRect();
        const thumbRect = activeThumb.getBoundingClientRect();

        const relativeLeft = thumbRect.left - containerRect.left;

        // Nếu thumbnail active đang nằm ngoài vùng nhìn (bên trái hoặc phải)
        if (relativeLeft < 0 || relativeLeft + thumbRect.width > containerRect.width) {
            // Scroll sao cho thumbnail active nằm giữa container
            const scrollTo = activeThumb.offsetLeft - containerRect.width / 2 + thumbRect.width / 2;

            // Giới hạn scrollTo trong khoảng hợp lệ
            const maxScroll = container.scrollWidth - container.clientWidth;
            const safeScroll = Math.max(0, Math.min(scrollTo, maxScroll));

            container.scrollTo({
                left: safeScroll,
                behavior: 'smooth',
            });
        }
        // Nếu đã visible rồi thì không cần scroll (tránh nhảy lung tung)
    }, [currentSlide]);
    const handleAddToCart = () => {
        const selectedDetails = packages[activePackage];

        // Chuyển hướng đến trang giỏ hàng và truyền dữ liệu
        navigate('/checkout', { state: { selectedPackage: selectedDetails } });
    };

    const toggleTab = (index) => {
        if (expandedTabs.includes(index)) {
            setExpandedTabs(expandedTabs.filter((i) => i !== index));
        } else {
            setExpandedTabs([...expandedTabs, index]);
        }
    };

    const closeMainModal = () => {
        setIsModalOpen(false);
        setSelectedProvider(null);
    };

    const handleProviderClick = (provider) => {
        setSelectedProvider(provider);
    };

    const handleBackToMain = () => {
        setSelectedProvider(null);
    };

    return (
        <div>
            <div className={styles.mainSection}>
                <div className={styles.pageWidth}>
                    <div className={styles.mainProductContainer}>
                        <div style={{ width: '100%' }}>
                            {isMobile ? (
                                <>
                                    <div className={styles.mainProductImages}>
                                        <div className={styles.mainProduct1st}>
                                            <img
                                                alt=" "
                                                className={styles.img1st}
                                                src={productImages[0]}
                                                loading="eager"
                                            />
                                            <div
                                                onClick={() => setIsModalOpenNutri(true)}
                                                className={styles.mainProductNutritionInfo}
                                            >
                                                <span>
                                                    <img
                                                        alt=" "
                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                                                    />
                                                </span>
                                                <span>Nutritional Information</span>
                                            </div>
                                            {isModalOpenNutri && (
                                                <div className={styles.nutritionPopupOuter} style={{ display: 'flex' }}>
                                                    <div className={styles.nutritionPopupInner}>
                                                        <img
                                                            alt=" "
                                                            onClick={() => setIsModalOpenNutri(false)}
                                                            loading="lazy"
                                                            className={styles.nutritionPopupClose}
                                                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand.png?v=1752069152"
                                                        />
                                                        <h2 className={`${styles.mainProductTitle} ${styles.centered}`}>
                                                            Nutritional Information
                                                        </h2>
                                                        {isMobile ? (
                                                            <img
                                                                alt=" "
                                                                style={{ aspectRatio: '0' }}
                                                                className={`${styles.DesktopOnly} ${styles.nutritionImage}`}
                                                                src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
                                                            />
                                                        ) : (
                                                            <img
                                                                alt=" "
                                                                style={{ aspectRatio: '0' }}
                                                                class="Mobile_only nutrition_image"
                                                                src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
                                                            />
                                                        )}

                                                        <div className={styles.mainProductBtn}>
                                                            Try Lymphatic Drainage Risk-Free
                                                        </div>
                                                        <div className={styles.mainProductPoints}>
                                                            <div className={styles.mainProductPointLine}>
                                                                <div>
                                                                    <img
                                                                        alt=" "
                                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p>Made &amp; produced in the USA</p>
                                                                </div>
                                                            </div>
                                                            <div className={styles.mainProductPointLine}>
                                                                <div>
                                                                    <img
                                                                        alt=" "
                                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p>100% Natural Ingredients</p>
                                                                </div>
                                                            </div>
                                                            <div className={styles.mainProductPointLine}>
                                                                <div>
                                                                    <img
                                                                        alt=" "
                                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p>60-Day Money-Back Guarantee</p>
                                                                </div>
                                                            </div>
                                                            <div className={styles.mainProductPointLine}>
                                                                <div>
                                                                    <img
                                                                        alt=" "
                                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p>Free Shipping</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <img
                                                alt=" "
                                                className={styles.mainProducTBfBadge}
                                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                                            />
                                        </div>
                                        <div className={styles.mainProduct2nd}>
                                            <div>
                                                <img
                                                    alt=" "
                                                    loading="eager"
                                                    src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    alt=" "
                                                    loading="eager"
                                                    src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.mainProduct3rd}>
                                            <div>
                                                <img
                                                    alt=" "
                                                    loading="eager"
                                                    src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    alt=" "
                                                    loading="eager"
                                                    src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    alt=" "
                                                    loading="eager"
                                                    src="//trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.mainProduct2ndBottom}>
                                            <div>
                                                <img
                                                    alt=" "
                                                    loading="lazy"
                                                    src="//trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    alt=" "
                                                    loading="lazy"
                                                    src="//trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.mainProductImages}>
                                        <div className={styles.mainProduct1st}>
                                            <button
                                                type="button"
                                                className={`${styles.slickPrev} ${styles.pullLeft} ${styles.slickArrow}`}
                                                onClick={() => sliderRef.current?.slickPrev()}
                                            >
                                                <img
                                                    className={styles.leftArrow}
                                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"
                                                    alt="Previous slide"
                                                />
                                            </button>

                                            <Slider
                                                ref={sliderRef}
                                                dots={false}
                                                infinite={true}
                                                speed={500}
                                                slidesToShow={1}
                                                slidesToScroll={1}
                                                arrows={false}
                                                adaptiveHeight={true}
                                                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
                                                className={styles.mobileSlider}
                                            >
                                                {productImages.map((img, index) => (
                                                    <div key={index}>
                                                        <div className={styles.mainProductImageBox}>
                                                            <img
                                                                loading={index === 0 ? 'eager' : 'lazy'}
                                                                className={styles.imgMobile}
                                                                src={img}
                                                                alt={`Product image ${index + 1}`}
                                                            />

                                                            {/* Chỉ hiển thị badge sale + nutritional info khi đang ở slide đặc biệt (index 0) */}
                                                            {index === SPECIAL_IMAGE_INDEX && (
                                                                <>
                                                                    <img
                                                                        className={styles.mainProducTBfBadge}
                                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
                                                                        alt="New Year Sale Badge"
                                                                    />
                                                                    <div
                                                                        onClick={() => setIsModalOpenNutri(true)}
                                                                        className={styles.mainProductNutritionInfo}
                                                                    >
                                                                        <span>
                                                                            <img
                                                                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1_cf2e7df4-c113-4c3a-be49-f876ec94d873.png?v=1766822629"
                                                                                alt="Nutritional leaves icon"
                                                                            />
                                                                        </span>
                                                                        <span>Nutritional Information</span>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>

                                            <button
                                                type="button"
                                                className={`${styles.slickNext} ${styles.pullRight} ${styles.slickArrow}`}
                                                onClick={() => sliderRef.current?.slickNext()}
                                            >
                                                <img
                                                    className={styles.rightArrow}
                                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"
                                                    alt="Next slide"
                                                    style={{ transform: 'rotate(180deg)' }}
                                                />
                                            </button>
                                        </div>

                                        {/* Thumbnail gallery */}
                                        <div ref={thumbnailRef} className={styles.thumbnailGallery}>
                                            {productImages.map((img, index) => (
                                                <div
                                                    key={index}
                                                    className={`${styles.thumbnailItem} ${currentSlide === index ? styles.active : ''}`}
                                                    onClick={() => sliderRef.current?.slickGoTo(index)}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        className={styles.thumbnailImage}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Modal Nutritional Information */}
                                        {isModalOpenNutri && (
                                            <div className={styles.nutritionPopupOuter} style={{ display: 'flex' }}>
                                                <div className={styles.nutritionPopupInner}>
                                                    <img
                                                        onClick={() => setIsModalOpenNutri(false)}
                                                        loading="lazy"
                                                        className={styles.nutritionPopupClose}
                                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand.png?v=1752069152"
                                                        alt="Close modal"
                                                    />
                                                    <h2 className={`${styles.mainProductTitle} ${styles.centered}`}>
                                                        Nutritional Information
                                                    </h2>

                                                    {isMobile ? (
                                                        <img
                                                            style={{ aspectRatio: '0' }}
                                                            className={`${styles.DesktopOnly} ${styles.nutritionImage}`}
                                                            src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
                                                            alt="Nutritional info desktop"
                                                        />
                                                    ) : (
                                                        <img
                                                            style={{ aspectRatio: '0' }}
                                                            className="Mobile_only nutrition_image"
                                                            src="//trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
                                                            alt="Nutritional info mobile"
                                                        />
                                                    )}

                                                    <div className={styles.mainProductBtn}>
                                                        Try Lymphatic Drainage Risk-Free
                                                    </div>

                                                    <div className={styles.mainProductPoints}>
                                                        <div className={styles.mainProductPointLine}>
                                                            <div>
                                                                <img
                                                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    alt="Check icon"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p>Made & produced in the USA</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.mainProductPointLine}>
                                                            <div>
                                                                <img
                                                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    alt="Check icon"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p>100% Natural Ingredients</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.mainProductPointLine}>
                                                            <div>
                                                                <img
                                                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    alt="Check icon"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p>60-Day Money-Back Guarantee</p>
                                                            </div>
                                                        </div>
                                                        <div className={styles.mainProductPointLine}>
                                                            <div>
                                                                <img
                                                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Mark_Icon_ce1ad4c9-5ec0-4162-969e-b565980ab82b.png?v=1752127285"
                                                                    alt="Check icon"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p>Free Shipping</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ width: '100%' }}>
                            <div className={styles.mainProductReviews}>
                                <div>
                                    <img
                                        alt=" "
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_229.png?v=1752064359"
                                    />
                                </div>
                                <div>
                                    <p>4.8/5 Excellent | Based on 2381 Reviews</p>
                                </div>
                            </div>
                            <h1 className={styles.mainProductTitle}>
                                New Maximum Potency Formula - Lymphatic Drainage Capsules by Sculptique™
                            </h1>
                            <div className={styles.mainProductFeatures}>
                                <div className={styles.mainProductFeatureLine}>
                                    <div>
                                        <img
                                            alt=" "
                                            loading="lazy"
                                            src="//trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413"
                                        />
                                    </div>
                                    <div>
                                        <p>Join over 93 Thousand who say - it WORKS!</p>
                                    </div>
                                </div>
                                <div className={styles.mainProductFeatureLine}>
                                    <div>
                                        <img
                                            alt=" "
                                            loading="lazy"
                                            src="//trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910"
                                        />
                                    </div>
                                    <div>
                                        <p>Restores your body's natural 24-hour lymphatic cycle</p>
                                    </div>
                                </div>
                                <div className={styles.mainProductFeatureLine}>
                                    <div>
                                        <img
                                            alt=" "
                                            loading="lazy"
                                            src="//trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413"
                                        />
                                    </div>
                                    <div>
                                        <p>Helps reduce fluid retention and the appearance of puffiness and bloating</p>
                                    </div>
                                </div>
                                <div className={styles.mainProductFeatureLine}>
                                    <div>
                                        <img
                                            alt=" "
                                            loading="lazy"
                                            src="//trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414"
                                        />
                                    </div>
                                    <div>
                                        <p>Helps fall asleep faster, stay asleep longer and wake up energized</p>
                                    </div>
                                </div>
                                <div className={styles.mainProductFeatureLine}>
                                    <div>
                                        <img
                                            alt=" "
                                            loading="lazy"
                                            src="//trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414"
                                        />
                                    </div>
                                    <div>
                                        <p>
                                            Eliminates joint stiffness, pain, morning creakiness and feel more grounded
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.mainProductFeatureLine}>
                                    <div>
                                        <img
                                            alt=" "
                                            loading="lazy"
                                            src="//trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413"
                                        />
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
                                    style={{ marginBottom: '6px', cursor: 'pointer' }}
                                    onClick={() => setIsBottomRightVisible(true)}
                                >
                                    <div
                                        style={{
                                            opacity: isBottomRightVisible ? 1 : 0,
                                            visibility: isBottomRightVisible ? 'visible' : 'hidden',
                                            pointerEvents: isBottomRightVisible ? 'auto' : 'none',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                        }}
                                    >
                                        <div className={styles.background}>
                                            <div
                                                className={styles.heading}
                                                onClick={() => setIsBottomRightVisible(true)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <span>
                                                    <LeafLeft />
                                                </span>
                                                <p>
                                                    Clinicians'
                                                    <br />
                                                    Choice
                                                </p>
                                                <span>
                                                    <LeafRight />
                                                </span>
                                            </div>

                                            <div className={styles.column}>
                                                <p>
                                                    <span className={styles.bold}>373 clinicians </span>
                                                    share this on <span className={styles.italics}>FrontrowMD </span>
                                                    without compensation.{' '}
                                                    <button className={styles.learnMore}>
                                                        <p>Learn more</p>
                                                    </button>
                                                </p>

                                                <div className={styles.cta}>
                                                    <span className={styles.images}>
                                                        <img
                                                            src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0"
                                                            alt="Dr. Kimberly Rogers, MD"
                                                            style={{ zIndex: 0 }}
                                                        />
                                                        <img
                                                            src="https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4"
                                                            alt="Ageless Aesthetics & Beauty Bar"
                                                            style={{ zIndex: 1 }}
                                                        />
                                                        <img
                                                            src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a"
                                                            alt="Dr. Green"
                                                            style={{ zIndex: 2 }}
                                                        />
                                                    </span>
                                                    <button className={styles.testimonialCta}>
                                                        <p>Read their reviews</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            className={styles.closeButton}
                                            onClick={() => setIsBottomRightVisible(false)}
                                        >
                                            <CloseButton style={{ cursor: 'pointer' }} />
                                        </button>
                                    </div>
                                </div>
                            )}
                            {isModalOpen && (
                                <div className={styles.modalOverlay}>
                                    {selectedProvider ? (
                                        <div className={styles.frModal}>
                                            <div className={styles.frModalHeaderRow}>
                                                {selectedProvider ? (
                                                    <button
                                                        onClick={handleBackToMain}
                                                        type="button"
                                                        className={styles.frBackIcon}
                                                    >
                                                        <IconBack />
                                                    </button>
                                                ) : (
                                                    <div>
                                                        <button
                                                            onClick={() => setIsModalOpen(false)}
                                                            type="button"
                                                            className={styles.frBackIcon}
                                                        >
                                                            <IconBack />
                                                        </button>
                                                    </div>
                                                )}
                                                <span className={styles.frModalLogo}>
                                                    <a
                                                        id="link-to-marketing-site"
                                                        onclick="trackClickToMarketingSite()"
                                                        href="https://frontrowmd.com/?utm_medium=referral&amp;utm_campaign=client_referrals&amp;utm_source=Sculptique&amp;utm_content=banner"
                                                        target="_blank"
                                                        aria-label="Learn more about FrontrowMD in a new tab"
                                                        rel="noreferrer"
                                                    >
                                                        <svg
                                                            width="200"
                                                            height="32"
                                                            viewBox="0 0 1048 166"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clip-path="url(#clip0_504_153)">
                                                                <path
                                                                    d="M242.305 140.276C241.201 140.276 240.374 140.138 239.823 139.862C239.271 139.586 238.995 139.113 238.995 138.453C238.995 137.577 239.35 136.966 240.069 136.631C240.788 136.296 241.694 136.03 242.797 135.804C245.338 135.252 247.151 134.454 248.254 133.4C249.357 132.356 249.909 130.731 249.909 128.515V81.8454C248.806 81.8454 247.535 81.8159 246.107 81.7666C244.669 81.7075 243.073 81.6287 241.31 81.5204C240.975 81.412 240.512 81.0279 239.901 80.358C239.291 79.6981 238.995 79.0874 238.995 78.5358C238.995 78.3191 239.163 78.1221 239.488 77.9546C239.813 77.7872 240.039 77.6493 240.148 77.5409C242.137 76.5461 243.841 75.6694 245.279 74.8913C246.708 74.123 248.254 73.3448 249.909 72.5765C249.909 62.9826 251.091 54.9844 253.465 48.5819C255.838 42.1892 258.902 37.1066 262.645 33.3538C266.397 29.6009 270.367 26.9316 274.563 25.326C278.759 23.7303 282.669 22.9226 286.314 22.9226C292.49 22.9226 297.07 23.8584 300.045 25.7397C303.019 27.6211 304.516 29.9851 304.516 32.8514C304.516 35.0578 303.965 36.7126 302.862 37.8158C301.759 38.919 300.439 39.4706 298.892 39.4706C297.897 39.4706 296.991 39.0865 296.164 38.3083C295.336 37.54 294.371 36.6535 293.268 35.6587C291.83 34.2206 290.067 32.8711 287.969 31.6005C285.871 30.3298 283.004 29.6994 279.36 29.6994C274.169 29.6994 269.904 31.9649 266.535 36.4861C263.167 41.0072 261.492 47.9613 261.492 57.3386V71.8969C261.492 72.5568 261.679 73.0001 262.073 73.2168C262.458 73.4433 262.871 73.5517 263.314 73.5517H283.999C284.551 73.5517 285.043 73.7191 285.487 74.0442C285.93 74.3791 286.146 74.8223 286.146 75.3641C286.146 76.1422 286.068 76.9598 285.9 77.8463C285.733 78.7328 285.487 79.5011 285.152 80.1611C284.817 81.0476 284.324 81.481 283.664 81.481H264.634C263.314 81.481 262.458 81.678 262.073 82.0621C261.689 82.4463 261.492 82.9683 261.492 83.6381V128.485C261.492 130.692 262.211 132.317 263.64 133.371C265.068 134.425 267.993 135.223 272.406 135.774C274.947 136.109 276.208 136.986 276.208 138.424C276.208 139.084 275.932 139.557 275.381 139.832C274.829 140.108 274.002 140.246 272.898 140.246C269.589 140.246 266.663 140.108 264.132 139.832C261.591 139.557 258.892 139.419 256.026 139.419C254.144 139.419 252.608 139.478 251.396 139.586C250.185 139.695 248.914 139.832 247.594 140C246.274 140.167 244.501 140.246 242.295 140.246L242.305 140.276Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M295.746 140.283C294.642 140.283 293.815 140.145 293.263 139.869C292.712 139.594 292.436 139.121 292.436 138.461C292.436 137.584 292.771 137.003 293.431 136.727C294.091 136.451 295.027 136.146 296.248 135.821C298.346 135.269 299.912 134.472 300.966 133.418C302.02 132.364 302.542 131.073 302.542 129.527V93.9486C302.542 90.9739 302.099 88.3833 301.222 86.1671C300.336 83.9607 298.513 82.5817 295.765 82.0301C295.322 81.9217 294.938 81.6459 294.603 81.2027C294.268 80.7594 294.111 80.326 294.111 79.8828C294.111 78.7796 294.603 78.1196 295.598 77.8931C298.464 77.0065 301.468 75.7162 304.62 74.0023C307.762 72.2884 310.215 70.8897 311.988 69.7865C312.648 69.3432 313.17 69.0379 313.564 68.8803C313.948 68.7128 314.254 68.634 314.47 68.634C315.022 68.634 315.298 69.0182 315.298 69.7963C315.298 70.1312 315.268 70.9586 315.219 72.2785C315.16 73.5984 315.11 75.1449 315.051 76.908C314.992 78.6712 314.913 80.4344 314.805 82.2074C314.805 82.4339 314.913 82.5423 315.14 82.5423C316.903 80.3359 318.863 78.4053 321.011 76.7504C323.158 75.0956 325.364 73.7757 327.63 72.7809C329.885 71.786 332.072 71.2935 334.17 71.2935C336.485 71.2935 338.386 71.786 339.883 72.7809C341.38 73.7757 342.119 75.0464 342.119 76.583C342.119 77.6862 341.813 78.8978 341.213 80.2275C340.602 81.5474 339.804 82.7097 338.809 83.7046C337.814 84.6994 336.77 85.1919 335.667 85.1919C335.007 85.1919 334.288 85.054 333.52 84.7782C332.742 84.5024 331.924 84.1478 331.038 83.7046C330.151 83.3697 329.275 83.0446 328.388 82.7097C327.502 82.3748 326.625 82.2172 325.738 82.2172C323.089 82.2172 320.528 83.153 318.046 85.0343C315.564 86.9157 314.322 90.6094 314.322 96.1254V129.556C314.322 130.994 315.091 132.177 316.637 133.112C318.184 134.048 320.331 134.964 323.089 135.841C324.3 136.176 325.236 136.501 325.906 136.836C326.576 137.17 326.901 137.722 326.901 138.49C326.901 139.702 325.798 140.313 323.591 140.313C320.282 140.313 317.77 140.175 316.066 139.899C314.352 139.623 312.067 139.485 309.201 139.485C307.319 139.485 305.812 139.544 304.65 139.653C303.488 139.761 302.276 139.899 301.005 140.066C299.735 140.234 298.001 140.313 295.795 140.313L295.746 140.283Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M376.701 142.108C370.525 142.108 364.95 140.67 359.985 137.804C355.021 134.937 351.071 130.998 348.156 125.974C345.23 120.96 343.772 115.247 343.772 108.845C343.772 104.215 344.679 99.6942 346.501 95.2715C348.323 90.8587 350.884 86.83 354.194 83.1954C357.503 79.5509 361.364 76.655 365.777 74.5077C370.19 72.3604 374.928 71.2769 380.01 71.2769C386.403 71.2769 392.175 72.8233 397.307 75.9064C402.438 78.9993 406.516 83.0476 409.55 88.0711C412.584 93.0946 414.101 98.5811 414.101 104.54C414.101 110.943 412.692 117.01 409.885 122.743C407.068 128.486 402.911 133.145 397.395 136.73C391.879 140.316 384.984 142.108 376.71 142.108H376.701ZM380.178 137.144C383.93 137.144 387.289 136.425 390.274 134.997C393.248 133.568 395.573 131.244 397.228 128.042C398.548 125.511 399.434 122.418 399.877 118.774C400.321 115.129 400.537 111.711 400.537 108.51C400.537 103.211 399.572 98.1083 397.641 93.203C395.711 88.2977 393.012 84.269 389.535 81.1269C386.058 77.9847 381.951 76.4087 377.203 76.4087C374.228 76.4087 371.549 76.8815 369.175 77.8173C366.801 78.753 364.625 80.4965 362.635 83.0279C360.429 85.7859 358.991 89.1546 358.331 93.1242C357.671 97.0938 357.336 101.063 357.336 105.043C357.336 110.45 358.331 115.612 360.31 120.517C362.3 125.432 364.999 129.431 368.417 132.514C371.835 135.607 375.755 137.144 380.168 137.144H380.178Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M422.25 140.279C421.256 140.279 420.458 140.141 419.847 139.866C419.236 139.59 418.941 139.117 418.941 138.457C418.941 137.58 419.276 136.999 419.936 136.723C420.596 136.448 421.531 136.142 422.753 135.817C424.408 135.374 426.003 134.773 427.55 133.995C429.096 133.227 429.864 131.739 429.864 129.523V93.9448C429.864 90.9701 429.559 88.4288 428.958 86.3308C428.348 84.2327 426.614 82.8045 423.748 82.0263C423.304 81.8096 422.92 81.5535 422.585 81.2777C422.25 81.0019 422.093 80.5291 422.093 79.8692C422.093 78.6576 422.585 77.9977 423.58 77.8795C427.441 76.8846 430.583 75.6731 433.016 74.235C435.439 72.8067 437.813 71.2012 440.128 69.438C440.463 69.2213 440.758 69.0243 441.034 68.8568C441.31 68.6894 441.615 68.6106 441.94 68.6106C442.157 68.6106 442.354 68.7189 442.522 68.9455C442.689 69.172 442.768 69.438 442.768 69.7729C442.768 70.551 442.63 72.1172 442.354 74.4911C442.078 76.8649 441.94 78.8251 441.94 80.3617C441.94 80.8049 441.97 81.2186 442.019 81.6028C442.078 81.9869 442.157 82.243 442.265 82.3514C446.127 78.7069 450.234 75.9587 454.597 74.0774C458.951 72.2059 463.728 71.2603 468.909 71.2603C474.09 71.2603 478.779 73.4667 482.315 77.8795C485.841 82.2923 487.614 87.7492 487.614 94.26V129.503C487.614 131.71 488.383 133.168 489.929 133.887C491.475 134.606 493.071 135.236 494.726 135.788C495.603 136.123 496.459 136.477 497.287 136.861C498.114 137.246 498.528 137.886 498.528 138.762C498.528 139.422 498.144 139.836 497.366 140.004C496.587 140.171 495.878 140.25 495.218 140.25C493.012 140.25 491.298 140.171 490.087 140.004C488.875 139.836 487.713 139.698 486.61 139.59C485.506 139.481 483.96 139.422 481.98 139.422C480.099 139.422 478.562 139.481 477.351 139.59C476.139 139.698 474.898 139.836 473.627 140.004C472.357 140.171 470.623 140.25 468.417 140.25C467.865 140.25 467.176 140.171 466.348 140.004C465.521 139.836 465.107 139.422 465.107 138.762C465.107 137.876 465.521 137.246 466.348 136.861C467.176 136.477 468.033 136.113 468.909 135.788C470.564 135.236 472.16 134.606 473.706 133.887C475.253 133.168 476.021 131.71 476.021 129.503V94.7525C476.021 89.8965 474.672 86.1239 471.963 83.4152C469.254 80.7163 465.649 79.3077 461.128 79.1994C457.158 79.1994 453.681 79.8396 450.707 81.1004C447.732 82.3711 445.082 83.9471 442.768 85.8186C442.325 86.2618 441.99 86.843 441.773 87.5522C441.546 88.2712 441.438 88.9607 441.438 89.6207V129.503C441.438 131.71 442.206 133.197 443.753 133.975C445.299 134.744 446.895 135.354 448.55 135.798C451.091 136.458 452.352 137.344 452.352 138.447C452.352 139.107 452.076 139.58 451.524 139.856C450.973 140.132 450.145 140.269 449.042 140.269C446.836 140.269 445.092 140.191 443.832 140.023C442.561 139.856 441.379 139.718 440.276 139.61C439.173 139.501 437.626 139.442 435.646 139.442C433.765 139.442 432.258 139.501 431.096 139.61C429.933 139.718 428.722 139.856 427.451 140.023C426.181 140.191 424.447 140.269 422.241 140.269L422.25 140.279Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M527.716 142.101C522.309 142.101 518.093 140.446 515.059 137.137C512.025 133.827 510.508 128.922 510.508 122.411V84.0155C510.508 83.129 510.173 82.4986 509.514 82.1145C508.854 81.7303 507.415 81.5333 505.209 81.5333H504.214C503.663 81.5333 503.19 81.1787 502.806 80.4597C502.422 79.7406 502.225 79.0019 502.225 78.2237C502.225 78.007 502.392 77.6721 502.717 77.2289C503.052 76.7856 503.269 76.5098 503.377 76.4015C505.583 74.855 507.593 73.3184 509.415 71.772C511.237 70.2255 512.892 68.7086 514.379 67.2212C515.867 65.7339 517.108 64.3844 518.103 63.163C518.654 62.6114 519.127 62.1485 519.511 61.7545C519.895 61.3703 520.368 61.1733 520.92 61.1733C521.471 61.1733 521.993 61.2817 522.496 61.5082C522.988 61.7348 523.185 62.2273 523.077 62.9956L522.249 70.4422C522.141 71.6538 522.417 72.4812 523.077 72.9244C523.737 73.3677 524.791 73.5844 526.219 73.5844H545.081C545.525 73.5844 545.909 73.9488 546.244 74.658C546.579 75.3771 546.736 76.234 546.736 77.219C546.736 78.204 546.569 79.1792 546.244 80.1149C545.909 81.0507 545.525 81.5235 545.081 81.5235H528.701C525.943 81.5235 524.15 81.75 523.323 82.1834C522.496 82.6267 522.082 83.9466 522.082 86.153V118.757C522.082 123.169 523.018 126.646 524.899 129.178C526.771 131.719 529.479 132.98 533.005 132.98C536.207 132.98 538.689 132.734 540.452 132.231C542.215 131.739 543.821 130.99 545.249 129.995C545.466 129.779 545.692 129.66 545.909 129.66C546.352 129.66 546.657 129.907 546.815 130.409C546.973 130.911 547.061 131.434 547.061 131.985C547.061 132.537 546.155 133.64 544.333 135.295C542.511 136.95 540.137 138.496 537.221 139.924C534.296 141.352 531.124 142.072 527.706 142.072L527.716 142.101Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M556.497 140.283C555.393 140.283 554.566 140.145 554.014 139.869C553.463 139.594 553.187 139.121 553.187 138.461C553.187 137.584 553.522 137.003 554.182 136.727C554.842 136.451 555.778 136.146 556.999 135.821C559.097 135.269 560.663 134.472 561.717 133.418C562.771 132.364 563.293 131.073 563.293 129.527V93.9486C563.293 90.9739 562.85 88.3833 561.973 86.1671C561.087 83.9607 559.264 82.5817 556.516 82.0301C556.073 81.9217 555.689 81.6459 555.354 81.2027C555.019 80.7594 554.862 80.326 554.862 79.8828C554.862 78.7796 555.354 78.1196 556.349 77.8931C559.215 77.0065 562.219 75.7162 565.371 74.0023C568.513 72.2884 570.966 70.8897 572.739 69.7865C573.399 69.3432 573.921 69.0379 574.315 68.8803C574.699 68.7128 575.004 68.634 575.221 68.634C575.773 68.634 576.049 69.0182 576.049 69.7963C576.049 70.1312 576.019 70.9586 575.97 72.2785C575.911 73.5984 575.861 75.1449 575.802 76.908C575.743 78.6712 575.664 80.4344 575.556 82.2074C575.556 82.4339 575.664 82.5423 575.891 82.5423C577.654 80.3359 579.614 78.4053 581.762 76.7504C583.909 75.0956 586.115 73.7757 588.381 72.7809C590.636 71.786 592.823 71.2935 594.921 71.2935C597.236 71.2935 599.137 71.786 600.634 72.7809C602.131 73.7757 602.87 75.0464 602.87 76.583C602.87 77.6862 602.564 78.8978 601.964 80.2275C601.353 81.5474 600.555 82.7097 599.56 83.7046C598.565 84.6994 597.521 85.1919 596.418 85.1919C595.758 85.1919 595.039 85.054 594.271 84.7782C593.493 84.5024 592.675 84.1478 591.789 83.7046C590.902 83.3697 590.026 83.0446 589.139 82.7097C588.253 82.3748 587.376 82.2172 586.489 82.2172C583.84 82.2172 581.279 83.153 578.797 85.0343C576.315 86.9157 575.073 90.6094 575.073 96.1254V129.556C575.073 130.994 575.842 132.177 577.388 133.112C578.935 134.048 581.082 134.964 583.84 135.841C585.051 136.176 585.987 136.501 586.657 136.836C587.327 137.17 587.652 137.722 587.652 138.49C587.652 139.702 586.549 140.313 584.342 140.313C581.033 140.313 578.521 140.175 576.817 139.899C575.103 139.623 572.818 139.485 569.952 139.485C568.07 139.485 566.563 139.544 565.401 139.653C564.239 139.761 563.027 139.899 561.756 140.066C560.486 140.234 558.752 140.313 556.546 140.313L556.497 140.283Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M640.421 142.108C634.245 142.108 628.67 140.67 623.706 137.804C618.742 134.937 614.792 130.998 611.876 125.974C608.951 120.96 607.493 115.247 607.493 108.845C607.493 104.215 608.399 99.6942 610.222 95.2715C612.044 90.8587 614.605 86.83 617.914 83.1954C621.224 79.5509 625.085 76.655 629.498 74.5077C633.911 72.3604 638.648 71.2769 643.731 71.2769C650.123 71.2769 655.895 72.8233 661.027 75.9064C666.159 78.9993 670.237 83.0476 673.271 88.0711C676.304 93.0946 677.821 98.5811 677.821 104.54C677.821 110.943 676.413 117.01 673.606 122.743C670.788 128.486 666.632 133.145 661.116 136.73C655.6 140.316 648.705 142.108 640.431 142.108H640.421ZM643.898 137.144C647.651 137.144 651.01 136.425 653.994 134.997C656.969 133.568 659.294 131.244 660.948 128.042C662.268 125.511 663.155 122.418 663.598 118.774C664.041 115.129 664.258 111.711 664.258 108.51C664.258 103.211 663.293 98.1083 661.362 93.203C659.432 88.2977 656.733 84.269 653.256 81.1269C649.779 77.9847 645.671 76.4087 640.924 76.4087C637.949 76.4087 635.27 76.8815 632.896 77.8173C630.522 78.753 628.345 80.4965 626.356 83.0279C624.149 85.7859 622.711 89.1546 622.051 93.1242C621.391 97.0938 621.056 101.063 621.056 105.043C621.056 110.45 622.051 115.612 624.031 120.517C626.021 125.432 628.72 129.431 632.138 132.514C635.555 135.607 639.476 137.144 643.888 137.144H643.898Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M714.593 143.582C714.367 143.582 714.15 143.473 713.934 143.247C713.707 143.02 713.549 142.754 713.441 142.419L690.442 85.3287C689.673 83.1223 688.452 81.3296 686.797 79.9506C685.142 78.5716 683.488 77.6654 681.833 77.2221C680.946 76.8872 680.099 76.5031 679.272 76.0598C678.444 75.6166 678.031 75.0157 678.031 74.2376C678.031 73.5776 678.444 73.1639 679.272 72.9965C680.099 72.829 680.789 72.7502 681.34 72.7502C682.769 72.7502 684.128 72.8093 685.398 72.9177C686.669 73.026 687.959 73.1639 689.289 73.3314C690.619 73.4988 691.988 73.5776 693.426 73.5776C694.973 73.5776 696.509 73.4988 698.056 73.3314C699.602 73.1639 701.119 73.026 702.606 72.9177C704.094 72.8093 705.61 72.7502 707.157 72.7502C707.6 72.7502 708.26 72.829 709.147 72.9965C710.033 73.1639 710.466 73.5776 710.466 74.2376C710.466 75.0157 710.053 75.6166 709.225 76.0598C708.398 76.5031 707.541 76.8872 706.664 77.2221C705.561 77.557 704.704 78.3549 704.103 79.6256C703.493 80.8962 703.197 82.3048 703.197 83.8414C703.197 85.2795 703.473 86.7077 704.025 88.1458L716.928 121.409C717.036 121.853 717.312 122.069 717.755 122.069C718.199 122.069 718.474 121.853 718.583 121.409L729.831 94.5976C730.383 93.1693 730.737 91.7805 730.905 90.4606C731.072 89.1407 731.151 87.87 731.151 86.6585C731.151 84.2354 730.215 82.2457 728.334 80.6992C726.453 79.1528 724.581 78.0003 722.71 77.2221C721.823 76.8872 720.976 76.5031 720.149 76.0598C719.321 75.6166 718.908 75.0157 718.908 74.2376C718.908 73.5776 719.292 73.1639 720.07 72.9965C720.838 72.829 721.557 72.7502 722.217 72.7502C723.764 72.7502 725.448 72.8881 727.26 73.1639C729.083 73.4397 731.535 73.5776 734.628 73.5776C737.721 73.5776 740.361 73.4397 742.567 73.1639C744.774 72.8881 746.763 72.7502 748.526 72.7502C749.078 72.7502 749.767 72.829 750.595 72.9965C751.422 73.1639 751.836 73.5776 751.836 74.2376C751.836 75.0157 751.422 75.6166 750.595 76.0598C749.767 76.5031 748.91 76.8872 748.034 77.2221C746.822 77.6654 745.581 78.2761 744.311 79.0444C743.04 79.8226 742.41 81.1917 742.41 83.1814C742.41 83.8414 742.488 84.59 742.656 85.4174C742.823 86.2448 743.129 87.151 743.562 88.1458L755.973 120.08C756.524 121.291 756.968 121.902 757.293 121.902C757.736 121.902 758.179 121.35 758.613 120.247L771.191 90.9531C771.634 90.0764 771.939 88.9634 772.097 87.6435C772.264 86.3236 772.343 85.2696 772.343 84.5013C772.343 82.5116 771.683 80.9159 770.354 79.7044C769.034 78.4928 767.763 77.6654 766.552 77.2221C765.665 76.8872 764.818 76.5031 763.991 76.0598C763.163 75.6166 762.75 75.0157 762.75 74.2376C762.75 73.5776 763.163 73.1639 763.991 72.9965C764.818 72.829 765.508 72.7502 766.059 72.7502C768.482 72.7502 770.413 72.8881 771.851 73.1639C773.279 73.4397 775.495 73.5776 778.47 73.5776C780.568 73.5776 782.055 73.4988 782.942 73.3314C783.828 73.1639 784.597 73.026 785.257 72.9177C785.916 72.8093 786.852 72.7502 788.074 72.7502C788.734 72.7502 789.453 72.829 790.221 72.9965C790.989 73.1639 791.383 73.5776 791.383 74.2376C791.383 75.0157 790.969 75.6166 790.142 76.0598C789.315 76.5031 788.458 76.8872 787.581 77.2221C785.926 77.6654 784.331 78.9558 782.784 81.1129C781.238 83.2602 779.918 85.6144 778.815 88.1458L756.14 142.419C755.805 143.188 755.313 143.582 754.653 143.582C754.21 143.582 753.766 143.198 753.333 142.419L736.125 99.7294C735.79 98.8429 735.465 98.3504 735.13 98.2421C734.796 98.2421 734.411 98.7937 733.968 99.8969L715.933 142.429C715.598 143.198 715.165 143.592 714.613 143.592L714.593 143.582Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M790.599 140.621C789.161 140.621 788.008 140.483 787.122 140.208C786.235 139.932 785.802 139.459 785.802 138.799C785.802 138.031 786.245 137.42 787.122 136.977C788.008 136.533 789.377 136.149 791.259 135.814C794.017 135.263 796.272 133.943 798.045 131.845C799.808 129.747 800.971 126.772 801.522 122.911C802.842 112.982 804.004 103.526 804.999 94.533C805.994 85.54 806.792 77.4334 807.403 70.2035C808.003 62.9834 808.309 57.0439 808.309 52.4144V49.5972C808.309 48.6024 808.25 47.7257 808.141 46.9476C808.033 46.0611 807.865 45.1549 807.649 44.2191C807.422 43.2834 806.762 42.3772 805.659 41.4907C803.669 39.8359 801.739 38.7031 799.867 38.1023C797.986 37.5014 795.78 36.9695 793.248 36.5263C792.145 36.3096 791.259 35.8959 790.599 35.2852C789.939 34.6843 789.604 33.985 789.604 33.2167C789.604 32.34 790.126 31.8081 791.18 31.6407C792.224 31.4732 793.583 31.3944 795.238 31.3944C796.341 31.3944 798.025 31.4535 800.281 31.5619C802.537 31.6702 804.999 31.8377 807.649 32.0544C810.298 32.2809 812.751 32.4385 815.016 32.5469C817.272 32.6552 818.956 32.7143 820.06 32.7143C820.828 32.7143 821.498 32.9409 822.049 33.3743C822.601 33.8175 822.985 34.4775 823.212 35.364C823.763 37.3537 824.315 39.4419 824.866 41.6483C825.418 43.8547 826.078 46.0118 826.856 48.1L852.998 114.46C853.332 115.238 853.933 115.701 854.82 115.868C855.706 116.036 856.366 115.73 856.809 114.962L889.413 47.115C889.964 45.2435 890.516 43.1455 891.067 40.8307C891.619 38.516 892.062 36.477 892.387 34.704C892.722 33.2758 893.274 32.5567 894.042 32.5567H900.001C903.311 32.5567 906.807 32.34 910.511 31.8968C914.205 31.4535 916.992 31.2368 918.864 31.2368C919.415 31.2368 920.134 31.3156 921.011 31.4831C921.897 31.6505 922.331 32.1233 922.331 32.8916C922.331 33.6599 922.026 34.2706 921.425 34.7139C920.814 35.1571 919.691 35.7087 918.036 36.3687C916.598 36.9203 915.003 37.531 913.239 38.1909C911.476 38.8509 909.821 39.5108 908.275 40.1806C907.172 40.6239 906.236 41.3725 905.458 42.4166C904.68 43.4705 904.296 44.5934 904.296 45.805C904.296 53.5274 904.434 60.777 904.709 67.5637C904.985 74.3503 905.291 80.8612 905.616 87.0864C905.951 93.3215 906.335 99.4679 906.778 105.535C907.221 111.603 907.605 117.779 907.94 124.073C908.157 127.491 909.26 130.111 911.25 131.934C913.239 133.756 916.273 135.056 920.351 135.824C922.223 136.159 923.601 136.543 924.488 136.987C925.365 137.43 925.808 138.041 925.808 138.809C925.808 139.469 925.365 139.942 924.488 140.217C923.601 140.493 922.449 140.631 921.011 140.631C918.036 140.631 915.574 140.552 913.643 140.385C911.713 140.217 909.861 140.079 908.098 139.971C906.335 139.863 904.178 139.804 901.646 139.804C899.44 139.804 897.588 139.853 896.101 139.971C894.613 140.079 893.008 140.217 891.304 140.385C889.59 140.552 887.246 140.631 884.271 140.631C882.833 140.631 881.68 140.493 880.794 140.217C879.907 139.942 879.474 139.469 879.474 138.809C879.474 138.041 879.917 137.4 880.794 136.908C881.68 136.415 883.05 136.051 884.931 135.834C888.132 135.391 890.338 134.258 891.55 132.446C892.762 130.623 893.372 127.787 893.372 123.925C893.372 115.986 893.293 108.816 893.126 102.413C892.959 96.0105 892.712 89.6967 892.377 83.4616C892.043 77.2265 891.717 70.4202 891.383 63.0228C891.274 61.8113 890.939 61.2301 890.388 61.2892C889.836 61.3483 889.285 61.9295 888.733 63.0228L850.673 140.631C850.446 141.183 849.954 141.488 849.186 141.537C848.408 141.596 847.915 141.232 847.698 140.464C843.394 127.56 838.784 114.844 833.879 102.324C828.974 89.805 823.428 76.3203 817.252 61.8605C817.026 61.3089 816.642 61.0331 816.09 61.0331C815.539 61.0331 815.204 61.3089 815.095 61.8605C814.1 69.5829 813.194 76.6749 812.367 83.1267C811.539 89.5785 810.899 95.9514 810.466 102.236C810.023 108.52 809.806 115.425 809.806 122.921C809.806 125.895 810.742 128.634 812.623 131.116C814.494 133.598 817.144 135.174 820.562 135.834C822.433 136.169 823.812 136.553 824.699 136.996C825.585 137.44 826.019 138.05 826.019 138.819C826.019 139.479 825.576 139.951 824.699 140.227C823.812 140.503 822.66 140.641 821.222 140.641C818.247 140.641 816.011 140.562 814.524 140.395C813.037 140.227 811.707 140.089 810.554 139.981C809.392 139.873 807.767 139.814 805.669 139.814C803.679 139.814 802.133 139.863 801.039 139.981C799.936 140.089 798.666 140.227 797.237 140.395C795.799 140.562 793.593 140.641 790.618 140.641L790.599 140.621Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M990.187 140.948C989.084 140.948 986.631 140.839 982.819 140.613C979.017 140.386 974.654 140.199 969.748 140.032C964.833 139.864 960.174 139.786 955.761 139.786C953.555 139.786 951.703 139.835 950.216 139.953C948.729 140.061 947.123 140.199 945.419 140.367C943.705 140.534 941.361 140.613 938.386 140.613C936.948 140.613 935.796 140.445 934.909 140.12C934.023 139.786 933.589 139.234 933.589 138.466C933.589 137.589 934.033 137.008 934.909 136.732C935.796 136.456 937.165 136.151 939.046 135.826C943.232 135.058 946.138 133.787 947.734 132.024C949.329 130.261 950.137 127.394 950.137 123.415V48.9487C950.137 44.9791 949.339 42.162 947.734 40.5072C946.138 38.8524 943.232 37.6409 939.046 36.8627C937.165 36.5278 935.796 36.1732 934.909 35.7891C934.023 35.4049 933.589 34.7745 933.589 33.888C933.589 33.1197 934.033 32.5681 934.909 32.2332C935.796 31.8983 936.948 31.7407 938.386 31.7407C941.253 31.7407 943.538 31.7703 945.252 31.8195C946.966 31.8786 948.64 31.9279 950.295 31.987C951.95 32.0461 954.097 32.0658 956.746 32.0658C958.51 32.0658 960.745 32.0067 963.444 31.8983C966.143 31.79 968.96 31.6225 971.886 31.4058C974.811 31.1891 977.451 31.0216 979.825 30.9133C982.198 30.8049 983.932 30.7458 985.035 30.7458C996.284 30.7458 1005.89 32.0953 1013.83 34.8041C1021.77 37.5128 1028.23 41.2558 1033.19 46.0528C1038.16 50.8497 1041.82 56.4248 1044.19 62.7683C1046.57 69.1117 1047.75 75.9279 1047.75 83.207C1047.75 91.1462 1046.26 98.5928 1043.28 105.547C1040.3 112.501 1036.17 118.647 1030.87 123.996C1025.57 129.345 1019.45 133.511 1012.5 136.486C1005.54 139.46 998.096 140.958 990.157 140.958L990.187 140.948ZM988.197 135.156C996.806 135.156 1004.41 133.058 1011.03 128.872C1017.65 124.676 1022.8 118.884 1026.5 111.496C1030.2 104.109 1032.05 95.6082 1032.05 86.0143C1032.05 78.0752 1030.73 70.9832 1028.08 64.7481C1025.43 58.513 1021.9 53.2728 1017.49 49.0275C1013.08 44.7821 1008.11 41.5218 1002.6 39.2661C997.082 37.0105 991.507 35.8777 985.882 35.8777C981.135 35.8777 977.086 36.0156 973.718 36.2914C970.349 36.5672 967.788 37.4242 966.025 38.8524C964.262 40.2905 963.375 42.6545 963.375 45.9641V119.77C963.375 124.183 964.587 127.493 967.02 129.699C969.443 131.906 972.565 133.363 976.367 134.082C980.169 134.801 984.119 135.156 988.197 135.156Z"
                                                                    fill="#212121"
                                                                ></path>
                                                            </g>
                                                            <g clip-path="url(#clip1_504_153)">
                                                                <path
                                                                    d="M106.171 138.048C97.251 147.199 97.2564 156.001 105.323 165.625H109.431C103.212 156.651 101.719 150.271 110.258 142.736C110.301 144.412 110.827 163.6 110.876 165.625H114.431L114.452 164.738L114.989 144.981C113.861 143.842 112.621 142.763 111.337 141.775C109.667 140.465 107.917 139.251 106.171 138.048Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M125.027 76.6709C121.182 74.5443 116.418 72.5358 112.664 71.2415C112.648 71.2308 112.627 71.2254 112.611 71.22C108.454 70.0547 101.693 68.2341 97.8208 67.4286C90.4151 65.9088 78.8205 59.8027 82.0857 52.1929C83.5786 48.7183 87.2197 50.2918 90.0231 49.8729C91.0595 49.7172 92.0423 49.5614 92.9499 49.3735C98.3525 48.0953 99.7219 45.2383 101.462 42.7411C99.4104 41.6455 92.8049 38.332 86.5216 39.9324C79.1373 41.812 75.5123 46.4198 74.3201 50.2327C72.8057 55.0929 74.0086 60.7156 77.161 64.7165C81.8708 70.7152 89.6095 72.4498 96.5641 74.0234C101.231 75.0813 107.063 76.7783 111.005 78.3196C114.673 79.6676 119.415 81.4935 122.664 83.1905C125.177 84.5815 127.605 86.0368 129.168 88.1796C130.274 89.7692 129.28 90.7842 128.051 92.0248C124.764 94.812 120.564 96.611 116.263 98.0127C116.273 97.7334 116.66 83.1959 116.687 82.3152C111.982 80.4785 106.349 78.223 100.302 76.6763C92.9016 80.8867 85.6355 86.5578 88.8469 94.1461C90.7695 97.8999 94.6684 100.531 98.0625 102.373C98.084 102.384 98.1001 102.395 98.1216 102.406C103.755 105.472 109.904 106.938 115.967 108.737C116.585 108.915 117.202 109.108 117.825 109.301C120.747 110.348 127.17 112.497 127.906 115.622C128.099 117.222 126.81 119.134 125.838 120.418C122.9 124.145 119.163 127.152 115.393 130.111C115.409 129.252 115.887 111.793 115.924 110.467C114.834 110.139 113.733 109.827 112.659 109.521C111.655 109.226 110.651 108.952 109.646 108.651C109.544 108.625 109.448 108.592 109.346 108.56C105.576 107.443 101.757 106.176 98.0571 104.264C91.559 107.55 87.0801 113.565 90.5977 120.896C95.8016 131.035 106.988 135.412 115.06 142.737C123.604 150.304 122.1 156.625 115.887 165.625H119.995C130.134 153.628 126.472 143.87 115.285 134.44C109.958 129.87 103.846 125.96 99.491 120.423C98.5136 119.134 97.2247 117.222 97.418 115.627C98.1538 112.502 104.577 110.354 107.498 109.307C108.116 109.113 108.733 108.92 109.356 108.743C109.356 109.07 109.85 127.099 109.872 127.942C113.094 130.509 116.408 132.984 119.351 135.89C125.145 131.808 131.434 127.453 134.726 120.896C138.249 113.549 133.759 107.556 127.261 104.258C122.691 101.799 117.605 100.531 112.664 99.1029C112.664 99.1029 112.661 99.1029 112.654 99.1029C111.66 98.8236 110.667 98.5283 109.673 98.2114C105.184 96.799 100.71 94.9462 97.273 92.0301C96.0486 90.7896 95.0497 89.7746 96.156 88.185C97.7188 86.0422 100.146 84.5922 102.66 83.1959C104.222 82.3635 106.392 81.4183 108.583 80.5269C108.594 80.8276 108.98 95.3383 109.007 96.2351C111.22 96.9816 113.416 97.5831 115.645 98.206C119.496 99.307 123.502 100.478 127.256 102.368C130.65 100.531 134.549 97.8999 136.471 94.1407C139.71 86.9337 132.578 80.8491 125.016 76.6709H125.027ZM88.9544 41.6616C89.4484 41.6616 91.081 42.5639 91.081 42.5639C91.081 42.5639 89.4484 43.4714 88.9544 43.4714C88.4603 43.4714 86.8223 42.5639 86.8223 42.5639C86.8223 42.5639 88.4549 41.6616 88.9544 41.6616Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M167.663 35.3184C165.998 36.8489 164.032 38.0626 161.863 38.8574L166.363 46.4779C168.087 49.3994 171.454 50.9407 174.795 50.3339C176.1 50.0976 177.399 49.8613 178.393 49.6787C179.161 49.539 179.478 48.6153 178.962 48.03L167.668 35.3184H167.663Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M194.92 41.8108L172.51 27.7405C171.769 30.0766 170.544 32.2086 168.949 34.013L178.326 43.7602C183.691 48.5667 187.853 47.5893 192.332 45.033C193.486 44.3724 194.469 43.7978 194.979 43.4541C195.581 43.0567 195.549 42.1652 194.92 41.8108Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M159.992 39.4343C158.827 39.719 157.608 39.8854 156.357 39.923C155.068 39.9606 153.279 39.7565 153.279 39.7565C153.279 39.7565 154.128 42.5813 155.384 46.7971C156.303 49.8635 159.171 51.9365 162.371 51.8345L164.117 51.7808C164.831 51.7593 165.293 51.0128 164.992 50.363L159.982 39.4343H159.992Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M210.587 28.4885L172.855 17.9412C173.403 20.2826 173.462 22.9141 172.984 25.2609L189.868 34.8524C202.854 42.0111 208.729 33.5689 211.146 30.0083C211.527 29.4444 211.242 28.6711 210.587 28.4832V28.4885Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M224.409 11.8855L167.145 4.96308C167.145 4.96308 149.182 1.78921 140.863 9.78028C138.774 11.7834 137.292 14.4901 136.851 18.1258C135.987 25.2415 126.803 27.0567 120.074 27.1372L119.741 39.634C124.575 35.9178 131.545 32.2444 137.415 32.0726C139.971 32.0028 142.313 32.5935 144.182 34.1294C144.198 34.1455 144.219 34.1617 144.235 34.1778C156.915 44.7305 175.373 32.615 170.556 16.6919C170.368 16.0743 170.131 15.4729 169.873 14.8929C170.051 14.8069 170.266 14.7801 170.464 14.8284C170.464 14.8284 193.079 20.8701 207.246 24.3823C214.345 26.1437 221.665 22.4275 224.431 15.6501C224.759 14.8445 225.054 14.0551 225.306 13.2817C225.516 12.6373 225.081 11.966 224.409 11.8855Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M57.6852 35.3184L46.3914 48.03C45.8758 48.6153 46.1927 49.539 46.9606 49.6787C47.9488 49.8613 49.2484 50.0976 50.5588 50.3339C53.8991 50.9407 57.261 49.4048 58.9902 46.4779L63.4906 38.8574C61.321 38.0572 59.3608 36.8435 57.6906 35.3184H57.6852Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M56.4175 34.013C54.8225 32.2086 53.598 30.082 52.8569 27.7405L30.4464 41.8108C29.8181 42.1652 29.7859 43.0567 30.3874 43.4541C30.8975 43.7978 31.8803 44.3724 33.0349 45.033C37.5085 47.5893 41.6705 48.5667 47.0408 43.7602L56.4175 34.013Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M69.0052 39.923C67.7539 39.8854 66.5402 39.719 65.3695 39.4343L60.3589 50.363C60.0582 51.0128 60.52 51.7593 61.2343 51.7808L62.9797 51.8345C66.1804 51.9365 69.0482 49.8635 69.9665 46.7971C71.2232 42.5813 72.0717 39.7565 72.0717 39.7565C72.0717 39.7565 70.2887 39.9606 68.9945 39.923H69.0052Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M52.3645 25.2727C51.8919 22.9205 51.9456 20.289 52.4933 17.9529L14.7612 28.4949C14.1007 28.6775 13.816 29.4508 14.2027 30.0201C16.6194 33.586 22.4945 42.0282 35.4801 34.8641L52.3645 25.2727Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M105.608 27.1372C98.8519 27.1158 89.3786 25.3597 88.5032 18.1258C88.0629 14.4901 86.5806 11.7834 84.4916 9.78028C76.1729 1.78921 58.209 4.96308 58.209 4.96308L0.944921 11.8855C0.273627 11.966 -0.161372 12.6373 0.0480715 13.2817C0.300478 14.0497 0.595848 14.8445 0.92344 15.6501C3.68917 22.4221 11.009 26.1384 18.1086 24.3823C32.2756 20.8701 54.8902 14.8284 54.8902 14.8284C55.0889 14.7801 55.3037 14.8069 55.4809 14.8929C55.2231 15.4729 54.9868 16.0743 54.7989 16.6919C49.9817 32.615 68.4396 44.7305 81.119 34.1778C81.1351 34.1617 81.1566 34.1455 81.1727 34.1294C83.0416 32.5935 85.3831 32.0028 87.9393 32.0726C93.9488 32.2498 101.107 36.0896 105.952 39.8918L105.608 27.1426V27.1372Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    d="M138.816 39.9424C132.528 38.342 125.928 41.6555 123.876 42.7511C125.611 45.2429 126.986 48.1053 132.388 49.3835C133.296 49.5714 134.278 49.7272 135.315 49.8829C138.118 50.3018 141.759 48.7283 143.252 52.2029C146.518 59.8181 134.928 65.9188 127.517 67.4386C124.827 67.9864 120.359 69.1571 117.024 70.0486C117.061 68.6576 118.817 18.5416 118.817 18.5362C118.876 15.6631 120.214 12.2475 126.148 11.8394C126.9 11.7857 127.506 11.2003 127.609 10.4484L128.774 1.82904C128.908 0.835525 128.113 -0.045212 127.114 0.00312115C115.375 0.561637 106.997 6.24884 106.997 18.5362L108.264 68.3086C110.166 68.8134 111.782 69.2591 112.663 69.5062H112.674C112.829 69.5491 112.958 69.5921 113.066 69.6189C117.233 71.0904 120.939 72.6049 125.24 74.898C133.263 72.8089 142.613 71.7724 148.172 64.7265C154.895 55.4412 152.167 43.5137 138.816 39.9424ZM136.378 43.4815C135.884 43.4815 134.252 42.5739 134.252 42.5739C134.252 42.5739 135.884 41.6716 136.378 41.6716C136.872 41.6716 138.51 42.5739 138.51 42.5739C138.51 42.5739 136.878 43.4815 136.378 43.4815Z"
                                                                    fill="#212121"
                                                                ></path>
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M118.815 18.5257C118.815 18.5311 117.021 70.0381 117.021 70.0381L117 71.0746C117 71.0746 114.384 70.0757 113.063 69.6085C113.004 69.5938 112.939 69.5743 112.867 69.5526C112.807 69.5347 112.742 69.5152 112.671 69.4957H112.66C111.78 69.2486 110.163 68.8029 108.262 68.2981L106.995 18.5257C106.995 6.23834 115.372 0.551139 127.112 -0.0073769C128.111 -0.05571 128.906 0.825027 128.771 1.81854L127.606 10.438C127.504 11.1898 126.897 11.7752 126.145 11.8289C120.211 12.237 118.874 15.6526 118.815 18.5257ZM116.692 82.322C116.665 83.2028 116.268 98.0196 116.268 98.0196V98.0088L116.251 98.3794C116.251 98.3794 115.854 98.2666 115.655 98.2075L115.11 98.0554C113.068 97.4854 111.05 96.9222 109.018 96.2366C109.004 95.7837 108.899 91.8591 108.796 88.0459L108.796 88.0401L108.796 88.04L108.796 88.038L108.796 88.0347C108.696 84.3008 108.599 80.6771 108.593 80.5283C108.573 80.5383 108.553 80.5463 108.532 80.5547L108.532 80.5548L108.532 80.5548L108.531 80.555C108.519 80.5601 108.505 80.5653 108.491 80.5713C108.513 80.1202 108.529 79.6745 108.534 79.2287C111.148 80.1592 113.621 81.1241 115.887 82.0083L115.888 82.0087L115.889 82.0091L116.692 82.322ZM115.404 130.108C115.404 130.108 115.898 111.79 115.935 110.463C114.962 110.171 113.979 109.891 113.015 109.616L112.67 109.518C112.224 109.387 111.778 109.26 111.331 109.133C110.773 108.974 110.215 108.815 109.657 108.648C109.555 108.621 109.357 108.557 109.357 108.557V108.734C109.357 108.734 109.856 127.09 109.883 127.933C111.704 129.383 115.339 132.289 115.339 132.289L115.409 130.108H115.404ZM110.269 140.949C110.269 140.949 111.031 141.529 111.348 141.776C112.632 142.764 113.872 143.844 115 144.982L114.463 164.74L114.442 165.626H110.886C110.838 163.601 110.269 142.738 110.269 142.738V140.949Z"
                                                                    fill="#212121"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_504_153">
                                                                    <rect
                                                                        width="808.783"
                                                                        height="120.634"
                                                                        fill="#212121"
                                                                        transform="translate(239 22.9553)"
                                                                    ></rect>
                                                                </clipPath>
                                                                <clipPath id="clip1_504_153">
                                                                    <rect
                                                                        width="225.372"
                                                                        height="165.629"
                                                                        fill="#212121"
                                                                    ></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </a>
                                                </span>
                                                <button onClick={closeMainModal} className={styles.frCloseIcon}>
                                                    <IconClose />
                                                </button>
                                            </div>
                                            <div
                                                className={styles.frModalContent}
                                                style={{ padding: '0 24px', paddingBottom: '32px' }}
                                            >
                                                <div className={styles.frNoteHeader}>
                                                    <div className={`${styles.images} ${styles.mural1}`}>
                                                        <div className={styles.placeHolder}></div>
                                                        <img alt=" " src={selectedProvider.image} />
                                                    </div>
                                                    <h1 className={styles.frDoctorTitle}>{selectedProvider.name}</h1>
                                                </div>
                                                <dl>
                                                    <div className={styles.website} style={{ display: 'grid' }}>
                                                        <dt style={{ fontWeight: '500' }}>Website</dt>
                                                        <dd style={{ fontWeight: '500' }}>
                                                            <a
                                                                style={{ textDecoration: 'underline' }}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                href="https://lgphysicians.com/physicians/profile/Dr-Mona-Sadek-MD"
                                                            >
                                                                Go to clinician website{' '}
                                                                <span className={styles.frLinkVector}>
                                                                    <IconReview />
                                                                </span>
                                                            </a>
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt style={{ fontWeight: '500' }}>Expertise</dt>
                                                        <dd style={{ fontWeight: '500' }}>
                                                            {selectedProvider.specialty}
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt style={{ fontWeight: '500' }}>Location</dt>
                                                        <dd style={{ fontWeight: '500' }}>
                                                            {selectedProvider.location}
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt style={{ fontWeight: '500' }}>NPI Number</dt>
                                                        <dd style={{ fontWeight: '500' }}>
                                                            {selectedProvider.npinumber}
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt style={{ fontWeight: '500' }}>Practice Type</dt>
                                                        <dd style={{ fontWeight: '500' }}>
                                                            {selectedProvider.practicetype}
                                                        </dd>
                                                    </div>
                                                    <div>
                                                        <dt style={{ fontWeight: '500' }}>Joined FrontrowMD</dt>
                                                        <dd style={{ fontWeight: '500' }}>{selectedProvider.joined}</dd>
                                                    </div>
                                                    {selectedProvider.npinumber === '1194102871' ? (
                                                        <div style={{ fontWeight: '500' }}>
                                                            <dt>Years in practice</dt>
                                                            <dd style={{ fontWeight: '500' }}>
                                                                {selectedProvider.yearsPratice}
                                                            </dd>
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                </dl>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className={styles.modalContent}>
                                                <div className={styles.frModalHeaderRow}>
                                                    {selectedProvider ? (
                                                        <button
                                                            onClick={handleBackToMain}
                                                            type="button"
                                                            className={styles.frBackIcon}
                                                        >
                                                            <IconBack />
                                                        </button>
                                                    ) : (
                                                        <div>
                                                            <button
                                                                onClick={() => setIsModalOpen(false)}
                                                                type="button"
                                                                className={styles.frBackIcon}
                                                            >
                                                                <IconBack />
                                                            </button>
                                                        </div>
                                                    )}
                                                    <span className={styles.frModalLogo}>
                                                        <a
                                                            id="link-to-marketing-site"
                                                            onclick="trackClickToMarketingSite()"
                                                            href="https://frontrowmd.com/?utm_medium=referral&amp;utm_campaign=client_referrals&amp;utm_source=Sculptique&amp;utm_content=banner"
                                                            target="_blank"
                                                            aria-label="Learn more about FrontrowMD in a new tab"
                                                            rel="noreferrer"
                                                        >
                                                            <svg
                                                                width="200"
                                                                height="32"
                                                                viewBox="0 0 1048 166"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_504_153)">
                                                                    <path
                                                                        d="M242.305 140.276C241.201 140.276 240.374 140.138 239.823 139.862C239.271 139.586 238.995 139.113 238.995 138.453C238.995 137.577 239.35 136.966 240.069 136.631C240.788 136.296 241.694 136.03 242.797 135.804C245.338 135.252 247.151 134.454 248.254 133.4C249.357 132.356 249.909 130.731 249.909 128.515V81.8454C248.806 81.8454 247.535 81.8159 246.107 81.7666C244.669 81.7075 243.073 81.6287 241.31 81.5204C240.975 81.412 240.512 81.0279 239.901 80.358C239.291 79.6981 238.995 79.0874 238.995 78.5358C238.995 78.3191 239.163 78.1221 239.488 77.9546C239.813 77.7872 240.039 77.6493 240.148 77.5409C242.137 76.5461 243.841 75.6694 245.279 74.8913C246.708 74.123 248.254 73.3448 249.909 72.5765C249.909 62.9826 251.091 54.9844 253.465 48.5819C255.838 42.1892 258.902 37.1066 262.645 33.3538C266.397 29.6009 270.367 26.9316 274.563 25.326C278.759 23.7303 282.669 22.9226 286.314 22.9226C292.49 22.9226 297.07 23.8584 300.045 25.7397C303.019 27.6211 304.516 29.9851 304.516 32.8514C304.516 35.0578 303.965 36.7126 302.862 37.8158C301.759 38.919 300.439 39.4706 298.892 39.4706C297.897 39.4706 296.991 39.0865 296.164 38.3083C295.336 37.54 294.371 36.6535 293.268 35.6587C291.83 34.2206 290.067 32.8711 287.969 31.6005C285.871 30.3298 283.004 29.6994 279.36 29.6994C274.169 29.6994 269.904 31.9649 266.535 36.4861C263.167 41.0072 261.492 47.9613 261.492 57.3386V71.8969C261.492 72.5568 261.679 73.0001 262.073 73.2168C262.458 73.4433 262.871 73.5517 263.314 73.5517H283.999C284.551 73.5517 285.043 73.7191 285.487 74.0442C285.93 74.3791 286.146 74.8223 286.146 75.3641C286.146 76.1422 286.068 76.9598 285.9 77.8463C285.733 78.7328 285.487 79.5011 285.152 80.1611C284.817 81.0476 284.324 81.481 283.664 81.481H264.634C263.314 81.481 262.458 81.678 262.073 82.0621C261.689 82.4463 261.492 82.9683 261.492 83.6381V128.485C261.492 130.692 262.211 132.317 263.64 133.371C265.068 134.425 267.993 135.223 272.406 135.774C274.947 136.109 276.208 136.986 276.208 138.424C276.208 139.084 275.932 139.557 275.381 139.832C274.829 140.108 274.002 140.246 272.898 140.246C269.589 140.246 266.663 140.108 264.132 139.832C261.591 139.557 258.892 139.419 256.026 139.419C254.144 139.419 252.608 139.478 251.396 139.586C250.185 139.695 248.914 139.832 247.594 140C246.274 140.167 244.501 140.246 242.295 140.246L242.305 140.276Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M295.746 140.283C294.642 140.283 293.815 140.145 293.263 139.869C292.712 139.594 292.436 139.121 292.436 138.461C292.436 137.584 292.771 137.003 293.431 136.727C294.091 136.451 295.027 136.146 296.248 135.821C298.346 135.269 299.912 134.472 300.966 133.418C302.02 132.364 302.542 131.073 302.542 129.527V93.9486C302.542 90.9739 302.099 88.3833 301.222 86.1671C300.336 83.9607 298.513 82.5817 295.765 82.0301C295.322 81.9217 294.938 81.6459 294.603 81.2027C294.268 80.7594 294.111 80.326 294.111 79.8828C294.111 78.7796 294.603 78.1196 295.598 77.8931C298.464 77.0065 301.468 75.7162 304.62 74.0023C307.762 72.2884 310.215 70.8897 311.988 69.7865C312.648 69.3432 313.17 69.0379 313.564 68.8803C313.948 68.7128 314.254 68.634 314.47 68.634C315.022 68.634 315.298 69.0182 315.298 69.7963C315.298 70.1312 315.268 70.9586 315.219 72.2785C315.16 73.5984 315.11 75.1449 315.051 76.908C314.992 78.6712 314.913 80.4344 314.805 82.2074C314.805 82.4339 314.913 82.5423 315.14 82.5423C316.903 80.3359 318.863 78.4053 321.011 76.7504C323.158 75.0956 325.364 73.7757 327.63 72.7809C329.885 71.786 332.072 71.2935 334.17 71.2935C336.485 71.2935 338.386 71.786 339.883 72.7809C341.38 73.7757 342.119 75.0464 342.119 76.583C342.119 77.6862 341.813 78.8978 341.213 80.2275C340.602 81.5474 339.804 82.7097 338.809 83.7046C337.814 84.6994 336.77 85.1919 335.667 85.1919C335.007 85.1919 334.288 85.054 333.52 84.7782C332.742 84.5024 331.924 84.1478 331.038 83.7046C330.151 83.3697 329.275 83.0446 328.388 82.7097C327.502 82.3748 326.625 82.2172 325.738 82.2172C323.089 82.2172 320.528 83.153 318.046 85.0343C315.564 86.9157 314.322 90.6094 314.322 96.1254V129.556C314.322 130.994 315.091 132.177 316.637 133.112C318.184 134.048 320.331 134.964 323.089 135.841C324.3 136.176 325.236 136.501 325.906 136.836C326.576 137.17 326.901 137.722 326.901 138.49C326.901 139.702 325.798 140.313 323.591 140.313C320.282 140.313 317.77 140.175 316.066 139.899C314.352 139.623 312.067 139.485 309.201 139.485C307.319 139.485 305.812 139.544 304.65 139.653C303.488 139.761 302.276 139.899 301.005 140.066C299.735 140.234 298.001 140.313 295.795 140.313L295.746 140.283Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M376.701 142.108C370.525 142.108 364.95 140.67 359.985 137.804C355.021 134.937 351.071 130.998 348.156 125.974C345.23 120.96 343.772 115.247 343.772 108.845C343.772 104.215 344.679 99.6942 346.501 95.2715C348.323 90.8587 350.884 86.83 354.194 83.1954C357.503 79.5509 361.364 76.655 365.777 74.5077C370.19 72.3604 374.928 71.2769 380.01 71.2769C386.403 71.2769 392.175 72.8233 397.307 75.9064C402.438 78.9993 406.516 83.0476 409.55 88.0711C412.584 93.0946 414.101 98.5811 414.101 104.54C414.101 110.943 412.692 117.01 409.885 122.743C407.068 128.486 402.911 133.145 397.395 136.73C391.879 140.316 384.984 142.108 376.71 142.108H376.701ZM380.178 137.144C383.93 137.144 387.289 136.425 390.274 134.997C393.248 133.568 395.573 131.244 397.228 128.042C398.548 125.511 399.434 122.418 399.877 118.774C400.321 115.129 400.537 111.711 400.537 108.51C400.537 103.211 399.572 98.1083 397.641 93.203C395.711 88.2977 393.012 84.269 389.535 81.1269C386.058 77.9847 381.951 76.4087 377.203 76.4087C374.228 76.4087 371.549 76.8815 369.175 77.8173C366.801 78.753 364.625 80.4965 362.635 83.0279C360.429 85.7859 358.991 89.1546 358.331 93.1242C357.671 97.0938 357.336 101.063 357.336 105.043C357.336 110.45 358.331 115.612 360.31 120.517C362.3 125.432 364.999 129.431 368.417 132.514C371.835 135.607 375.755 137.144 380.168 137.144H380.178Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M422.25 140.279C421.256 140.279 420.458 140.141 419.847 139.866C419.236 139.59 418.941 139.117 418.941 138.457C418.941 137.58 419.276 136.999 419.936 136.723C420.596 136.448 421.531 136.142 422.753 135.817C424.408 135.374 426.003 134.773 427.55 133.995C429.096 133.227 429.864 131.739 429.864 129.523V93.9448C429.864 90.9701 429.559 88.4288 428.958 86.3308C428.348 84.2327 426.614 82.8045 423.748 82.0263C423.304 81.8096 422.92 81.5535 422.585 81.2777C422.25 81.0019 422.093 80.5291 422.093 79.8692C422.093 78.6576 422.585 77.9977 423.58 77.8795C427.441 76.8846 430.583 75.6731 433.016 74.235C435.439 72.8067 437.813 71.2012 440.128 69.438C440.463 69.2213 440.758 69.0243 441.034 68.8568C441.31 68.6894 441.615 68.6106 441.94 68.6106C442.157 68.6106 442.354 68.7189 442.522 68.9455C442.689 69.172 442.768 69.438 442.768 69.7729C442.768 70.551 442.63 72.1172 442.354 74.4911C442.078 76.8649 441.94 78.8251 441.94 80.3617C441.94 80.8049 441.97 81.2186 442.019 81.6028C442.078 81.9869 442.157 82.243 442.265 82.3514C446.127 78.7069 450.234 75.9587 454.597 74.0774C458.951 72.2059 463.728 71.2603 468.909 71.2603C474.09 71.2603 478.779 73.4667 482.315 77.8795C485.841 82.2923 487.614 87.7492 487.614 94.26V129.503C487.614 131.71 488.383 133.168 489.929 133.887C491.475 134.606 493.071 135.236 494.726 135.788C495.603 136.123 496.459 136.477 497.287 136.861C498.114 137.246 498.528 137.886 498.528 138.762C498.528 139.422 498.144 139.836 497.366 140.004C496.587 140.171 495.878 140.25 495.218 140.25C493.012 140.25 491.298 140.171 490.087 140.004C488.875 139.836 487.713 139.698 486.61 139.59C485.506 139.481 483.96 139.422 481.98 139.422C480.099 139.422 478.562 139.481 477.351 139.59C476.139 139.698 474.898 139.836 473.627 140.004C472.357 140.171 470.623 140.25 468.417 140.25C467.865 140.25 467.176 140.171 466.348 140.004C465.521 139.836 465.107 139.422 465.107 138.762C465.107 137.876 465.521 137.246 466.348 136.861C467.176 136.477 468.033 136.113 468.909 135.788C470.564 135.236 472.16 134.606 473.706 133.887C475.253 133.168 476.021 131.71 476.021 129.503V94.7525C476.021 89.8965 474.672 86.1239 471.963 83.4152C469.254 80.7163 465.649 79.3077 461.128 79.1994C457.158 79.1994 453.681 79.8396 450.707 81.1004C447.732 82.3711 445.082 83.9471 442.768 85.8186C442.325 86.2618 441.99 86.843 441.773 87.5522C441.546 88.2712 441.438 88.9607 441.438 89.6207V129.503C441.438 131.71 442.206 133.197 443.753 133.975C445.299 134.744 446.895 135.354 448.55 135.798C451.091 136.458 452.352 137.344 452.352 138.447C452.352 139.107 452.076 139.58 451.524 139.856C450.973 140.132 450.145 140.269 449.042 140.269C446.836 140.269 445.092 140.191 443.832 140.023C442.561 139.856 441.379 139.718 440.276 139.61C439.173 139.501 437.626 139.442 435.646 139.442C433.765 139.442 432.258 139.501 431.096 139.61C429.933 139.718 428.722 139.856 427.451 140.023C426.181 140.191 424.447 140.269 422.241 140.269L422.25 140.279Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M527.716 142.101C522.309 142.101 518.093 140.446 515.059 137.137C512.025 133.827 510.508 128.922 510.508 122.411V84.0155C510.508 83.129 510.173 82.4986 509.514 82.1145C508.854 81.7303 507.415 81.5333 505.209 81.5333H504.214C503.663 81.5333 503.19 81.1787 502.806 80.4597C502.422 79.7406 502.225 79.0019 502.225 78.2237C502.225 78.007 502.392 77.6721 502.717 77.2289C503.052 76.7856 503.269 76.5098 503.377 76.4015C505.583 74.855 507.593 73.3184 509.415 71.772C511.237 70.2255 512.892 68.7086 514.379 67.2212C515.867 65.7339 517.108 64.3844 518.103 63.163C518.654 62.6114 519.127 62.1485 519.511 61.7545C519.895 61.3703 520.368 61.1733 520.92 61.1733C521.471 61.1733 521.993 61.2817 522.496 61.5082C522.988 61.7348 523.185 62.2273 523.077 62.9956L522.249 70.4422C522.141 71.6538 522.417 72.4812 523.077 72.9244C523.737 73.3677 524.791 73.5844 526.219 73.5844H545.081C545.525 73.5844 545.909 73.9488 546.244 74.658C546.579 75.3771 546.736 76.234 546.736 77.219C546.736 78.204 546.569 79.1792 546.244 80.1149C545.909 81.0507 545.525 81.5235 545.081 81.5235H528.701C525.943 81.5235 524.15 81.75 523.323 82.1834C522.496 82.6267 522.082 83.9466 522.082 86.153V118.757C522.082 123.169 523.018 126.646 524.899 129.178C526.771 131.719 529.479 132.98 533.005 132.98C536.207 132.98 538.689 132.734 540.452 132.231C542.215 131.739 543.821 130.99 545.249 129.995C545.466 129.779 545.692 129.66 545.909 129.66C546.352 129.66 546.657 129.907 546.815 130.409C546.973 130.911 547.061 131.434 547.061 131.985C547.061 132.537 546.155 133.64 544.333 135.295C542.511 136.95 540.137 138.496 537.221 139.924C534.296 141.352 531.124 142.072 527.706 142.072L527.716 142.101Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M556.497 140.283C555.393 140.283 554.566 140.145 554.014 139.869C553.463 139.594 553.187 139.121 553.187 138.461C553.187 137.584 553.522 137.003 554.182 136.727C554.842 136.451 555.778 136.146 556.999 135.821C559.097 135.269 560.663 134.472 561.717 133.418C562.771 132.364 563.293 131.073 563.293 129.527V93.9486C563.293 90.9739 562.85 88.3833 561.973 86.1671C561.087 83.9607 559.264 82.5817 556.516 82.0301C556.073 81.9217 555.689 81.6459 555.354 81.2027C555.019 80.7594 554.862 80.326 554.862 79.8828C554.862 78.7796 555.354 78.1196 556.349 77.8931C559.215 77.0065 562.219 75.7162 565.371 74.0023C568.513 72.2884 570.966 70.8897 572.739 69.7865C573.399 69.3432 573.921 69.0379 574.315 68.8803C574.699 68.7128 575.004 68.634 575.221 68.634C575.773 68.634 576.049 69.0182 576.049 69.7963C576.049 70.1312 576.019 70.9586 575.97 72.2785C575.911 73.5984 575.861 75.1449 575.802 76.908C575.743 78.6712 575.664 80.4344 575.556 82.2074C575.556 82.4339 575.664 82.5423 575.891 82.5423C577.654 80.3359 579.614 78.4053 581.762 76.7504C583.909 75.0956 586.115 73.7757 588.381 72.7809C590.636 71.786 592.823 71.2935 594.921 71.2935C597.236 71.2935 599.137 71.786 600.634 72.7809C602.131 73.7757 602.87 75.0464 602.87 76.583C602.87 77.6862 602.564 78.8978 601.964 80.2275C601.353 81.5474 600.555 82.7097 599.56 83.7046C598.565 84.6994 597.521 85.1919 596.418 85.1919C595.758 85.1919 595.039 85.054 594.271 84.7782C593.493 84.5024 592.675 84.1478 591.789 83.7046C590.902 83.3697 590.026 83.0446 589.139 82.7097C588.253 82.3748 587.376 82.2172 586.489 82.2172C583.84 82.2172 581.279 83.153 578.797 85.0343C576.315 86.9157 575.073 90.6094 575.073 96.1254V129.556C575.073 130.994 575.842 132.177 577.388 133.112C578.935 134.048 581.082 134.964 583.84 135.841C585.051 136.176 585.987 136.501 586.657 136.836C587.327 137.17 587.652 137.722 587.652 138.49C587.652 139.702 586.549 140.313 584.342 140.313C581.033 140.313 578.521 140.175 576.817 139.899C575.103 139.623 572.818 139.485 569.952 139.485C568.07 139.485 566.563 139.544 565.401 139.653C564.239 139.761 563.027 139.899 561.756 140.066C560.486 140.234 558.752 140.313 556.546 140.313L556.497 140.283Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M640.421 142.108C634.245 142.108 628.67 140.67 623.706 137.804C618.742 134.937 614.792 130.998 611.876 125.974C608.951 120.96 607.493 115.247 607.493 108.845C607.493 104.215 608.399 99.6942 610.222 95.2715C612.044 90.8587 614.605 86.83 617.914 83.1954C621.224 79.5509 625.085 76.655 629.498 74.5077C633.911 72.3604 638.648 71.2769 643.731 71.2769C650.123 71.2769 655.895 72.8233 661.027 75.9064C666.159 78.9993 670.237 83.0476 673.271 88.0711C676.304 93.0946 677.821 98.5811 677.821 104.54C677.821 110.943 676.413 117.01 673.606 122.743C670.788 128.486 666.632 133.145 661.116 136.73C655.6 140.316 648.705 142.108 640.431 142.108H640.421ZM643.898 137.144C647.651 137.144 651.01 136.425 653.994 134.997C656.969 133.568 659.294 131.244 660.948 128.042C662.268 125.511 663.155 122.418 663.598 118.774C664.041 115.129 664.258 111.711 664.258 108.51C664.258 103.211 663.293 98.1083 661.362 93.203C659.432 88.2977 656.733 84.269 653.256 81.1269C649.779 77.9847 645.671 76.4087 640.924 76.4087C637.949 76.4087 635.27 76.8815 632.896 77.8173C630.522 78.753 628.345 80.4965 626.356 83.0279C624.149 85.7859 622.711 89.1546 622.051 93.1242C621.391 97.0938 621.056 101.063 621.056 105.043C621.056 110.45 622.051 115.612 624.031 120.517C626.021 125.432 628.72 129.431 632.138 132.514C635.555 135.607 639.476 137.144 643.888 137.144H643.898Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M714.593 143.582C714.367 143.582 714.15 143.473 713.934 143.247C713.707 143.02 713.549 142.754 713.441 142.419L690.442 85.3287C689.673 83.1223 688.452 81.3296 686.797 79.9506C685.142 78.5716 683.488 77.6654 681.833 77.2221C680.946 76.8872 680.099 76.5031 679.272 76.0598C678.444 75.6166 678.031 75.0157 678.031 74.2376C678.031 73.5776 678.444 73.1639 679.272 72.9965C680.099 72.829 680.789 72.7502 681.34 72.7502C682.769 72.7502 684.128 72.8093 685.398 72.9177C686.669 73.026 687.959 73.1639 689.289 73.3314C690.619 73.4988 691.988 73.5776 693.426 73.5776C694.973 73.5776 696.509 73.4988 698.056 73.3314C699.602 73.1639 701.119 73.026 702.606 72.9177C704.094 72.8093 705.61 72.7502 707.157 72.7502C707.6 72.7502 708.26 72.829 709.147 72.9965C710.033 73.1639 710.466 73.5776 710.466 74.2376C710.466 75.0157 710.053 75.6166 709.225 76.0598C708.398 76.5031 707.541 76.8872 706.664 77.2221C705.561 77.557 704.704 78.3549 704.103 79.6256C703.493 80.8962 703.197 82.3048 703.197 83.8414C703.197 85.2795 703.473 86.7077 704.025 88.1458L716.928 121.409C717.036 121.853 717.312 122.069 717.755 122.069C718.199 122.069 718.474 121.853 718.583 121.409L729.831 94.5976C730.383 93.1693 730.737 91.7805 730.905 90.4606C731.072 89.1407 731.151 87.87 731.151 86.6585C731.151 84.2354 730.215 82.2457 728.334 80.6992C726.453 79.1528 724.581 78.0003 722.71 77.2221C721.823 76.8872 720.976 76.5031 720.149 76.0598C719.321 75.6166 718.908 75.0157 718.908 74.2376C718.908 73.5776 719.292 73.1639 720.07 72.9965C720.838 72.829 721.557 72.7502 722.217 72.7502C723.764 72.7502 725.448 72.8881 727.26 73.1639C729.083 73.4397 731.535 73.5776 734.628 73.5776C737.721 73.5776 740.361 73.4397 742.567 73.1639C744.774 72.8881 746.763 72.7502 748.526 72.7502C749.078 72.7502 749.767 72.829 750.595 72.9965C751.422 73.1639 751.836 73.5776 751.836 74.2376C751.836 75.0157 751.422 75.6166 750.595 76.0598C749.767 76.5031 748.91 76.8872 748.034 77.2221C746.822 77.6654 745.581 78.2761 744.311 79.0444C743.04 79.8226 742.41 81.1917 742.41 83.1814C742.41 83.8414 742.488 84.59 742.656 85.4174C742.823 86.2448 743.129 87.151 743.562 88.1458L755.973 120.08C756.524 121.291 756.968 121.902 757.293 121.902C757.736 121.902 758.179 121.35 758.613 120.247L771.191 90.9531C771.634 90.0764 771.939 88.9634 772.097 87.6435C772.264 86.3236 772.343 85.2696 772.343 84.5013C772.343 82.5116 771.683 80.9159 770.354 79.7044C769.034 78.4928 767.763 77.6654 766.552 77.2221C765.665 76.8872 764.818 76.5031 763.991 76.0598C763.163 75.6166 762.75 75.0157 762.75 74.2376C762.75 73.5776 763.163 73.1639 763.991 72.9965C764.818 72.829 765.508 72.7502 766.059 72.7502C768.482 72.7502 770.413 72.8881 771.851 73.1639C773.279 73.4397 775.495 73.5776 778.47 73.5776C780.568 73.5776 782.055 73.4988 782.942 73.3314C783.828 73.1639 784.597 73.026 785.257 72.9177C785.916 72.8093 786.852 72.7502 788.074 72.7502C788.734 72.7502 789.453 72.829 790.221 72.9965C790.989 73.1639 791.383 73.5776 791.383 74.2376C791.383 75.0157 790.969 75.6166 790.142 76.0598C789.315 76.5031 788.458 76.8872 787.581 77.2221C785.926 77.6654 784.331 78.9558 782.784 81.1129C781.238 83.2602 779.918 85.6144 778.815 88.1458L756.14 142.419C755.805 143.188 755.313 143.582 754.653 143.582C754.21 143.582 753.766 143.198 753.333 142.419L736.125 99.7294C735.79 98.8429 735.465 98.3504 735.13 98.2421C734.796 98.2421 734.411 98.7937 733.968 99.8969L715.933 142.429C715.598 143.198 715.165 143.592 714.613 143.592L714.593 143.582Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M790.599 140.621C789.161 140.621 788.008 140.483 787.122 140.208C786.235 139.932 785.802 139.459 785.802 138.799C785.802 138.031 786.245 137.42 787.122 136.977C788.008 136.533 789.377 136.149 791.259 135.814C794.017 135.263 796.272 133.943 798.045 131.845C799.808 129.747 800.971 126.772 801.522 122.911C802.842 112.982 804.004 103.526 804.999 94.533C805.994 85.54 806.792 77.4334 807.403 70.2035C808.003 62.9834 808.309 57.0439 808.309 52.4144V49.5972C808.309 48.6024 808.25 47.7257 808.141 46.9476C808.033 46.0611 807.865 45.1549 807.649 44.2191C807.422 43.2834 806.762 42.3772 805.659 41.4907C803.669 39.8359 801.739 38.7031 799.867 38.1023C797.986 37.5014 795.78 36.9695 793.248 36.5263C792.145 36.3096 791.259 35.8959 790.599 35.2852C789.939 34.6843 789.604 33.985 789.604 33.2167C789.604 32.34 790.126 31.8081 791.18 31.6407C792.224 31.4732 793.583 31.3944 795.238 31.3944C796.341 31.3944 798.025 31.4535 800.281 31.5619C802.537 31.6702 804.999 31.8377 807.649 32.0544C810.298 32.2809 812.751 32.4385 815.016 32.5469C817.272 32.6552 818.956 32.7143 820.06 32.7143C820.828 32.7143 821.498 32.9409 822.049 33.3743C822.601 33.8175 822.985 34.4775 823.212 35.364C823.763 37.3537 824.315 39.4419 824.866 41.6483C825.418 43.8547 826.078 46.0118 826.856 48.1L852.998 114.46C853.332 115.238 853.933 115.701 854.82 115.868C855.706 116.036 856.366 115.73 856.809 114.962L889.413 47.115C889.964 45.2435 890.516 43.1455 891.067 40.8307C891.619 38.516 892.062 36.477 892.387 34.704C892.722 33.2758 893.274 32.5567 894.042 32.5567H900.001C903.311 32.5567 906.807 32.34 910.511 31.8968C914.205 31.4535 916.992 31.2368 918.864 31.2368C919.415 31.2368 920.134 31.3156 921.011 31.4831C921.897 31.6505 922.331 32.1233 922.331 32.8916C922.331 33.6599 922.026 34.2706 921.425 34.7139C920.814 35.1571 919.691 35.7087 918.036 36.3687C916.598 36.9203 915.003 37.531 913.239 38.1909C911.476 38.8509 909.821 39.5108 908.275 40.1806C907.172 40.6239 906.236 41.3725 905.458 42.4166C904.68 43.4705 904.296 44.5934 904.296 45.805C904.296 53.5274 904.434 60.777 904.709 67.5637C904.985 74.3503 905.291 80.8612 905.616 87.0864C905.951 93.3215 906.335 99.4679 906.778 105.535C907.221 111.603 907.605 117.779 907.94 124.073C908.157 127.491 909.26 130.111 911.25 131.934C913.239 133.756 916.273 135.056 920.351 135.824C922.223 136.159 923.601 136.543 924.488 136.987C925.365 137.43 925.808 138.041 925.808 138.809C925.808 139.469 925.365 139.942 924.488 140.217C923.601 140.493 922.449 140.631 921.011 140.631C918.036 140.631 915.574 140.552 913.643 140.385C911.713 140.217 909.861 140.079 908.098 139.971C906.335 139.863 904.178 139.804 901.646 139.804C899.44 139.804 897.588 139.853 896.101 139.971C894.613 140.079 893.008 140.217 891.304 140.385C889.59 140.552 887.246 140.631 884.271 140.631C882.833 140.631 881.68 140.493 880.794 140.217C879.907 139.942 879.474 139.469 879.474 138.809C879.474 138.041 879.917 137.4 880.794 136.908C881.68 136.415 883.05 136.051 884.931 135.834C888.132 135.391 890.338 134.258 891.55 132.446C892.762 130.623 893.372 127.787 893.372 123.925C893.372 115.986 893.293 108.816 893.126 102.413C892.959 96.0105 892.712 89.6967 892.377 83.4616C892.043 77.2265 891.717 70.4202 891.383 63.0228C891.274 61.8113 890.939 61.2301 890.388 61.2892C889.836 61.3483 889.285 61.9295 888.733 63.0228L850.673 140.631C850.446 141.183 849.954 141.488 849.186 141.537C848.408 141.596 847.915 141.232 847.698 140.464C843.394 127.56 838.784 114.844 833.879 102.324C828.974 89.805 823.428 76.3203 817.252 61.8605C817.026 61.3089 816.642 61.0331 816.09 61.0331C815.539 61.0331 815.204 61.3089 815.095 61.8605C814.1 69.5829 813.194 76.6749 812.367 83.1267C811.539 89.5785 810.899 95.9514 810.466 102.236C810.023 108.52 809.806 115.425 809.806 122.921C809.806 125.895 810.742 128.634 812.623 131.116C814.494 133.598 817.144 135.174 820.562 135.834C822.433 136.169 823.812 136.553 824.699 136.996C825.585 137.44 826.019 138.05 826.019 138.819C826.019 139.479 825.576 139.951 824.699 140.227C823.812 140.503 822.66 140.641 821.222 140.641C818.247 140.641 816.011 140.562 814.524 140.395C813.037 140.227 811.707 140.089 810.554 139.981C809.392 139.873 807.767 139.814 805.669 139.814C803.679 139.814 802.133 139.863 801.039 139.981C799.936 140.089 798.666 140.227 797.237 140.395C795.799 140.562 793.593 140.641 790.618 140.641L790.599 140.621Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M990.187 140.948C989.084 140.948 986.631 140.839 982.819 140.613C979.017 140.386 974.654 140.199 969.748 140.032C964.833 139.864 960.174 139.786 955.761 139.786C953.555 139.786 951.703 139.835 950.216 139.953C948.729 140.061 947.123 140.199 945.419 140.367C943.705 140.534 941.361 140.613 938.386 140.613C936.948 140.613 935.796 140.445 934.909 140.12C934.023 139.786 933.589 139.234 933.589 138.466C933.589 137.589 934.033 137.008 934.909 136.732C935.796 136.456 937.165 136.151 939.046 135.826C943.232 135.058 946.138 133.787 947.734 132.024C949.329 130.261 950.137 127.394 950.137 123.415V48.9487C950.137 44.9791 949.339 42.162 947.734 40.5072C946.138 38.8524 943.232 37.6409 939.046 36.8627C937.165 36.5278 935.796 36.1732 934.909 35.7891C934.023 35.4049 933.589 34.7745 933.589 33.888C933.589 33.1197 934.033 32.5681 934.909 32.2332C935.796 31.8983 936.948 31.7407 938.386 31.7407C941.253 31.7407 943.538 31.7703 945.252 31.8195C946.966 31.8786 948.64 31.9279 950.295 31.987C951.95 32.0461 954.097 32.0658 956.746 32.0658C958.51 32.0658 960.745 32.0067 963.444 31.8983C966.143 31.79 968.96 31.6225 971.886 31.4058C974.811 31.1891 977.451 31.0216 979.825 30.9133C982.198 30.8049 983.932 30.7458 985.035 30.7458C996.284 30.7458 1005.89 32.0953 1013.83 34.8041C1021.77 37.5128 1028.23 41.2558 1033.19 46.0528C1038.16 50.8497 1041.82 56.4248 1044.19 62.7683C1046.57 69.1117 1047.75 75.9279 1047.75 83.207C1047.75 91.1462 1046.26 98.5928 1043.28 105.547C1040.3 112.501 1036.17 118.647 1030.87 123.996C1025.57 129.345 1019.45 133.511 1012.5 136.486C1005.54 139.46 998.096 140.958 990.157 140.958L990.187 140.948ZM988.197 135.156C996.806 135.156 1004.41 133.058 1011.03 128.872C1017.65 124.676 1022.8 118.884 1026.5 111.496C1030.2 104.109 1032.05 95.6082 1032.05 86.0143C1032.05 78.0752 1030.73 70.9832 1028.08 64.7481C1025.43 58.513 1021.9 53.2728 1017.49 49.0275C1013.08 44.7821 1008.11 41.5218 1002.6 39.2661C997.082 37.0105 991.507 35.8777 985.882 35.8777C981.135 35.8777 977.086 36.0156 973.718 36.2914C970.349 36.5672 967.788 37.4242 966.025 38.8524C964.262 40.2905 963.375 42.6545 963.375 45.9641V119.77C963.375 124.183 964.587 127.493 967.02 129.699C969.443 131.906 972.565 133.363 976.367 134.082C980.169 134.801 984.119 135.156 988.197 135.156Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                </g>
                                                                <g clip-path="url(#clip1_504_153)">
                                                                    <path
                                                                        d="M106.171 138.048C97.251 147.199 97.2564 156.001 105.323 165.625H109.431C103.212 156.651 101.719 150.271 110.258 142.736C110.301 144.412 110.827 163.6 110.876 165.625H114.431L114.452 164.738L114.989 144.981C113.861 143.842 112.621 142.763 111.337 141.775C109.667 140.465 107.917 139.251 106.171 138.048Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M125.027 76.6709C121.182 74.5443 116.418 72.5358 112.664 71.2415C112.648 71.2308 112.627 71.2254 112.611 71.22C108.454 70.0547 101.693 68.2341 97.8208 67.4286C90.4151 65.9088 78.8205 59.8027 82.0857 52.1929C83.5786 48.7183 87.2197 50.2918 90.0231 49.8729C91.0595 49.7172 92.0423 49.5614 92.9499 49.3735C98.3525 48.0953 99.7219 45.2383 101.462 42.7411C99.4104 41.6455 92.8049 38.332 86.5216 39.9324C79.1373 41.812 75.5123 46.4198 74.3201 50.2327C72.8057 55.0929 74.0086 60.7156 77.161 64.7165C81.8708 70.7152 89.6095 72.4498 96.5641 74.0234C101.231 75.0813 107.063 76.7783 111.005 78.3196C114.673 79.6676 119.415 81.4935 122.664 83.1905C125.177 84.5815 127.605 86.0368 129.168 88.1796C130.274 89.7692 129.28 90.7842 128.051 92.0248C124.764 94.812 120.564 96.611 116.263 98.0127C116.273 97.7334 116.66 83.1959 116.687 82.3152C111.982 80.4785 106.349 78.223 100.302 76.6763C92.9016 80.8867 85.6355 86.5578 88.8469 94.1461C90.7695 97.8999 94.6684 100.531 98.0625 102.373C98.084 102.384 98.1001 102.395 98.1216 102.406C103.755 105.472 109.904 106.938 115.967 108.737C116.585 108.915 117.202 109.108 117.825 109.301C120.747 110.348 127.17 112.497 127.906 115.622C128.099 117.222 126.81 119.134 125.838 120.418C122.9 124.145 119.163 127.152 115.393 130.111C115.409 129.252 115.887 111.793 115.924 110.467C114.834 110.139 113.733 109.827 112.659 109.521C111.655 109.226 110.651 108.952 109.646 108.651C109.544 108.625 109.448 108.592 109.346 108.56C105.576 107.443 101.757 106.176 98.0571 104.264C91.559 107.55 87.0801 113.565 90.5977 120.896C95.8016 131.035 106.988 135.412 115.06 142.737C123.604 150.304 122.1 156.625 115.887 165.625H119.995C130.134 153.628 126.472 143.87 115.285 134.44C109.958 129.87 103.846 125.96 99.491 120.423C98.5136 119.134 97.2247 117.222 97.418 115.627C98.1538 112.502 104.577 110.354 107.498 109.307C108.116 109.113 108.733 108.92 109.356 108.743C109.356 109.07 109.85 127.099 109.872 127.942C113.094 130.509 116.408 132.984 119.351 135.89C125.145 131.808 131.434 127.453 134.726 120.896C138.249 113.549 133.759 107.556 127.261 104.258C122.691 101.799 117.605 100.531 112.664 99.1029C112.664 99.1029 112.661 99.1029 112.654 99.1029C111.66 98.8236 110.667 98.5283 109.673 98.2114C105.184 96.799 100.71 94.9462 97.273 92.0301C96.0486 90.7896 95.0497 89.7746 96.156 88.185C97.7188 86.0422 100.146 84.5922 102.66 83.1959C104.222 82.3635 106.392 81.4183 108.583 80.5269C108.594 80.8276 108.98 95.3383 109.007 96.2351C111.22 96.9816 113.416 97.5831 115.645 98.206C119.496 99.307 123.502 100.478 127.256 102.368C130.65 100.531 134.549 97.8999 136.471 94.1407C139.71 86.9337 132.578 80.8491 125.016 76.6709H125.027ZM88.9544 41.6616C89.4484 41.6616 91.081 42.5639 91.081 42.5639C91.081 42.5639 89.4484 43.4714 88.9544 43.4714C88.4603 43.4714 86.8223 42.5639 86.8223 42.5639C86.8223 42.5639 88.4549 41.6616 88.9544 41.6616Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M167.663 35.3184C165.998 36.8489 164.032 38.0626 161.863 38.8574L166.363 46.4779C168.087 49.3994 171.454 50.9407 174.795 50.3339C176.1 50.0976 177.399 49.8613 178.393 49.6787C179.161 49.539 179.478 48.6153 178.962 48.03L167.668 35.3184H167.663Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M194.92 41.8108L172.51 27.7405C171.769 30.0766 170.544 32.2086 168.949 34.013L178.326 43.7602C183.691 48.5667 187.853 47.5893 192.332 45.033C193.486 44.3724 194.469 43.7978 194.979 43.4541C195.581 43.0567 195.549 42.1652 194.92 41.8108Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M159.992 39.4343C158.827 39.719 157.608 39.8854 156.357 39.923C155.068 39.9606 153.279 39.7565 153.279 39.7565C153.279 39.7565 154.128 42.5813 155.384 46.7971C156.303 49.8635 159.171 51.9365 162.371 51.8345L164.117 51.7808C164.831 51.7593 165.293 51.0128 164.992 50.363L159.982 39.4343H159.992Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M210.587 28.4885L172.855 17.9412C173.403 20.2826 173.462 22.9141 172.984 25.2609L189.868 34.8524C202.854 42.0111 208.729 33.5689 211.146 30.0083C211.527 29.4444 211.242 28.6711 210.587 28.4832V28.4885Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M224.409 11.8855L167.145 4.96308C167.145 4.96308 149.182 1.78921 140.863 9.78028C138.774 11.7834 137.292 14.4901 136.851 18.1258C135.987 25.2415 126.803 27.0567 120.074 27.1372L119.741 39.634C124.575 35.9178 131.545 32.2444 137.415 32.0726C139.971 32.0028 142.313 32.5935 144.182 34.1294C144.198 34.1455 144.219 34.1617 144.235 34.1778C156.915 44.7305 175.373 32.615 170.556 16.6919C170.368 16.0743 170.131 15.4729 169.873 14.8929C170.051 14.8069 170.266 14.7801 170.464 14.8284C170.464 14.8284 193.079 20.8701 207.246 24.3823C214.345 26.1437 221.665 22.4275 224.431 15.6501C224.759 14.8445 225.054 14.0551 225.306 13.2817C225.516 12.6373 225.081 11.966 224.409 11.8855Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M57.6852 35.3184L46.3914 48.03C45.8758 48.6153 46.1927 49.539 46.9606 49.6787C47.9488 49.8613 49.2484 50.0976 50.5588 50.3339C53.8991 50.9407 57.261 49.4048 58.9902 46.4779L63.4906 38.8574C61.321 38.0572 59.3608 36.8435 57.6906 35.3184H57.6852Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M56.4175 34.013C54.8225 32.2086 53.598 30.082 52.8569 27.7405L30.4464 41.8108C29.8181 42.1652 29.7859 43.0567 30.3874 43.4541C30.8975 43.7978 31.8803 44.3724 33.0349 45.033C37.5085 47.5893 41.6705 48.5667 47.0408 43.7602L56.4175 34.013Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M69.0052 39.923C67.7539 39.8854 66.5402 39.719 65.3695 39.4343L60.3589 50.363C60.0582 51.0128 60.52 51.7593 61.2343 51.7808L62.9797 51.8345C66.1804 51.9365 69.0482 49.8635 69.9665 46.7971C71.2232 42.5813 72.0717 39.7565 72.0717 39.7565C72.0717 39.7565 70.2887 39.9606 68.9945 39.923H69.0052Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M52.3645 25.2727C51.8919 22.9205 51.9456 20.289 52.4933 17.9529L14.7612 28.4949C14.1007 28.6775 13.816 29.4508 14.2027 30.0201C16.6194 33.586 22.4945 42.0282 35.4801 34.8641L52.3645 25.2727Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M105.608 27.1372C98.8519 27.1158 89.3786 25.3597 88.5032 18.1258C88.0629 14.4901 86.5806 11.7834 84.4916 9.78028C76.1729 1.78921 58.209 4.96308 58.209 4.96308L0.944921 11.8855C0.273627 11.966 -0.161372 12.6373 0.0480715 13.2817C0.300478 14.0497 0.595848 14.8445 0.92344 15.6501C3.68917 22.4221 11.009 26.1384 18.1086 24.3823C32.2756 20.8701 54.8902 14.8284 54.8902 14.8284C55.0889 14.7801 55.3037 14.8069 55.4809 14.8929C55.2231 15.4729 54.9868 16.0743 54.7989 16.6919C49.9817 32.615 68.4396 44.7305 81.119 34.1778C81.1351 34.1617 81.1566 34.1455 81.1727 34.1294C83.0416 32.5935 85.3831 32.0028 87.9393 32.0726C93.9488 32.2498 101.107 36.0896 105.952 39.8918L105.608 27.1426V27.1372Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        d="M138.816 39.9424C132.528 38.342 125.928 41.6555 123.876 42.7511C125.611 45.2429 126.986 48.1053 132.388 49.3835C133.296 49.5714 134.278 49.7272 135.315 49.8829C138.118 50.3018 141.759 48.7283 143.252 52.2029C146.518 59.8181 134.928 65.9188 127.517 67.4386C124.827 67.9864 120.359 69.1571 117.024 70.0486C117.061 68.6576 118.817 18.5416 118.817 18.5362C118.876 15.6631 120.214 12.2475 126.148 11.8394C126.9 11.7857 127.506 11.2003 127.609 10.4484L128.774 1.82904C128.908 0.835525 128.113 -0.045212 127.114 0.00312115C115.375 0.561637 106.997 6.24884 106.997 18.5362L108.264 68.3086C110.166 68.8134 111.782 69.2591 112.663 69.5062H112.674C112.829 69.5491 112.958 69.5921 113.066 69.6189C117.233 71.0904 120.939 72.6049 125.24 74.898C133.263 72.8089 142.613 71.7724 148.172 64.7265C154.895 55.4412 152.167 43.5137 138.816 39.9424ZM136.378 43.4815C135.884 43.4815 134.252 42.5739 134.252 42.5739C134.252 42.5739 135.884 41.6716 136.378 41.6716C136.872 41.6716 138.51 42.5739 138.51 42.5739C138.51 42.5739 136.878 43.4815 136.378 43.4815Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M118.815 18.5257C118.815 18.5311 117.021 70.0381 117.021 70.0381L117 71.0746C117 71.0746 114.384 70.0757 113.063 69.6085C113.004 69.5938 112.939 69.5743 112.867 69.5526C112.807 69.5347 112.742 69.5152 112.671 69.4957H112.66C111.78 69.2486 110.163 68.8029 108.262 68.2981L106.995 18.5257C106.995 6.23834 115.372 0.551139 127.112 -0.0073769C128.111 -0.05571 128.906 0.825027 128.771 1.81854L127.606 10.438C127.504 11.1898 126.897 11.7752 126.145 11.8289C120.211 12.237 118.874 15.6526 118.815 18.5257ZM116.692 82.322C116.665 83.2028 116.268 98.0196 116.268 98.0196V98.0088L116.251 98.3794C116.251 98.3794 115.854 98.2666 115.655 98.2075L115.11 98.0554C113.068 97.4854 111.05 96.9222 109.018 96.2366C109.004 95.7837 108.899 91.8591 108.796 88.0459L108.796 88.0401L108.796 88.04L108.796 88.038L108.796 88.0347C108.696 84.3008 108.599 80.6771 108.593 80.5283C108.573 80.5383 108.553 80.5463 108.532 80.5547L108.532 80.5548L108.532 80.5548L108.531 80.555C108.519 80.5601 108.505 80.5653 108.491 80.5713C108.513 80.1202 108.529 79.6745 108.534 79.2287C111.148 80.1592 113.621 81.1241 115.887 82.0083L115.888 82.0087L115.889 82.0091L116.692 82.322ZM115.404 130.108C115.404 130.108 115.898 111.79 115.935 110.463C114.962 110.171 113.979 109.891 113.015 109.616L112.67 109.518C112.224 109.387 111.778 109.26 111.331 109.133C110.773 108.974 110.215 108.815 109.657 108.648C109.555 108.621 109.357 108.557 109.357 108.557V108.734C109.357 108.734 109.856 127.09 109.883 127.933C111.704 129.383 115.339 132.289 115.339 132.289L115.409 130.108H115.404ZM110.269 140.949C110.269 140.949 111.031 141.529 111.348 141.776C112.632 142.764 113.872 143.844 115 144.982L114.463 164.74L114.442 165.626H110.886C110.838 163.601 110.269 142.738 110.269 142.738V140.949Z"
                                                                        fill="#212121"
                                                                    ></path>
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_504_153">
                                                                        <rect
                                                                            width="808.783"
                                                                            height="120.634"
                                                                            fill="#212121"
                                                                            transform="translate(239 22.9553)"
                                                                        ></rect>
                                                                    </clipPath>
                                                                    <clipPath id="clip1_504_153">
                                                                        <rect
                                                                            width="225.372"
                                                                            height="165.629"
                                                                            fill="#212121"
                                                                        ></rect>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </a>
                                                    </span>
                                                    <button onClick={closeMainModal} className={styles.frCloseIcon}>
                                                        <IconClose />
                                                    </button>
                                                </div>
                                                <div className={styles.frModalContent}>
                                                    <div className={styles.frQuestionSection}>
                                                        <details className={styles.frAccordion}>
                                                            <summary className={styles.frAccordionContent}>
                                                                <p className={styles.frQuestionTitle}>
                                                                    Who is FrontrowMD?
                                                                </p>
                                                                <span className={styles.frExpandPlus}>
                                                                    <IconPlus />
                                                                </span>
                                                                <span className={styles.frExpandMinus}>
                                                                    <IconMinus />
                                                                </span>
                                                            </summary>
                                                            <span className={styles.frQuestionAnswer}>
                                                                <p>
                                                                    FrontrowMD is an independent, third-party platform
                                                                    on a mission to make it easier to discover health
                                                                    products you can trust.
                                                                </p>
                                                                <p>
                                                                    Here's how: first, we make it easy for clinicians to
                                                                    share discounts on their own selection of health
                                                                    products to help their patients. We often hear that
                                                                    our clinician partners are worried about patients
                                                                    spending their hard-earned money on products that
                                                                    may not be best for them.
                                                                </p>
                                                                <p>
                                                                    Then, we digitally track which products our
                                                                    clinicians include on their patient discount pages
                                                                    and display that data to you, verifying that medical
                                                                    experts are choosing to share this product and
                                                                    making it easier to discover the right product for
                                                                    you.
                                                                </p>
                                                            </span>
                                                        </details>
                                                        <details className={styles.frAccordion}>
                                                            <summary className={styles.frAccordionContent}>
                                                                <p className={styles.frQuestionTitle}>
                                                                    Who / how many clinicians share this?
                                                                </p>
                                                                <span className={styles.frExpandPlus}>
                                                                    <IconPlus />
                                                                </span>
                                                                <span className={styles.frExpandMinus}>
                                                                    <IconMinus />
                                                                </span>
                                                            </summary>
                                                            <span className={styles.frQuestionAnswer}>
                                                                <p>
                                                                    Clinicians sharing this product include doctors,
                                                                    nurse practitioners, and physician associates. Right
                                                                    now, 375 clinicians are including this product on
                                                                    their personalized patient discounts page, out of
                                                                    hundreds of product options.
                                                                </p>
                                                                <p>
                                                                    Group practices often request to collaborate on one
                                                                    page instead of setting up separate free pages (this
                                                                    way, it's easier for patients at a medical practice
                                                                    to shop through a single page).
                                                                </p>
                                                                <p>
                                                                    Below, you can see the names of clinicians or
                                                                    practices sharing this product, including how many
                                                                    clinicians chose to collaborate at that practice to
                                                                    sum up the total number of clinicians sharing this
                                                                    product.
                                                                </p>
                                                            </span>
                                                        </details>
                                                        <details className={styles.frAccordion}>
                                                            <summary className={styles.frAccordionContent}>
                                                                <p className={styles.frQuestionTitle}>
                                                                    What's “Clinicians' Choice” / “share” mean?
                                                                </p>
                                                                <span className={styles.frExpandPlus}>
                                                                    <IconPlus />
                                                                </span>
                                                                <span className={styles.frExpandMinus}>
                                                                    <IconMinus />
                                                                </span>
                                                            </summary>
                                                            <span className={styles.frQuestionAnswer}>
                                                                <p>
                                                                    Clinicians have the choice to add / remove any
                                                                    health product (either individually, or often in
                                                                    bulk) to their patient discounts pages whenever they
                                                                    would like.
                                                                </p>
                                                                <p>
                                                                    Therefore, FrontrowMD defines a product as being
                                                                    “shared” or as a “Clinicians' Choice” if that
                                                                    specific product is included in their personalized
                                                                    page and if those clinicians indicated on their
                                                                    “Getting Started” form that they intend to make
                                                                    their page available to patients (like through
                                                                    leaving out 'Savings Cards' with QR codes that link
                                                                    to the page), regardless of the number of products
                                                                    they keep / remove, how thoroughly they review each
                                                                    product, and the number of patients who choose to
                                                                    visit these pages.
                                                                </p>
                                                                <p>
                                                                    Clinicians can also request through their “Getting
                                                                    Started” form that FrontrowMD add products to their
                                                                    page for those clinicians to review and remove if
                                                                    they want.
                                                                </p>
                                                                <p>
                                                                    When you click on 'Preview' below, you'll be taken
                                                                    to a filtered view of those clinicians' personalized
                                                                    pages, so you can confirm they included this
                                                                    product. While there, you can even download the
                                                                    “Getting Started” form they submitted by clicking
                                                                    'Confirm' in the full list of clinicians. Only
                                                                    patients of these clinicians can shop on that page.
                                                                </p>
                                                            </span>
                                                        </details>
                                                        <details className={styles.frAccordion}>
                                                            <summary className={styles.frAccordionContent}>
                                                                <p className={styles.frQuestionTitle}>
                                                                    Are clinicians paid to do this?
                                                                </p>
                                                                <span className={styles.frExpandPlus}>
                                                                    <IconPlus />
                                                                </span>
                                                                <span className={styles.frExpandMinus}>
                                                                    <IconMinus />
                                                                </span>
                                                            </summary>
                                                            <span className={styles.frQuestionAnswer}>
                                                                <p>
                                                                    No — clinicians are never compensated. This is a
                                                                    free platform for clinicians and patients. These
                                                                    clinicians include products on their personalized
                                                                    discounts pages, which you can preview below, to
                                                                    benefit their patients.
                                                                </p>
                                                            </span>
                                                        </details>
                                                    </div>
                                                    <div className={styles.frProviderListSection}>
                                                        <p className={styles.frProviderListTitle}>
                                                            Clinicians who shared this product
                                                        </p>
                                                        <p className={styles.frProviderListSubtitle}>
                                                            For the complete list,
                                                            <a
                                                                className={styles.frViewAllLink}
                                                                href="https://app.thefrontrowhealth.com/general-store/all?pid=2691&amp;utm_source=880&amp;utm_medium=2691&amp;utm_campaign=brands_website&amp;utm_content=modal&amp;spi=true"
                                                                target="_blank"
                                                                onclick="frTrackClickCompleteList()"
                                                                aria-label="Click here to see the complete list of clinicians in a new tab"
                                                                rel="noreferrer"
                                                            >
                                                                {' '}
                                                                click here
                                                            </a>
                                                            . Numbers below indicate how many clinicians collaborate to
                                                            share products on a single page at a medical practice.
                                                        </p>
                                                        {providers.map((provider) => (
                                                            <div
                                                                key={provider.id}
                                                                className={styles.frProviderListItem}
                                                            >
                                                                <div className={styles.frProviderInfo}>
                                                                    <button
                                                                        className={styles.frProviderName}
                                                                        onClick={() => handleProviderClick(provider)}
                                                                        type="button"
                                                                    >
                                                                        <figure className={styles.expanded}>
                                                                            <img
                                                                                src={provider.image}
                                                                                alt={`Portrait of ${provider.name}`}
                                                                            />
                                                                            <figcaption>{provider.total}</figcaption>
                                                                        </figure>
                                                                        <div>
                                                                            <span>{provider.name}</span>
                                                                            <p className={styles.frProviderDetails}>
                                                                                {provider.location}
                                                                            </p>
                                                                        </div>
                                                                    </button>
                                                                </div>

                                                                <a
                                                                    className={styles.frViewStoreButton}
                                                                    href={`https://app.thefrontrowhealth.com/provider/${provider.code}/all?preview_store=true&spi=true&pid=${productId}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Preview{' '}
                                                                    <span className={styles.frLinkVector}>
                                                                        <IconReview />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className={styles.frFullProviderListBottom}>
                                                        <a
                                                            className={styles.frViewAllProvidersLinkBottom}
                                                            href="https://app.thefrontrowhealth.com/general-store/all?pid=2691&amp;utm_source=880&amp;utm_medium=2691&amp;utm_campaign=brands_website&amp;utm_content=modal&amp;spi=true"
                                                            target="_blank"
                                                            onclick="frTrackClickCompleteList()"
                                                            aria-label="Click here to see the complete list of clinicians in a new tab"
                                                            rel="noreferrer"
                                                        >
                                                            <span>See the full list of clinicians and </span>{' '}
                                                            <span>
                                                                learn more
                                                                <span className={styles.frLinkVector}>
                                                                    <IconReview />
                                                                </span>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className={styles.frDisclaimer}>
                                                        <p>
                                                            Please consult your own medical provider before buying
                                                            health products online, as neither FrontrowMD nor our
                                                            clinician partners are providing medical advice.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                            <AddToCartPart
                                handleAddToCart={handleAddToCart}
                                setActivePackage={setActivePackage}
                                activePackage={activePackage}
                                toggleTab={toggleTab}
                                expandedTabs={expandedTabs}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AsSeeIn />
            <JudgeOuter />
            <HiddenSystem />
            <AskQuestion />
        </div>
    );
};

export const BottomRight = ({ onClose, onLearnMore }) => {
    return (
        <div style={{ marginBottom: '6px' }}>
            <div style={{ opacity: 1, display: 'flex' }}>
                <div className={styles.background}>
                    <div className={styles.heading}>
                        <span>
                            <LeafLeft />
                        </span>
                        <p>
                            Clinicians'
                            <br />
                            Choice
                        </p>
                        <span>
                            <LeafRight />
                        </span>
                    </div>
                    <div className={styles.column}>
                        <p>
                            <span className={styles.bold}>373 clinicians </span>
                            share this on <span className={styles.italics}>FrontrowMD </span>
                            without compensation.{' '}
                            <button onClick={onLearnMore} className={styles.learnMore}>
                                <p>Learn more</p>
                            </button>
                        </p>
                        <div className={styles.cta}>
                            <span className={styles.images}>
                                <img
                                    src="https://assets.app.thefrontrowhealth.com/jijjnma3wz2ktevmvpuoewdnubm0"
                                    alt="Dr. Kimberly Rogers, MD"
                                    style={{ zIndex: 0 }}
                                />
                                <img
                                    src="https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4"
                                    alt="Ageless Aesthetics &amp; Beauty Bar"
                                    style={{ zIndex: 1 }}
                                />
                                <img
                                    src="https://assets.app.thefrontrowhealth.com/pa8nliuewz7t7g0dmxjawwf0kr5a"
                                    alt="Dr. Green"
                                    style={{ zIndex: 2 }}
                                />
                            </span>
                            <button className={styles.testimonialCta} style={{ marginTop: '8px' }}>
                                <p>Read their reviews</p>
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className={styles.closeButton}>
                    <CloseButton style={{ cursor: 'pointer' }} />
                </button>
            </div>
        </div>
    );
};

export const AddToCartPart = ({ activePackage, setActivePackage, toggleTab, expandedTabs, handleAddToCart }) => {
    return (
        <div>
            <div className={styles.productSelectorContent} style={{ marginTop: '0px' }}>
                <div className={styles.productSelectorOuter}>
                    <div
                        key="one"
                        className={`${styles.productSelectorBlock} ${activePackage === 'one' ? styles.active : ''}`}
                        onClick={() => setActivePackage('one')}
                    >
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
                                    <img
                                        alt=" "
                                        src="//trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <span className={styles.kachingBundlesFree}>Free USA Shipping</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        key="two"
                        className={`${styles.productSelectorBlock} ${activePackage === 'two' ? styles.active : ''}`}
                        onClick={() => setActivePackage('two')}
                    >
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
                                    <img
                                        alt=" "
                                        src="//trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <span className={styles.kachingBundlesFree}>Free USA Shipping</span>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img
                                        alt=" "
                                        src="//trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <span className={styles.kachingBundlesFree}>
                                            Free Anti-Bloating Protocol E-book
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        key="three"
                        className={`${styles.productSelectorBlock} ${activePackage === 'three' ? styles.active : ''}`}
                        onClick={() => setActivePackage('three')}
                    >
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
                                    <img
                                        alt=" "
                                        src="//trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <span className={styles.kachingBundlesFree}>Free USA Shipping</span>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img
                                        alt=" "
                                        src="//trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <span className={styles.kachingBundlesFree}>
                                            Free Anti-Bloating Protocol E-book
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.productSelectorPerksLine}>
                                <div>
                                    <img
                                        alt=" "
                                        src="//trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309"
                                    />
                                </div>
                                <div>
                                    <p>
                                        <span className={styles.kachingBundlesFree}>$20 Gift Card</span>
                                    </p>
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
                    <p>
                        Delivered on <span className={styles.colPPDeliver}>Thứ Tư, 21 Tháng 1</span> with Express
                        Shipping
                    </p>
                </div>
            </div>

            <div className={styles.productSelectorAtc} onClick={handleAddToCart}>
                ADD TO CART
            </div>

            <div className={styles.productAtcFooterLine}>
                <div className={styles.productAtcFooterInLine}>
                    <div>
                        <IconRefill />
                    </div>
                    <div>
                        <p className={styles.productAtcRefills} data="1">
                            Refills Ship Monthly
                        </p>
                        <p className={styles.productAtcRefillsHide} data="2">
                            Refills Ship Bi-Monthly
                        </p>
                        <p className={styles.productAtcRefillsHide} data="3">
                            Refills Ship Every 12 Week
                        </p>
                    </div>
                </div>
                <div className={styles.productAtcFooterInLine}>
                    <div>
                        <img alt=" " src="https://cdn.shopify.com/s/files/1/0779/0673/9384/files/clock.webp" />
                    </div>
                    <div>
                        <p>Stop or Cancel Anytime</p>
                    </div>
                </div>
            </div>

            <img
                alt=" "
                className={styles.productPaymentIcon}
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654"
            />

            <img
                alt=" "
                loading="lazy"
                className={styles.desktopProductBF}
                src="//trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486"
            />

            <div className={styles.productAtcIcons}>
                <div className={styles.productAtcIconLine}>
                    <div>
                        <img
                            alt=" "
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864"
                        />
                    </div>
                    <div>
                        <p>60-Day Money-Back Guarantee</p>
                    </div>
                </div>
                <div className={styles.productAtcIconLine}>
                    <div>
                        <img
                            alt=" "
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864"
                        />
                    </div>
                    <div>
                        <p>Free Shipping From USA Included </p>
                    </div>
                </div>
            </div>

            <div className={styles.mainProductReview}>
                <div className={styles.mainProductReviewMeta}>
                    <div>
                        <img
                            alt=" "
                            loading="lazy"
                            src="//trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889"
                        />
                    </div>
                    <div>
                        <p>
                            Margaret Ellison | FL
                            <span>
                                <img
                                    alt=" "
                                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267"
                                />
                            </span>
                        </p>
                        <img
                            alt=" "
                            className={styles.mainProductReviewStars}
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267"
                        />
                    </div>
                </div>
                <div className={styles.mainProductReviewContent}>
                    <p>
                        <strong>Even my husband noticed... the spark came back. </strong>
                    </p>
                    <p>
                        After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally
                        feel at ease again. I feel less bloated, lighter, like my body is working with me not against
                        me. These past months, I've been present. Even my marriage feels renewed, not just in how I look
                        but in how I feel. It's hard to explain, but once you try it you'll get it. I'd recommend this
                        to my closest friends without question.
                    </p>
                </div>
            </div>

            <div className={styles.productTabBlockOut}>
                <div className={`${styles.productTabBlock} ${expandedTabs.includes(0) ? styles.active : ''}`}>
                    <div className={styles.productTabThumb} onClick={() => toggleTab(0)}>
                        <p>Ingredients proven by science</p>
                        <span>
                            <img
                                alt=" "
                                style={{ transform: expandedTabs.includes(0) ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                            />
                        </span>
                    </div>
                    <div className={styles.productTabContent}>
                        <p style={{ fontWeight: 'bolder' }}>Sculptique Ingredients:</p>
                        <ul>
                            <li>
                                <strong>Echinacea purpurea Extract</strong>{' '}
                                <span className={styles.liDesc}>
                                    - Known for its anti-inflammatory properties, it may support skin health.
                                </span>
                            </li>
                            <li>
                                <strong>Dandelion Extract</strong> - Traditionally used as a diuretic, it may help
                                reduce water retention.
                                <br />
                                <strong>Burdock Powder</strong> - Contains antioxidants that may promote skin clarity.
                            </li>
                            <li>
                                <strong>Cleavers Extract</strong> - Believed to support lymphatic drainage and
                                detoxification.
                            </li>
                            <li>
                                <strong>Rutin</strong> - A flavonoid that may strengthen blood vessels and improve
                                circulation.
                            </li>
                            <li>
                                <strong>Bromelain Powder</strong> - An enzyme from pineapple that may reduce
                                inflammation and support tissue repair.
                            </li>
                            <li>
                                <strong>Lemon Powder</strong> - Rich in vitamin C, it may aid in collagen production and
                                skin rejuvenation.
                            </li>
                            <li>
                                <strong>Kelp Extract</strong> - A source of iodine and minerals that may support skin
                                metabolism.
                            </li>
                        </ul>
                        <p>These natural ingredients work together to reduce puffiness, bloating, fluid retention.</p>
                    </div>
                </div>
                <div className={`${styles.productTabBlock} ${expandedTabs.includes(1) ? styles.active : ''}`}>
                    <div className={styles.productTabThumb} onClick={() => toggleTab(1)}>
                        <p>How does it actually work?</p>
                        <span>
                            <img
                                alt=" "
                                style={{ transform: expandedTabs.includes(1) ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                            />
                        </span>
                    </div>
                    <div className={styles.productTabContent}>
                        <p>
                            Sculptique works by improving blood flow and supporting lymphatic drainage to reduce fluid
                            buildup that causes puffiness, inflammation, and water retention. It also reduces
                            inflammation and boosts collagen production to help skin become firmer and smoother.
                        </p>
                    </div>
                </div>
                <div className={`${styles.productTabBlock} ${expandedTabs.includes(2) ? styles.active : ''}`}>
                    <div className={styles.productTabThumb} onClick={() => toggleTab(2)}>
                        <p>Shipping and returns</p>
                        <span>
                            <img
                                alt=" "
                                style={{ transform: expandedTabs.includes(2) ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
                            />
                        </span>
                    </div>
                    <div className={styles.productTabContent}>
                        <p>
                            All of Sculptique orders get FREE shipping straight from our USA warehouse. Orders are
                            usually shipped out within 1-2 working days, and you should receive the order within 3-7
                            working days for domestic USA orders, and within 10 working days for International orders.
                        </p>
                        <p>
                            We also offer a 60-day money back guarantee - if you are unsatisfied with our product, you
                            can take advantage of our guarantee and ship back the product to us to get your return
                            within 60 days of receiving your order.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
