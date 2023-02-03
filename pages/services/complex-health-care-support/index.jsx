import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Complex() {
  return (
   <>

              <div className={styles.down + ' w-full mt-2'}  >
                <div className='flex  gap-4 pt-20 lg:pl-20 md:pl-10 sm:pl-10 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center'>
                    Complex Health Care & Support
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/complex.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className='text-black-700 text-xl font-bold uppercase'></span>
                            <span className=''>
                            High Intensity daily personal activity represents the most complex and highest risk support and service delivery to participants having health conditions that require continuous care. Some participants may have multiple complex and fragile health needs, requiring highly skilled health professionals to take on the role of care giving. Safely assisting with and/or supervising personal tasks of daily life to enable the participant to live as autonomously as possible is significant in promoting the participant’s independence and improving the quality of life. These supports are provided by a worker with additional qualifications and experience relevant to the participants’ complex health needs.
                             These individual supports can be provided in a range of environments,
                           including but not limited to, the participant’s own home, shared and supported living accommodations.
                            </span>
                            <span className=''>
                            Owing to the complexities involved in providing daily support to individuals with challenging health needs, Torana Care Australia has built
                            </span>

                        </div>

                    </div>

                </div>
                <div className='py-3'>
                    <span>
                    a team of healthcare professionals, managed by a <b>Specialist GP 24/7, to ensure our participants gets quality healthcare at all times.</b>We are committed to providing the best and safe complex health supports and services
                     in collaboration with other health care professions, to our participants and their families. 
                    </span>
                    <span>
                    We understand the importance of partnership with the participant’s support network in achieving set goals. In all we do,
                     our participants remain at the centre of their support and services.
                    </span>
                </div>
                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
                            <span className='text-black-700 text-xl font-bold uppercase'>Our Complex health services include:</span>  
                              <ul>
                                <li>Complex Bowel Care Management</li>
                                <li>Complex Wound Care Management</li>
                                <li>Enteral Feeding Care and Management</li>
                                <li>Ventilator Care and Management</li>
                                <li>Tracheotomy Care and Management</li>
                                <li>Urinary Catheter Care and Management</li>
                                <li>Subcutaneous Injection Administration and Management.</li>
                              </ul>

                        </div>
                        <div>
                            <span>
                            Get in touch with us today  to discuss your needs.
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
