import React from 'react';

const Blogs = () => {
    return (
        <div className='App'>
            <div className=' border border-warning'>
                <h2>Difference between javascript and nodejs??</h2>
                <h5 className='text-start'>Java Script is a programming language and Node.js is a asynchronous runtime environment.We can use JS in frontend and backend both with the help of node.js.Node.js actually brings the V8 which is a JS engine and set it in the server side,for which we can use JS in backend.Before invented node.js the data took a long period of time for loading,but as node js in asynchronous it helps to remove the time complexity in the server side with the help of asynchronous nature of JS.Node.js is very much helpful in server-side driven,large network application and for backend API service. </h5>
            </div>
            <div className=' border border-warning'>
                <h2>When should you use nodejs and when should you use mongodb??</h2>
                <h5 className='text-start'>Node.js is a JS runtime environment with mainly run o Javascript programme.And mongodb is a noSql database management system which works with cloud storage system.Mongodb atlas is a cloud based management system which gives us permission to put our data in the server free of cost.Node.js is like a connector between the client side and server side.Express.js is a framework for node.js which gives us to permission to operate different http method to update,read,delete,create the data from our server.So we can say that we should use node.js for stablishing a connection between the client side and mongodb where mongodb works as a server which stores data in cloud base management system.</h5>
            </div>
            <div className=' border border-warning'>
                <h2>What is the purpose of jwt and how does it work??</h2>
                <h5 className='text-start'>Jwt is the short form of Json web token,which mainly use for security purpose.Suppose someone log into his/her account and put some data in it,if someone know his mail,he can easily find out all of his data from backend/server,with various kinds of find method.Here jwt works as the guard.Jwt produces a token when some one log or sign into his account and store the token in somewhere like local storage or something.The token could be valid for a limited period of time.Then when sometime again want to retrieve his/her data with email then his token and the token stored in the server compared.If the two token match then he/she will get his/her data,otherwise ift will give a bad status code 401.</h5>
            </div>
        </div>
    );
};

export default Blogs;