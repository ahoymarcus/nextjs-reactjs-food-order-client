// https://www.youtube.com/watch?v=Z-hACIsjv4E
//  0hs 8' 10''  
import '../styles/globals.css';

// components
import Layout from '../components/Layout';




function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};



export default MyApp;

