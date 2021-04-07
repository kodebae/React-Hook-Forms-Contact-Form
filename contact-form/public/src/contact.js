import React from 'react';

const Contact = () => {
    return (
        <form>
            <h1>Contact Me</h1>
            <label> First Name</label>
                <input type="text">
                    <label> Last Name</label>
                    <input type="text">
                    <label> Email</label>
                        <input type="email">
                            <label> Message</label>
                            <input type="text-area">
                                <button type="submit" value="Submit"></button>
        </form>
    )
}
export default Contact;







// this is a functional component. React hooks only work with functional components.
