import React from 'react';
import Navigation from './Navigation'

const Layout = (props) => {
    return (
        <>
        <head>
            <meta name="google-site-verification" content="1xzEhvkWyJpTbkKeasuxKb53beF10mCVZjzsBIzpee0" />
        </head>
        <div>
            <Navigation />
            {props.children}
        </div>
        </>
    )
}

export default Layout;