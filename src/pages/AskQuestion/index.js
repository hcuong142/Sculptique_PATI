import { useEffect, useState } from 'react';
import styles from './Question.module.scss';
import { ReactComponent as IconArrowBottom } from 'src/assets/icons/arrowBottom.svg';

export const AskQuestion = () => {
    const [openIndex, setOpenIndex] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth > 678);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth > 678);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'How is this different from lymphatic drops I saw on TikTok?',
            answer: (
                <>
                    <p>
                        Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system
                        too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts,
                        not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not
                        from tissue swelling.
                    </p>
                    <p>
                        Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly
                        absorbed and work at the cellular level to restore vessel function, break down protein clogs,
                        and strengthen vessel walls—not just make you urinate more.
                    </p>
                </>
            ),
        },
        {
            question: "Why didn't my diet changes work?",
            answer: (
                <p>
                    Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your
                    body's broken ability to drain what's already there. That's why you could eat perfectly clean and
                    still wake up bloated—the backed-up lymphatic waste was still pooling in your tissues.
                </p>
            ),
        },
        {
            question: 'How long until I see results?',
            answer: (
                <p>
                    Most women notice something within the first week—feeling lighter, less bloated, morning puffiness
                    fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6.
                    But true restoration takes time—we recommend 90 days for complete results.
                </p>
            ),
        },
        {
            question: 'Is this safe? Any side effects?',
            answer: (
                <>
                    <p>
                        Sculptique contains 100% natural botanical ingredients used safely for centuries. The most
                        common experience is increased urination in the first few days (expected—you're flushing excess
                        fluid). Serious side effects are extremely rare.
                    </p>
                    <p>
                        However, if you have pre-existing conditions or take prescription medications, consult your
                        healthcare provider first.
                    </p>
                </>
            ),
        },
        {
            question: 'Can I take this with other supplements?',
            answer: (
                <p>
                    Yes. Sculptique works synergistically with most supplements. However, if you're taking blood
                    thinners, diuretics, thyroid medication, or immune-suppressing drugs, check with your healthcare
                    provider first.
                </p>
            ),
        },
        {
            question: 'How do I use it?',
            answer: (
                <p>
                    Take 2 capsules daily with water. Any time of day (though mornings are ideal). With or without food.
                    Just be consistent.
                </p>
            ),
        },
        {
            question: "What if it doesn't work for me?",
            answer: (
                <p>
                    You have 60 full days to try it. If you don't feel lighter, less bloated, more energized—send it
                    back. Even if you've taken every capsule. We'll refund your purchase immediately. You only keep
                    Sculptique if it works for YOU.
                </p>
            ),
        },
        {
            question: 'Where is this manufactured?',
            answer: (
                <p>
                    Sculptique is manufactured in the USA at an FDA-registered, GMP-certified facility. We use Infrared
                    Spectroscopy testing, heavy metal testing, and third-party quality control. Every batch is tested to
                    ensure therapeutic doses with no contaminants.
                </p>
            ),
        },
        {
            question: "Why isn't this in stores?",
            answer: (
                <p>
                    Two reasons: Quality control (we oversee the entire process from sourcing to testing) and price
                    (retail markup would make it cost at least double). By selling direct, we maintain the highest
                    quality while keeping the price affordable.
                </p>
            ),
        },
        {
            question: 'Is this vegan/gluten-free?',
            answer: <p>Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients</p>,
        },
    ];

    return (
        <div>
            <div className={styles.productJudgeOuter}>
                <div className={styles.pageWidth}>
                    <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>Frequently Asked Questions</h2>
                    <div className={styles.productFaqContainer}>
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className={styles.productFaqBox}>
                                    <div
                                        className={styles.productFaqThumb}
                                        onClick={() => toggleFaq(index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                toggleFaq(index);
                                            }
                                        }}
                                    >
                                        <p>{faq.question}</p>

                                        <div
                                            className={styles.arrowWrapper}
                                            style={{
                                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.7s ease',
                                            }}
                                        >
                                            <IconArrowBottom />
                                        </div>
                                    </div>

                                    <div
                                        className={`${styles.productFaqContent} ${
                                            openIndex === index ? styles.open : ''
                                        }`}
                                        ref={(el) => {
                                            if (!el) return;

                                            el.style.height = openIndex === index ? el.scrollHeight + 'px' : '0px';
                                        }}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.centered} style={{ marginTop: '24px' }}>
                        <a href="https://pay.trysculptique.com/lymphatic/checkout" className={styles.productPrimaryBtn}>
                            Try Lymphatic Drainage Risk-Free
                        </a>
                        <p className={styles.productPrimaryBtnFooter}>
                            <span>
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" />
                            </span>
                            <span>60-Day Money-Back Guarantee</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.productJudgeOuter}>
                <div className={styles.pageWidth} style={{ padding: '0px 50px' }}>
                    <div className={styles.productStatsOuter}>
                        <div>
                            <div className={styles.productExpertContent}>
                                <h2 className={styles.productSectionTitle}>
                                    We're On A Mission To Help 100,000,000 Women Visibly, Naturally Get Rid Of
                                    Bloating…And Feel Like Themselves Again
                                </h2>
                                <div className={styles.productText}>
                                    <p>Here's where we're at right now:</p>
                                </div>
                                {isMobile ? (
                                    <img
                                        loading="lazy"
                                        class="Desktop_only"
                                        src="//trysculptique.com/cdn/shop/files/numbdeskt-min_png.png?v=1760942458"
                                    />
                                ) : (
                                    <>
                                        <img
                                            loading="lazy"
                                            class="Mobile_only"
                                            src="//trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
                                        />
                                        <img
                                            loading="lazy"
                                            class="Mobile_only"
                                            src="//trysculptique.com/cdn/shop/files/numbmob-min_png.png?v=1760942458"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.productExpertMedia}>
                            {isMobile ? (
                                <img
                                    loading="lazy"
                                    src="//trysculptique.com/cdn/shop/files/Frame_1000003537.jpg?v=1760943777"
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.productJudgeOuter} style={{ background: '#f3eee0' }}>
                <div className={styles.pageWidth} style={{ padding: '0px 49px' }}>
                    <div className={styles.productTextImage}>
                        <div>
                            <div className={styles.productTextImageContent}>
                                {isMobile ? (
                                    <img
                                        loading="lazy"
                                        className={styles.productTextImageReviews}
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review.png?v=1752480694"
                                    />
                                ) : (
                                    <img
                                        loading="lazy"
                                        className={styles.productTextImageReviewsMobile}
                                        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_review_1.png?v=1752480694"
                                    />
                                )}

                                <h2 className={styles.productSectionTitle}>
                                    Stop Masking Symptoms. Start Restoring Root Cause.
                                </h2>
                                <div className={styles.productText}>
                                    <p>
                                        You deserve to feel like yourself again. To wake up without puffiness. To see
                                        your ankles. To look in the mirror and recognize the vibrant woman staring back.
                                        To have energy for the people you love.
                                    </p>
                                    <p>
                                        You deserve a solution that actually works. Not temporary relief. Not symptom
                                        masking. Complete lymphatic restoration.
                                    </p>
                                </div>
                                {window.innerWidth <= 678 && (
                                    <img
                                        loading="lazy"
                                        class="Mobile_only product_section-text-main-img"
                                        src="//trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
                                    ></img>
                                )}
                                <div className={styles.productTextImagePoints}></div>
                                <div
                                    className={`${styles.alignLeft} ${styles.btnContainer}`}
                                    style={{ marginTop: '24px' }}
                                >
                                    <a
                                        href="https://pay.trysculptique.com/lymphatic/checkout"
                                        className={styles.productPrimaryBtn}
                                    >
                                        Try Lymphatic Drainage Risk-Free
                                    </a>
                                    <p className={styles.productPrimaryBtnFooter}>
                                        <span>
                                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" />
                                        </span>
                                        <span>60-Day Money-Back Guarantee</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productTextImageMedia}>
                            {isMobile ? (
                                <img
                                    loading="lazy"
                                    src="//trysculptique.com/cdn/shop/files/before-min_png.png?v=1760688928"
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>
            </div>
        </div>
    );
};
