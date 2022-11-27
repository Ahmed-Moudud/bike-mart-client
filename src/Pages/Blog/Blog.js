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
                                    <td>React, interestingly, combines the UI and behavior of components.</td>
                                    <td>In Angular, components are referred to as directives.</td>
                                    <td>In Vue, UI and behavior are also a part of components.</td>
                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>React is just old enough to be mature and has a huge number of contributions from the community. It has gained widespread acceptance. </td>
                                    <td>Angular is the most mature of the frameworks, has good backing in terms of contributors and is a complete package.</td>
                                    <td>Vue is newest to the arena, without the backing of a major company.</td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>React developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products</td>
                                    <td>Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework.</td>
                                    <td>Vue also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014.</td>
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