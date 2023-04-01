import Link from 'next/link'
import { useState } from 'react'
import InputField from '../components/InputField'
import axios from 'axios'
const Register = () => {
  const [name, setName] = useState('iva')
  const [email, setEmail] = useState('iva@gmail.com')
  const [password, setPassword] = useState('1234Bp')
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('http://localhost:4444/api/register', {
      name,
      email,
      password,
    })
    console.log(data)
  }
  return (
    <>
      <section className='h-screen'>
        <div className='container mx-auto px-6 py-12 h-full'>
          <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
            <div className='md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
              <img src='./login.png' className='w-full' alt='login image' />
            </div>
            <div className='w-10/12 md:w-9/12 lg:w-8/12 lg:ml-20'>
              <form onSubmit={handleSubmit}>
                <InputField
                  name='name'
                  type='text'
                  placeholder='Username'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputField
                  name='email'
                  type='email'
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className='flex justify-center items-center mb-6'>
                  <Link
                    href='/'
                    className='text-amber-700 hover:text-amber-900 focus:text-amber-700 active:text-amber-800 duration-200 transition ease-in-out'
                  >
                    Back Home
                  </Link>
                </div>

                <button
                  className='mb-6 w-full px-10 py-2 bg-gradient-to-b from-violet-400 via-violet-500 to-violet-600 text-white text-sm uppercase rounded-md transition-all duration-300 
              hover:bg-gradient-to-t hover:drop-shadow-lg ease-in'
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

export default Register
