
export const Transfer = () => {
    return (
        <div className="bg-white rounded-md shadow-md w-[500px] p-4">
           <p>Name: <span className="font-bold">John Doe</span></p>
           <p>Account Number: <span className="font-bold">1234567890</span></p>
           <p>Bank Name: <span className="font-bold">Bank of America</span></p>
           <p>Routing Number: <span className="font-bold">1234567890</span></p>
           <p className="text-red-600">Aclarations: <span className="font-bold">After the transfer, please send an email to <a href="mailto:support@example.com">support@example.com</a> with the transfer id.</span>
           </p>
        </div>
    )
}