import { useTranslation } from 'react-i18next'
import './ListCart.css'
import ItemCard from '../ItemCard'
interface IProps {
	children?: React.ReactNode
	// Các props khác
}
const ListCard = (props: IProps) => {
	const { t } = useTranslation()

	return (
		<>
			<div className="StyledBox-c11n-8-104-2__sc-ocjv7k-0 dZRYSL">
				<div
					data-testid="hops-rtb-cards"
					className="Grid-c11n-8-104-2__sc-18zzowe-0 fIElzt StyledBox-c11n-8-104-2__sc-ocjv7k-0 helUbi"
				>
					<ItemCard
						url="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg.jpg"
						title={t('Home.title1') || ''}
						description={t('Home.description1') || ''}
					></ItemCard>
					<ItemCard
						url=" https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg.jpg"
						title={t('Home.title2') || ''}
						description={t('Home.description2') || ''}
					></ItemCard>
					<ItemCard
						url="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg.jpg"
						title={t('Home.title3') || ''}
						description={t('Home.description3') || ''}
					></ItemCard>
				</div>
			</div>
		</>
	)
}

export default ListCard
