import styles from '@/styles/About.module.css'
const Careers = () => {
    return (
        <>

            <div className={styles.header + ' w-full mt-2'}  >
                <div className=' gap-4 pt-20 lg:pl-20 xl:pl-32 md:pl-20 sm:pl-20 lg:justify-start md:justify-center sm:justify-center items-center'>


                    <h1 className='text-white font-bold text-5xl text-left'>
                        CAREERS
                    </h1>

                </div>

            </div>
            <div className="max-w-screen-xl px-4  mx-auto sm:px-6  lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">

                    <div className="grid gap-8 mt-8 lg:mt-0 lg:grid-cols-12 lg:gap-y-16 md:grid-cols-6 sm:grid-cols-6">

                        <div className='col-span-6 flex flex-col justify-center items-center pt-20'>
                            <h1 className='text-5xl text-center'>
                                WE ARE CURRENTLY<span className='font-bold'> HIRING</span>
                            </h1>


                        </div>
                        <div className='col-span-6 flex justify-center items-center'>
                            <img src='/job alert.jpg' width={'80%'} />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Careers;