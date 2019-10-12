import React from 'react'

const Welcome = () => {
  return (
    <div className='flex flex-col'>
      <div className='absolute top-0 right-0 mt-4 mr-4'>
        <a
          href=" url('/home') "
          className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
        >
          {' '}
          __('Home'){' '}
        </a>

        <a
          href=" route('login') "
          className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase pr-6'
        >
          {' '}
          __('Login'){' '}
        </a>

        <a
          href=" route('register') "
          className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
        >
          {' '}
          __('Register'){' '}
        </a>
      </div>

      <div className='min-h-screen flex items-center justify-center'>
        <div className='flex flex-col justify-around h-full'>
          <div>
            <h1 className='text-gray-600 text-center font-light tracking-wider text-5xl mb-6'>
              Laravel
            </h1>
            <ul className='list-reset'>
              <li className='inline pr-8'>
                <a
                  href='https://laravel.com/docs'
                  className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
                  title='Documentation'
                >
                  Documentation
                </a>
              </li>
              <li className='inline pr-8'>
                <a
                  href='https://laracasts.com'
                  className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
                  title='Laracasts'
                >
                  Laracasts
                </a>
              </li>
              <li className='inline pr-8'>
                <a
                  href='https://laravel-news.com'
                  className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
                  title='News'
                >
                  News
                </a>
              </li>
              <li className='inline pr-8'>
                <a
                  href='https://nova.laravel.com'
                  className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
                  title='Nova'
                >
                  Nova
                </a>
              </li>
              <li className='inline pr-8'>
                <a
                  href='https://forge.laravel.com'
                  className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
                  title='Forge'
                >
                  Forge
                </a>
              </li>
              <li className='inline pr-8'>
                <a
                  href='https://github.com/laravel/laravel'
                  className='no-underline hover:underline text-sm font-normal text-teal-800 uppercase'
                  title='GitHub'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
