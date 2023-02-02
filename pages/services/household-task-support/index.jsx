import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Household() {
  return (
   <>

              <div className={styles.down + ' w-full mt-2'}  >
                <div className='flex  gap-4 pt-20 lg:pl-20 md:pl-10 sm:pl-10 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center'>
                    Household Task Support
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/about/mod.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                           
                            <span className=''>
                            Household task refers to the management of duties and chores involved in the running of a
                             household, such as cleaning, cooking,  home maintenance, shopping, and bill payment. These tasks may be performed by members of the household, or by other persons hired for the purpose. The term is also used to refer to the money allocated for such use.
                            </span>
                            <span className=''>
                            Persons living with a disability sometimes find housekeeping very challenging and 
                            require different levels of support, to maintain their homes. Housekeeping can be personal to persons requiring support. Carer givers having access to sensitive area in their homes may not be their personal choice but necessary to get by.
                            </span>
                            <span className=''>
                            At Torana Care Australia we understand how hard it can be to have carer at your home to take care of all your household tasks. Our disability support professionals
                             are given relevant information and training to provide quality household support to our participants. 
                            </span>
                            <span className=''>
                            We have a team of warm and hardworking support workers, passionate about your well-being, ready to support you with your house-hold tasks, in the comfort of your home.
                            </span>
                        </div>

                    </div>

                </div>
                <div className='col-span-6 flex flex-col gap-4  md:px-0 sm:px-3 py-6'>
                <span className='text-black-700 text-xl font-bold uppercase'>Our Services</span>
                              <ul>
                               <li>Cleaning</li>
                               <li>Gardening</li>
                               <li>Meal preparation</li>
                               <li>Shopping</li>
                               <li>Laundry</li>
                               <li>dish-washing and other household tasks</li>
                              </ul>

                              <ul>
                               <li>Let us know how we can help!</li>
                              </ul>

                        </div>
                        <div className='pt-6  md:px-0 sm:px-3'>
          <button type="button"
          className="lg:w-[15%] md:w-[20%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
         <Link href={"/contact"} >Contact Us</Link></button>
          </div>
            </div>
           
   </>
  )
}
