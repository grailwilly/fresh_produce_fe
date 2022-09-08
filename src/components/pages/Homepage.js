
import Carousel from "../layouts/Carousel";
import { Footer } from "../layouts/Footer";

const Homepage = () => {

  return (
    <>
    
      <div className="pt-30 lg:flex items-center relative z-10 container mx-auto">
        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
          <Carousel />
        </div>
        <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
          <p tabIndex="0" className="uppercase text-2xl mb-4">From Farms To Our Customers AND Businesses</p>
          <h1 tabIndex="0" className="text-left text-teal text-4xl lg:text-6xl font-black mb-8">We Work Directly With Farmers | Ranchers Fisherfolks | Innovators</h1>
          <p tabIndex="0" className="text-gray-800 font-regular mb-8">COMBINING TECH WITH AGRICULTURE. We pride ourselves on the relationships we’ve built with local, Filipino farmers. Each and every day, we have the pleasure of working closely with hundreds of market leading growers and producers to bring the best quality produce straight from harvest to you. </p>
          <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
            <div className="sm:flex items-center py-2">
              <div className="flex items-center">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg" alt="icon" />
                <input aria-label="Farmer name" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Farmer Name" />
              </div>
              <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg5.svg" alt="icon" />
                <input aria-label="product" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Product" />
              </div>
              <div className="flex items-center">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg6.svg" alt="icon" />
                <input aria-label="location" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Location" />
              </div>
            </div>
            <button role="button" aria-label="search" className="focus:ring-2 focus:ring-offset-2 text-white mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative bg-teal">
              <img className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg" alt="search" />
              <input aria-label="search" className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6" />
            </button>
          </div> 
        </div>
      </div>
      {/* STATS */}
      <div className="mx-auto container my-20 lg:mt-48 lg:mb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="flex justify-center w-full lg:border-r border-gray-300 py-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="69" viewBox="0 0 64 69" fill="none">
              <path d="M31.5 37C41.165 37 49 29.165 49 19.5C49 9.83502 41.165 2 31.5 2C21.835 2 14 9.83502 14 19.5C14 29.165 21.835 37 31.5 37Z" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M2 67V61C2 57.8174 4.10714 54.7652 7.85786 52.5147C11.6086 50.2643 16.6957 49 22 49H42C47.3043 49 52.3914 50.2643 56.1421 52.5147C59.8929 54.7652 62 57.8174 62 61V67" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <div className="text-gray-800 pl-12 w-1/2">
              <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">450</h1>
              <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Happy Clients.</h2>
            </div>
            </div>
            <div className="flex justify-center w-full lg:border-r border-gray-300 py-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="57" viewBox="0 0 72 57" fill="none">
                <path d="M54.9999 54.9998C59.1815 54.9998 62.5713 51.6099 62.5713 47.4283C62.5713 43.2468 59.1815 39.8569 54.9999 39.8569C50.8183 39.8569 47.4285 43.2468 47.4285 47.4283C47.4285 51.6099 50.8183 54.9998 54.9999 54.9998Z" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M39.8571 47.4285H9.57142H2V5.78571C2 4.78168 2.39885 3.81877 3.10881 3.10881C3.81877 2.39885 4.78168 2 5.78571 2H39.8571V24.7142M39.8571 47.4285V24.7142M39.8571 47.4285H62.5713H70.1427V24.7142M24.7142 47.4285H47.4285M70.1427 24.7142H39.8571M70.1427 24.7142L58.7856 5.78571H39.8571" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20.9285 13.3569V28.4998M13.3571 20.9283H28.5H13.3571Z" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.1427 54.9998C21.3243 54.9998 24.7142 51.6099 24.7142 47.4283C24.7142 43.2468 21.3243 39.8569 17.1427 39.8569C12.9612 39.8569 9.57133 43.2468 9.57133 47.4283C9.57133 51.6099 12.9612 54.9998 17.1427 54.9998Z" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <div className="text-gray-800 w-1/2 pl-12">
                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">10+</h1>
                <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Deliver boxes of fresh food.</h2>
              </div>
            </div>
            <div className="flex justify-center w-full lg:border-r border-gray-300 py-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path d="M36 70C54.7777 70 70 54.7777 70 36C70 17.2223 54.7777 2 36 2C17.2223 2 2 17.2223 2 36C2 54.7777 17.2223 70 36 70Z" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M36 17.1108V35.9997L47.3333 47.3331" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <div className="text-gray-800 w-1/2 pl-12">
                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">35</h1>
                <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Years of Experience.</h2>
              </div>
            </div>
            <div className="flex justify-center w-full py-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="79" viewBox="0 0 72 79" fill="none">
                <path d="M10.5 63.1375L2 58.5312V48.0625" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 31.3123V20.8435L10.5 16.2373" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M27.5 6.60624L36 2L44.5 6.60624" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M61.5 16.2373L70 20.8435V31.3123" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M70 48.0625V58.5312L61.5 63.2212" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M44.5 72.7686L36 77.3748L27.5 72.7686" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M36.0001 39.6873L44.5001 35.0811" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M61.5 25.45L70 20.8438" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M36.0001 39.6875V50.1562" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M36.0001 66.9062V77.375" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M36 39.6875L27.5 34.9976" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10.5 25.45L2 20.8438" stroke="teal" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <div className="text-gray-800 w-1/2 pl-12">
                <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">50</h1>
                <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Connected Farms.</h2>
              </div>
            </div>
            </div>
          </div>
      <div className='overflow-y-hidden'>
        <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
          <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
            <div>
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">Why choose us</p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">We have worked directly with farmers, understanding their business and bringing their produce into grocery, retails, and manufacturers.</p>
              <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                {/* <img src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png" alt="ongoing meeting" className="w-full obejct-fit object-center object-fill h-full" /> */}
              </div>
              <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg" alt="clock" /> */}
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">Farmers</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">We work hand in hand with our local farmers to ensure we are sourcing the broadest and freshest range of produce</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg" alt="Friendly" /> */}
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">OUR ROLE</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Our focus is to deliver produce from farms to customers.</p>
                  </div>
                </div>
                <div className="flex items-center">
                <div className="w-16 h-16 relative">
                  <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg" alt="Creative" /> */}
                  </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">Business</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">An abundance of fresh produce greets our customers every time they enter the marketplace.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      {/* <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg" alt="Achievments" /> */}
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">Farm to Table</h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">Our customers, like us, come from diverse backgrounds that are reflected in the produce we sell.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <img src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="veggetable" className="w-full obejct-fit object-center object-fill h-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Homepage