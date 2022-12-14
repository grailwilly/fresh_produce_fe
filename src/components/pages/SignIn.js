import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../actions/user'
import { loadCartItems } from '../actions/cart'
import { Footer } from '../layouts/Footer'
import RequestSpin from '../layouts/RequestSpin'


const SignIn = ({ signIn, user, loadCartItems }) => {



  const navigate = useNavigate()

  const [invalid, setInvalid ]= useState(false)
  const [isClick, setIsClick ]= useState(false)
  

  const [showpass, setShowPass] = useState(false)

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''

  })

  useEffect(() => {
    // let role = user.action.user.data.role 

    if (user.user) {
      navigate('/dashboard')
    }

    if(user.status > 299) {
      setIsClick(false)
      setInvalid(true)
    }


  }, [user])

  const onChangeHandler = (e) => {

    setInvalid(false)
    const { value, name } = e.target;
    setUserInfo(e => {
      return {
        ...e,
        [name]: value
      }
    })
  }

  const loginHandler = (e) => {
    e.preventDefault()
    setIsClick(true)
    signIn(userInfo)
    setUserInfo({
      email: '',
      password: ''
    })
  }

  return (
    <>  <form>
      <div className="bg-indigo-50">
      
        <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
          <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
           {invalid && <div className='animate-bounce'><p className='text-center mb-5 text-red-600 '>Invalid Credentials!</p></div> } 
            <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
              Sign In With Your Account
            </p>
            <p tabIndex={0} className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
              Dont have an account yet?{" "}
              <Link to='/register' className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer">
                {" "}
                Sign Up here
              </Link>
            </p>
            
            <div className="mt-6 w-full">
          
              <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                {" "}
                Email{" "}
              </label>
              <input onChange={onChangeHandler} id="email" value={userInfo.email} name='email' aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " />
            </div>
            <div className="mt-6 w-full">
              <label htmlFor="password" className="text-sm font-medium leading-none text-gray-800">
                {" "}
                Password{" "}
              </label>
              <div className="relative flex items-center justify-center">
                <input onChange={onChangeHandler} value={userInfo.password} name='password' type={showpass ? "text" : "password"} className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                <div onClick={() => setShowPass(!showpass)} className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <div id="show">
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                        fill="#71717A"
                      />
                    </svg>
                  </div>
                  <div id="hide" className="hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#27272A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={3} y1={3} x2={21} y2={21} />
                      <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                      <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
            {!isClick && <button onClick={loginHandler} type='submit' role="button" className="bg-teal focus:ring-2 focus:ring-offset-2  text-sm font-semibold leading-none text-white focus:outline-none border rounded hover:bg-dark-green py-4 w-full">
                Sign in
              </button> }  
             {isClick &&  <button className='bg-teal text-white w-full border h-[45px] rounded'>
                <div className="animate-spin w-[20px] m-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4335 4335" width="20" height="20">
                    <path fill="#fff" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
                    />
                  </svg>
                </div>
              </button>
            }
            </div>
          </div>
    
          <div className="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
            <div className="pl-8 md:block hidden">
              <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">Reconnect to the origin of food</h1>
            </div>
            <div className="flex items-start mt-8">
              <div>
                <svg width={22} height={14} viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.0666 6.65142C15.7914 6.17428 16.6517 5.94576 17.5177 6.00035C18.3837 6.05493 19.2085 6.38965 19.8677 6.95402C20.5268 7.51839 20.9845 8.28179 21.1718 9.12907C21.3591 9.97636 21.2658 10.8616 20.906 11.6512C20.5461 12.4408 19.9393 13.092 19.177 13.5065C18.4146 13.921 17.5382 14.0764 16.6798 13.9492C15.8215 13.822 15.0277 13.4192 14.4184 12.8014C13.809 12.1836 13.4171 11.3844 13.3016 10.5244C12.9366 8.73142 12.7946 6.57642 13.5086 4.62542C14.2746 2.53542 15.9726 0.821417 19.0136 0.0254175C19.2671 -0.0328119 19.5332 0.00995174 19.7556 0.144642C19.978 0.279332 20.1392 0.495356 20.205 0.746904C20.2708 0.998453 20.2361 1.26575 20.1081 1.4921C19.9802 1.71846 19.7691 1.88608 19.5196 1.95942C17.0596 2.60342 15.9096 3.88942 15.3866 5.31342C15.2316 5.73842 15.1266 6.18742 15.0666 6.65142Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M2.06664 6.65142C2.79142 6.17428 3.65171 5.94576 4.51773 6.00035C5.38375 6.05493 6.20853 6.38965 6.86766 6.95402C7.5268 7.51839 7.98454 8.28179 8.17183 9.12907C8.35912 9.97636 8.26581 10.8616 7.90597 11.6512C7.54612 12.4408 6.93927 13.092 6.17695 13.5065C5.41463 13.921 4.53818 14.0764 3.67982 13.9492C2.82145 13.822 2.02772 13.4192 1.41836 12.8014C0.808998 12.1836 0.417052 11.3844 0.301644 10.5244C-0.0633559 8.73142 -0.205356 6.57642 0.508644 4.62542C1.27464 2.53542 2.97264 0.821417 6.01364 0.0254175C6.26706 -0.0328119 6.53318 0.00995174 6.7556 0.144642C6.97801 0.279332 7.13921 0.495356 7.20502 0.746904C7.27084 0.998453 7.23609 1.26575 7.10814 1.4921C6.98019 1.71846 6.7691 1.88608 6.51964 1.95942C4.05964 2.60342 2.90964 3.88942 2.38664 5.31342C2.23164 5.73842 2.12664 6.18742 2.06664 6.65142Z"
                    fill="#4B5563"
                  />
                </svg>
              </div>
              <p className="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5">Buy fresh produce without intermediaries and promote a more humane and sustainable Philippines agriculture.</p>
            </div>
          </div>
        </div>
      </div>
      </form>
      <Footer />
    </>
  )
}

const MapToStateProps = state => ({
  user: state.user
})

export default connect(MapToStateProps, { signIn, loadCartItems })(SignIn)