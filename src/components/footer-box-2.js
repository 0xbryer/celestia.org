import * as React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from "../components/buttons/button";

function FooterBox2({ footerBoxes2 }) {
	return (
		<div className='footer-boxes-2'>
			<h2 className='footer-title'>Start using Celestia</h2>
			<div className={"footer-box-wrapper"}>
				{footerBoxes2 &&
					footerBoxes2.map((box, index) => {
						return (
							<div key={index} className={"footer-box-2"}>
								<div className={"footer-box-inner"}>
									{/* <div className={"bg"} /> */}
									<div className={"inner"}>
										<div className={"title"}>{box.title}</div>
										<div className={"text"}>{box.text}</div>
										<div className={"footer-box-inner-bottom"}>
											<div className='link-wrapper'>
												{box.link.type === "internal" ? (
													<Button type={"internal"} class={"external"} text={box.link.text} url={box.link.href} />
												) : box.link.type === "anchor" ? (
													<AnchorLink to={`${box.link.href}`} className={"button button-external"}>
														{box.link.text} <i class='icon-external-link'></i>
													</AnchorLink>
												) : (
													<Button type={"external"} class={"external"} text={box.link.text} url={box.link.href} />
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default FooterBox2;
