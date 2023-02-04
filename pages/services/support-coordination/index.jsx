import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Support() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
                        Support Coordination
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/suppport.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span>
                                Torana Care Australia Provides two(2) levels of Support coordination such as:
                            </span>
                            <span className='text-black-700 text-xl font-bold uppercase'>Level 1: Support Connection</span>
                            <span className=''>
                                This support assists a participant to implement their plan by strengthening their ability to connect with the broader systems of supports and to understand the purpose of the funded supports. Our Support Connection assists a participant to understand their NDIS plan, connect participants with broader systems of supports, and provide assistance to connect with providers. This service will also assist participants
                                to achieve effective utilisation of their NDIS plan and answer questions as they arise.
                            </span>
                            <span>
                                Support Connection helps to increases a participant’s capacity to maintain (or in some cases change) support relationships, resolve service delivery issues,
                                and participate independently in NDIA processes. Our services include, but is not limited to:
                            </span>

                            <ul className='list-disc'>
                                <li>Understand the participant’s plan;</li>
                                <li>Connect with Supports and Services;</li>
                                <li>Establish Supports;</li>
                                <li>Coach, Refine, Reflect; and</li>
                                <li>Report to the NDIA.</li>
                            </ul>

                        </div>

                    </div>

                </div>
                <div className='py-3 col-span-6 flex flex-col gap-4 '>
                    <span className='text-black-700 text-xl font-bold uppercase'>Level 2: Coordination of Supports</span>
                    <span>
                        This support strengthens a participant’s ability to design and then build their supports with an emphasis on linking the broader systems of support across a complex service delivery environment. Our Coordination of Supports  focuses on supporting participants to direct their lives, not just their services, and also focuses on assisting participants to build and maintain a resilient network of formal and informal supports. This involves working together with the participant to understand the funding, identify what participants expect from services, and how participants want this designed. This service also includes
                        coaching participants, and working with participants to develop capacity and resilience in their network.
                    </span>
                </div>
                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4 '>
                    <span className='text-black-700 text-xl font-bold uppercase'>Our Specialist Support Coordination Services includes, but is not limited to</span>
                    <ul className='list-disc'>
                        <li>Understand the participant’s plan;</li>
                        <li>Connect with Supports and Services;</li>
                        <li>Design Support Approaches;</li>
                        <li>Establish Supports;</li>
                        <li>Coach, Refine, Reflect;</li>
                        <li>Targeted Support Coordination;</li>
                        <li>Crisis: Planning, Prevention, Mitigation and Action;</li>
                        <li>Address Complex Barriers;</li>
                        <li>Design Complex Service Plan;</li>
                        <li>Build Capacity and Resilience; and</li>
                        <li>Report to the NDIA.</li>
                    </ul>
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
