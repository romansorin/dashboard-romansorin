import React from 'react'

const ResetPassword = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full max-w-sm'>
                    <div className='flex flex-col break-words bg-white border border-2 rounded shadow-md'>
                        <div className='font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0'>
                            Reset Password
                        </div>

                        <form
                            className='w-full p-6'
                            method='POST'
                            action="route('password.update"
                        >
                            <input
                                type='hidden'
                                name='token'
                                value='$token }}'
                            />
                            >
                            <div className='flex flex-wrap mb-6'>
                                <label
                                    for='email'
                                    className='block text-gray-700 text-sm font-bold mb-2'
                                >
                                    E-Mail Address:
                                </label>

                                <input
                                    id='email'
                                    type='email'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline$errors->has('email') ? ' border-red' : '' }}"
                                    name='email'
                                    value="old('email"
                                    required
                                    autofocus
                                />

                                <p className='text-red-500 text-xs italic mt-4'>
                                    $errors->first('email
                                </p>
                            </div>
                            <div className='flex flex-wrap mb-6'>
                                <label
                                    for='password'
                                    className='block text-gray-700 text-sm font-bold mb-2'
                                >
                                    Password:
                                </label>

                                <input
                                    id='password'
                                    type='password'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline$errors->has('password') ? ' border-red' : '' }}"
                                    name='password'
                                    required
                                />

                                <p className='text-red-500 text-xs italic mt-4'>
                                    $errors->first('password
                                </p>
                            </div>
                            <div className='flex flex-wrap mb-6'>
                                <label
                                    for='password-confirm'
                                    className='block text-gray-700 text-sm font-bold mb-2'
                                >
                                    Confirm Password:
                                </label>

                                <input
                                    id='password-confirm'
                                    type='password'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    name='password_confirmation'
                                    required
                                />
                            </div>
                            <div className='flex flex-wrap'>
                                <button
                                    type='submit'
                                    className='bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
