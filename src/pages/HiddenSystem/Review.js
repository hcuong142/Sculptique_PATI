import { useRef, useState } from 'react';
import styles from './Hidden.module.scss';

const initialReviews = [
    {
        star: 5,
        content: 'Seems to work going to order another bottle',
        displayName: 'Herman Buckley',
        day: '01/15/2026',
    },
    {
        star: 5,
        content:
            'Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working.',
        displayName: 'Anonymous',
        day: '12/08/2025',
    },
    {
        star: 5,
        content: 'One month and I’ve already seen a difference!',
        displayName: 'Anonymous',
        day: '12/01/2025',
    },
    {
        star: 5,
        content:
            'I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It’s a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!',
        displayName: 'Donabeth Houx',
        day: '11/23/2025',
    },
    {
        star: 5,
        content:
            "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
        displayName: 'Dawn Camacho',
        day: '11/17/2025',
    },
    {
        star: 5,
        content: 'I have noticed a difference on my swelling.',
        displayName: 'Anonymous',
        day: '11/13/2025',
    },
    {
        star: 5,
        content: 'starting to see results after one bottle',
        displayName: 'Anonymous',
        day: '11/10/2025',
    },
    {
        star: 5,
        content:
            'Whenever I am sitting or laying down for awhile, I’m really stiff & I feel like my lower body doesn’t belong to me. Almost immediately after taking these pills, I am no longer stiff & I move with ease! Thank you!',
        displayName: 'Lynda Sandora',
        day: '11/09/2025',
    },
    {
        star: 5,
        content: 'I had been having post menopausal acne, it has cleared up!',
        displayName: 'Meg Christie',
        day: '11/09/2025',
    },
    {
        star: 5,
        content: 'Excellent product',
        displayName: 'Anonymous',
        day: '11/08/2025',
    },
    {
        star: 5,
        content: 'Love it! 😍',
        displayName: 'Anonymous',
        day: '11/08/2025',
    },
    {
        star: 5,
        content: 'I love this product and I see the benefits of it 🙌🏽',
        displayName: 'Agnes Oates',
        day: '11/08/2025',
    },
    {
        star: 5,
        content: '.',
        displayName: 'Anonymous',
        day: '10/23/2025',
    },
    {
        star: 5,
        content: 'So far, I am happy.',
        displayName: 'Kelly Serre',
        day: '10/16/2025',
    },
    {
        star: 5,
        content: 'My skin is feeling so soft!',
        displayName: 'Barbara Jean',
        day: '10/16/2025',
    },
];

export const Review = () => {
    const [previews, setPreviews] = useState([]);
    const fileInputRef = useRef(null);
    const [isWritingReview, setIsWritingReview] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [newReview, setNewReview] = useState(null);

    const [rating, setRating] = useState(0);
    const [reviewBody, setReviewBody] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [allReviews, setAllReviews] = useState(initialReviews);

    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;
    const totalPages = Math.ceil(allReviews.length / reviewsPerPage);
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);

    const handleWriteReview = (e) => {
        e.preventDefault();
        setIsWritingReview(true);
        setIsSubmitted(false);
    };

    const handleCancelReview = (e) => {
        e.preventDefault();
        setIsWritingReview(false);

        setRating(0);
        setReviewBody('');
        setDisplayName('');
        setEmail('');
        setPreviews([]);
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files || []);

        const newTotal = previews.length + selectedFiles.length;
        if (newTotal > 5) {
            alert('Sorry, we can only accept 5 images/videos for one review.');
            e.target.value = '';
            return;
        }

        const newPreviewItems = selectedFiles.map((file) => ({
            file,
            url: URL.createObjectURL(file),
            type: file.type.startsWith('video/') ? 'video' : 'image',
            isLoading: true,
            progress: 0,
            name: file.name,
        }));

        setPreviews((prev) => [...prev, ...newPreviewItems]);

        newPreviewItems.forEach((item, idx) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 12 + 8;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    setPreviews((current) =>
                        current.map((p, i) =>
                            i === previews.length + idx ? { ...p, isLoading: false, progress: 100 } : p,
                        ),
                    );
                } else {
                    setPreviews((current) =>
                        current.map((p, i) => (i === previews.length + idx ? { ...p, progress } : p)),
                    );
                }
            }, 120);
        });

        e.target.value = '';
    };

    const removeImage = (index) => {
        setPreviews((prev) => {
            const removed = prev[index];
            if (removed?.url) URL.revokeObjectURL(removed.url);
            return prev.filter((_, i) => i !== index);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!reviewBody.trim()) {
            alert('Vui lòng nhập nội dung review');
            return;
        }
        if (!displayName.trim()) {
            alert('Vui lòng nhập display name');
            return;
        }
        if (!email.trim()) {
            alert('Vui lòng nhập email');
            return;
        }
        if (rating === 0) {
            alert('Vui lòng chọn số sao');
            return;
        }

        // Giả lập submit thành công
        const newReview = {
            body: reviewBody.trim(),
            author: displayName.trim(),
            content: reviewBody.trim(), // ← key là content
            displayName: displayName.trim(),
            date: new Date().toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
            }), // format MM/DD/YYYY giống review cứng
            rating: rating,
            // Nếu sau này có media thật thì thêm vào đây
        };

        setAllReviews([newReview, ...allReviews]);
        setIsSubmitted(true);
        setCurrentPage(1);
        // setIsWritingReview(false); // ẩn form

        // Reset form (nếu mở lại)
        setRating(0);
        setReviewBody('');
        setDisplayName('');
        setEmail('');
        setPreviews([]);
    };

    // Xử lý chọn sao
    const handleStarClick = (value) => {
        setRating(value);
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const goToFirst = () => goToPage(1);
    const goToPrev = () => goToPage(currentPage - 1);
    const goToNext = () => goToPage(currentPage + 1);
    const goToLast = () => goToPage(totalPages);

    return (
        <div>
            <div className={styles.productJudgeOuter} style={{ padding: '56px 0' }}>
                <div className={styles.pageWidth}>
                    <div className={styles.productJudgeContainer}>
                        <img
                            src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Trustpilot_Score.png?v=1752349211"
                            className={styles.productReviewsTrust}
                        />
                        <h2 className={`${styles.productSectionTitle} ${styles.centered}`}>
                            Real Women, Real Results: 93,000+ Transformations
                        </h2>
                        <p className={`${styles.productSectionText} ${styles.centered}`}>
                            All reviews verified from actual paying customers
                        </p>
                    </div>
                    <div className={`${styles.jdgmWidget} ${styles.jdgmReviewWidget} ${styles.jdgmDoneSetupWidget}`}>
                        <div className={`${styles.jdgmRevWidg}`}>
                            <div className={styles.jdgmRevWidgHeader}>
                                <h2 className={styles.jdgmRevWidgTitle}>Customer Reviews</h2>
                                <div className={styles.jdgmRowStars}>
                                    <div className={styles.jdgmRevWidgSummary}>
                                        <div className={styles.jdgmRevWidgSummaryInner}>
                                            <div className={styles.jdgmRevWidgSummaryStars} role="img">
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmHalf}`}></span>
                                                <span className={styles.jdgmRevWidgSummaryAverage}>4.67 out of 5</span>
                                            </div>
                                            <div
                                                className={`${styles.jdgmRevWidgSummaryText} ${styles.jdgmAllReviewsSummaryTextVerified}`}
                                            >
                                                Based on 111 reviews
                                                <img
                                                    className={styles.jdgmVerifiedCheckmark}
                                                    src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                                                    alt="Verified Checkmark"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.jdgmHistogram} ${styles.jdgmTempHidden}`}>
                                        <div
                                            className={styles.jdgmHistogramRow}
                                            data-rating="5"
                                            data-frequency="85"
                                            data-percentage="77"
                                        >
                                            <div
                                                className={styles.jdgmHistogramStar}
                                                role="button"
                                                aria-label="77% (85) reviews with 5 star rating"
                                                tabindex="0"
                                            >
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                            </div>
                                            <div className={styles.jdgmHistogramBar}>
                                                <div
                                                    className={styles.jdgmHistogramBarContent}
                                                    style={{ width: '77%' }}
                                                ></div>
                                            </div>
                                            <div className={styles.jdgmHistogramFrequency}>85</div>
                                        </div>
                                        <div
                                            className={styles.jdgmHistogramRow}
                                            data-rating="4"
                                            data-frequency="17"
                                            data-percentage="15"
                                        >
                                            <div
                                                className={styles.jdgmHistogramStar}
                                                role="button"
                                                aria-label="15% (17) reviews with 4 star rating"
                                                tabindex="0"
                                            >
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                            </div>
                                            <div className={styles.jdgmHistogramBar}>
                                                <div
                                                    className={styles.jdgmHistogramBarContent}
                                                    style={{ width: '15%' }}
                                                ></div>
                                            </div>
                                            <div className={styles.jdgmHistogramFrequency}>17</div>
                                        </div>
                                        <div
                                            className={styles.jdgmHistogramRow}
                                            data-rating="3"
                                            data-frequency="8"
                                            data-percentage="7"
                                        >
                                            <div
                                                className={styles.jdgmHistogramStar}
                                                role="button"
                                                aria-label="7% (8) reviews with 3 star rating"
                                                tabindex="0"
                                            >
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                            </div>
                                            <div className={styles.jdgmHistogramBar}>
                                                <div
                                                    className={styles.jdgmHistogramBarContent}
                                                    style={{ width: '7%' }}
                                                ></div>
                                            </div>
                                            <div className={styles.jdgmHistogramFrequency}>8</div>
                                        </div>
                                        <div
                                            className={styles.jdgmHistogramRow}
                                            data-rating="2"
                                            data-frequency="1"
                                            data-percentage="1"
                                        >
                                            <div
                                                className={styles.jdgmHistogramStar}
                                                role="button"
                                                aria-label="1% (1) reviews with 2 star rating"
                                                tabindex="0"
                                            >
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOn}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                            </div>
                                            <div className={styles.jdgmHistogramBar}>
                                                <div
                                                    className={styles.jdgmHistogramBarContent}
                                                    style={{ width: '1%' }}
                                                ></div>
                                            </div>
                                            <div className={styles.jdgmHistogramFrequency}>1</div>
                                        </div>
                                        <div
                                            className={styles.jdgmHistogramRow}
                                            data-rating="1"
                                            data-frequency="0"
                                            data-percentage="0"
                                        >
                                            <div
                                                className={styles.jdgmHistogramStar}
                                                role="button"
                                                aria-label="0% (0) reviews with 15 star rating"
                                                tabindex="0"
                                            >
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                                <span className={`${styles.jdgmStar} ${styles.jdgmOff}`}></span>
                                            </div>
                                            <div className={styles.jdgmHistogramBar}>
                                                <div
                                                    className={styles.jdgmHistogramBarContent}
                                                    style={{ width: '0%' }}
                                                ></div>
                                            </div>
                                            <div className={styles.jdgmHistogramFrequency}>0</div>
                                        </div>
                                        <div
                                            className={`${styles.jdgmHistogramRow} ${styles.jdgmHistogramClearFilter}`}
                                            data-rating="null"
                                            tabindex="0"
                                            style={{ display: 'block' }}
                                        >
                                            See all reviews
                                        </div>
                                    </div>

                                    <div className={styles.jdgmWidgetActionsWrapper}>
                                        {isWritingReview ? (
                                            isSubmitted ? (
                                                <a
                                                    href="#"
                                                    className={`${styles.jdgmWriteRevLink} ${styles.jdgmWriteRevLinkRefresh}`}
                                                    role="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        window.location.replace(
                                                            window.location.origin + window.location.pathname,
                                                        );
                                                    }}
                                                >
                                                    Refresh page
                                                </a>
                                            ) : (
                                                <a
                                                    href="#"
                                                    className={styles.jdgmWriteRevLink}
                                                    role="button"
                                                    onClick={handleCancelReview}
                                                >
                                                    Cancel review
                                                </a>
                                            )
                                        ) : (
                                            <a
                                                href="#"
                                                className={styles.jdgmWriteRevLink}
                                                role="button"
                                                onClick={handleWriteReview}
                                            >
                                                Write a review
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {isWritingReview && (
                                    <div className={styles.jdgmFromWrapper}>
                                        {isSubmitted ? (
                                            <>
                                                <div className={styles.jdgmNotification}>
                                                    <div className={styles.jdgmNotificationInner}>
                                                        <div className={styles.jdgmNotificationTitle}>
                                                            Review Submitted!
                                                        </div>
                                                        Thank you! Your review will be published as soon as it is
                                                        approved by the shop admin. You can remove or edit your review
                                                        by logging into
                                                        <a
                                                            href="https://judge.me/login"
                                                            target="_blank"
                                                            rel="nofollow noopener noreferrer"
                                                        >
                                                            {' '}
                                                            Judge.me
                                                        </a>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <form
                                                    className={styles.jdgmForm}
                                                    onSubmit={handleSubmit}
                                                    noValidate="novalidate"
                                                >
                                                    <div className={styles.jdgmFormTitle}>Write a review</div>

                                                    <div className={styles.jdgmFormFieldset} aria-label="Rating">
                                                        <label>Rating</label>
                                                        {/* <span className={styles.jdgmFormRating} style={{ cursor: 'pointer' }}>
                                                    <a
                                                        data-alt="1"
                                                        className={`${styles.jdgmStar} ${styles.jdgmOff}`}
                                                        title="1 star"
                                                        role="button"
                                                        aria-label="1 star"
                                                    ></a>
                                                    <a
                                                        data-alt="2"
                                                        className={`${styles.jdgmStar} ${styles.jdgmOff}`}
                                                        title="2 stars"
                                                        role="button"
                                                        aria-label="2 stars"
                                                    ></a>
                                                    <a
                                                        data-alt="3"
                                                        className={`${styles.jdgmStar} ${styles.jdgmOff}`}
                                                        title="3 stars"
                                                        role="button"
                                                        aria-label="3 stars"
                                                    ></a>
                                                    <a
                                                        data-alt="4"
                                                        className={`${styles.jdgmStar} ${styles.jdgmOff}`}
                                                        title="4 stars"
                                                        role="button"
                                                        aria-label="4 stars"
                                                    ></a>
                                                    <a
                                                        data-alt="5"
                                                        className={`${styles.jdgmStar} ${styles.jdgmOff}`}
                                                        title="5 stars"
                                                        role="button"
                                                        aria-label="5 stars"
                                                    ></a>
                                                    <input name="score" type="hidden" />
                                                </span> */}
                                                        <span
                                                            className={styles.jdgmFormRating}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <a
                                                                    key={star}
                                                                    data-alt={star}
                                                                    className={`${styles.jdgmStar} ${rating >= star ? styles.jdgmOn : styles.jdgmOff}`}
                                                                    title={`${star} star${star > 1 ? 's' : ''}`}
                                                                    role="button"
                                                                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                                                                    onClick={() => handleStarClick(star)}
                                                                ></a>
                                                            ))}
                                                            <input name="score" type="hidden" />
                                                        </span>
                                                    </div>

                                                    <div
                                                        className={styles.jdgmFormFieldset}
                                                        style={{ display: 'none' }}
                                                    >
                                                        <label
                                                            className={styles.jdgmFormInlineLabel}
                                                            htmlFor="jdgm_review_title_9kukf12nw"
                                                        >
                                                            Review Title
                                                        </label>
                                                        <span className={styles.jdgmCountdown}></span>
                                                        <input
                                                            id="jdgm_review_title_9kukf12nw"
                                                            name="review_title"
                                                            type="text"
                                                            placeholder="Give your review a title"
                                                            aria-label="Review Title"
                                                        />
                                                    </div>

                                                    <div className={styles.jdgmFormFieldset}>
                                                        <label
                                                            className={styles.jdgmFormInlineLabel}
                                                            htmlFor="jdgm_review_body_9kukf12nw"
                                                        >
                                                            Review content
                                                        </label>
                                                        <span className={styles.jdgmCountdown}></span>
                                                        <textarea
                                                            id="jdgm_review_body_9kukf12nw"
                                                            rows="5"
                                                            name="review_body"
                                                            placeholder="Start writing here..."
                                                            aria-label="Review content"
                                                            value={reviewBody}
                                                            onChange={(e) => setReviewBody(e.target.value)}
                                                        ></textarea>
                                                    </div>

                                                    <div className={styles.jdgmFormFieldset}>
                                                        <label>Picture/Video (optional)</label>
                                                        <div className={styles.jdgmMediaFieldsetContainer}>
                                                            <div
                                                                className={`${styles.jdgmPictureFieldsetBox} ${styles.jdgmPictureFieldsetBoxInput}`}
                                                            >
                                                                <div className={styles.jdgmPictureFieldsetBoxWrapper}>
                                                                    <div className={styles.jdgmMediaFieldsetIcon}></div>
                                                                </div>

                                                                <input
                                                                    type="file"
                                                                    name="media"
                                                                    className={styles.jdgmMediaFieldsetInput}
                                                                    multiple
                                                                    accept="image/gif,image/jpeg,image/jpg,image/png,image/webp,video/mp4,video/webm,video/quicktime"
                                                                    aria-label="Choose review pictures or videos (optional)"
                                                                    onChange={handleFileChange}
                                                                    ref={fileInputRef}
                                                                />
                                                                <div
                                                                    style={{ display: 'none' }}
                                                                    aria-label="Choose review pictures or videos"
                                                                >
                                                                    Choose review pictures or videos (optional)
                                                                </div>
                                                            </div>
                                                            {previews.map((preview, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`${styles.jdgmPictureFieldsetBox} ${styles.jdgmPictureFieldsetBoxPreview}`}
                                                                    data-type={preview.type}
                                                                >
                                                                    <div
                                                                        className={styles.jdgmPictureFieldsetDelete}
                                                                        onClick={() => removeImage(index)}
                                                                        style={{ cursor: 'pointer' }}
                                                                    />

                                                                    <div
                                                                        className={styles.jdgmPictureFieldsetBoxWrapper}
                                                                    >
                                                                        {preview.isLoading && (
                                                                            <div
                                                                                className={
                                                                                    styles.jdgmPictureFieldsetSpinnerWrapper
                                                                                }
                                                                            >
                                                                                <div
                                                                                    className={
                                                                                        styles.jdgmPictureFieldsetProgressText
                                                                                    }
                                                                                >
                                                                                    {Math.round(preview.progress)}%
                                                                                </div>
                                                                                <div
                                                                                    className={styles.jdgmSpinner}
                                                                                ></div>
                                                                            </div>
                                                                        )}

                                                                        {preview.type === 'image' ? (
                                                                            <img
                                                                                src={preview.url}
                                                                                className={
                                                                                    styles.jdgmMediaFieldsetPlayer
                                                                                }
                                                                                alt={`Preview ${preview.name || index + 1}`}
                                                                                style={{
                                                                                    objectFit: 'cover',
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    display: preview.isLoading
                                                                                        ? 'none'
                                                                                        : 'block',
                                                                                }}
                                                                            />
                                                                        ) : (
                                                                            <video
                                                                                src={preview.url}
                                                                                className={
                                                                                    styles.jdgmMediaFieldsetPlayer
                                                                                }
                                                                                muted
                                                                                playsInline
                                                                                style={{
                                                                                    objectFit: 'cover',
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    display: preview.isLoading
                                                                                        ? 'none'
                                                                                        : 'block',
                                                                                }}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className={styles.jdgmCustomForms}></div>

                                                    <div className={styles.jdgmFormFieldset}>
                                                        <label
                                                            className={styles.jdgmFormInlineLabel}
                                                            htmlFor="jdgm_review_reviewer_name_9kukf12nw"
                                                        >
                                                            Display name
                                                        </label>{' '}
                                                        <span className={styles.jdgmFormReviewerNameFormatContainer}>
                                                            (
                                                            <label
                                                                htmlFor="jdgm_review_reviewer_name_format_9kukf12nw"
                                                                className={`${styles.jdgmFormInlineLabel} ${styles.jdgmAlwaysVisible}`}
                                                            >
                                                                displayed publicly like
                                                            </label>{' '}
                                                            <span className={styles.jdgmSortDropdownWrapper}>
                                                                <select
                                                                    id="jdgm_review_reviewer_name_format_9kukf12nw"
                                                                    name="reviewer_name_format"
                                                                    className={styles.jdgmSortDropdown}
                                                                    aria-label="Name format"
                                                                >
                                                                    <option value="" selected="">
                                                                        John Smith
                                                                    </option>
                                                                    <option value="last_initial">John S.</option>
                                                                    <option value="first_name_only">John</option>
                                                                    <option value="all_initials">J.S.</option>
                                                                    <option value="anonymous">Anonymous</option>
                                                                </select>
                                                                <span className={styles.jdgmSortDropdownArrow}></span>
                                                            </span>
                                                            )
                                                        </span>
                                                        <input
                                                            id="jdgm_review_reviewer_name_9kukf12nw"
                                                            name="reviewer_name"
                                                            type="text"
                                                            placeholder="Display name"
                                                            aria-label="Display name"
                                                            value={displayName}
                                                            onChange={(e) => setDisplayName(e.target.value)}
                                                        />
                                                    </div>

                                                    <div
                                                        className={`${styles.jdgmFormFieldset} ${styles.jdgmFormEmailFieldset}`}
                                                    >
                                                        <label htmlFor="jdgm_review_reviewer_email_9kukf12nw">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="jdgm_review_reviewer_email_9kukf12nw"
                                                            name="reviewer_email"
                                                            type="email"
                                                            required=""
                                                            placeholder="Your email address"
                                                            aria-label="Email address"
                                                            aria-required="true"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>

                                                    <div className={styles.jdgmFormFieldset}>
                                                        <p>
                                                            How we use your data: We'll only contact you about the
                                                            review you left, and only if necessary. By submitting your
                                                            review, you agree to Judge.me's{' '}
                                                            <a
                                                                href="https://judge.me/terms"
                                                                target="_blank"
                                                                rel="nofollow noopener noreferrer"
                                                                style={{
                                                                    color: '#0000EE',
                                                                    textDecoration: 'underline',
                                                                }}
                                                            >
                                                                terms
                                                            </a>
                                                            ,{' '}
                                                            <a
                                                                href="https://judge.me/privacy"
                                                                target="_blank"
                                                                rel="nofollow noopener noreferrer"
                                                                style={{
                                                                    color: '#0000EE',
                                                                    textDecoration: 'underline',
                                                                }}
                                                            >
                                                                privacy
                                                            </a>{' '}
                                                            and{' '}
                                                            <a
                                                                href="https://judge.me/content-policy"
                                                                target="_blank"
                                                                rel="nofollow noopener noreferrer"
                                                                style={{
                                                                    color: '#0000EE',
                                                                    textDecoration: 'underline',
                                                                }}
                                                            >
                                                                content
                                                            </a>{' '}
                                                            policies.
                                                        </p>
                                                    </div>

                                                    <div
                                                        className={`${styles.jdgmFormFieldset} ${styles.jdgmFormFieldsetActions}`}
                                                    >
                                                        <a
                                                            href="#judgeme_product_reviews"
                                                            role="button"
                                                            onClick={handleCancelReview}
                                                            className={`${styles.jdgmBtn} ${styles.jdgmBtnBorder} ${styles.jdgmCancelRev}`}
                                                        >
                                                            Cancel review
                                                        </a>
                                                        <input
                                                            type="submit"
                                                            className={`${styles.jdgmBtn} ${styles.jdgmBtnSolid} ${styles.jdgmSubmitRev}`}
                                                            value="Submit Review"
                                                        />
                                                    </div>
                                                </form>
                                            </>
                                        )}
                                    </div>
                                )}

                                <div
                                    className={styles.jdgmRowMedia}
                                    style={{ borderTop: '1px solid rgba(250, 138, 138, 0.1)' }}
                                >
                                    <div className={styles.jdgmMedalsWrapper} data-updated-at="2026-01-19T11:49:12Z">
                                        <div
                                            className={styles.jdgmMedals}
                                            data-link="https://app.judge.me/reviews/medals"
                                        >
                                            <div className={styles.jdgmMedalsContainer}>
                                                <div
                                                    className={styles.jdgmMedalWrapper}
                                                    title="Diamond Authentic Shop. 100% of published reviews are verified reviews"
                                                >
                                                    <a
                                                        className={styles.jdgmMedal}
                                                        data-value="100.0"
                                                        data-type="auth"
                                                        data-tier="diamond"
                                                    >
                                                        <div
                                                            className={styles.jdgmMedalImage}
                                                            data-url="auth/diamond.svg"
                                                            data-alt="Judge.me Diamond Authentic Shop medal"
                                                        >
                                                            <img
                                                                alt="Judge.me Diamond Authentic Shop medal"
                                                                src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/diamond.svg?auto=format"
                                                            />
                                                        </div>
                                                        <div className={styles.jdgmMedalValue}>100.0</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.jdgmFromDynamicWrapper} style={{ display: 'none' }}></div>
                            </div>

                            <div className={styles.jdgmRowActions}>
                                <div className={styles.jdgmRevWidgSortWrapper}>
                                    <div className={styles.jdgmSortDropdownWrapper}>
                                        <select className={styles.jdgmSortDropdown} aria-label="Sort dropdown">
                                            <option value="most-recent">Most Recent</option>
                                            <option value="highest-rating">Highest Rating</option>
                                            <option value="lowest-rating">Lowest Rating</option>
                                            <option value="with-pictures">Only Pictures</option>
                                            <option value="pictures-first">Pictures First</option>
                                            <option value="videos-first">Videos First</option>
                                            <option value="most-helpful">Most Helpful</option>
                                        </select>
                                        <span className={styles.jdgmSortDropdownArrow}></span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.jdgmRevWidgBody}>
                                <div className={styles.jdgmRevWidgReviews}>
                                    {/* {newReview && (
                                        <div
                                            className={`${styles.jdgmRev} ${styles.jdgmDividerTop} ${styles.jdgmDoneSetup}`}
                                        >
                                            <div className={styles.jdgmRevHeader}>
                                                <div className={styles.jdgmRowRating}>
                                                    <span
                                                        className={styles.jdgmRevRating}
                                                        data-score={newReview.rating}
                                                        tabIndex="0"
                                                        aria-label={`${newReview.rating} star review`}
                                                        role="img"
                                                    >
                                                        {[...Array(5)].map((_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`${styles.jdgmStar} ${i < newReview.rating ? styles.jdgmOn : styles.jdgmOff}`}
                                                            ></span>
                                                        ))}
                                                    </span>
                                                    <span className={styles.jdgmRevTimestamp}>{newReview.date}</span>
                                                </div>
                                                <div className={styles.jdgmRowProfile}>
                                                    <div className={styles.jdgmRevIcon}></div>
                                                    <span className={styles.jdgmRevAuthorWrapper}>
                                                        <span className={styles.jdgmRevAuthor}>{newReview.author}</span>
                                                        <span className={styles.jdgmRevBuyerBadgeWrapper}>
                                                            <span className={styles.jdgmRevBuyerBadge}></span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.jdgmRevContent}>
                                                <div className={styles.jdgmRevBody}>
                                                    <p>{newReview.body}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )} */}
                                    {currentReviews.map((rev, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.jdgmRev} ${styles.jdgmDividerTop} ${styles.jdgmDoneSetup}`}
                                        >
                                            <div className={styles.jdgmRevHeader}>
                                                <div className={styles.jdgmRowRating}>
                                                    <span
                                                        className={styles.jdgmRevRating}
                                                        data-score={rev.star}
                                                        tabIndex="0"
                                                        aria-label={`${rev.star} star review`}
                                                        role="img"
                                                    >
                                                        {[...Array(5)].map((_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`${styles.jdgmStar} ${i < rev.star ? styles.jdgmOn : styles.jdgmOff}`}
                                                            ></span>
                                                        ))}
                                                    </span>
                                                    <span className={styles.jdgmRevTimestamp}>{rev.day}</span>
                                                </div>
                                                <div className={styles.jdgmRowProfile}>
                                                    <div className={styles.jdgmRevIcon}></div>
                                                    <span className={styles.jdgmRevAuthorWrapper}>
                                                        <span className={styles.jdgmRevAuthor}>{rev.displayName}</span>
                                                        <span className={styles.jdgmRevBuyerBadgeWrapper}>
                                                            <span className={styles.jdgmRevBuyerBadge}></span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.jdgmRevContent}>
                                                <div className={styles.jdgmRevBody}>
                                                    <p>{rev.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {totalPages > 1 && (
                                    <div className={styles.jdgmPaginate} data-per-page="5">
                                        {/* First Page */}
                                        {currentPage > 1 && (
                                            <a
                                                className={`${styles.jdgmPaginatePage} ${styles.jdgmPaginateFirstPage}`}
                                                onClick={goToFirst}
                                                role="button"
                                                tabIndex="0"
                                                aria-label="First Page"
                                            ></a>
                                        )}

                                        {/* Prev Page */}
                                        {currentPage > 1 && (
                                            <a
                                                className={`${styles.jdgmPaginatePage} ${styles.jdgmPaginatePrevPage}`}
                                                onClick={goToPrev}
                                                role="button"
                                                tabIndex="0"
                                                aria-label="Previous Page"
                                            ></a>
                                        )}

                                        {/* Page numbers - hiển thị động */}
                                        {(() => {
                                            const pagesToShow = [];
                                            const maxVisible = 5; // tối đa hiển thị 5 số trang (có thể điều chỉnh)

                                            // Luôn hiển thị trang 1
                                            pagesToShow.push(1);

                                            // Nếu trang hiện tại gần đầu → hiển thị thêm 2,3,4,...
                                            if (currentPage <= 3) {
                                                for (let i = 2; i <= Math.min(5, totalPages); i++) {
                                                    pagesToShow.push(i);
                                                }
                                            }
                                            // Nếu trang hiện tại ở giữa → hiển thị ... + các trang lân cận + ...
                                            else if (currentPage >= totalPages - 2) {
                                                // Gần cuối → hiển thị ... + (total-3) (total-2) (total-1) total
                                                for (let i = Math.max(totalPages - 4, 2); i <= totalPages; i++) {
                                                    pagesToShow.push(i);
                                                }
                                            } else {
                                                // Ở giữa → hiển thị ... + (current-1) current (current+1) + ...
                                                pagesToShow.push(currentPage - 1);
                                                pagesToShow.push(currentPage);
                                                pagesToShow.push(currentPage + 1);
                                            }

                                            // Luôn hiển thị trang cuối nếu chưa có
                                            if (totalPages > 1 && !pagesToShow.includes(totalPages)) {
                                                pagesToShow.push(totalPages);
                                            }

                                            // Loại bỏ trùng lặp và sắp xếp
                                            const uniquePages = [...new Set(pagesToShow)].sort((a, b) => a - b);

                                            return uniquePages.map((pageNum) => (
                                                <a
                                                    key={pageNum}
                                                    className={`${styles.jdgmPaginatePage} ${pageNum === currentPage ? styles.jdgmCurt : ''}`}
                                                    onClick={() => goToPage(pageNum)}
                                                    role="button"
                                                    tabIndex="0"
                                                    aria-label={`Page ${pageNum}`}
                                                >
                                                    {pageNum}
                                                </a>
                                            ));
                                        })()}

                                        {/* Next Page */}
                                        {currentPage < totalPages && (
                                            <a
                                                className={`${styles.jdgmPaginatePage} ${styles.jdgmPaginateNextPage}`}
                                                onClick={goToNext}
                                                role="button"
                                                tabIndex="0"
                                                aria-label="Next Page"
                                            ></a>
                                        )}

                                        {/* Last Page */}
                                        {currentPage < totalPages && (
                                            <a
                                                className={`${styles.jdgmPaginatePage} ${styles.jdgmPaginateLastPage}`}
                                                onClick={goToLast}
                                                role="button"
                                                tabIndex="0"
                                                aria-label="Last Page"
                                            ></a>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className={styles.jdgmRevWidgPaginateSpinner} style={{ display: 'none' }}>
                                <div className={styles.jdgmSpinner}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
