

export const FormRegister = () => {
    return (
        <div className='container-register flex flex-col items-center justify-center h-screen w-full'>
            <div className='back-to-home__register'>
                <a href="/" className='text-white'>Back to home</a>
            </div>
            <h2 className='text-5xl font-bold text-center text-white mb-4'>Register</h2>

           <form className='flex flex-col gap-4 w-full'>
            
            <label htmlFor="name" className='text-white font-bold'>Full Name</label>
            <input type="text" placeholder="Name" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <label htmlFor="email" className='text-white font-bold'>Email</label>
            <input type="email" placeholder="Email" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <label htmlFor="password" className='text-white font-bold'>Password</label>
            <input type="password" placeholder="Password" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <label htmlFor="confirm-password" className='text-white font-bold'>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <button type="submit" className='button-register p-2 rounded-md bg-blue-500 text-white mt-2 cursor-pointer'>Register</button>
           </form>
        </div>
    )
}
