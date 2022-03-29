import React from 'react'

const ImageCard = () => {
    return (
        <div>
            {/* First Card */}
            <div className='flex justify-center  lg:flex-row flex-col gap-y-16 items-center px-4 py-32 bg-neutral-900 text-white'>
                <div className='lg:px-14 '>
                    <h1 className='lg:text-5xl text-4xl font-bold' data-aos="fade-right"
                        data-aos-duration="500">Access to 1000s of tournaments happening daily</h1>
                    <h1 className='text-gray-700 lg:text-2xl text-xl my-6' data-aos="fade-right"
                        data-aos-delay="600"
                        data-aos-duration="500">Automate results, share brackets, play as a team with our one-of-a-kind tournaments! Enjoy games like Free Fire, PUBG, Brawl Stars, COD: M, LoL: Wild Rift with more added regularly. </h1>
                    <h1 className='pl-4 rounded-md border-l-4 b border-red-600 h-20 lg:text-2xl text-xl' data-aos="fade-right"
                        data-aos-delay="800"
                        data-aos-duration="500">The best part? Win in-app and cash rewards for select tournaments. Play hard, win hard is our motto! </h1>
                </div>
                <div>
                    <figure>
                        <img className='lg:w-screen w-2/3 mx-auto' src="assets/image/features/card.jpg" alt="" data-aos="fade-left"
                            data-aos-duration="1000" />
                    </figure>
                </div>
            </div>
            {/* Scound card */}
            <div className='flex justify-center lg:flex-row flex-col gap-y-16 items-center px-4 py-32 bg-gray-800 text-white'>
                <div>
                    <figure>
                        <img className='lg:w-screen w-2/3 mx-auto' src="assets/image/features/card2.jpg" alt="not found" data-aos="fade-right"
                            data-aos-duration="1000" />
                    </figure>
                </div>
                <div className='lg:px-14 '>
                    <h1 className='lg:text-5xl text-4xl font-bold' data-aos="fade-left"
                        data-aos-duration="500">Join diverse communities and show them you care</h1>
                    <h1 className='text-gray-700 lg:text-2xl text-xl my-6' data-aos="fade-left"
                        data-aos-delay="600"
                        data-aos-duration="500"> Learn from the best, be apart from the rest! Join or create your own guilds of like-minded gamers, challenge other guilds to War, chat with each other, access guild-specific communities. </h1>
                    <h1 className='pl-4 rounded-md border-l-4 b border-red-600 h-20 lg:text-2xl text-xl' data-aos="fade-left"
                        data-aos-delay="800"
                        data-aos-duration="500"> Support your favorite Guilds, get a Fan Pass* and unlock exclusive perks! </h1>
                </div>
            </div>
            {/* Third Card */}
            <div className='flex justify-center  lg:flex-row flex-col gap-y-16 items-center px-4 py-32 bg-neutral-900 text-white'>
                <div className='lg:px-14  '>
                    <h1 className='lg:text-5xl text-4xl font-bold' data-aos="fade-right"
                        data-aos-duration="500">Binge livestreams & video shorts, all in one place</h1>
                    <h1 className='text-gray-700 lg:text-2xl text-xl my-6'
                        data-aos="fade-right"
                        data-aos-delay="600"
                        data-aos-duration="500">Binge live-streams to learn from the pros and watch them show off their skills. Show your love for your favorite streamer with interactive mini-games and chat boxes. </h1>
                    <h1 className='pl-4 rounded-md border-l-4 b border-red-600 h-20 lg:text-2xl text-xl'
                        data-aos-delay="800"
                        data-aos="fade-right"
                        data-aos-duration="500">Addictive video shorts - from comedy, to skill to drama and beyond. Like, share and comment too! </h1>
                </div>
                <div>
                    <figure>
                        <img className='lg:w-screen w-2/3 mx-auto' src="assets/image/features/card3.jpg" alt="Not found" data-aos="fade-left"
                            data-aos-duration="1000" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default ImageCard