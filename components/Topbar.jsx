import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const Topbar = () => {
    return (
        <div>
            <nav className="relative flex items-center lg:justify-evenly md:justify-between  px-2 py-4  bg-blue-800 mb-3">

                <div className=" flex justify-between gap-4 text-white lg:w-auto  px-4  lg:justify-between">
                    <div className="flex gap-2"> <FaPhone className="text-white w-6 h-6" />
                        {/* <span >+61 499 322 078</span> */}
                    </div>
                    <div className="flex gap-2"> <FaEnvelope className="text-white w-6 h-6" />
                        {/* <span className="">info@toranacareaustralia.org.au</span> */}
                    </div>

                </div>
                <div className=" flex justify-between gap-4 text-white lg:w-auto  px-4  lg:justify-between">
                    <div className="flex gap-2"> <FaLinkedin className="text-white w-6 h-6" /></div>
                    <div className="flex gap-2"> <FaFacebook className="text-white w-6 h-6" /></div>
                    <div className="flex gap-2"> <FaInstagram className="text-white w-6 h-6" /></div>

                </div>



            </nav>

        </div>
    );
}

export default Topbar;