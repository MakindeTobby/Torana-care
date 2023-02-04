import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Cald() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
                        CALD(Culturally And Linguistically Diverse) Community Participation
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/cald.jpeg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className=''>
                                We support our CALD(Cultural And Linguistically Diverse) participants engage with their communities. We understand the importance of being actively involved in your cultural activities which forms part of your value system.
                                Each participant is supported to express their cultural needs and their expectation. We are open to learning new cultures and values.
                            </span>
                            <span>
                                We have a team of passionate professionals trained to support your values and beliefs in a way that suits you.
                            </span>
                            <span>
                                We would like to hear from you.
                            </span>
                            <button type="button"
                                className="lg:w-[30%] md:w-[20%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                                <Link href={"/contact"} >Contact Us</Link></button>

                        </div>

                    </div>


                </div>

                <div className='pt-10 md:px-0 sm:px-3'>

                </div>
            </div>

        </>
    )
}
