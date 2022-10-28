import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="">
            <footer
                className="text-center text-white"
                // style={{ backgroundColor: "#3f51b5" }}
                style={{ backgroundColor: "black" }}
            >
                <div className="">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link href="#!" className="text-white">
                                        About us
                                    </Link>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link href="#!" className="text-white">
                                        Success
                                    </Link>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link href="#!" className="text-white">
                                        Awards
                                    </Link>
                                </h6>
                            </div>


                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link href="#!" className="text-white">
                                        Help
                                    </Link>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <Link href="#!" className="text-white">
                                        Contact
                                    </Link>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <section>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">

                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-3">
                        <Link className="text-white h3 me-4">
                            <FaFacebook></FaFacebook>
                        </Link>

                        <Link className="text-white h3 me-4">
                            <FaGoogle />
                        </Link>
                        <Link className="text-white h3 me-4">
                            <FaGithub />
                        </Link>
                        <Link className="text-white h3 me-4">
                            <FaInstagram />
                        </Link>
                        <Link className="text-white h3 me-4">
                            <FaLinkedin></FaLinkedin>
                        </Link>
                        <Link className="text-white h3 me-4">
                            <FaTwitter />

                        </Link>

                    </section>
                </div>

                <div
                    className="text-center p-5"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2022 Copyright: All rights reserved

                </div>
            </footer>
        </div>
    )
};

export default Footer;