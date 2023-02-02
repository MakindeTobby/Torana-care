import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Assistive() {
  return (
   <>

              <div className={styles.down + ' w-full mt-2'}  >
                <div className='flex  gap-4 pt-20 lg:pl-20 md:pl-10 sm:pl-10 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center'>
                    Assistive Support And Services
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/about/dedicate.png' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className='text-black-700 text-xl font-bold uppercase'>We are dedicated to caring for your needs!</span>
                            <span className=''>
                            Assistive Technology (AT) provides the support a person with a disability might use to reach their potential at home, in the community and the workplace. AT may be equipment or systems which help you with moving around your home or community, communicating with other people, processing information, and other daily tasks. Supports may be included in your NDIS plan 
                            where it is a reasonable and necessary support that will meet your needs and help you pursue your goals. 
                            </span>
                            <span className=''>
                            Torana Care Australia helps persons with a disability identify their AT needs. We have a specialist team of professional who would work with you to determine the right AT solution in line with your 
                            specific AT needs, how complex your AT needs are and how you manage your NDIS budget.
                            </span>

                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
                            <span className='text-black-700 text-xl font-bold uppercase'></span>
                            <span className=''>                   
                            Participants are able to use their existing NDIS funding to purchase an item if: 
                            </span>   
                              <ul  className='list-disc'>
                                <li>it will maintain funded NDIS supports like a program, therapy or requirement (for example physiotherapy or Auslan interpreting provided via video conferencing), and</li>
                                <li>the provider of supports has confirmed in writing the device is necessary to continue supports and services while maintaining physical distancing requirements, and</li>
                                <li>it is the lowest specification that will maintain funded supports, and </li>
                                <li>they do not already have the item, another suitable item or access to the item, and</li>
                                <li>the item has not been funded by another service system (such as education), and</li>
                                <li>the item or circumstances are not specifically excluded from their plans.</li>
                              </ul>

                              <span className=''>
                              At Torana Care Australia, we take care of all aspects of our participants needs that support their well-being. We understand how challenging it may be to organise assistive equipment and services.We will work with you as we explore all options available to meet your needs. We have a team of qualified professionals, in collaboration with other services/professionals ready to conduct a comprehensive assessment, 
                              of what is appropriate for you, inline with your needs and goals.Our services include but not limited to:
                              </span>

                              <ul  className='list-disc'>
                                <li>Assistive Products for Household Task</li>
                                <li>Communication and information equipment</li>
                                <li>Personal Mobility Equipment</li>
                                <li>Assistive Products for Personal Care and Safety</li>
                                <li>Assistance with daily personal activities</li>
                                <li>Assistive equipment for recreation</li>
                                <li>Assistance with daily life tasks in a group or shared living arrangement</li>
                                <li>Hearing Equipment</li>
                                <li>Assistance with travel/transport arrangements</li>
                              </ul>
                           
                           <span className=''>
                           We are here to support you live your best life by bridging the gap between the thought of achieving set 
                           goals and meeting these goals. Get in  touch we us today so we could discuss your needs.
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
