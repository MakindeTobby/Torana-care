import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Exercise() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='flex  gap-4 pt-20 lg:pl-20 md:pl-10 sm:pl-10 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center'>
                        Exercise Physiology And Personal Training
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/exercise.png' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className=''>
                                Exercise physiologists/personal trainer specialise in clinical exercise interventions for people with a broad range of health issues. Persons needing these services may be at risk of developing, or have existing, medical conditions and injuries. The aims of exercise physiology interventions are to prevent or manage acute, sub- acute or chronic disease or injury, and assist in restoring one’s optimal physical function, health or wellness. These interventions are exercise-based and include health and physical activity education, advice and support and lifestyle modification with a strong focus on achieving behavioural change.

                                There are a wide range of reasons why a person may benefit from consulting an accredited exercise physiologist. These include chronic disease management referrals after diagnosis of a range of conditions including:
                            </span>

                            <ul className="list-disc">
                                <li> Cardiovascular disease</li>

                                <li> Pulmonary disease</li>

                                <li> Metabolic disease</li>

                                <li>Neurological disease</li>

                                <li> Musculoskeletal disease (including arthritis, osteoporosis/osteopenia, acute and/or chronic musculoskeletal issues)</li>

                                <li> Depression and other mental health conditions</li>

                                <li> Cancer</li>

                                <li> Accredited exercise physiologists may also assist with:</li>

                                <li> Assessments of functional capacity</li>

                                <li> Advice on lifestyle modification to improve health status</li>

                                <li> Exercise prescriptions for strength and function improvement pre- and post- surgery</li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
                    <span className='text-black-700 text-xl font-bold uppercase'>Our Services</span>
                    <span className=''>
                        Our Exercise Physiologist and Personal Trainer will work with our participants in the delivery of exercise physiology services including:
                    </span>
                    <ul className='list-disc'>
                        <li>chronic disease self-management and rehabilitation</li>
                        <li>Individualised treatments that help our client gain as much movement and physical independence as possible</li>
                        <li>coordinating the delivery of physical and health education via tailored exercise sessions targeted to assist clients self-manage chronic disease</li>
                    </ul>

                    <span className=''>
                        We are happy to discuss your need in relation to your physical health goals.
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
