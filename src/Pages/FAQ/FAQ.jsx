import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <h1>Here is Your FAQ.</h1>
            <Accordion>
                <Accordion.Item className='border border-dark   mt-3' eventKey="0">
                    <Accordion.Header>
                        What is the Learning HUB ?
                    </Accordion.Header>
                    <Accordion.Body>
                        The Learning HUB  is one of the best Skills learning Academy in your country.Million students
                        Learning something new from here. Students take courses primarily to improve job-related skills.  Some courses generate credit toward technical certification.Learning HUB Academy has made a special effort to attract corporate trainers seeking to create coursework for employees of their company</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='border border-dark   mt-3' eventKey="1">
                    <Accordion.Header>What is the Ethical Hacking ?</Accordion.Header>
                    <Accordion.Body>
                        Ethical Hacking provides basic and advanced concepts of Ethical Hacking. Our Ethical Hacking tutorial is developed for beginners and professionals.
                        <br />
                        It has been a very popular career choice for students of all backgrounds(non-CS students can also learn it easily and be equally good as CS students, or even better than them). Since ethical hacking is about compromising the systems, it assumes familiarity with how those systems actually work.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='border border-dark   mt-3' eventKey="2">
                    <Accordion.Header>
                        How much popular The Learning HUB ?</Accordion.Header>
                    <Accordion.Body>
                        The Learning HUB  had over 20 million learners supported by 56,000 instructors on its platform as of May 2021. The online learning and teaching marketplace hosts about 115
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='border border-dark   mt-3' eventKey="3">
                    <Accordion.Header>
                        What is the best seller course of The Learning HUB ?</Accordion.Header>
                    <Accordion.Body>
                        <p>FullStack Web Development is the best selling course of  The Learning HUB . The author of this course are very famous for this course.
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='border border-dark   mt-3' eventKey="4">
                    <Accordion.Header> What dose Provides Skillshare Academy?
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>Skillshare Academy are Provides various course in reasonable price. The course of this academy are top class. Million people are very interested our courses.</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='border border-dark   mt-3' eventKey="5">
                    <Accordion.Header>
                        What is an FAQ page ?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Frequently Asked Questions (FAQ) pages contain a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;