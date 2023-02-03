import styles from '@/styles/About.module.css'
import Link from 'next/link';
const Careers = () => {
    return (
        <>

            <div className={styles.header + ' w-full mt-2'}  >
                <div className=' gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-5xl text-left animate__animated animate__fadeInRight'>
                        CAREERS
                    </h1>

                </div>

            </div>
            <div className="max-w-screen-xl px-4  mx-auto sm:px-6  lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">

                        <div className='col-span-6 flex flex-col justify-center items-center pt-20'>
                            <h1 className='text-5xl text-center'>
                                WE ARE CURRENTLY<span className='font-bold'> HIRING</span>
                            </h1>


                        </div>
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/job alert.jpg' width={'80%'} />
                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4 lg:px md:px-0 sm:px-3 py-4'>

                    <span className=''>
                        At Torana Care Australia, our staff work with us and not for us. Every staff is an important member of our team and are given the opportunity to grow there career professionally.
                        We also support our workers to up skill with a view to achieving their career goals.
                    </span>


                    <span className=''>
                        All our support and services are provided within Canberra. We currently have the following vacant positions:
                    </span>
                    <ul className="list-disc">
                        <li>Disability Support Professional</li>

                        <li> Registered Nurse</li>

                        <li> Enrolled Nurse</li>

                        <li> IT Coordinator</li>

                        <li>Administration Officer</li>


                    </ul>
                    <span> Get in touch with us.</span>

                </div>
                <div className='pt-10  md:px-0 sm:px-3'>

                    <Link href={'/contact'}><button type="button"
                        className="lg:w-[25%] md:w-[30%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                        Register your interest
                    </button></Link>
                </div>
            </div>
        </>
    );
}

export default Careers;