export const FormRegister = () => {
    return (
        <div className='container-register flex flex-col items-center justify-center h-[80vh] w-full bg-gray-900 rounded-lg shadow-lg p-4 m-4  shadow-gray-800'>
            <div className='back-to-home__register mb-4'>
                <a href="/" className='text-white font-bold hover:text-blue-500 transition-all duration-300 bg-gray-900 border-2 border-white rounded-lg p-2'>Back to home</a>
            </div>
            <h2 className='text-5xl font-bold text-center text-white mb-4'>Register</h2>

           <form className='flex flex-col gap-4 w-full'>
            
            <label htmlFor="name" className='text-white font-bold'>Full Name</label>
            <input type="text" id="name" name="name" placeholder="Name" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <label htmlFor="email" className='text-white font-bold'>Email</label>
            <input type="email" id="email" name="email" placeholder="Email" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <label htmlFor="password" className='text-white font-bold'>Password</label>
            <input type="password" id="password" name="password" placeholder="Password" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <label htmlFor="confirm-password" className='text-white font-bold'>Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" className='input-register border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' />

            <button type="submit" className='button-register p-2 rounded-md bg-blue-500 text-white mt-2 cursor-pointer'>Register</button>
           </form>
        </div>
    )
}
