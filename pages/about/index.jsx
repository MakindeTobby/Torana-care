import styles from '@/styles/About.module.css'
import { FaPlay } from 'react-icons/fa';

const About = () => {
    return (
        <>

            <div className={styles.header + ' w-full mt-2'}  >
                <div className=' gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-5xl text-left'>
                        ABOUT US
                    </h1>

                </div>

            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto mt-5 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8  lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">

                        <div className='col-span-6 flex flex-col gap-8'>
                            <span className='text-red-700 text-xl font-bold uppercase'>About Torana Care Australia</span>
                            <h1 className='lg:text-4xl md:text-4xl sm:text-4xl'>

                                We Strengthen The <span className='font-extrabold'>“WILL” Of Our Participants... </span>
                            </h1>
                            <span className=''>We Understand The Needs Of Persons Living With Disability From Medical, Technological And Social Standpoints.
                                We Believe That, Any Human Being Is As Strong As Their "WILL" To Achieve Set Goals, Irrespective Of Their Disability.
                                Just Like The Saying, “Where There Is A Will, There Is A Way”, We Strengthen The “WILL” Of Our Participants, To Make “WAY” For Them To Be Whatever They Want To Be, With Our Help.
                                Our Support And Services Aim To Bridge The Gap Between Our Participant’s “Will” And The “Way” To Their Goals.</span>

                        </div>
                        <div className='col-span-6'>
                            <img src='/about/hands.webp' />
                        </div>

                    </div>

                </div>
            </div>

            <div className=" w-full bg-slate-100 flex justify-center mt-3 py-10" >
                <div className='flex flex-col gap-4 pt-10 justify-center items-center w-full'>
                    <span className='text-red-700 text-center text-xl'>
                        "...We Are Passionate About Supporting People
                        <span className='font-bold'> Living With A Disability To Live Their Best Lives..."</span>
                    </span>



                    <button type="button"

                        className=" text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                        Get started today</button>

                </div>

            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto mt-5 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/about/mission.png' width={'50%'} />
                        </div>
                        <div className='col-span-6 flex flex-col gap-4'>
                            <span className='text-red-700 text-xl font-bold uppercase'>OUR Mission</span>
                            <span className=''>
                                Helping people with disabilities live their lives beyond limits by inspiring them effectively,
                                employing best communication methods, pushing them beyond the comfort zones to achieving extraordinary results.
                            </span>
                            <span className=''>
                                We build the capacity of disabled people, to enable them interact effectively with their environment by applying an individualised
                                and holistic care approach that helps determine the person’s strength, weakness and abilities.
                            </span>
                            <span className=''>
                                We live to maximise the potential of persons living with disability, by building on their strengths,
                                applying, modern technology and principles for improved results.
                            </span>

                        </div>


                    </div>

                </div>
            </div>
            <div className="max-w-screen-xl px-4 py-8 mx-auto mt-5 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">

                        <div className='col-span-6 flex flex-col gap-4'>
                            <span className='text-red-700 text-xl font-bold uppercase'>our vision</span>
                            <span className=''>
                                To create a world where people living with disability can compete with everyone else in all spheres of life
                            </span>
                            <span className=''>
                                To create equal opportunity for people living with disability,
                                irrespective of state of health, cultural diversity and beliefs.
                            </span>


                        </div>
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/about/vision.png' width={'50%'} />
                        </div>

                    </div>

                </div>
            </div>
            <div className={styles.header + ' w-full flex justify-center mt-5 bg-fixed'}  >
                <div className='flex flex-col gap-4 pt-10 justify-center items-center w-[60%]'>
                    <div className="flex justify-center items-center">
                        <button className="w-24 h-24 rounded-full flex justify-center items-center bg-red-700 focus:outline-none">
                            <FaPlay className='w-8 h-8 text-white text-center' /></button>
                    </div>

                    <h1 className='text-white text-3xl text-center font-bold'>VIDEO ABOUT US


                    </h1>


                </div>

            </div>
        </>
    );
}

export default About;