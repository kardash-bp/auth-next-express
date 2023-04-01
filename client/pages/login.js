import Link from 'next/link'
import React from 'react'
import InputField from '../components/InputField'

const Login = () => {
  return (
    <>
      <section className='h-screen'>
        <div className='container min-w-[400px] mx-auto px-6 h-full'>
          <div className='flex justify-center items-center flex-wrap h-full text-gray-800'>
            <div className='  md:w-6/12 lg:w-8/12  md:mb-0'>
              <img src='./login.png' className='w-full' alt='login image' />
            </div>
            <div className='md:w-6/12 lg:w-5/12 lg:ml-20'>
              <form>
                <InputField
                  name='email'
                  type='email'
                  placeholder='Email address'
                />
                <InputField
                  name='password'
                  type='password'
                  placeholder='Password'
                />

                <div className='flex justify-between items-center mb-6'>
                  <div>
                    <input type='checkbox' name='remember' id='remember' />
                    <label
                      className='ml-1 text-blue-600 text-sm font-light'
                      htmlFor='remember'
                    >
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link
                      href='#!'
                      className='text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out'
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div>
                    <Link
                      href='/'
                      className='text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out'
                    >
                      Back Home
                    </Link>
                  </div>
                </div>

                <button
                  className='w-full px-10 py-2 bg-gradient-to-b from-blue-600 via-blue-800 to-indigo-900 text-white text-sm uppercase rounded-md transition-all duration-300 
              hover:bg-gradient-to-t hover:drop-shadow-md ease-in'
                  type='submit'
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>{' '}
    </>
  )
}

export default Login
