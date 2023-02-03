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
                    Specialist Behaviour Support
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/service/specialist.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                           
                            <span className=''>
                            We offer clinical social help to decrease the danger of hurtful conduct and produce positive results. Our clinicians give proficient individualized examination 
                            and techniques that advance  pro-social conduct and improve general well-being.
                            </span>
                            <span className=''>
                            Our support and services include specialist behavioural intervention support, which is an intensive support for a participant, intending to address significantly harmful or persistent behaviours of concern. We develop a Behaviour support plan that aims to limit the likelihood of behaviours of concern developing or increasing once identified. This plan outlines the specifically designed positive behavioural support strategies for a participant, their family and 
                            support persons that will achieve the intended outcome of eliminating or reducing behaviours of concern.
                            </span>
                            <span className=''>
                            Our team of behaviour support practitioners are ready to manage our participants’ specialist behaviour support needs Individually and holistically.
                            </span>
                            <span className=''>
                            We are committed to working through this process with you in collaboration with other professionals and main stream agents.
                            </span>
                            <span>
                            Let us know how we can help.
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
