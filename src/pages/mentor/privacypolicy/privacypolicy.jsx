    import React, { useState } from "react";
    import logoRusa from "../../../assets/logorusa.png";
    import maskotImage from "../../../assets/maskot.png";
import { useNavigate } from "react-router-dom";

    const PrivacyPolicy = () => {
        const navigate = useNavigate();
        const [showPopup, setShowPopup] = useState(false);

        const handleLogoClick = () => {
            alert('You clicked on the logo!');
        };

        const handleMouseOver = (e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'transform 0.3s ease';
        };

        const handleMouseOut = (e) => {
            e.target.style.transform = 'scale(1)';
        };

        const handleFormSubmit = (e) => {
            e.preventDefault();
            setShowPopup(true);
        };

        const closePopup = () => {
            setShowPopup(false);
        };

        const handleClick = () => {
            navigate('/mentor/dashboard')
        }

    return (
        <div className="relative flex h-screen items-center justify-center bg-white px-4">
        {/* Logo Rusa - Pojok Kiri Atas */}
        <img
            src={logoRusa}
            alt="Logo"
            className="absolute top-0 left-0 m-4 h-28"
        />

        {/* Left Section */}
        <div className="relative left-[0px] flex w-1/2 flex-col items-center justify-center text-center">
            <img src={maskotImage} alt="Maskot" className="h-80 mb-4" />
            <p className="text-3xl font-medium text-gray-700">To be mentor, unlock</p>
            <p className="text-3xl font-medium text-gray-700">your potential</p>
        </div>

        {/* Right Section */}
        <div className="relative left-[45px] w-1/2 max-w-xl h-[620px] rounded-lg bg-[#3DD598B2] px-12 py-16 ml-15">
        <div className="relative bottom-[25px] left-[40px] -translate-x-1/2 -translate-y-1/2 text-black text-lg text-center font-montserrat">
            AGREEMENT
        </div>
        <div className="relative bottom-[20px] left-[230px] -translate-x-1/2 -translate-y-1/2 text-black text-2xl font-bold font-montserrat">
            Terms and Conditions
        </div>
        <div className="relative bottom-[15px] left-[230px] -translate-x-1/2 -translate-y-1/2 text-gray-500 text-lg font-lato">
            Last Updated on 5/12/2022
        </div>

                        {/* Scrollable Clauses */}
        <div className="absolute top-1/4 left-[20px] w-[95%] h-[380px] overflow-y-auto bg-white border border-gray-300 rounded-lg p-4">
            <h2 className="text-lg font-bold text-black">Clause 1</h2>
                <p className="text-justify text-gray-800 text-base leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                </p>
            <h2 className="text-lg font-bold text-black mt-4">Clause 2</h2>
                <p className="text-justify text-gray-800 text-base leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in.
                </p>
        </div>

            <form onSubmit={handleFormSubmit} className="relative top-4 space-y-4">

            <button
                onClick={handleClick}
                type="submit"
                className="relative top-[390px] w-full rounded-3xl  bg-[#FFF] py-2 text-[#339989] transition duration-300 hover:bg-[#38A892]"
            >
                Daftar
            </button>
            </form>
        </div>
        </div>
    );
    };

    export default PrivacyPolicy;
