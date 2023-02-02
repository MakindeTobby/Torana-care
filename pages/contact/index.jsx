import styles from '@/styles/About.module.css'
import { FaEnvelopeOpen, FaMapPin, FaPhone, } from 'react-icons/fa';

const Contact = () => {
    return (

        <>
            <div className={styles.header + ' w-full mt-2'}  >
                <div className='flex  gap-4 pt-20 pl-20 justify-start items-center'>


                    <h1 className='text-white font-bold text-5xl text-left'>
                        CONTACT US
                    </h1>

                </div>

            </div>
            <div className=" w-full bg-slate-100 flex justify-center mt-3 py-10" >
                <div className='flex flex-col gap-4 pt-10 justify-center items-center lg:w-1/2 md:w-full sm:w-full'>
                    <span className='text-5xl text-center'>
                        WE ARE ALWAYS
                        <span className='font-bold'> AVAILABE AT YOUR SERVICE.</span>
                    </span>



                    <span className='text-center'>Come and visit our quarters or simply send us an email anytime you want </span>

                </div>
            </div>
            <div className="max-w-screen-xl px-4  mx-auto sm:px-6 lg:px-8 mt-3">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid lg:gap-8  mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-8 sm:grid-cols-4">


                        <div className='col-span-4 py-4'>
                            <a href="#" className="flex px-4 py-4 flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <FaPhone className='w-10 h-10' />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Phone Number</h5>
                                    <p className="mb-3 text-2xl text-gray-700 dark:text-gray-400">
                                        +61(0)499322078

                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className='col-span-4 py-4'>
                            <a href="#" className="flex px-4 py-4 flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <FaEnvelopeOpen className='w-10 h-10' />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Email</h5>
                                    <p className="mb-3 text-gray-700 dark:text-gray-400">
                                        info@toranacareaustralia.org.au

                                    </p>
                                </div>
                            </a>
                        </div>

                        <div className='col-span-4 py-4'>
                            <a href="#" className="flex px-4 py-4 flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <FaMapPin className='w-10 h-10' />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Address</h5>
                                    <p className="mb-3 text-gray-700 dark:text-gray-400 lowercase">
                                        114 BERNARD HEINZE AV, MONCRIEFF, AUSTRALIA CAPITAL TERRITORY, 2913

                                    </p>
                                </div>
                            </a>
                        </div>




                    </div>
                </div>
            </div>

            <div>
                <div className=" w-full py-8 bg-white">
                    {/* COMPONENT CODE */}
                    <div className="w-full mx-auto my-4 px-4 lg:px-20">
                        <div className="w-full mx-auto p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded shadow-md">
                            <div className="flex">
                                <h1 className="font-bold uppercase text-3xl">Send us a <br /> message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input className="w-full text-gray-800 mt-2 p-3 rounded focus:outline-none focus:shadow-outline" type="text" placeholder="First Name*" />
                                <input className="w-full text-gray-800 mt-2 p-3 rounded focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name*" />
                                <input className="w-full text-gray-800 mt-2 p-3 rounded focus:outline-none focus:shadow-outline" type="email" placeholder="Email*" />
                                <input className="w-full text-gray-800 mt-2 p-3 rounded focus:outline-none focus:shadow-outline" type="number" placeholder="Phone*" />
                            </div>
                            <div className="my-4">
                                <textarea placeholder="Message*" className="w-full h-32 text-gray-800 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" defaultValue={""} />
                            </div>
                            <div className="my-2 w-1/2 lg:w-1/4">
                                <button className="uppercase text-sm font-bold tracking-wide bg-red-700 text-white p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;