import { useTranslation } from 'react-i18next'
import './ItemCard.css'
import { FC } from 'react'
interface IProps {
	title?: string
	description?: string
	url?: string
}
const ItemCard: FC<IProps> = ({ title, description, url }) => {
	// const { title, description } = props
	const { t } = useTranslation()

	return (
		<>
			<div data-testid="hops-rtb-card-1" className="StyledBox-c11n-8-104-2__sc-ocjv7k-0">
				<div className="OnsiteMessageThemeWrapper__StyledDiv-srrtc3-0 hzQQcf omp-theme-wrapper">
					<div>
						<div>
							<div className="StyledCard-c11n-8-104-2__sc-1w6p0lv-0 dGqILF StyledBox-c11n-8-104-2__sc-ocjv7k-0 gdeMMu">
								<div className="StyledBox-c11n-8-104-2__sc-ocjv7k-0 cwudig">
									<picture>
										<source srcSet={url} />
										<img
											alt=""
											src={url}
											width="100%"
											className="Image-c11n-8-104-2__sc-1rtmhsc-0 StyledBox-c11n-8-104-2__sc-ocjv7k-0 gOZbff"
										/>
									</picture>
								</div>
								<div className="StyledBox-c11n-8-104-2__sc-ocjv7k-0 eZxdDd">
									<h4 className="Text-c11n-8-104-2__sc-aiai24-0 StyledHeading-c11n-8-104-2__sc-s7fcif-0 jvayuu StyledBox-c11n-8-104-2__sc-ocjv7k-0">
										{title}
									</h4>
									<p className="Text-c11n-8-104-2__sc-aiai24-0 StyledParagraph-c11n-8-104-2__sc-e666if-0 leRaPD StyledBox-c11n-8-104-2__sc-ocjv7k-0 iFTJyc rtb-card-body-text">
										{description}
									</p>
									<button className="StyledButton-c11n-8-104-2__sc-iv7357-0 gyzsnv">
										Truy cập
									</button>
									<p className="Text-c11n-8-104-2__sc-aiai24-0 StyledParagraph-c11n-8-104-2__sc-e666if-0 lcERic StyledBox-c11n-8-104-2__sc-ocjv7k-0 iRjAvU rtb-card-legal-text"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

// SignUp.GridCommon = ({ children, ...props }: { props: any; children: ReactNode }) => {
// 	return (
// 		<Grid container direction="column" alignContent="center" justifyContent="center" width="100%" {...props}>
// 			{children}
// 		</Grid>
// 	)
// }

export default ItemCard
