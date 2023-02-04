import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function GroupCenter() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
                        Group And
                        Centre-Based Activities
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/paint.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className=''>
                                Group Centre-based activity is a platform where persons living with a disability can come together to build their social skills, communication and get busy exploring a range of
                                interesting activities with like minds, under the supervision of experienced health care professionals.
                            </span>
                            <span className=''>
                                At Torana Care Australia, we understand how boring and frustrating in can be for persons living with a disability to remain unengaged within a lengthy space of time and in the four walls of their homes. Being part of a daily centre-based activity group is
                                rewarding as it builds the capacity and further improves the well-being of persons living with a disability.
                            </span>
                            <span>
                                We provide a range of group and centre-based activities, tailored to suit the interest and needs of our participants. We make these activities fun and interesting, giving each participant a chance to express themselves with the aim
                                of achieving the best possible outcome. Our services will be provided based on our participant’s set goals.
                            </span>
                            <span className='text-black-700 text-xl font-bold uppercase'>
                                Our list of group activities includes:
                            </span>

                            <ul className='list-disc'>
                                <li>Knitting</li>

                                <li>Drawing</li>

                                <li>painting</li>

                                <li>Singing</li>

                                <li>Drumming</li>

                                <li>cooking</li>

                                <li>movies</li>
                            </ul>

                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>

                    <span>
                        We are happy to discuss other group activities that may interest you.
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

