import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Specialist() {
  return (
    <>

      <div className={styles.down + ' w-full mt-2'}  >
        <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


          <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate_fadeInUp'>
            Specialist Support Coordination
          </h1>

        </div>

      </div>

      <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
        <div className="lg:flex lg:items-start lg:gap-8">

          <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
            <div className='col-span-6 flex justify-center items-center'>
              <img src='/service/special.webp' width={'100%'} />
            </div>
            <div className='col-span-6 flex flex-col gap-4 '>
              <span className='text-black-700 text-xl font-bold uppercase'>Specialist Support Coordination </span>
              <span className=''>
                This support is delivered utilising an expert or specialist approach, necessitated by specific high complex needs or high-level risks in a participant’s situation. Our Specialist support coordinator will support the participant to manage challenges in their support environment which may include health, education and Capacity building.We work with our participants,in collaboration with other providers and professionals to develop a robust plan that meet set goals both on short and long term bases. We follow through this process with our participants
                via support monitoring and assessments till desired results are achieved.
              </span>

            </div>

          </div>

        </div>
        <div className='py-3'>
          <span className=''>
            Our Specialist Support Coordinators negotiate appropriate support solutions with multiple stakeholders and seek to achieve well-coordinated plan implementation. We also provide assistance to stakeholders with resolving points of crisis for participants, assist to
            ensure a consistent delivery of service and access to relevant supports during crisis situations.
          </span>
          <span>
            Our Specialist Support Coordination is generally delivered through an intensive and time limited period necessitated by the participant’s immediate and significant barriers to plan implementation. Depending on individual circumstances, our Specialist Support Coordinator may also design a complex service plan that focuses on how all the stakeholders in a participant’s life will interact to resolve barriers and promote appropriate plan implementation. Once developed, our Specialist Support Coordinator will continue to monitor the plan,
            which may be maintained by the participant’s support workers or other care supports.
          </span>
        </div>
        <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
          <span className='text-black-700 text-xl font-bold uppercase'>Our Specialist Support Coordination Services includes, but is not limited to</span>
          <ul className='list-disc'>
            <li>Understand the participant’s plan;</li>
            <li>Connect with Supports and Services;</li>
            <li>Design Support Approaches;</li>
            <li>Establish Supports;</li>
            <li>Coach, Refine, Reflect;</li>
            <li>Targeted Support Coordination;</li>
            <li>Crisis: Planning, Prevention, Mitigation and Action;</li>
            <li>Address Complex Barriers;</li>
            <li>Design Complex Service Plan;</li>
            <li>Build Capacity and Resilience; and</li>
            <li>Report to the NDIA.</li>
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
