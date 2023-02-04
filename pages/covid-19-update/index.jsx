import React from 'react'
import styles from '@/styles/Service.module.css'
// import styles from './styles.module.css'
import Link from 'next/link'

export default function Covid() {
    return (
        <>

            <div className={styles.down + ' w-full mt-2'}  >
                <div className='gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-4xl lg:text-left md:text-center sm:text-center animate__animated animate__fadeInUp'>
                        COVID 19 UPDATE
                    </h1>

                </div>

            </div>

            <div className="max-w-screen-xl px-4 pt-16 mx-auto sm:px-6 lg:px-8 animate__animated animate__fadeInUp">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/covid/covid-19.jpg' width={'100%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4 '>
                            <span className=' text-xl font-extrabold uppercase'>Message from the Chairman</span>
                            <span className=''>
                                The safety of all participants and workers is our organisation’s top priority. We have an obligation to respond to pandemics in a timely and effective manner.Pandemics are high-risk situations that develop quickly. They have the potential to severely impact the health of workers and participants. As work within the disability sector often requires close contact between workers and participants, putting in place social distancing and social isolation measures may also impact our ability to provide services.
                                Therefore, we will ensure that our response to a pandemic is:
                            </span>


                        </div>

                    </div>

                </div>


                <div className='col-span-6 flex flex-col gap-4 md:px-0 sm:px-3 py-4'>
                    <ul className='list-disc'>

                        <li>pre-planned</li>
                        <li>risk-managed</li>
                        <li>flexible, and</li>
                        <li>person-centred</li>
                    </ul>
                    <span className=''>
                        <b> Participant vulnerability </b> We understand that people with disability are more vulnerable to developing illness during a pandemic because they are more likely to:
                    </span>



                    require the use of medical equipment (e.g. urinary catheters, tracheostomies).

                    <ul className='list-disc'>
                        <li>have complex pre-existing conditions including multiple morbidities</li>
                        <li>have wounds</li>
                        <li>have a compromised immune system (e.g. due to pre-existing conditions or medications)</li>
                        <li>require the use of medical equipment (e.g. urinary catheters, tracheostomies).</li>

                    </ul>

                    <span className=''>
                        We will manage risks for all our participants and take into account each participant’s wishes, goals and situation.
                    </span>
                    <span className='font-extrabold'>
                        Preparedness and planning
                    </span>
                    <span className=''>
                        As a Support provider, it is our responsibility and obligation to meet the NDIS Code of Conduct and NDIS Practice Standards in regards to the supports and services we provide. Irrespective of the risks associated with our service delivery, in a pandemic, we have adequately identified these risks and we do have a comprehensive
                        response plan to respond quickly and efficiently. Our pandemic management plan identifies:
                    </span>

                    <ul className='list-disc'>
                        <li>all the key actions we need to take to prepare for a pandemic</li>
                        <li>our plan for ensuring business continuity</li>
                        <li>the names, contact details and roles of people required to ensure business continuity</li>
                        <li>action plans to keep our participants and staff safe</li>
                        <li>action plan to keep participants that are most at risk safe</li>
                        <li>how we will activate our pandemic plan</li>
                        <li>We will review our pandemic management plan annually (at a minimum) to ensure it is current</li>

                    </ul>

                    <span className='font-bold'>
                        Basic prevention measures during a pandemic
                    </span>
                    <span className=''>
                        There are basic hygiene and cleaning measures that we take at all times. These are recorded in detail in our infection
                        control and waste management policies. Some basic measures that we take include:
                    </span>






                    <ul className='list-disc'>
                        <li>washing hands frequently and at relevant times</li>
                        <li>maintaining respiratory hygiene at all times</li>
                        <li>ensuring all areas are cleaned with appropriate tools and cleaning agents</li>

                        <li>managing all forms of waste in a safe and suitable way</li>
                        <li>wearing appropriate PPE when required.</li>


                    </ul>
                    <span>
                        During a pandemic we recognise that it is important to maintain a high level of hygiene and
                        continue this when social distancing and/or isolation is required.
                    </span>
                    <span className='font-extrabold'>
                        COVID-19 PROTOCOLS
                    </span>
                    <span className='font-bold'>
                        Social distancing
                    </span>
                    <span>
                        Social distancing involves restrictions on movement that may need to be enforced to prevent/slow the spread of an illness. To be effective,
                        it must apply to all workers and participants. Social distancing typically involves:
                    </span>
                    <ul className='list-disc'>
                        <li>being at least 1.5 metres apart from others at all times</li>
                        <li>limiting unnecessary touching (e.g. handshakes and hugging)</li>
                        <li>if possible, limiting the number of workers on shift at one time, while still maintaining a high level of support.</li>
                        <li>limiting face-to-face meetings where possible (i.e. conducting most meetings over the phone instead)</li>
                        <li>limiting food handling and sharing</li>
                        <li>only going out for essential reasons such as:</li>
                        <li>attending work/school</li>
                        <li>purchasing food and medicine</li>
                        <li>medical appointments</li>
                        <li>personal emergencies</li>
                        <li>avoiding all non-essential national and international travel</li>
                        <li>avoiding mass gatherings</li>
                        <li>working/studying from home if practicable.</li>

                    </ul>
                    <span className='font-bold'>
                        Isolation
                    </span>
                    <span>
                        We may need to have a worker or participant in isolation if they:
                    </span>

                    <ul className='list-disc'>
                        <li>have been tested positive for a pandemic-level illness</li>
                        <li>are experiencing symptoms of a pandemic-level illness</li>
                        <li>have recently been in contact with someone that has tested positive for a pandemic-level illness</li>
                        <li>have recently travelled to a country experiencing a large-scale outbreak of a pandemic-level illness.</li>
                    </ul>

                    <span>
                        Home isolation typically means that the person being isolated must partake in relevant risk-minimisation measures, including:
                    </span>
                    <ul className='list-disc'>
                        <li>limiting their movements to their home and garden/backyard</li>
                        <li>observing all appropriate hygiene measures</li>
                        <li>practicing social distancing (as outlined above) if there are other people present in the house</li>
                        <li>moving quickly through or avoiding common areas</li>
                        <li>wearing masks and other necessary PPE</li>
                        <li>using a separate bathroom, if available</li>
                        <li>using separate cutlery, linens and towels</li>
                        <li>avoiding food handling and sharing.</li>
                    </ul>
                    <span>
                        We will support workers in isolation by offering opportunities to work from home or making appropriate leave arrangements. In addition, we will provide workers with counselling and other resources as required. Although necessary, isolation can be a stressful
                        experience for participants as well. Therefore, we will ensure that participants in isolation:
                    </span>
                    <ul className='list-disc'>
                        <li>are still able to receive essential supports and services</li>
                        <li>are isolated in a comfortable, clean and well-ventilated environment</li>
                        <li>keep in touch with their support network via various telecommunication methods</li>
                        <li>learn about and discuss their experience</li>
                        <li>keep normal daily routines where possible (e.g. eating, sleeping and exercise)</li>
                        <li>partake in home-based activities they enjoy.</li>
                    </ul>
                    <span className="font-bold">
                        Restrictive practices
                    </span>
                    <span>
                        Restrictive practices are used in the event that a participant responds to a situation with a behaviour of concern. These behaviours often stem from triggering factors such as a maladaptive environment, fear or in response to a real or perceived threat. In the event of a pandemic outbreak, these factors may be heightened, thus it is our responsibility to ensure we provide comprehensive and suitable support to inform the participant of what is occurring and why certain restrictions are in place. If a restrictive practice is utilised, we will follow all standard debriefing,
                        reporting and legislative procedures outlined in the restrictive practice policy.
                    </span>
                    <span>
                        Whilst home isolation for therapeutic reasons is not considered a restrictive practice, it is important that such requirements during these events are discussed with the participant and their support network. This applies to all participants,
                        not only those that have restrictive practices incorporated in the positive behaviour support plan.
                    </span>
                    <span className="font-bold">
                        Incidents and complaints
                    </span>
                    <span>
                        We will address any complaints or incidents that arise during (or as a result of) a pandemic situation. Where possible, we will always follow the same procedures that are specified in relevant policies, processes and legislation.
                        We will also make all reasonable attempts fast-track incident and complaint reports that arise as a result of a pandemic as reports of this nature are likely to be urgent and time-sensitive.
                    </span>
                    <span className="font-bold">
                        Privacy and confidentiality
                    </span>
                    <span>
                        We are committed to maintaining privacy and confidentiality in accordance with all relevant policies and legislation. Under usual circumstances, the participant can decide whether or not they reveal health information to us.The only time when we will request information about a health condition is if it is a notifiable disease under the National Notifiable Disease Surveillance System.
                        This may occur in the event of a pandemic. We will request this information in order to:
                    </span>
                    <ul className="list-disc">
                        <li>give the person the support they need</li>
                        <li>ensure the safety of all people within our organisation, including participants, workers and visitors</li>
                        <li>put risk-minimisation measures in place.</li>
                    </ul>

                    <span className='font-bold'>
                        Bullying, harassment or discrimination
                    </span>
                    <span>

                        We do not tolerate bullying, harassment or discrimination for any reason. This includes bullying, harassment or discrimination on the basis of disclosed health information. Any such instance will be subject to Investigation and disciplinary actions.
                        Incidents would also be addressed in accordance with our incident management policies/processes.
                    </span>
                    <span className="font-bold">
                        Communication strategies
                    </span>
                    <span>
                        As a pandemic situation is likely to develop very quickly, we understand the importance of consistent communication across the entire organisation. To do this, we will implement the following strategies as required:
                    </span>
                    <ul className="list-disc">
                        <li>utilise appropriate telecommunications (email, phone, online chat etc.) to:</li>
                        <li>share important operational updates across the organisation</li>
                        <li>make working from home arrangements</li>
                        <li>conduct meetings and appointments</li>
                        <li>provide relevant information to participants in a format they are most likely to understand, this may include the use of communication aids such as:</li>
                        <li>easy read documents</li>
                        <li>choice boards</li>
                        <li>communication apps</li>
                        <li>alphabet boards.</li>
                        <li>record key events and decisions in a way that allows workers and participants to reference them in in the future.</li>
                    </ul>
                    <span className="font-bold">
                        Definitions
                    </span>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Term
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        notifiable condition
                                    </td>
                                    <td className="px-6 py-4">
                                        A health condition that must be declared to applicable
                                        personnel under the provisions made by the National Notifiable Disease Surveillance System.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        pandemic
                                    </td>
                                    <td className="px-6 py-4">
                                        An outbreak of an infectious disease that affects a significant portion of the
                                        population across a large geographic area.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        social distancing
                                    </td>
                                    <td className="px-6 py-4">
                                        A set of actions that are designed to increase distance
                                        between individuals in order to slow or prevent the spread of an infectious disease.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-6 py-4">
                                        social isolation
                                    </td>
                                    <td className="px-6 py-4">
                                        The act of completely removing all interaction and contact with anyone outside of your household and
                                        remaining within the confines of your residence for a specific period of time.
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <span>
                        We will continue to provide updates to our valued participants and their
                        families as we work towards providing the safest and the highest quality of support and services.
                    </span>
                    <span>
                        Thank you
                    </span>
                    <span className='font-extrabold'>
                        Dr. Michael Anefu Unobe
                    </span>
                    <span className="font-bold">
                        MBBS,Fellow(T&Rs)Path, FRACGP
                    </span>
                </div>

            </div>

        </>
    )
}
