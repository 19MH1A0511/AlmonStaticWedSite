import React from 'react';
import { Video, Film, Scissors } from "lucide-react";

const MainPage = () => {
    const services = [
        {
            icon: <Scissors size={40} />,
            title: "Basic Video Editing",
            desc: "Professional cutting, trimming, and smooth transitions to create clean and engaging videos for social media and business needs."
        },
        {
            icon: <Film size={40} />,
            title: "Advanced Video Editing",
            desc: "High-quality color grading, motion graphics, sound design, and cinematic transitions to make your content stand out."
        },
        {
            icon: <Video size={40} />,
            title: "Social Media Video Editing",
            desc: "Optimized editing for YouTube, Instagram Reels, TikTok, and ads with captions, effects, and engaging storytelling."
        }
    ];
    return (
        <>
            <div>
                <div className='w-full bg-gray-100 py-16 px-10'>
                    <div className='max-w-7xl mx-auto'></div>
                    <h2 className='text-3xl font-bold text-center mb-10'>Welcome to Almonx</h2>
                    <p className='text-gray-700 text-center max-w-2xl mx-auto text-lg leading-relaxed'>
                        At Almonx, we are dedicated to providing top-notch video editing services tailored for the real estate industry. Our team of skilled editors specializes in transforming raw footage into captivating videos that highlight the unique features of your properties. Whether you're a real estate agent looking to showcase a listing or a homeowner wanting to create a stunning virtual tour, Almonx has got you covered. We understand the importance of visual storytelling in real estate marketing, and our mission is to help you create compelling content that attracts potential buyers and renters. With our expertise and attention to detail, we ensure that every video we produce not only meets but exceeds your expectations.
                    </p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-center mb-6 text-blue-600'>Explore Our Dynamic Services in Editing</h2>
                    <div className="bg-gray-100 py-16 px-6">
                        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md text-center p-8 hover:shadow-lg transition"
                                >
                                    <div className="flex justify-center mb-4 text-gray-800">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>

                                    <div className="h-1 w-24 bg-blue-900 mx-auto mt-6 rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;