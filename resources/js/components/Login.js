import React from 'react'

import useLoginForm from './useLoginForm'

// ! TODO: Input and state validation
// ! TODO: Checkbox

const Login = () => {
    const handleLogin = data => {
        // ! TODO: Add in the associated API call
    }
    const login = () => {
        handleLogin({
            username: inputs.username,
            password: inputs.password
        })
    }

    const { inputs, handleInputChange, handleSubmit } = useLoginForm(
        {
            username: '',
            password: ''
        },
        login
    )
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full max-w-sm'>
                    <div className='flex flex-col break-words bg-white border border-2 rounded shadow-md'>
                        <div className='font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0'>
                            Login
                        </div>

                        <form className='w-full p-6' action={handleSubmit}>
                            <div className='flex flex-wrap mb-6'>
                                <label
                                    for='Username'
                                    className='block text-gray-700 text-sm font-bold mb-2'
                                >
                                    Username
                                </label>

                                <input
                                    id='Username'
                                    type='Username'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline $errors->has('email') ? ' border-red-500' : '' "
                                    name='Username'
                                    value={inputs.username}
                                    onChange={handleInputChange}
                                    required
                                    autofocus
                                />

                                <p className='text-red-500 text-xs italic mt-4'>
                                    This field has an error.
                                </p>
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
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline $errors->has('password') ? ' border-red-500' : '' "
                                    name='password'
                                    value={inputs.password}
                                    onChange={handleInputChange}
                                    required
                                />

                                <p className='text-red-500 text-xs italic mt-4'>
                                    This field has an error.
                                </p>
                            </div>

                            <div className='flex mb-6'>
                                <input
                                    type='checkbox'
                                    name='remember'
                                    id='remember'
                                    // 'checked' : ''
                                />

                                <label
                                    className='text-sm text-gray-700 ml-3'
                                    for='remember'
                                >
                                    Remember Me
                                </label>
                            </div>

                            <div className='flex flex-wrap items-center'>
                                <button
                                    type='submit'
                                    className='bg-blue-500 hover:bg-blue-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                >
                                    Login
                                </button>

                                <a
                                    className='text-sm text-blue-500 hover:text-blue-700 whitespace-no-wrap no-underline ml-auto'
                                    href='#forgotpassword'
                                >
                                    Forgot Your Password?
                                </a>

                                <p className='w-full text-xs text-center text-gray-700 mt-8 -mb-4'>
                                    Don't have an account?{' '}
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

export default Login
