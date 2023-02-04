import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Capacity() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
                        Capacity Building Support And Services
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/capacity-build.jpeg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className='text-black-700 text-xl font-bold uppercase'></span>
                            <span className=''>
                                At Torana Care Australia, we believe that every person living with a disability should be given the opportunity to live independently and explore their environment in every way they can. Achieving this goal may be challenging without support. We have a team of skilled and experienced professionals  ready to work with you, with the aim of building your capacity to take on the coordination of your support
                                and making decisions relating to your life. We apply individualised and holistic model of care in determining ways to build the capacity of our participants effectively.
                            </span>
                            <span className='font-bold'>
                                Assistance to Access and maintain employment or higher Education
                            </span>
                            <span>
                                Our support and services are designed to provide workplace assessment or counselling to assist participants successfully engage in employment. Making life easier is our priority and we will provide all necessary support required to help you achieve set goals.
                            </span>
                            <span className="font-bold">
                                Workplace Assistance
                            </span>
                            <span>
                                We provide workplace assistance that enables our participant to successfully obtain or retain employment in the open or supported labour market.
                                This support is provided to our participants with an employment goal. This may include supports to:
                            </span>


                        </div>

                    </div>

                </div>
                <div className='py-3'>
                    <ul className="list-disc">
                        <li>explore different work options;</li>
                        <li>build essential foundation skills for work;</li>
                        <li>managing complex barriers to obtaining and sustaining employment;</li>
                        <li>specialised job customisation;</li>
                        <li>supports to transition from an Australian Disability Enterprise (ADE) to open employment;</li>
                        <li>develop a career plan; and</li>
                        <li>other capacity building supports that are likely to lead to successful engagement in a Disability Employment Service (DES).</li>
                    </ul>

                </div>
                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
                    <span className='font-bold'>
                        Assistance in coordinating or managing life stages, transitions and supports
                    </span>
                    <span>
                        Our support and services are provided in a way that promotes independence and capacity building. Our skilled professionals will work with our participants, helping them develop the capacity to coordinate and manage life stages.We understand the challenges our participants may face during the transition. Our support and services include: mentoring, peer-support and individual skill development. For instance, providing assistance in attending appointments,
                        shopping, bill paying, taking part in social activities and maintaining contact with others.
                    </span>
                    <span>
                        We are here to provide all required support and services to ensure that necessary skills are gained to be independent as much as possible.
                    </span>
                    <span className='font-bold'>
                        Development of daily living and life skills
                    </span>
                    <span>
                        We will work with our participants, actively supporting and assisting with daily living and life skill development such as budgeting, cleaning, laundry, gardening, relationship building, meal preparation,developing skills for community,
                        social and recreational participation, with the aim of promoting independence and building their confidence.
                    </span>
                    <span>
                        Let us know how we can help!
                    </span>
                </div>

                <div className='pt-10 md:px-0 sm:px-3'>
                    <button type="button"
                        className="lg:w-[15%] md:w-[20%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                        <Link href={"/contact"} >Contact Us</Link></button>
                </div>
            </div>

        </>
    )
}
