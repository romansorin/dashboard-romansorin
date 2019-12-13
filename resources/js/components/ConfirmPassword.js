import React from 'react'

const ConfirmPassword = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header'>Confirm Password</div>

                        <div className='card-body'>
                            Please confirm your password before continuing.
                            <form
                                method='POST'
                                action="route('password.confirm"
                            >
                                <div className='form-group row'>
                                    <label
                                        for='password'
                                        className='col-md-4 col-form-label text-md-right'
                                    >
                                        Password
                                    </label>

                                    <div className='col-md-6'>
                                        <input
                                            id='password'
                                            type='password'
                                            className='form-control'
                                            name='password'
                                            required
                                            autocomplete='current-password'
                                        />

                                        <span
                                            className='invalid-feedback'
                                            role='alert'
                                        >
                                            <strong> $message </strong>
                                        </span>
                                    </div>
                                </div>

                                <div className='form-group row mb-0'>
                                    <div className='col-md-8 offset-md-4'>
                                        <button
                                            type='submit'
                                            className='btn btn-primary'
                                        >
                                            Confirm Password
                                        </button>

                                        <a
                                            className='btn btn-link'
                                            href=" route('password.request"
                                        >
                                            Forgot Your Password?
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPassword
