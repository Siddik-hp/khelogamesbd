import React from 'react'
import Card from '../Card/Card'
import Heading from '../Heading/Heading'

const CardComponents = () => {
    return (
        <div>
            <section className=' px-10 pb-10 content_box'>
                <Heading title="It's Easy to Get Started. Game On." desc="Khelogames helps you earn money while you play, create and share." />
                <div className='grid gap-6 lg:grid-cols-4   mt-10'>
                    <Card image="assets/image/icon/one.png" text="Sign up and create a profile. Be crazy. Be cool" />
                    <Card image="assets/image/icon/two.png" text="Curate exclusive offerings. Keep the surprises coming. " />
                    <Card image="assets/image/icon/one.png" text="SBuild a thriving community. Turn fans into superfans." />
                    <Card image="assets/image/icon/one.png" text="Grow income doing what you love. Go for glory. " />
                </div>

            </section>
        </div>
    )
}

export default CardComponents