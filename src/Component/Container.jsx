import React from 'react';

const Container = ({children, classPro}) => {
    return <div className={`container mx-auto ${classPro}`}>{children}</div>
};

export default Container;