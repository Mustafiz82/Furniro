import React from 'react';

const Footer = () => {
    return (
        <div>
          
            <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-8 px-6 md:px-16 lg:px-24 font-sans">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Company Info */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-2xl font-bold text-black">Funiro.</h2>
                        <address className="not-italic text-gray-400 leading-relaxed max-w-[200px]">
                            400 University Drive Suite 200 Coral Gables, <br />
                            FL 33134 USA
                        </address>
                    </div>

                    {/* Links Column */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-gray-400 font-medium">Links</h3>
                        <ul className="flex flex-col gap-6 font-bold text-black">
                            <li><a href="/" className="hover:text-gray-600">Home</a></li>
                            <li><a href="/shop" className="hover:text-gray-600">Shop</a></li>
                            <li><a href="/about" className="hover:text-gray-600">About</a></li>
                            <li><a href="/contact" className="hover:text-gray-600">Contact</a></li>
                        </ul>
                    </div>

                    {/* Help Column */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-gray-400 font-medium">Help</h3>
                        <ul className="flex flex-col gap-6 font-bold text-black">
                            <li><a href="/payment" className="hover:text-gray-600">Payment Options</a></li>
                            <li><a href="/returns" className="hover:text-gray-600">Returns</a></li>
                            <li><a href="/privacy" className="hover:text-gray-600">Privacy Policies</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-gray-400 font-medium">Newsletter</h3>
                        <div className="flex flex-row items-end gap-3">
                            <div className="flex flex-col border-b border-black flex-1">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="bg-transparent border-none outline-none text-sm pb-1 placeholder:text-gray-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="border-b border-black pb-1 text-sm font-bold uppercase hover:text-gray-600 transition-colors"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Copyright Section */}
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
                    <p className="text-black text-sm md:text-base">
                        2023 furino. All rights reserved
                    </p>
                </div>
            </footer>
           

        </div>
    );
};

export default Footer;