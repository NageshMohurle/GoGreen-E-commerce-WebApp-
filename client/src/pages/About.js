import React from 'react'
import Layout from '../component/Layout/Layout'
import { hidden } from 'colors'

const About = () => {
    return (
        <Layout title={'AboutPage-GoGreenApp'}>
            <h1 className='text-center' style={{ marginTop: '100px' }}>About</h1>
            <div className='ms-2 me-2' style={{ height: "600px" }}>
                <dl className='me-5 ms-5'>
                    <dt> <h2>Welcome to GoGreen - Your Trusted Online Plant Source</h2></dt>
                    <dd>At GoGreen, we are passionate about connecting plant enthusiasts with the highest quality plants from around the world. Whether you're a seasoned gardener or just starting your green journey, we are here to provide you with a wide selection of beautiful and healthy plants, delivered right to your doorstep.</dd>

                    <dt><h2>Our Mission</h2></dt>

                    <dd>Our mission is to make the joy of gardening accessible to everyone, regardless of their location or level of expertise. We believe that plants have the power to enhance our lives, create beautiful spaces, and contribute to a healthier planet. We are dedicated to sourcing and delivering top-notch plants that inspire and delight our customers.</dd>
                    <dt><h2>A World of Plants at Your Fingertips</h2></dt>

                    <dd> With our user-friendly online platform, you can explore an extensive range of plant species, varieties, and sizes. From vibrant flowering plants to elegant foliage, we curate our collection to offer an exciting array of options for every taste and style. Whether you're looking for indoor plants to freshen up your home or outdoor plants to transform your garden, GoGreen has got you covered.</dd>
                    <dt><h2>Quality and Sustainability</h2></dt>
                    <dd>We understand that the quality of plants is crucial to their success in your care. That's why we work closely with trusted growers and suppliers who share our commitment to excellence. Our plants undergo rigorous quality checks to ensure they are healthy, well-rooted, and ready to thrive in their new environment.</dd>

                    <dd>In addition to quality, we are passionate about sustainability. We strive to minimize our environmental footprint by using eco-friendly packaging materials and supporting sustainable growing practices. We believe in the importance of nurturing nature while enjoying its beauty.</dd>
                    <dt><h2>Start Your Green Journey Today</h2></dt>
                    <dd>Thank you for choosing GoGreen as your trusted source for online plant buying. We are excited to be part of your green journey and look forward to helping you create a thriving oasis of plants in your home or garden. Start exploring our collection and bring the beauty of nature to your doorstep today!</dd>

                </dl>
            </div>
        </Layout>
    )
}

export default About