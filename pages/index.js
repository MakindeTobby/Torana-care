import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, Carousel } from 'flowbite-react'
import { FaPlay } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { ref: myRef, inView: isActive, } = useInView();
  const { ref: caro, inView: activeCaro, } = useInView();
  const { ref: caro1, inView: activeCaro1, } = useInView();
  const { ref: caro2, inView: activeCaro2, } = useInView();
  const { ref: caro3, inView: activeCaro3, } = useInView();
  // const myRef = useRef(null)
  // const [isActive, setIsActive] = useState()
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setIsActive(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)
  // }, [])
  return (
    <>
      <div className="h-[70vh] sm:h-[50vh] xl:h-[70vh] 2xl:h-96 rounded-none mb-5">
        <Carousel rounded='false'>
          {/* slide 1 */}
          <div className="flex lg:h-[70vh] md:h-[50vh] sm:h-[50vh] xl:h-[70vh] items-center justify-center">
            <div className={styles.caro + ' grid-cols-2 flex justify-start pl-20  pt-40  w-full'}>
              <div className={`${activeCaro ? (styles.slide) : ''} lg:w-[36%] sm:w-full flex flex-col gap-5`} ref={caro}>
                <h1 className='lg:text-4xl md:text-[2.2rem] sm:[2.2rem] '>
                  We provide special disability suppport service
                  <span className='font-bold'> supervised by a specialist GP 24/7</span>

                </h1>
                <span>
                  <button type="button"

                    className="lg:w-[40%] md:w-[70%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                    Work with us</button>
                </span>
              </div>

            </div>
          </div>
          {/* slide 2 */}
          <div className="flex lg:h-[70vh] md:h-[50vh] sm:h-[50vh] xl:h-[70vh] items-center justify-center">
            <div className={styles.caro + '  grid-cols-2 flex justify-start pl-20  pt-40  w-full'}>
              <div className={`${activeCaro1 ? (styles.slide) : ''} lg:w-[36%] sm:w-full flex flex-col gap-5`} ref={caro1}>
                <h1 className='lg:text-4xl md:text-[2.2rem] sm:[2.2rem]  '>
                  Our support and services are tailored
                  <span className='font-bold'> to meet your needs</span>

                </h1>
                <span>
                  <button type="button"

                    className="lg:w-[40%] md:w-[70%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                    Work with us</button>
                </span>
              </div>

            </div>
          </div>
          {/* slide 3*/}
          <div className="flex lg:h-[70vh] md:h-[50vh] sm:h-[50vh] xl:h-[70vh] items-center justify-center">
            <div className={styles.caro + '  grid-cols-2 flex justify-start pl-20  pt-40  w-full'}>
              <div className={`${activeCaro2 ? (styles.slide) : ''} lg:w-[36%] sm:w-full flex flex-col gap-5`} ref={caro2}>
                <h1 className='lg:text-4xl md:text-[2.2rem] sm:[2.2rem]  '>
                  We are ready to go on your
                  <span className='font-bold'> life's journey with you</span>

                </h1>
                <span>
                  <button type="button"

                    className="lg:w-[40%] md:w-[70%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                    Work with us</button>
                </span>
              </div>

            </div>
          </div>
          {/* slide 4 */}
          <div className="flex h-full items-center justify-center">
            <div className={styles.caro + '  grid-cols-2 flex justify-start pl-20  pt-40  w-full'}>
              <div className={`${activeCaro3 ? (styles.slide) : ''} lg:w-[36%] sm:w-full flex flex-col gap-5`} ref={caro3}>
                <h1 className='lg:text-4xl md:text-[2.2rem] sm:[2.2rem]  '>
                  Let's make your life
                  <span className='font-bold'> easier</span>

                </h1>
                <span>
                  <button type="button"

                    className="lg:w-[40%] md:w-[70%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                    Work with us</button>
                </span>
              </div>

            </div>
          </div>
        </Carousel>
      </div>
      <div className=" w-full bg-slate-100 flex justify-center mt-5 py-10" >
        <div className='flex flex-col gap-4 pt-10 justify-center items-center w-full'>
          <span className='text-red-700 text-xl font-bold text-center'>We Believe Every Participant Should Feel Safe And Comfortable</span>


          <h1 className='text-4xl text-center'>
            Why Choose Our Service?
          </h1>
          <span className='text-center'>Our Support and Services are provided by a Team of passionate and qualified health professional, led by a Specialist GP 24/7.</span>
          <button type="button"

            className=" text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
            Learn More</button>

        </div>

      </div>

      {/* <div className="max-w-sm">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/About-torana-icon1.png"
          imgSi

        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      </div> */}

      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">

          <div className="grid gap-8  lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">
            <div className='col-span-6'>
              <img src='/dimitri.jpeg' />
            </div>

            <div className={`${isActive ? (styles.slide) : ''} col-span-6 flex flex-col gap-10 `} ref={myRef}>
              <span className='text-red-700 text-xl font-bold'>What is our mission ?</span>
              <h1 className='lg:text-4xl md:text-3xl sm:text-3xl'>
                Building The Capacity Of Persons Living With A Disability, <span className='font-extrabold'>To Live Their Lives Beyond Limit.</span>
              </h1>
              <span className=''>We employ an individualised and holistic care approach
                which helps us determine our participant's strength, weakness and abilities.</span>
              <div className='flex lg:flex-row sm:flex-col md:flex-col gap-4'>
                <button type="button"

                  className=" lg:w-[40%] md:w-full sm:w-full text-gray-700 font-extrabold  px-5 py-4">
                  READ MORE</button>
                <button type="button"

                  className="lg:w-[40%] md:w-full sm:w-full text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                  WE ARE HERE TO HELP</button></div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">

          <div className="grid gap-8  lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">

            <div className='col-span-6 flex flex-col gap-10 pt-20'>
              <span className='text-red-700 text-xl font-bold'>LET US WORK TOGETHER</span>
              <h1 className='lg:text-4xl md:text-3xl sm:text-3xl'>

                WE ARE READY TO GO ON YOUR  <span className='font-extrabold'>LIFE'S JOURNEY WITH YOU</span>
              </h1>
              <span className=''>Get in touch with us today, we reply within 24 hours.</span>
              <span className=''>You can ring us on <span className='font-bold'>+61 (0) 49932 2078</span> we are available 24/7.</span>
              <button type="button"

                className="lg:w-[40%] md:w-full sm:w-full text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
                CONTACT US</button>
            </div>
            <div className='col-span-6'>
              <img src='/tss1.png' />
            </div>
          </div>

        </div>
      </div>


      <div className={styles.down + ' w-full flex justify-center mt-5 bg-fixed lg:h-[70vh] md-h-[50vh] sm:w-[50vh]'}  >
        <div className='flex flex-col gap-4 pt-10 justify-center items-center lg:w-[60%] md:w-full sm:w-full'>
          <div className="flex justify-center items-center">
            <button className="w-24 h-24 rounded-full flex justify-center items-center bg-red-700 focus:outline-none">
              <FaPlay className='w-8 h-8 text-white text-center' /></button>
          </div>

          <h1 className='text-white lg:text-4xl md:text-3xl sm:text-3xl text-center'>Helping you live your life beyond limits is what we stand for.

            <span className='font-bold'>
              <br />
              <br />

              Think it!!! YES, we can do it!!!</span>
          </h1>
          <button type="button"

            className="llg:w-[40%] md:w-[60%] sm:w-[100%] text-white bg-red-700 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded  px-5 py-4">
            GET IN TOUCH WITH US TODAY</button>

        </div>

      </div>
    </>
  )
}
