import React from 'react'

import useRegisterForm from './useRegisterForm'

const Register = props => {
  const handleRegister = data => {
    // some api call
  }
  const register = () => {
    handleRegister({
      username: inputs.username,
      password: inputs.password,
      password_confirmation: inputs.password_confirmation,
      firstName: inputs.firstName,
      lastName: inputs.lastName
    })
  }

  const { inputs, handleInputChange, handleSubmit } = useRegisterForm(
    {
      username: '',
      password: '',
      password_confirmation: '',
      firstName: '',
      lastName: ''
    },
    register
  )
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full max-w-sm'>
          <div className='flex flex-col break-words bg-white border border-2 rounded shadow-md'>
            <div className='font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0'>
              Register
            </div>

            <form className='w-full p-6' onSubmit={handleSubmit}>
              <div className='flex flex-wrap mb-6'>
                <label
                  for='name'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Name
                </label>

                <input
                  id='firstName'
                  type='text'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='firstName'
                  onChange={handleInputChange}
                  value={inputs.firstName}
                  required
                  autofocus
                />

                <p className='text-red-500 text-xs italic mt-4'>
                  First name error
                </p>
              </div>

              <div className='flex flex-wrap mb-6'>
                <label
                  for='name'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Name
                </label>

                <input
                  id='lastName'
                  type='text'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='lastName'
                  onChange={handleInputChange}
                  value={inputs.lastName}
                  required
                  autofocus
                />

                <p className='text-red-500 text-xs italic mt-4'>
                  Last name error
                </p>
              </div>

              <div className='flex flex-wrap mb-6'>
                <label
                  for='email'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  E-Mail Address
                </label>

                <input
                  id='email'
                  type='email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='email'
                  onChange={handleInputChange}
                  value={inputs.email}
                  required
                />

                <p className='text-red-500 text-xs italic mt-4'>Email error</p>
              </div>

              <div className='flex flex-wrap mb-6'>
                <label
                  for='password'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Password
                </label>

                <input
                  id='password'
                  type='password'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                  name='password'
                  onChange={handleInputChange}
                  value={inputs.password}
                  required
                />

                <p className='text-red-500 text-xs italic mt-4'>
                  Password error
                </p>
              </div>

              <div className='flex flex-wrap mb-6'>
                <label
                  for='password-confirm'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  Confirm Password
                </label>

                <input
                  id='password_confirmation'
                  type='password'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='password_confirmation'
                  onChange={handleInputChange}
                  value={inputs.password_confirmation}
                  required
                />
              </div>

              <div className='flex flex-wrap'>
                <button
                  type='submit'
                  className='inline-block align-middle text-center select-none border font-bold whitespace-no-wrap py-2 px-4 rounded text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700'
                >
                  Register
                </button>

                <p className='w-full text-xs text-center text-gray-700 mt-8 -mb-4'>
                  Already have an account?
                  <a
                    className='text-blue-500 hover:text-blue-700 no-underline'
                    href='#login'
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
