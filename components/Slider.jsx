import Image from 'next/image';

// styles
import styles from '../styles/Slider.module.css';



 
const Slider =() => {
	const images = [
		"/images/featured1-cropped.png",
		"/images/featured2-cropped.png",
		"/images/featured3-cropped.png"
	];
	
	
	
	return (
		<div className={styles.container}>
			<div className={styles.arrowContainer} style={{left:0}}>
				<Image 
					src="/images/arrowl.png" 
					alt="" 
					layout="fill" 
				/>
			</div>
			<div className={styles.wrapper}>
				
				{images.map((image, index) => (
					<div className={styles.imgContainer} key={index}>
						<Image 
							className={styles.sliderImg} 
							src={image} 
							alt="" 
							width="540"
							height="380"
						/>
					</div>
				))}
				
			</div>
			<div className={styles.arrowContainer} style={{right: 0}}>
				<Image 
					src="/images/arrowr.png" 
					alt="" 
					layout="fill"
				/>
			</div>
		</div>
	);
};


export default Slider;


