import styles from './JudgeOuter.module.scss';

export const JudgeOuter = () => {
    return (
        <div className={`${styles.productJudgeOuter} ${styles.outerMyBloating}`}>
            <div className={styles.pageWidth}>
                <div className={styles.productJudgeContainer}>
                    <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>Why Your <span>Bloating, Brain Fog &amp; Swollen Legs</span> Are Actually Connected</h2>
                    <p className={`${styles.productSectionText} ${styles.centered}`}>If you're experiencing more than one of these symptoms, your body is trying to tell you something:</p>
                </div>
                <div className={styles.productWhyBloatingGrid}>
                    <div className={styles.productWhyBloatingCell}>
                        <div>
                            <img src="//trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800"/>
                        </div>
                        <div className={styles.productWhyBloatCellIn}>
                            <div>
                                <p>Your stomach is flat in the morning, but by evening you look six months pregnant.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productWhyBloatingCell}>
                        <div>
                            <img src="//trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799"/>
                        </div>
                        <div className={styles.productWhyBloatCellIn}>
                            <div>
                                <p>Your ankles disappear into "kankles" by the end of the day.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productWhyBloatingCell}>
                        <div>
                            <img src="//trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801"/>
                        </div>
                        <div className={styles.productWhyBloatCellIn}>
                            <div>
                                <p>That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productWhyBloatingCell}>
                        <div>
                            <img src="//trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799"/>
                        </div>
                        <div className={styles.productWhyBloatCellIn}>
                            <div>
                                <p>You feel foggy and exhausted even after a full night's sleep.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productWhyBloatingCell}>
                        <div>
                            <img src="//trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799"/>
                        </div>
                        <div className={styles.productWhyBloatCellIn}>
                            <div>
                                <p>You wake up stiff and achy, like your body aged overnight.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.productWhyNoteImg}>
                    <img class="Desktop_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"/>
                    {/* <img class="Mobile_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769"/> */}
                </div>
                <img loading="lazy" className={styles.productArrowImg} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"/>
                <div className={styles.productJudgeContainer}>
                    <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>The Connection <span>You've Been Missing</span></h2>
                </div>
                <div className={styles.productWhyNoteImg}>
                    <img class="Desktop_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"/>
                    {/* <img class="Mobile_only" loading="lazy" src="//trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"/> */}
                </div>
                <img loading="lazy" className={styles.productArrowImg} src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"/>
            </div>
        </div>
    )
}