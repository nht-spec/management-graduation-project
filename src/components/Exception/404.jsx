import React from 'react';
import Img404 from '../../assets/images/blank-layout.jpeg';
import Exception from './Exception';

const Exception404 = () => {
	return <Exception type='404' img={Img404} title='404' />;
};

export default Exception404;
