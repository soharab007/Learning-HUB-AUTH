import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


const Blog = () => {
    return (
        <div>
            <h1 className='text-dark'>Here is Our Blogs.</h1>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <b>What is cors ?</b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.                   </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1"    >
                    <Accordion.Header>
                        <b>Why I am using firebase ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Google Analytics for Firebase allows you to track your users’ journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices. According to Google, Firebase provides unlimited free reporting on up to 500 distinct events. Just like the regular Google Analytics, Google Analytics for Firebase automatically tracks certain key events and user parameters straight out of the box, and allows you to define custom events that are important to your application. Lastly, Google Analytics for Firebase tracks and integrates with various analytical partners such as Google Ads, Admob, TradeMob, and many more (the full list of analytical partners can be found here.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <b>What others options do you have to implement Authentication ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and so on.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3"      >
                    <Accordion.Header>
                        <b>How does the private route work ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>


            <Accordion defaultActiveKey="4" flush>
                <Accordion.Item        >
                    <Accordion.Header>
                        <b>What is Node? How does Node work ? </b>
                    </Accordion.Header>
                    <Accordion.Body>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;