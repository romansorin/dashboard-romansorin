import React from 'react'

const Verify = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full max-w-sm'>
          <div
            className='text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4'
            role='alert'
          >
            A fresh verification link has been sent to your email address.
          </div>

          <div className='flex flex-col break-words bg-white border border-2 rounded shadow-md'>
            <div className='font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0'>
              Verify Your Email Address
            </div>

            <div className='w-full flex flex-wrap p-6'>
              <p className='leading-normal'>
                Before proceeding, please check your email for a verification
                link.
              </p>

              <p className='leading-normal mt-6'>
                If you did not receive the email,{' '}
                <a
                  className='text-blue-500 hover:text-blue-700 no-underline'
                  onclick="event.preventDefault(); document.getElementById('resend-verification-form').submit();"
                >
                  click here to resend another
                </a>
                .
              </p>

              <form
                id='resend-verification-form'
                method='POST'
                action=" route('verification.resend') "
                className='hidden'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verify
