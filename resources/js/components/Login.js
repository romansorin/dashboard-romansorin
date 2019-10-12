import React from 'react'

const Login = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full max-w-sm'>
          <div className='flex flex-col break-words bg-white border border-2 rounded shadow-md'>
            <div className='font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0'>
              ('Login')
            </div>

            <form
              className='w-full p-6'
              method='POST'
              action=" route('login') "
            >
              <div className='flex flex-wrap mb-6'>
                <label
                  for='email'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  __('E-Mail Address') :
                </label>

                <input
                  id='email'
                  type='email'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline $errors->has('email') ? ' border-red-500' : '' "
                  name='email'
                  value=" old('email') "
                  required
                  autofocus
                />

                <p className='text-red-500 text-xs italic mt-4'>
                  $errors->first('email')
                </p>
              </div>

              <div className='flex flex-wrap mb-6'>
                <label
                  for='password'
                  className='block text-gray-700 text-sm font-bold mb-2'
                >
                  __('Password') :
                </label>
                <input
                  id='password'
                  type='password'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline $errors->has('password') ? ' border-red-500' : '' "
                  name='password'
                  required
                />
                @if ($errors->has('password'))
                <p className='text-red-500 text-xs italic mt-4'>
                  $errors->first('password')
                </p>
                @endif
              </div>

              <div className='flex mb-6'>
                <input
                  type='checkbox'
                  name='remember'
                  id='remember'
                  // 'checked' : ''
                />

                <label className='text-sm text-gray-700 ml-3' for='remember'>
                  __('Remember Me')
                </label>
              </div>

              <div className='flex flex-wrap items-center'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  __('Login')
                </button>
                @if (Route::has('password.request'))
                <a
                  className='text-sm text-blue-500 hover:text-blue-700 whitespace-no-wrap no-underline ml-auto'
                  href=" route('password.request') "
                >
                  __('Forgot Your Password?')
                </a>
                @endif @if (Route::has('register'))
                <p className='w-full text-xs text-center text-gray-700 mt-8 -mb-4'>
                  Don't have an account?
                  <a
                    className='text-blue-500 hover:text-blue-700 no-underline'
                    href=" route('register') "
                  >
                    Register
                  </a>
                </p>
                @endif
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
