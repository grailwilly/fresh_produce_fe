import React from "react";
export const Footer = () => {
  return (
    <div className="pt-16">
      <div className="w-full border-gray-300 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto">
        <div className="container mx-auto py-12">
          <div className="xl:flex lg:flex md:flex pt-6">
            <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
              <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                <img src={require('../../assets/logo_nav.png')} />
              </div>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">Community</li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="">About Us</a>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <a href="">Become a Member</a>
                </li>
              </ul>
              </div>
              <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                <ul>
                  <li className="text-gray-800 font-bold text-xl mb-6">Getting Started</li>
                  <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                    <a href="">Create Account</a>
                  </li>
                  <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                    <a href="">Order Process</a>
                  </li>
                  <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                    <a href="">Get Quote</a>
                  </li>
                </ul>
              </div>
              <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                <ul>
                  <li className="text-gray-800 font-bold text-xl mb-6">Contact Us</li>
                  <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                    <a href="">Partner with us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
              <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                <p className="text-gray-800 text-base">2022 Farmer's Valley Philippines Association Inc. All Rights Reserved</p>
              </div>
              <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
                <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                  <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                    <a href="">Terms of service</a>
                  </li>
                  <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                    <a href="">Security</a>
                  </li>
                  <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                    <a href="">Sitemap</a>
                  </li>
                </ul>
              </div>

              <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
                <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                  <div>
                    <a href="https://www.facebook.com/farmersvalleyph">
                      <svg
                        className="w-6 h-6 text-blue-600 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/farmersvalleyph/">
                      <svg aria-label="Instagram" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

