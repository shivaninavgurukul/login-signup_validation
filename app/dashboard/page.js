"use client";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./dashboard.css";

const NextJsCarousel = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="carousel-container">
            <h2 className="carousel-title">Image Gallery</h2>
            <Carousel
                className="carousel"
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                interval={3000}
                transitionTime={1000}
            >
                <div>
                    <img
                        className="carousel-img"
                        src="https://bxslider.com/assets/plant-bd76206132f914fc54fd28f9794f7fe346bb8b9a9d16dd5de830b93f365eea9c.jpg"
                        alt="Image 3"
                    />
                    <p className="carousel-legend">Nature's Plant</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://cssslider.com/sliders/demo-6/data1/images/flowers_plant_bloom_daisies_white.jpg" alt="Image 1" />
                    <p className="carousel-legend">Beautiful Daisies</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://lirp.cdn-website.com/efc89e53/dms3rep/multi/opt/the-history-of-merry-go-rounds-1920w.jpg" alt="Image 2" />
                    <p className="carousel-legend">Merry-Go-Round</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://i.pinimg.com/736x/65/fb/13/65fb13c69a62d79e6a6afe3036eba5be.jpg" alt="Image 3" />
                    <p className="carousel-legend">Majestic Sunset</p>
                </div>

                <div>
                    <img className='carousel-img' src="https://5.imimg.com/data5/SELLER/Default/2023/3/TF/BK/UW/103578143/3d-nature-wallpaper-500x500.jpg
" alt="Image 4" />
                    <p className="carousel-legend">Nature</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://images8.alphacoders.com/455/thumb-1920-455669.jpg" alt="Image 5" />
                    <p className="carousel-legend">Beautiful flowers</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://img.myloview.com/stickers/happy-girl-in-a-spring-field-enjoying-nature-beautiful-woman-in-meadow-freedom-concept-background-700-195339227.jpg" alt="Image 6" />
                    <p className="carousel-legend">Nature</p>
                </div>
                <div>
                    <img className='carousel-img' src="https://thumbs.dreamstime.com/b/happy-baby-girl-meadow-white-flowers-nature-beautiful-little-sitting-green-dandelions-park-31427671.jpg" alt="Image 7" />
                    <p className="carousel-legend">Happiness</p>
                </div>
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;
