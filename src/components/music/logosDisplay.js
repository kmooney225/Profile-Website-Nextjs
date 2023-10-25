import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LogosDisplay = () => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,  
        autoplaySpeed: 2000,  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


    return (
        <div className='w-full h-full p-4 sm:p-8 flex flex-col items-center justify-center bg-black text-white py-16'>
            <div className='flex flex-col items-center justify-center rounded-lg p-6 sm:p-10 w-full h-full shadow-2xl'
                style={{ background: 'linear-gradient(to right, rgba(220, 38, 38, 0.6), rgba(236, 64, 122, 0.6))', }}>
                <h1 className='text-3xl sm:text-5xl mb-6 sm:mb-10 font-sacramento'
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Brands I Work With
                </h1>
                <div className="w-full md:w-3/4 mx-auto">
                  <Slider {...settings}>
                      {[
                          { name: "Hard Rock Cafe", logo: "./logo-hard-rock.png" },
                          { name: "Ritz Carlton Hotel", logo: "./Ritz-Carlton-Logo.jpg" },
                          { name: "Four Seasons Hotel", logo: "./Four-Seasons-Hotels-logo.png" },
                          { name: "Mariott", logo: "./marriott.png" },
                          //{ name: "BayFest", logo: "/path/to/bayfest-logo.png" },
                      ].map(brand => (
                          <div key={brand.name} className='h-56 md:h-96 relative items-center justify-center p-3 m-2 rounded-md bg-black border-2 border-white text-white w-full mx-2 md:mx-4'>
                              <img src={brand.logo} alt={brand.name} className="mx-auto my-4 md:my-8 w-1/3 md:w-1/2 h-auto" />
                              <h2 className='mt-2 md:mt-5 text-sm md:text-lg sm:text-xl text-center'>
                                  {brand.name}
                              </h2>
                          </div>
                      ))}
                  </Slider>
                </div>
            </div>
        </div>
    )
}

export default LogosDisplay;