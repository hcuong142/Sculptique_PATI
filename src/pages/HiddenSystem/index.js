import styles from './Hidden.module.scss';
import { useRef, useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const HiddenSystem = () => {
    const videoRefs = useRef([]);
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const setupVideo = (video, currentIndex) => {
            if (!video) return () => {};

            const playIcon = video.previousElementSibling;
            const wrapper = video.parentElement;

            const hidePlayIcon = () => { if (playIcon) playIcon.style.display = 'none'; };
            const showPlayIcon = () => { if (playIcon) playIcon.style.display = 'block'; };

            const handleClick = () => {
                // Case 3: Pause tất cả video khác trước
                videoRefs.current.forEach((v, idx) => {
                    if (v && idx !== currentIndex && !v.paused) {
                        v.pause();
                        const icon = v.previousElementSibling;
                        if (icon) icon.style.display = 'block';
                    }
                });

                if (video.paused) {
                    video.play().catch(e => console.log('Play blocked:', e));
                    video.muted = false;
                    hidePlayIcon();
                } else {
                    video.pause();
                    showPlayIcon();
                }
            };

            wrapper.addEventListener('click', handleClick);
            video.addEventListener('play', hidePlayIcon);
            video.addEventListener('pause', showPlayIcon);

            // Ban đầu pause hết
            video.pause();
            video.muted = true;
            showPlayIcon();

            return () => {
                wrapper.removeEventListener('click', handleClick);
                video.removeEventListener('play', hidePlayIcon);
                video.removeEventListener('pause', showPlayIcon);
            };
        };

        const cleanups = videoRefs.current
            .map((ref, index) => setupVideo(ref, index))
            .filter(Boolean);

        return () => cleanups.forEach(cleanup => cleanup());
    }, []);

    const videos = [
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
            src: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
            src: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
            src: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
            src: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
            src: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
            src: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
            src: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4"
        },
        {
            pposter: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
            src: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
            src: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4"
        },
        {
            poster: "//trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
            src: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4"
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: false,                
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ],
        afterChange: (current) => {
            setCurrentSlide(current);  // Track slide hiện tại
            // Pause video khi slide change (nếu cần)
            videoRefs.current.forEach(video => {
                if (video && !video.paused) {
                    video.pause();
                    const icon = video.previousElementSibling;
                        if (icon) icon.style.display = 'block';
                    }
                });
            },
        appendDots: dots => (
            <ul className={styles.slickDots}> 
                {dots} 
            </ul>
        ),
    };

    return (
        <div>
            <div className={styles.productJudgeOuter}>
                <div className={styles.pageWidth} style={{padding: '0 49px'}}>
                    <div className={`${styles.productJudgeContainer} ${styles.topPadding}`}>
                        <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>Your <span>Hidden</span> Drainage System</h2>
                    </div>
                    <div className={styles.pliFlex}>
                        <div>
                            <div className={styles.pliTopText}>
                                <p>Your lymphatic system is your body's internal cleaning crew—a network of vessels that processes <strong>3-4 liters of cellular waste and excess fluid every single day.</strong></p>
                                <p>When it's working properly, you don't even know it exists.</p>
                                <ul><li>Waste gets drained away</li><li>Fluid stays balanced.</li><li>Your body feels light and energized.</li></ul>
                            </div>
                            <div className={styles.pliPinkText}>
                                <p>But after age 35, declining estrogen hijacks this system's ability to function.</p>
                            </div>
                            <div className={styles.pliBottomText}>
                                <ul><li>Vessel pumping weakens.</li><li>One-way valves fail.</li><li>Protein clogs form. </li><li>Vessel walls become leaky.</li></ul>
                                <p>Instead of processing and removing waste, it backs up in your tissues.</p>
                            </div>
                        </div>
                        <div>
                            <img loading="lazy" class="Desktop_only" src="//trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"/>
                            {/* <img loading="lazy" class="Mobile_only" src="//trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"/> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.productJudgeOuter} style={{padding: '56px 0px'}}>
                <div className={styles.pageWidth}>
                    <div className={`${styles.pliFlex} ${styles.reversed}`}>
                         <div>
                            <img loading="lazy" class="Desktop_only" src="//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"/>
                            {/* <img loading="lazy" class="Mobile_only" src="//trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"/> */}
                        </div>
                        <div>
                            <div className={styles.pliTopText}>
                                <p><strong>And it accumulates. Day after day. Week after week.</strong></p>
                                <p>That gallon of fluid your body should be draining every 24 hours? It's pooling in your stomach, your legs, your face—anywhere gravity and tissue structure allow it to settle.</p>
                            </div>
                            <div className={styles.pliPinkText}>
                                <p>The metabolic waste your cells produce overnight? It's still sitting there at noon. At dinner. While you're trying to fall asleep.</p>
                                <ul><li>That's why you're bloated. </li><li>That's why your ankles swell.</li><li>That's why you see cellulite.</li><li>That's why you feel exhausted and foggy.</li></ul>
                            </div>
                            <div className={styles.pliBottomText}>
                                <p><strong>Your cells are literally sitting in their own waste—and your body can't flush it out.</strong></p>
                                <p>The longer this goes on, the worse it gets. More congestion. More inflammation. More pressure on an already compromised system.</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div>
                <div className={`${styles.productJudgeOuter} ${styles.outerHowNothing}`}>
                    <div className={styles.pageWidth} style={{padding: '0 47px'}}>
                        <div className={styles.productJudgeContainer}>
                            <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>Why Nothing Has <span>Worked</span></h2>
                            <p className={`${styles.productSectionText} ${styles.centered}`}></p>
                        </div>
                        <div className={styles.productWhyBloatingGrid}>
                            <div className={styles.productWhyNothingCell}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360"/>
                                </div>
                                <div className={styles.productWhyNothingCellIn}>
                                    <h4>You cut out gluten, dairy, sugar. You ate clean for months.</h4>
                                    <div className={styles.productWhyNothingPink}>
                                        <p className={styles.productWhyNothingSubtitle}>
                                            <span>Why it failed</span>
                                            <span>
                                                <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"/>
                                            </span>
                                        </p>
                                        <p className={styles.productWhyNothingText}>Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.productWhyNothingCell}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359"/>
                                </div>
                                <div className={styles.productWhyNothingCellIn}>
                                    <h4>You tried viral lymphatic drops from TikTok.</h4>
                                    <div className={styles.productWhyNothingPink}>
                                        <p className={styles.productWhyNothingSubtitle}>
                                            <span>Why it failed</span>
                                            <span>
                                                <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"/>
                                            </span>
                                        </p>
                                        <p className={styles.productWhyNothingText}>They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.productWhyNothingCell}>
                                <div>
                                    <img src="//trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359"/>
                                </div>
                                <div className={styles.productWhyNothingCellIn}>
                                    <h4>You got lymphatic massage or bought compression socks.</h4>
                                    <div className={styles.productWhyNothingPink}>
                                        <p className={styles.productWhyNothingSubtitle}>
                                            <span>Why it failed</span>
                                            <span>
                                                <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"/>
                                            </span>
                                        </p>
                                        <p className={styles.productWhyNothingText}>Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productWhyNoteImg}>
                            <img class="Desktop_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"/>
                            {/* <img class="Desktop_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"/> */}
                        </div>
                        <div className={styles.centered} style={{marginTop: '24px'}}>
                            <a href="https://pay.trysculptique.com/lymphatic/checkout" className={styles.productPrimaryBtn}>Try Lymphatic Drainage Risk-Free</a>
                            <p className={styles.productPrimaryBtnFooter}>
                                <span>
                                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"/>
                                </span>
                                <span>60 day money-back guarantee</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={`${styles.productJudgeOuter} ${styles.pink}`}>
                    <div className={styles.pageWidth} style={{padding: '0 50px'}}>
                        <div className={styles.productJudgeContainer}>
                            <h2 className={`${styles.productSectionTitle} ${styles.centered}`}><span>The 8-Ingredient System</span> That Restores What Hormones Once Maintained</h2>
                            <p className={`${styles.productSectionText} ${styles.centered}`}>Sculptique is the only formula that addresses ALL 6 mechanisms of lymphatic dysfunction simultaneously—not with symbolic doses, but with therapeutic amounts based on clinical research.<br/>Not just moving fluid temporarily. Not just reducing inflammation. <strong>Complete restoration.</strong></p>
                        </div>
                        <div className={styles.productLymphIngrTable}>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Reactivate Lymphatic Pumps</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Cleavers Extract (100mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
                                    <p>Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.</p>
                                    <p>[Study: Enhanced NK cell activity in immunosuppressed models]</p>
                                </div>
                            </div>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Flush Excess Fluid</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Dandelion Extract (250mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
                                    <p>Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p&lt;0.05) and excretion ratio (p&lt;0.001). </p>
                                    <p>[Study: First human pilot study on diuretic effects]</p>
                                </div>
                            </div>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Break Down Protein Clogs</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/image_2.png?v=1760939909"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Bromelain Powder (100mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
<p>Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.</p>
<p>[Study: As effective as prescription NSAIDs for inflammation]</p>                                </div>
                            </div>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Strengthen Vessel Walls</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/image_3.png?v=1760939909"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Rutin (100mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
<p>Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients. </p>
<p>[Study: Systematic review of 1,643 participants]</p>                                
</div>
                            </div>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Reduce Inflammation</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Burdock Root Powder (200mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
<p>&nbsp;Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p&lt;0.001). Also supports hormonal balance. </p>
<p>[Study: 42-day trial in osteoarthritis patients]</p>                                </div>
                            </div>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Boost Immune Clearance</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/image_4.png?v=1760939909"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Echinacea Purpurea Extract (500mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
<p>Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections. </p>
<p>[Study: Increased NK cell cytotoxic activity]</p>                                </div>
                            </div>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Support Metabolism</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Kelp Extract (30mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
<p>Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials. </p>
<p>[Study: Dose-dependent increase in TSH levels]</p>                                </div>
                            </div>
                            <div className={styles.productLymphIngredient}>
                                <p className={styles.productLymphIngrSubtitle}>
                                    <span>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"/>
                                    </span>
                                    <span>Antioxidant Protection</span>
                                </p>
                                <img className={styles.productLymphMainImg} loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910"/>
                                <div className={styles.productLymphIngrThumb}>
                                    <div>
                                        <h5>Lemon Powder (50mg)</h5>
                                    </div>
                                    <div>
                                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626"/>
                                    </div>
                                </div>
                                <div className={styles.productLymphIngrContent}>
                                    <p>Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p&lt;0.001). Supports circulation and metabolic health. </p>
                                    <p>[Study: Triple-masked trial in 90 participants]</p>                                
                                </div>
                            </div>
                        </div>
                        <div className={styles.productLymphIngrTableSmall}>
                            <img class="Desktop_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1000003583_2.png?v=1760697982"/>
                            {/* <img class="Mobile_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1000003583_3.png?v=1760697982"/> */}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.productJudgeOuter} style={{padding: '56px 0'}}>
                    <div className={styles.pageWidth} >
                        <div className={styles.productJudgeContainer}>
                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211" className={styles.productReviewsTrust}/>
                            <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>Real Women, Real Results: 93,000+ Transformations</h2>
                            <p className={`${styles.productSectionText} ${styles.centered}`}>All reviews verified from actual paying customers</p>
                        </div>
                        <div className={`${styles.jdgmWidget} ${styles.jdgmReviewWidget} ${styles.jdgmDoneSetupWidget}`}>
                            <div className={`${styles.jdgmRevWidg}`}>
                                <div className={styles.jdgmRevWidgHeader}>
                                    <h2 className={styles.jdgmRevWidgTitle}>Customer Reviews</h2>
                                    <div className={styles.jdgmRowStars}>
                                        <div className={styles.jdgmRevWidgSummary}>
                                            <div className={styles.jdgmRevWidgSummaryInner}>
                                                <div className={styles.jdgmRevWidgSummaryStars} role='img'>
                                                    <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                    <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                    <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                    <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                    <span className={`${styles.jdgmStar} ${styles.jdgmHalf}`}></span>
                                                    <span className={styles.jdgmRevWidgSummaryAverage}>4.67 out of 5</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={`${styles.jdgmHistogram} ${styles.jdgmTempHidden}`}></div>
                                        <div className={styles.jdgmWidgetActionsWrapper}></div>
                                    </div>


                                    <div className={styles.jdgmFromWrapper} style={{display: 'none'}}></div>
                                    <div className={styles.jdgmRowMedia}></div>
                                    <div className={styles.jdgmFromDynamicWrapper} style={{display: 'none'}}></div>
                                </div>





                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={`${styles.productJudgeOuter} ${styles.pink}`}>
                    <div className={styles.pageWidth} style={{padding: '0px 30px'}}>
                        <div className={styles.productIconsGrid}>
                            <div>
                                <img src="//trysculptique.com/cdn/shop/files/ship-min.png?v=1758713222"/>
                                <p className={styles.h4title}>Free Shipping from USA</p>
                                <p>On all orders</p>
                            </div>
                            <div>
                                <img src="//trysculptique.com/cdn/shop/files/support-min.png?v=1758713216"/>
                                <p className={styles.h4title}>Naturally Supports Your Body</p>
                                <p>Promotes healthy immune cell functions</p>
                            </div>
                            <div>
                                <img src="//trysculptique.com/cdn/shop/files/natural-min.png?v=1758713216"/>
                                <p className={styles.h4title}>100% Natural Ingredients</p>
                                <p>8 active, natural ingredients</p>
                            </div>
                            <div>
                                <img src="//trysculptique.com/cdn/shop/files/60-min.png?v=1758713216"/>
                                <p className={styles.h4title}>Try it Risk Free for 60 Days</p>
                                <p>60-day money-back guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className={`${styles.productJudgeOuter} ${styles.mobileGrey}`} style={{padding: '56px 0px', marginTop: '0px'}}>
                    <div className={styles.pageWidth} style={{padding: '0px 52px'}}>
                        <div className={styles.productExpertOuter}>
                            <div>
                                <div className={styles.productExpertContent}>
                                    <p className={styles.productSubtitle}>July 4th, 2025</p>
                                    <h2 className={styles.productSectionTitle}>Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic</h2>
                                    <div className={styles.productText}>
                                        <p>“Your nutrition plays a powerful role in your appearance. If your body is missing key vitamins and nutrients, it can't process fat and upkeep healthy connective tissue, which is why unprocessed fat flows up and starts pushing up against your skin, forming bumps you know as cellulite.</p>
                                        <p>SmoothSkin by Sculptique™ contains ingredients that are scientifically proven to enhance microcirculation, boost lymphatic drainage, and reduce inflammation, which restores your tissue and breaks down the fat cells in your skin.”</p>
                                    </div>
                                    <div className={styles.btnContainer}>
                                        <a style={{background: ''}} href="https://pay.trysculptique.com/lymphatic/checkout" className={styles.productPrimaryBtn}>Try Lymphatic Drainage Risk-Free</a>
                                        <p className={styles.productPrimaryBtnFooter}>
                                            <span><img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395"/></span>
                                            <span>60-Day Money-Back Guarantee</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.productExpertMedia}>
                                <img loading="lazy" src="//trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                
                <div className={styles.productJudgeOuter} style={{ background: '#f3eee0', padding: '56px 0px' }}>
                    <div className={styles.pageWidth} style={{padding: '0px 49px'}}>
                        <div className={styles.productJudgeContainer}>
                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_2.png?v=1752485383" className={styles.productUgcStars} />
                            <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>See The Stories of Sculptique™ Women Firsthand</h2>
                            <p className={`${styles.productSectionText} ${styles.centered}`}></p>
                        </div>
                        <div className={styles.productCarouselOuter}>
                            <Slider ref={sliderRef} {...sliderSettings} className={`${styles.productUgcContainer} ${styles.slickInitialized} ${styles.slickSlider} ${styles.slickDotted}`}>
                                {videos.map((vid, index) => (
                                    <div key={index}  style={{width: '310px'}} className={`${styles.slickSlide} ${index === 0 ? `${styles.slickCurrent} ${styles.slickActive}` : ''}`}>
                                        <div className={styles.productUgcVideo}>
                                            <img 
                                                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519" 
                                                className={styles.productUgcPlay} 
                                                alt="Play"
                                            />
                                            <video
                                                ref={el => (videoRefs.current[index] = el)}
                                                playsInline
                                                muted
                                                loop
                                                poster={vid.poster}
                                            >
                                                <source src={vid.src} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className={styles.productUgcCarouselNav}>
                                <div 
                                    className={styles.productCarouselPrev}
                                    onClick={() => sliderRef.current?.slickPrev()}
                                >
                                    <img style={{transform: 'rotate(360deg)', position: 'relative', top: '1px'}} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845"/>
                                </div>
                                <div 
                                    className={styles.productCarouselNext}
                                    onClick={() => sliderRef.current?.slickNext()}
                                >
                                    <img style={{transform: 'rotate(180deg)', position: 'relative', top: '1px'}} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_55aa38bb-cb5e-4608-9097-927814968771.png?v=1758716845" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.btnContaine} style={{ textAlign: 'center' }}>
                            <a href="https://pay.trysculptique.com/lymphatic/checkout" className={styles.productPrimaryBtn}>Try Lymphatic Drainage Risk-Free</a>
                            <p className={styles.productPrimaryBtnFooter}>
                                <span>
                                    <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" />
                                </span>
                                <span>60-Day Money-Back Guarantee</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}