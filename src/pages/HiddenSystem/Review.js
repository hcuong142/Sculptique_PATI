import { useEffect, useRef, useState } from 'react';
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
        content: 'Da tôi mịn hơn hẳn sau 3 tuần dùng, chân cũng bớt sưng. Rất hài lòng!',
        displayName: 'Nguyễn Thị Lan',
        day: '01/18/2026',
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
    {
        star: 4,
        content:
            'So far I’ve noticed less swelling in my feet by the end of the day. Haven’t noticed any cellulite repair yet and still have heaviness but not as much.',
        displayName: 'Erika Wasielewski ',
        day: '10/15/2025',
    },
    {
        star: 4,
        content: 'Product is okay, saw some improvement but not as expected.',
        displayName: 'John Doe',
        day: '01/10/2026',
    },
    {
        star: 4,
        content: 'Helped with swelling, but skin smoothness is still the same.',
        displayName: 'Jane Smith',
        day: '01/05/2026',
    },
    {
        star: 4,
        content: 'Good results after two weeks, but could be faster.',
        displayName: 'Alice Johnson',
        day: '12/25/2025',
    },
    {
        star: 4,
        content: 'Reduced heaviness in legs, satisfied overall.',
        displayName: 'Bob Brown',
        day: '12/20/2025',
    },
    {
        star: 4,
        content: 'Not bad, but I expected more from the capsules.',
        displayName: 'Carol Davis',
        day: '12/15/2025',
    },
    {
        star: 4,
        content: 'Saw minor changes, will continue using.',
        displayName: 'David Evans',
        day: '12/10/2025',
    },
    {
        star: 4,
        content: 'Helps with daily comfort, but not a miracle.',
        displayName: 'Eve Foster',
        day: '12/05/2025',
    },
    {
        star: 4,
        content: 'Improved skin texture slightly.',
        displayName: 'Frank Green',
        day: '11/30/2025',
    },
    {
        star: 4,
        content: 'Decent product for the price.',
        displayName: 'Grace Harris',
        day: '11/25/2025',
    },
    {
        star: 4,
        content: 'Noticeable difference in swelling reduction.',
        displayName: 'Henry Irving',
        day: '11/20/2025',
    },

    {
        star: 3,
        content:
            'So far I’ve noticed less swelling in my feet by the end of the day. Haven’t noticed any cellulite repair yet and still have heaviness but not as much.',
        displayName: 'Cuong ',
        day: '10/15/2025',
    },
    {
        star: 3,
        content: 'Product is okay, saw some improvement but not as expected.',
        displayName: 'John Doe',
        day: '01/10/2026',
    },
    {
        star: 3,
        content: 'Helped with swelling, but skin smoothness is still the same.',
        displayName: 'Jane Smith',
        day: '01/05/2026',
    },
    {
        star: 3,
        content: 'Good results after two weeks, but could be faster.',
        displayName: 'Alice Johnson',
        day: '12/25/2025',
    },
    {
        star: 3,
        content: 'Reduced heaviness in legs, satisfied overall.',
        displayName: 'Bob Brown',
        day: '12/20/2025',
    },
    {
        star: 3,
        content: 'Not bad, but I expected more from the capsules.',
        displayName: 'Carol Davis',
        day: '12/15/2025',
    },
    {
        star: 3,
        content: 'Saw minor changes, will continue using.',
        displayName: 'David Evans',
        day: '12/10/2025',
    },
    {
        star: 3,
        content: 'Helps with daily comfort, but not a miracle.',
        displayName: 'Eve Foster',
        day: '12/05/2025',
        pictures: [
            'https://judgeme.imgix.net/sculptique/1752663679__1752663592120-image__original.jpg?auto=format&w=160',
        ],
    },
    {
        star: 3,
        content: 'Improved skin texture slightly.',
        displayName: 'Frank Green',
        day: '11/30/2025',
    },
    {
        star: 3,
        content: 'Decent product for the price.',
        displayName: 'Grace Harris',
        day: '11/25/2025',
    },
    {
        star: 3,
        content: 'Noticeable difference in swelling reduction.',
        displayName: 'Henry Irving',
        day: '11/20/2025',
    },
    {
        star: 2,
        content: 'Not seeing much improvement, might stop using.',
        displayName: 'Ivy Jackson',
        day: '11/15/2025',
    },
];

export const Review = () => {
    const [previews, setPreviews] = useState([]);
    const fileInputRef = useRef(null);
    const [isWritingReview, setIsWritingReview] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [rating, setRating] = useState(0);
    const [reviewBody, setReviewBody] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [allReviews, setAllReviews] = useState(initialReviews);
    const [filterRating, setFilterRating] = useState(null);

    const [sortOption, setSortOption] = useState('most-recent');

    // const getSortedReviews = () => {
    //     let reviews = [...allReviews]; // copy để không thay đổi mảng gốc

    //     // Bước 1: Filter theo sao (nếu đang filter star cụ thể)
    //     if (filterRating !== null) {
    //         reviews = reviews.filter((rev) => rev.star === filterRating);
    //     }

    //     // Bước 2: Áp dụng sort theo dropdown
    //     switch (sortOption) {
    //         case 'most-recent':
    //             // Sort theo ngày mới nhất trước (giảm dần)
    //             reviews.sort((a, b) => new Date(b.day) - new Date(a.day));
    //             break;

    //         case 'highest-rating':
    //             // Star cao nhất lên đầu (5 → 1)
    //             reviews.sort((a, b) => b.star - a.star);
    //             break;

    //         case 'lowest-rating':
    //             // Star thấp nhất lên đầu (1 → 5)
    //             reviews.sort((a, b) => a.star - b.star);
    //             break;

    //         case 'only-pictures':
    //             // Chỉ giữ lại review CÓ picture
    //             reviews = reviews.filter((rev) => rev.pictures && rev.pictures.length > 0);
    //             break;

    //         case 'pictures-first':
    //             // Nhóm có picture lên đầu, không picture xuống sau
    //             // Giữ nguyên thứ tự tương đối trong từng nhóm
    //             const withPictures = reviews.filter((rev) => rev.pictures && rev.pictures.length > 0);
    //             const withoutPictures = reviews.filter((rev) => !rev.pictures || rev.pictures.length === 0);
    //             reviews = [...withPictures, ...withoutPictures];
    //             break;

    //         default:
    //             // Không sort gì thêm
    //             break;
    //     }

    //     return reviews;
    // };

    const getSortedReviews = () => {
        let reviews = [...allReviews];

        // Bước 1: Filter theo sao (nếu có)
        if (filterRating !== null) {
            reviews = reviews.filter((rev) => rev.star === filterRating);
        }

        // Bước 2: Áp dụng sort/filter theo option
        switch (sortOption) {
            case 'most-recent':
                reviews.sort((a, b) => new Date(b.day) - new Date(a.day));
                break;

            case 'highest-rating':
                reviews.sort((a, b) => b.star - a.star);
                break;

            case 'lowest-rating':
                reviews.sort((a, b) => a.star - b.star);
                break;

            case 'only-pictures':
                // CHẶT CHẼ: chỉ giữ review có pictures là array VÀ length > 0
                reviews = reviews.filter((rev) => {
                    const pics = rev.pictures;
                    return Array.isArray(pics) && pics.length > 0;
                });
                break;

            case 'pictures-first':
                const withPictures = reviews.filter((rev) => {
                    const pics = rev.pictures;
                    return Array.isArray(pics) && pics.length > 0;
                });
                const withoutPictures = reviews.filter((rev) => {
                    const pics = rev.pictures;
                    return !Array.isArray(pics) || pics.length === 0;
                });
                reviews = [...withPictures, ...withoutPictures];
                break;

            default:
                break;
        }

        return reviews;
    };
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 5;
    const sortedReviews = getSortedReviews();
    const filteredReviews = sortedReviews;
    // const filteredReviews = filterRating === null ? allReviews : allReviews.filter((rev) => rev.star === filterRating);
    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
    const [selectedRating, setSelectedRating] = useState(null);
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); // reset về trang 1 khi thay đổi sort
    };
    const [isLoading, setIsLoading] = useState(false);
    const simulateLoading = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 600); // 900ms – bạn có thể đổi thành 1200 hoặc random 800-1500
        });
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [filterRating]);

    const freqMap = {
        5: { freq: 85, perc: 77 },
        4: { freq: 17, perc: 15 },
        3: { freq: 8, perc: 7 },
        2: { freq: 1, perc: 1 },
        1: { freq: 0, perc: 0 },
    };

    // 3. Hàm handleFilterClick (bỏ type, dùng async bình thường)
    const handleFilterClick = async (rating) => {
        setIsLoading(true);
        await simulateLoading(); // hàm giả lập loading từ trước (nếu có)

        setFilterRating(rating);
        setSelectedRating(rating); // rating sẽ là number hoặc null
        setCurrentPage(1);

        setIsLoading(false);
    };

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
            star: rating,
            content: reviewBody.trim(),
            displayName: displayName.trim(),
            day: new Date().toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
            }),
            // Nếu sau này có media thật thì thêm vào đây
        };

        setAllReviews([newReview, ...allReviews]);
        setIsSubmitted(true);
        setCurrentPage(1);

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
                                        {[5, 4, 3, 2, 1].map((rating) => {
                                            const data = freqMap[rating] || { freq: 0, perc: 0 };
                                            const { freq, perc } = data;

                                            return (
                                                <div
                                                    key={rating}
                                                    className={`${styles.jdgmHistogramRow} ${
                                                        selectedRating === rating ? styles.jdgmHistogramRowSelected : ''
                                                    }`}
                                                    data-rating={rating}
                                                    data-frequency={freq}
                                                    data-percentage={perc}
                                                    onClick={() => handleFilterClick(rating)}
                                                >
                                                    <div
                                                        className={styles.jdgmHistogramStar}
                                                        role="button"
                                                        tabIndex={0}
                                                    >
                                                        {[...Array(5)].map((_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`${styles.jdgmStar} ${i < rating ? styles.jdgmOn : styles.jdgmOff}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className={styles.jdgmHistogramBar}>
                                                        <div
                                                            className={styles.jdgmHistogramBarContent}
                                                            style={{ width: `${perc}%` }}
                                                        />
                                                    </div>
                                                    <div className={styles.jdgmHistogramFrequency}>{freq}</div>
                                                </div>
                                            );
                                        })}
                                        {filterRating !== null && (
                                            <div
                                                className={`${styles.jdgmHistogramRow} ${styles.jdgmHistogramClearFilter}`}
                                                data-rating="null"
                                                onClick={() => handleFilterClick(null)} // reset về all
                                                style={{
                                                    display: 'block',
                                                }}
                                            >
                                                See all reviews
                                            </div>
                                        )}
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
                                        <select
                                            className={styles.jdgmSortDropdown}
                                            aria-label="Sort dropdown"
                                            onChange={(e) => {
                                                setSortOption(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                            value={sortOption}
                                        >
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
                            <div className={styles.jdgmRevWidgBody} style={{ display: isLoading ? 'none' : 'block' }}>
                                <div className={styles.jdgmRevWidgReviews}>
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
                                                {rev.pictures && rev.pictures.length > 0 && (
                                                    <div className={styles.jdgmRevPics}>
                                                        {rev.pictures.map((picUrl, picIdx) => (
                                                            <a
                                                                key={picIdx}
                                                                className={styles.jdgmRevPicsLink}
                                                                target="_blank"
                                                                rel="nofollow noreferrer"
                                                                href={picUrl.replace('&w=160', '')}
                                                                data-mfp-src={picUrl.replace('&w=160', '&w=1024')}
                                                                aria-label={`Link to user picture ${picIdx + 1}`}
                                                            >
                                                                <img
                                                                    className={styles.jdgmRevPicImg}
                                                                    alt="User picture"
                                                                    src={picUrl}
                                                                    data-src={picUrl}
                                                                />
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {totalPages > 1 && (
                                    <div className={styles.jdgmPaginate} data-per-page="5">
                                        {currentPage > 1 && (
                                            <a
                                                className={`${styles.jdgmPaginatePage} ${styles.jdgmPaginateFirstPage}`}
                                                onClick={goToFirst}
                                                role="button"
                                                tabIndex="0"
                                                aria-label="First Page"
                                            ></a>
                                        )}

                                        {currentPage > 1 && (
                                            <a
                                                className={`${styles.jdgmPaginatePage} ${styles.jdgmPaginatePrevPage}`}
                                                onClick={goToPrev}
                                                role="button"
                                                tabIndex="0"
                                                aria-label="Previous Page"
                                            ></a>
                                        )}

                                        {(() => {
                                            const pagesToShow = [];
                                            const maxVisible = 3; // Giới hạn tối đa 3 số trang

                                            // Luôn hiển thị trang 1 nếu không gần cuối
                                            if (currentPage < totalPages - 1) {
                                                pagesToShow.push(1);
                                            }

                                            // Xử lý trang hiện tại và lân cận
                                            if (currentPage === 1) {
                                                pagesToShow.push(1, 2, 3);
                                            } else if (currentPage === 2) {
                                                pagesToShow.push(1, 2, 3);
                                            } else if (currentPage === totalPages) {
                                                pagesToShow.push(totalPages - 2, totalPages - 1, totalPages);
                                            } else if (currentPage === totalPages - 1) {
                                                pagesToShow.push(totalPages - 2, totalPages - 1, totalPages);
                                            } else {
                                                pagesToShow.push(currentPage - 1, currentPage, currentPage + 1);
                                            }

                                            // Lọc các trang hợp lệ (không vượt quá totalPages, không âm)
                                            const validPages = pagesToShow.filter((p) => p >= 1 && p <= totalPages);

                                            // Loại bỏ trùng lặp và sắp xếp
                                            const uniquePages = [...new Set(validPages)].sort((a, b) => a - b);

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

                                        {currentPage < totalPages && (
                                            <a
                                                className={`${styles.jdgmPaginatePage} ${styles.jdgmPaginateNextPage}`}
                                                onClick={goToNext}
                                                role="button"
                                                tabIndex="0"
                                                aria-label="Next Page"
                                            ></a>
                                        )}

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
                            <div
                                className={styles.jdgmRevWidgPaginateSpinner}
                                style={{
                                    display: isLoading ? 'block' : 'none',
                                    textAlign: 'center',
                                    padding: '40px 0',
                                }}
                            >
                                <div className={styles.jdgmSpinner}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
