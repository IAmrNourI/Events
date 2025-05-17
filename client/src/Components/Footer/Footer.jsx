import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../Context/Language';

export default function Footer() {
const {language, setLanguage} = useContext(LanguageContext)


const getNavLink = (item) => {
switch (item) {
    case "Home":
    case "الرئيسية":
        return "/";
    case "About":
    case " من نحن ":
        return "/about";
    case "My Events":
    case " سابقة أعمالنا ":
        return "/myevents";
    case "Products":
    case "منتجاتنا":
        return "/products";
    case "Contact":
    case "اتصل بنا":
        return "/contact";
    default:
        return "/";
}
};

const navItems = language === "en"
? ["Home", "About", "My Events"]
: ["الرئيسية", " من نحن ","فعالياتي"];

return (
    <section className='footer position-relative bg-f'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="wave"></div>
                    <ul className="social-icon p-0">
                        <li><a href="ahmedfathy159930@gmail.com" aria-label="Send Mail" role="button"><i className="fab fa-google"></i></a></li>
                        <li><a href="https://www.instagram.com/fathy_abdelhamiid/" aria-label="Instagram profile" target="_blank" role="button"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100010637435471" target="_blank" aria-label="Facebook profile" role="button"><i className="fa-brands fa-facebook"></i></a></li>
                    </ul>
                    <ul className='footer-links p-0'>
                        {navItems.map((item, index) => (
                        <li key={index} className=''>
                            <Link to={getNavLink(item)}>
                              {item}
                            </Link>
                        </li>
                        ))}
                    </ul>
                        <div className="row">
                            <div className="col-md-12">
                                <p className='text-center'> &copy; 2025 EV . All Rights Reserved. </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
);

}

