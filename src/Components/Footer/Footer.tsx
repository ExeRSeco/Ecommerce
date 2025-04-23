
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
export const Footer = () => {
    return (
        <footer className="footer-container bg-gray-900 py-4 px-4 text-white font-bold text-2xl">
            <div className="footer-container__logo"></div>
            <div className="footer-container__social-media flex justify-center items-center gap-4">
                <a href="https://www.facebook.com"> <FaFacebook className="text-white" /></a>
                <a href="https://www.instagram.com"> <FaInstagram className="text-white" /></a>
                <a href="https://www.twitter.com"> <FaTwitter className="text-white" /></a>
                <a href="https://www.whatsapp.com"> <FaWhatsapp className="text-white" /></a>
            </div>

            <div className="footer-container__copyright text-center mt-4">
                <p>Copyright &copy; 2025 All Rights Reserved</p>
            </div>

        </footer>
    )
}


