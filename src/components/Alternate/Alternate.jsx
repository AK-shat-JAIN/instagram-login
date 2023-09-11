import './Alternate.css'

function Alternate({ status, clicked }){
    return (
        <>
            <div className='alter-cover'>
                {status ? 
                    <>
                        <p>Don't have an account? <span onClick={clicked}>Sign up</span></p>
                    </> 
                    :
                    <>
                        <p>Have an account? <span onClick={clicked}>Log in</span></p>
                    </>
                }
            </div>
        </>
    )
}

export default Alternate;