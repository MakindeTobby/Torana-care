import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Social() {
  return (
   <>

              <div className={styles.down + ' w-full mt-2'}  >
                <div className='flex  gap-4 pt-20 lg:pl-20 md:pl-10 sm:pl-10 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center'>
                    Social Support And Services
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/about/social.webp' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                           
                            <span className=''>
                            We provide innovative community participation planning and support provision to our participants. We will work with you and your support network,
                           to determine the best kind of social support you may engage in, to help you achieve your goals
                            </span>
                            <span className=''>
                            Are you worried about being home most of the time?
                            </span>
                            <span className=''>
                            Are you unsure about what social activities to engage in?
                            </span>
                            <span className=''>
                            We would like to hear from you.
                            </span>
                            <div className='pt-6 lg:px-0 md:px-0 sm:px-3'>
          <button type="button"
          className="lg:w-[25%] md:w-[20%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
         <Link href={"/contact"} >Contact Us</Link></button>
          </div>
                        </div>
                    </div>
                </div>
            </div>
           
   </>
  )
}
