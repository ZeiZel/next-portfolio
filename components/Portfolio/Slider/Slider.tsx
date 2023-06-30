import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../Portfolio.module.scss';
import { ISliderProps } from './Slider.props';
import { SliderItem } from '@/components/Portfolio/SliderItem/SliderItem';
import { useMediaQuery } from '@/hooks';
import { IS_MOBILE, IS_SMALL, IS_TABLET } from '@/helpers';

export const Slider = ({ tabItems }: ISliderProps) => {
	const isMobile = useMediaQuery(IS_MOBILE);
	const isSmall = useMediaQuery(IS_SMALL);

	return (
		<motion.div
			className={styles['slider']}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Carousel
				showArrows={false}
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
				centerMode={true}
				centerSlidePercentage={isSmall ? 75.4 : isMobile ? 49.4 : 45}
			>
				{tabItems.map((tab) => (
					<SliderItem key={tab.id} title={tab.title} img={tab.img} link={tab.link} />
				))}
			</Carousel>
		</motion.div>
	);
};
