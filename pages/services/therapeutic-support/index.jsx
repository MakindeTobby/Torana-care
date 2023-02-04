import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Therapeutic() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
                        Therapeutic Support
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/thera.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className='text-black-700 text-xl font-bold uppercase'>Our Therapeutic Supports and Services are provided to participants over the age of seven(7). These includes:</span>
                            <ul className='list-disc'>
                                <li><b>Assessment and Support:</b> Our services are provided to support our participant’s care plan by proving training, or supervision of a care giver to respond to complex care needs of the participant.</li>
                                <li><b>Counselling:</b>Our counselling services are provided to facilitate self-knowledge, emotional acceptance and growth, and the optimal development of personal resources, to help the participant work towards their personal goals and gain greater insight into their lives.</li>
                                <li><b>Community Engagement Assistance:</b>Our support and services are provided to empower participants by developing and improving their social interaction skills.</li>
                                <li><b>Community Nursing Care for Continence Aid:</b>We provide continence aids assessment, recommendation, and training support.</li>
                            </ul>

                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4  md:px-0 sm:px-3 py-6'>

                    <ul className='list-disc'>

                        <li>We also assist our participants to develop the skill to engage effectively in the community through a group approach to help them gain insight into their lives, and make informed decisions.</li>
                        <li>We provide Therapeutic support by an allied health assistant working under the delegation and direct supervision at all times of our therapist.</li>
                        <li>We provide assessment, recommendation, therapy or training (including Assistive Technology) by our psychologist or physiotherapist. <b>Our Exercise Physiologist </b>
                            provides advice to a participant regarding exercise required due to the impact of their disability.</li>
                    </ul>

                    <ul>
                        <li>We are here to help…</li>
                    </ul>

                </div>
                <div className='pt-6  md:px-0 sm:px-3'>
                    <button type="button"
                        className="lg:w-[15%] md:w-[20%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                        <Link href={"/contact"} >Contact Us</Link> </button>
                </div>
            </div>

        </>
    )
}
