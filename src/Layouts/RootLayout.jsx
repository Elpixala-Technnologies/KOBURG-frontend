import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const RootLayout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <section>
                {children}
            </section>
            <section className='mt-6'>
                <Footer />
            </section>
        </main>
    );
};

export default RootLayout;