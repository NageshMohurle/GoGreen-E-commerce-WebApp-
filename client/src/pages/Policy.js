import React from 'react'
import Layout from '../component/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={'GoGreenApp-Policy'}>
      <h1 className='text-center' style={{marginTop:'100px'}}>Privacy Policy</h1>
      <div className='me-5 ms-5'>
        <p>
          At GoGreen we prioritize the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit or make use of our website. By accessing or using our services, you consent to the practices described in this policy.
        </p>

        <dl>
          <dt>Information We Collect</dt>
          <dd>When you visit our website, we may collect certain information to enhance your browsing experience and provide personalized services. This information may include:</dd>
          <dd>
            <ul>
              <li>Personal information: We may collect your name, email address, shipping address, and other relevant details when you create an account or place an order.</li>
              <li>   Usage information: We gather data on how you interact with our website, including your IP address, browser type, device information, and pages visited.</li>
              <li>Cookies: We utilize cookies and similar tracking technologies to enhance your browsing experience, analyze trends, and gather information about user behavior.</li>
            </ul>
          </dd>
          <dt>How We Use Your Information</dt>
          <dd>We use the collected information for the following purposes:</dd>
          <dd><ul>
            <li> Order processing and fulfillment: We use your personal information to process and deliver your orders, provide customer support, and communicate important updates.</li>
            <li>Personalization: We may utilize your information to personalize your experience on our website, recommend products, and provide targeted marketing.</li>
            <li>Analytics and improvement: We analyze user behavior and feedback to improve our website, products, and services, and to understand trends and preferences.</li>
            <li>Marketing and communication: With your consent, we may send you promotional materials, newsletters, or other communications related to our products and services.
              Data Security and Sharing</li>
            <li>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We do not sell, trade, or rent your personal information to third parties without your consent, except in cases where it is necessary to fulfill your requests or comply with legal obligations.</li>
          </ul></dd>
          <dt>Your Rights and Choices</dt>
          <dd>You have the right to access, update, correct, or delete your personal information. You may also opt-out of receiving marketing communications from us at any time. Please contact us using the information provided below to exercise these rights or to address any privacy concerns you may have.</dd>
          <dt>Updates to the Privacy Policy</dt>
          <dd>We reserve the right to update or modify this Privacy Policy from time to time. We will notify you of any material changes by posting the revised policy on our website. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.</dd>
          <dt>Contact Us</dt>
          <dd>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at the page of contact us.</dd>
        </dl>

      </div>
    </Layout>
  )
}

export default Policy