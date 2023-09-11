import './Form.css'

function Form({ status }){
    return(
        <>
            <div className='form-cover'>
                {status ? <></> : 
                    <>
                        <input type="text" placeholder="Mobile Number or Email" />
                        <input type="text" placeholder="Full Name" />
                    </>
                }
                <input type="text" placeholder="Phone number, username, or email" />
                <input type="password" placeholder="Password" />
                <input type="submit" className='submit' value={status ? 'Sign in' : 'Sign up'} />
            </div>
        </>
    )
}

export default Form;