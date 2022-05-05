import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container'>
            <div className='row g-4'>
                <div className='col-md-12'>
                   <div className='table-class '>
                     <table className='table caption-top'>
                     <caption className='caption-class'><h3>Differences between javascript and nodejs</h3></caption>
                         <thead>
                            <tr>
                                <th scope="col">Javascript</th>
                                <th scope="col">Node Js</th>
                            </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>Javascript is a scripting langauge that is mailnly used in client side.</td>
                                 <td>NodeJs is is mailnly used to connect javascript code to server.</td>
                             </tr>
                         </tbody>
                         <tbody>
                             <tr>
                                 <td>Basically fronted devloper use javascript.</td>
                                 <td>Backend developer use nodejs.</td>
                             </tr>
                         </tbody>
                         <tbody>
                             <tr>
                                 <td>Javascript runs on browser.</td>
                                 <td>Nodejs runs outside of the browser.</td>
                             </tr>
                         </tbody>
                         <tbody>
                             <tr>
                                 <td>Some popular js framworks are react angular,react, vue js etc..</td>
                                 <td>Some popular nodejs framworks are Expres, Koa, Meteor etc</td>
                             </tr>
                         </tbody>
                     </table>
                     
                   </div>
                </div>
            </div>
            <div className='row'>
                    <div className='col-md-12'>
                     <div className='text-start mt-2 question-class'>
                     <h4> When should you use nodejs and when should you use mongodb?</h4>
                       <p>To Connect Js to server Nodejs is mainly used. Beacause NodeJs is a runtime environment for js. Mongodb stores data in json format that comes from fronted side thorogh NodeJs.</p>
                     </div>
                    </div>
            </div>
            <div className='row g-4'>
                <div className='col-md-12'>
                   <div className='table-class'>
                     <table className='table caption-top'>
                     <caption className='caption-class'><h3> Differences between sql and nosql databases.</h3></caption>
                         <thead>
                            <tr>
                                <th scope="col">SQL</th>
                                <th scope="col">NoSQL</th>
                            </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>SQL is as Relational Database Managemet System.</td>
                                 <td>NoSQL is a Distributed Database Managemet system.</td>
                             </tr>
                         </tbody>
                         <tbody>
                             <tr>
                                 <td>It is mainly confined with only table base.</td>
                                 <td>It is the combination of document, graph, key-value-pair etc.</td>
                             </tr>
                         </tbody>
                         <tbody>
                             <tr>
                                 <td>It is vertically scallable.</td>
                                 <td>It is horizontally scallable.</td>
                             </tr>
                         </tbody>
                         <tbody>
                             <tr>
                                 <td>It follows ACID properties.</td>
                                 <td>It follows CAP properties.</td>
                             </tr>
                         </tbody>
                     </table>
                     
                   </div>
                </div>
            </div>
            <div className='row'>
                    <div className='col-md-12'>
                     <div className='text-start mt-2 question-class'>
                     <h4>  What is the purpose of jwt and how does it work?</h4>
                       <p>JWT is the short form JSON web token. It is mainly used to security purpose. It shares security information between client and server.</p>
                     </div>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;