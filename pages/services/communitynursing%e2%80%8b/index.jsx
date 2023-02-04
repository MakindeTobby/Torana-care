import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Community() {
  return (
    <>

      <div className={styles.down + ' w-full mt-2'}  >
        <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


          <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
            Community
            Nursing
          </h1>

        </div>

      </div>

      <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
        <div className="lg:flex lg:items-start lg:gap-8">

          <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
            <div className='col-span-6 flex justify-center items-center'>
              <img src='/service/community.jpg' width={'100%'} />
            </div>
            <div className='col-span-6 flex flex-col gap-4 '>
              <span className='text-black-700 text-xl font-bold uppercase'></span>
              <span className=''>
                Community Nursing attendants are a significant piece of the treatment team giving comprehensive care to clients in the community. They carry the truly necessary considerations and provide healthcare support to clients/participants in the solace of their homes, inline with the requirements of the client’s medical team. Giving the required instruction to clients about their well-being conditions is an integral part of their duty. Providing essential nursing care in the Community are significant obligations of the Nurse. They also have a duty to offer emotional help to the client and their families, providing insights to psychological wellness worries within their scope of duties and further escalation of health/medical concerns to appropriate places as required. Keeping and making
                comprehensive reports of the client’s health condition is an essential segment of the community nurse.
              </span>
              <span className=''>
                At Torana Care Australia, we have a team of competent and caring Nurses, ready to take care of your nursing needs as explained above.
              </span>

            </div>

          </div>

        </div>
        <div>
          <span>
            Our Nurses work with individuals and their families to help manage an ailment, keep up well-being and manage any out of hospital care medical needs. We intend to help and keep up our participant’s freedom, security and sound way of life, simultaneously and also provide support to carers.
          </span>
        </div>
        <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
          <span className='text-black-700 text-xl font-bold uppercase'></span>
          <span className=''>
            Our support and services include:
          </span>
          <ul>
            <li>care after a medical clinic </li>
            <li>general nursing care, incorporating help with chronic conditions</li>
            <li>‘medical clinic in the home’ services, which give emergency clinic type care outside of the emergency clinic</li>
            <li>palliative nursing care, for individuals who have an actual constraining ailment and needs to remain at home</li>
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
