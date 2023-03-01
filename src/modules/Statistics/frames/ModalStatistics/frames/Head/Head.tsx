import { FC, memo } from 'react';
import {
	StatisticsAmount,
	StatisticsButtons,
	StatisticsGraphBtn,
	Tabs,
} from 'library/components/statistics';
import { useStatisticsHead } from 'library/hooks/statistics';

import st from './Head.module.scss';
import cn from 'classnames';

const Head: FC = () => {
	const { tab, tabs, graph, date, isDisableBtn, handlerTooltip, handlerButton, onTabChange, info } =
		useStatisticsHead(true);
	return (
		<>
			<section className={cn(st.toolbar, st.white)}>
				<div className={st.header}>
					<Tabs tab={tab} tabs={tabs} onTabChange={onTabChange} />

					<StatisticsAmount amount={info.amount} size="medium" />
				</div>
			</section>
			<section className={cn(st.toolbar)}>
				<div className={st.header}>
					<StatisticsGraphBtn
						graph={graph}
						date={date}
						handlerTooltip={handlerTooltip}
						tab={tab.code}
					/>
					<StatisticsButtons disableBtn={isDisableBtn} handlerButton={handlerButton} />
				</div>
			</section>
		</>
	);
};

export default memo(Head);
