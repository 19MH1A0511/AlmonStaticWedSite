"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RealEstateEditPrice from "./RealEstateEditPrice";

const slides = [
    {
        title: "Real Estate Refining",
        description:
            "Easily update property prices with our intuitive editing tools.",
        image: "/assets/realestate.jpg",
    },
    {
        title: "Real Estate Platform",
        description:
            "Find your dream property with modern search and filtering tools.",
        image: "/assets/realestate.jpg",
    },
    {
        title: "Property Management",
        description:
            "Manage properties, listings and documents easily.",
        image: "/assets/home-interiors-photo-editing.webp",
    },
];

const HomePage = () => {
    const [current, setCurrent] = useState(0);
    const [openEditPrice, setOpenEditPrice] = useState(false);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleGetInTouch = (getInTouch) => {
        if (getInTouch === "Real Estate Refining") {
            setOpenEditPrice(true); 
        };
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         nextSlide();
    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <div>
                <div className="w-full bg-blue-950 text-white py-16 px-10 relative">

                    <div className="grid md:grid-cols-2 items-center gap-10">

                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl font-bold mb-4">
                                {slides[current].title}
                            </h1>

                            <p className="text-lg text-gray-200 mb-6">
                                {slides[current].description}
                            </p>

                            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition" onClick={() =>handleGetInTouch(slides[current].title)}>
                                Get in touch
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src={slides[current].image}
                                className="w-[350px] object-contain"
                            />
                        </div>

                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white"
                    >
                        <FaChevronLeft size={25} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white"
                    >
                        <FaChevronRight size={25} />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-10 gap-3">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-10 h-1 cursor-pointer ${current === index ? "bg-white" : "bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
                <div className="py-16 px-10">

                </div>
            </div>
            {openEditPrice && (
                <RealEstateEditPrice  onClose={() => setOpenEditPrice(false)} />
            )}
        </>

    );
};

export default HomePage;