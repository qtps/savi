'use client';

import React, { useEffect, useState } from 'react';
import {
  Star,
  MessageSquareQuote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useReviewSlider } from '@/src/components/hooks/useReviewSlider';
import { assets } from '@/app/lib/assets';

interface Review {
  id: string;
  rating: number;
  title: string;
  description: string;
  name: string;
  role: string;
}

const UserReviews = () => {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Custom GSAP Animation Hook Call
  const { sliderRef, slideNext, slidePrev, setIsPaused } = useReviewSlider(
    reviews,
    setReviews,
    4000,
  );

  // Fetch data from backend
  useEffect(() => {
    const fetchReviews = () => {
      try {
        const dummyData: Review[] = [
          {
            id: '1',
            rating: 5,
            title:
              "I've tried several finance apps, but Savi is by far the best and incredibly user-friendly.",
            description:
              'Using Savi has transformed the way I manage my finances. The spending targets feature helped me save more than I ever thought possible!',
            name: 'Sarah White',
            role: 'Software Engineer',
          },
          {
            id: '2',
            rating: 5,
            title:
              'Thanks to Savi, I finally have control over my finances and the insights are helpful.',
            description:
              "Since downloading Savi, I've been able to save more and spend smarter. The app's detailed reports give me a clear picture of my financial health.",
            name: 'Daniel Brown',
            role: 'Software Engineer',
          },
          {
            id: '3',
            rating: 5,
            title:
              "The best UX experience I've ever seen in a finance tracking platform.",
            description:
              'Managing daily expenses turned into an effortless habit. Extremely fast, beautifully designed, and intuitive.',
            name: 'Emily Davis',
            role: 'Product Designer',
          },
          {
            id: '4',
            rating: 5,
            title:
              'Insights are spot-on and saved me hundreds of dollars in subscriptions.',
            description:
              'The automated category tagging is ridiculously good. Highly recommended for freelancers and engineers!',
            name: 'Michael Alex',
            role: 'Tech Lead',
          },
        ];

        setReviews(dummyData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleCardClick = (id: string) => {
    router.push(`/reviews/${id}`);
  };

  if (loading) {
    return (
      <div className="py-10 text-center text-gray-500">Loading reviews...</div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl overflow-hidden px-4 py-16">
      {/* Header section with Controls */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-gray-900 lg:text-5xl">
            What Our Users Say
          </h2>
          <p className="text-sm text-gray-500 lg:text-xl">
            Real stories from people managing their finances smart.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={slidePrev}
            className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition-colors hover:bg-gray-100 active:scale-95"
            aria-label="Previous Review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={slideNext}
            className="rounded-full border border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition-colors hover:bg-gray-100 active:scale-95"
            aria-label="Next Review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div
        className="w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
        >
          {reviews.map((review) => (
            <button
              type="button"
              key={review.id}
              onClick={() => handleCardClick(review.id)}
              className="bg-neutral-2 flex w-85 shrink-0 cursor-pointer flex-col justify-between rounded-3xl border border-gray-100 p-8 text-left shadow-sm transition-shadow duration-300 hover:shadow-md sm:w-100 md:w-115"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl text-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={assets.icons.emoji}
                      alt="Quote Icon"
                      className="h-16 w-16"
                    />
                  </div>

                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="border-none fill-amber-400"
                      />
                    ))}
                  </div>
                </div>

                <h3 className="mb-4 text-xl leading-snug font-bold text-gray-900">
                  “{review.title}”
                </h3>
                <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {review.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
