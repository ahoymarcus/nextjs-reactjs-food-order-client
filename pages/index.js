import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// components
import Slider from '../components/Slider';

 

export default function Home() {
	
	
	return (
		<div className="home">
			<Head>
				<title>Online Pizza Restaurant</title>
				<meta name="description" content="Best pizza on the Web" />
				<link rel="icon" href="/favicon" />
			</Head>
			<Slider />
			
		</div>
	);
};




