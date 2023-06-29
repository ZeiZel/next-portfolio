import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import { MainTitle } from '@/components';
import { TabControl } from './TabControl/TabControl';

export const Portfolio = () => {
	const [portfolioWeb, setPortfolioWeb] = useState<boolean>(true);
	const [portfolioUiUx, setPortfolioUiUx] = useState<boolean>(false);
	const [portfolioFront, setPortfolioFront] = useState<boolean>(false);
	const [portfolioAll, setPortfolioAll] = useState<boolean>(false);
	const [hiddenPortfolioItems, setHiddenPortfolioItems] = useState<boolean>(false);

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
		{ id: 2, title: 'UI/UX', isActive: portfolioUiUx, handler: handleShowPortfolioUiUx },
		{ id: 3, title: 'Frontend', isActive: portfolioFront, handler: handleShowPortfolioFront },
		{ id: 4, title: 'Все проекты', isActive: portfolioAll, handler: handleShowPortfolioAll },
	];

	return (
		<section id={'portfolio'} className={styles.portfolio}>
			<div className='container'>
				<MainTitle>Портфолио</MainTitle>
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
				</div>
			</div>
		</section>
	);
};
