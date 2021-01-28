import React from 'react';
import { GlobalStyle } from '../../../globalStyles';
import Hero from '../../Hero';
import Products from '../../Products';
import { productData, productDataTwo } from '../../Products/data';
import Feature from '../../Feature';
import Footer from '../../Footer';

function MainPage() { 
    return (
        <div>
            <GlobalStyle />
            <Hero />
            <Products heading='Choose your favorite' data={productData} />
            <Feature />
            <Products heading='Sweet Treats for You' data={productDataTwo} />
            <Footer />
        </div>
    );
}

export default MainPage;