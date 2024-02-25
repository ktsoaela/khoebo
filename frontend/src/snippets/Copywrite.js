import React from 'react';

const CopyWrite = () => {
    const name = "frontend";
    const version = "0.1.0";
    const author = "Khotso Tsoaela";

    const currentYear = new Date().getFullYear();

    return (
        <section className='copywrite'>
            SaaS - {author} @ {name} v{version} {currentYear}
        </section>
    );
};

export default CopyWrite;
