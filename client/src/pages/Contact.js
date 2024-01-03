import React from "react";
import Layout from "../component/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import '../style/contactus.css'

const Contact = () => {
    return (
        <Layout title={'GoGreenApp-Contact Page'}>
            {/* <div className="contact-top">
                <img
                    src="/images/contactus.webp"
                    alt="contactus"
                    style={{ width: "100%" }}
                    height={'400px'}
                    className="contact-img"
                />
                <h2 className="contactus-heading">Questions? Comments? Let your customers get in touch with you by filling out the email form below.</h2>

            </div> */}
            <div className="row contactUs justify-content-center align-items-center" style={{marginTop:'100px'}}>
                {/* <div className="col-md-6 ">
                    <img
                        src="/images/contactus.webp"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div> */}
                <div className="col-md-4">
                    <h1 className="bg-success p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        Any query and info about product feel free to call anytime we 24X7
                        avialible
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : gogreen@gmail.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-0000-0000 (toll free)
                    </p>
                </div>
            </div>
            <img src="../img/carousel4.webp" alt="" />
        </Layout>
    );
};

export default Contact;