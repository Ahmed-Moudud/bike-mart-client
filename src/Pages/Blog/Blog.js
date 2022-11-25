import React from 'react';

const Blog = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        There are four main types of state you need to properly manage in your React apps: <br>
                        </br>
                        1.Local State <br></br>
                        2. Global State <br></br>
                        3. Server State <br></br>
                        4. URL state <br></br>
                    </p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br></br>
                        <br />
                        Unit tests enable us to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in the codebase. For example, if we are having a hard time writing unit tests for a piece of code, it might be a sign that our function is too complex.
                    </p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>React</th>
                                    <th>Angular</th>
                                    <th>Vue</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;