import React from 'react';
import styles from '../Portfolio.module.scss';
import { ITabContentProps } from './TabContent.props';
import { IPortfolioTabItem } from '@/helpers';
import { motion } from 'framer-motion';
import { TabItem } from '@/components/Portfolio/TabItem/TabItem';

export const TabContent = ({ tabItems }: ITabContentProps) => {
	return (
		<li className={styles.content}>
			{tabItems.map((item: IPortfolioTabItem) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<TabItem title={item.title} img={item.img} link={item.link} />
				</motion.div>
			))}
		</li>
	);
};
