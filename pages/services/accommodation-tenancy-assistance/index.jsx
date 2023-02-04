import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Accommodation() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
                        Accommodation /
                        Tenancy Assistance
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/about/accomo.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className='text-black-700 text-xl font-bold uppercase'>Our support can include:</span>
                            <span className=''>
                                Helping participants to reclassify or create accommodation/tenancy objectives. We know how challenging it can be to identify your housing needs and plan towards finding he right tenancy/ accommodation that suits your needs. We have a team of skilled professionals ready
                                to work through this process with you, no matter what stage you are in achieving set goals.
                            </span>
                            <span className=''>
                                Investigating elective lodging choices. We help our participants investigate available options, ensuring that they make the right choice in securing an accommodation/tenancy that supports their needs.
                            </span>
                            <span className=''>
                                We are totally committed to providing all necessary support to our participants, ensuring that their housing needs are meet in every way possible.
                            </span>

                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
                    <span className='text-black-700 text-xl font-bold uppercase'></span>
                    <span className=''>
                        People with disability (and families) are faced with the challenge of moving out of their family home and into a house of their own. Participants and their families will need to decide for themselves where they live, who they live with and how they are supported.Finding the right accommodation /tenancy as a person living with a disability can be quiet challenging. With the NDIS ,accessing the Specialist Disability Accomodation(SDA) funding, may not be easy. We can educate and help you understand how the NDIS can meet your needs. However, there are other avenues
                        we could explore with you such as private accommodation modification, and private/shared property rental.
                    </span>
                    <span className=''>
                        Torana Care Australia can give one on one help to assist participants to accomplish their individual Accommodation and Tenancy objectives. We are well able to help participants beat boundaries that sway a present occupancy. We support participants to investigate and rent a private accommodation. We help in liaising with specialist organizations to determine a suitable accommodation for our participants with the aim of  accomplishing their individual objectives.
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
