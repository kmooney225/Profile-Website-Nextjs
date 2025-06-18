import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const sections = [
    {
        title: 'Music',
        description: 'From enchanting wedding melodies to restaurant rhythms and energetic party beats, I deliver captivating musical experiences that transform any venue into a symphony of moments to remember.',
        link: '/music',
        image: '/music.jpg', // Ensure the path is correct for Next.js
        alt: 'A photo representing music services'
    },
    {
        title: 'Web Dev',
        description: 'With crafting captivating digital landscapes ranging from professional portfolios to engaging product showcases, I bring your unique story to life on the web.',
        link: '/webdev',
        image: '/webdev.jpg', // Ensure the path is correct for Next.js
        alt: 'A photo representing web development services'
    }
];

const Product = () => {
    return (
        <section className="relative flex flex-col p-12 items-center justify-center bg-fixed bg-center bg-black z-[3]">
            {sections.map((section, index) => (
                <div
                    className={`flex flex-col md:flex-row items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-105 my-5 rounded-lg shadow-lg overflow-hidden ${
                        index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                    key={index}
                >
                    <div className="z-[2] p-12 rounded-md bg-red-600 items-center justify-center text-white md:w-1/2">
                        <h2 className="p-4 text-5xl font-sacramento">{section.title}</h2>
                        <p className="text-md md:text-lg m-4">{section.description}</p>
                        <a
                            href={section.link}
                            className="inline-block bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border-2 border-gray-400 hover:border-transparent rounded-lg mt-4 transition-colors duration-300"
                        >
                            Check It Out!
                        </a>
                    </div>
                    <div className="z-[2] bg-gray-300 rounded-md p-4 items-center justify-center md:w-1/2">
                        <Image
                            src={section.image} // Use Next.js Image component
                            alt={section.alt}
                            width={600} // Specify width
                            height={400} // Specify height
                            className="rounded-md object-cover" // Ensure proper styling
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Product;

