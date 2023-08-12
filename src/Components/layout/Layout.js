import React from 'react'
import Header from './Header'

const Layout = ({ Children }) => {
    return (
        <>
            <Header />
            <div>
                <h1>{Children}</h1>
            </div>
        </>
    )
};

export default Layout