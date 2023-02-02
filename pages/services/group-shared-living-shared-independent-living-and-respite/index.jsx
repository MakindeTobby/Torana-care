import React from 'react'
import styles from '@/styles/Service.module.css'
import Link from 'next/link'
// import styles from './styles.module.css'

export default function Group() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='flex  gap-4 pt-20 lg:pl-20 md:pl-10 sm:pl-10 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold lg:w-[70%] md:w-[100%] lg:text-4xl md:text-2xl sm:text-2xl lg:text-left md:text-center sm:text-center'>
                        Group/Shared Supported Living, Supported Independent Living/Respite
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/sb1.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span>
                                At Torana Care Australia, we are committed to providing excellent support and services to our participants at all times. A high quality of service is guaranteed irrespective of location and time.
                            </span>
                            <span className='text-black-700 text-xl font-bold uppercase'>Group/Shared Supported Living</span>
                            <span className=''>
                                Group/Shared Supported Living is a type of accommodation arrangement where individuals living with a disability can live together under a roof, in the comfort of their private bedrooms but may share certain common areas such as kitchen, lounge rooms, wet rooms and other parts of the house. This living style is usually cost
                                effective as the accommodation and other living costs are shared among all residents.
                            </span>
                            <span className=''>
                                This style of living creates an avenue for socialisation and makes the living space more lively. Each resident is supported as required in their own privacy and based on their choice. Support and services provided in
                                shared living setting is similar to support being delivered in a private accommodation.
                            </span>
                            <span className='text-black-700 text-xl font-bold uppercase'> Supported Independent Living </span>
                            <span className=''>
                                Supported Independent Living is a type of support provided to NDIS participants in the comfort of their homes which may me private or shared accommodations. These supports aim to assist the participant maintain their independence.
                            </span>
                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4 lg:px md:px-0 sm:px-3 py-4'>
                    <span className='text-black-700 text-xl font-bold uppercase'>
                        Respite
                    </span>
                    <span className=''>
                        Respite support and services are provided in a group/shared supported living setting usually for a short period of time. This gives carer and family carers some time off caring for their loved once. Respite care creates an avenue for participants to socialise and be cared for just as they would being at home.
                        They are engaged in many interesting activities as well as community outings.
                    </span>


                    <span className=''>
                        Let us know how we can help..
                    </span>


                </div>
                <div className='pt-10  md:px-0 sm:px-3'>

                    <button type="button"
                        className="lg:w-[15%] md:w-[20%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                        <Link href={'/contact'}>Contact Us</Link>
                    </button>
                </div>
            </div>

        </>
    )
}
