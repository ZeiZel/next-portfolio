import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import { Divider, MainTitle, Paragraph } from '@/components';
import { TabControl } from './TabControl/TabControl';
import { TabContent } from './TabContent/TabContent';
import {
	hiddenPortfolioItemsArray,
	portfolioItems1,
	portfolioItems2,
	portfolioItems3,
	portfolioItems4,
} from '@/helpers';
import { AnimatePresence } from 'framer-motion';

export const Portfolio = () => {
	const [portfolioWeb, setPortfolioWeb] = useState<boolean>(true);
	const [portfolioUiUx, setPortfolioUiUx] = useState<boolean>(false);
	const [portfolioFront, setPortfolioFront] = useState<boolean>(false);
	const [portfolioAll, setPortfolioAll] = useState<boolean>(false);
	const [hiddenPortfolioItems, setHiddenPortfolioItems] = useState<boolean>(true);

	const toggleHiddenPortfolioItems = (): void => setHiddenPortfolioItems(!hiddenPortfolioItems);

	const handleShowPortfolioWeb = (): void => {
		setPortfolioWeb(true);
		setPortfolioUiUx(false);
		setPortfolioFront(false);
		setPortfolioAll(false);
	};

	const handleShowPortfolioUiUx = (): void => {
		setPortfolioWeb(false);
		setPortfolioUiUx(true);
		setPortfolioFront(false);
		setPortfolioAll(false);
	};

	const handleShowPortfolioFront = (): void => {
		setPortfolioWeb(false);
		setPortfolioUiUx(false);
		setPortfolioFront(true);
		setPortfolioAll(false);
	};

	const handleShowPortfolioAll = (): void => {
		setPortfolioWeb(false);
		setPortfolioUiUx(false);
		setPortfolioFront(false);
		setPortfolioAll(true);
	};

	const portfolioTabControls = [
		{ id: 1, title: 'Веб-разработка', isActive: portfolioWeb, handler: handleShowPortfolioWeb },
		{ id: 2, title: 'UI/UX Дизайн', isActive: portfolioUiUx, handler: handleShowPortfolioUiUx },
		{ id: 3, title: 'Frontend', isActive: portfolioFront, handler: handleShowPortfolioFront },
		{ id: 4, title: 'Все проекты', isActive: portfolioAll, handler: handleShowPortfolioAll },
	];

	return (
		<section id={'portfolio'} className={styles.portfolio}>
			<div className='container'>
				<MainTitle className={styles.portfolio__title}>Портфолио</MainTitle>
			</div>
			<div className='sub-container'>
				<div className={styles.portfolio__block}>
					<ul className={styles.portfolio__list}>
						{portfolioTabControls.map((tab) => (
							<TabControl
								key={tab.id}
								title={tab.title}
								isActive={tab.isActive}
								handleShowTab={tab.handler}
							/>
						))}
					</ul>
					<div className={styles.portfolio__items}>
						{portfolioWeb && <TabContent tabItems={portfolioItems1} />}
						{portfolioUiUx && <TabContent tabItems={portfolioItems2} />}
						{portfolioFront && <TabContent tabItems={portfolioItems3} />}
						{portfolioAll && <TabContent tabItems={portfolioItems4} />}
						<AnimatePresence>
							{!hiddenPortfolioItems && (
								<TabContent tabItems={hiddenPortfolioItemsArray} />
							)}
						</AnimatePresence>
					</div>
					<div className={styles['portfolio__additional']}>
						<button
							className={styles['portfolio__additional-button']}
							onClick={toggleHiddenPortfolioItems}
						>
							<Paragraph className={styles['portfolio__additional-text']}>
								{hiddenPortfolioItems ? 'Показать ещё' : 'Скрыть'}
							</Paragraph>
							<Divider
								className={styles['portfolio__additional-border']}
								arrow={false}
								muted={true}
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
