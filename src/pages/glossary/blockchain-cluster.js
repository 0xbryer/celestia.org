import * as React from "react"

import {FooterBoxes} from "../../datas/team/content";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadcrumb";
import SocialShare from "../../components/socialShare";
import GlossaryNav from "../../components/glossary-nav";

const title = 'Blockchain cluster';

class GlossaryContent extends React.Component {
    render() {
        return (
            <div className={'glossary-content'}>
                <p>A group of blockchains that can communicate with each other in a trust-minimized way. Trust-minimized communication can be facilitated by fraud or validity proofs. Chains that can’t communicate in a trust-minimized way are in separate clusters that rely on trust-based communication.
                </p>

                <p>For example, Ethereum and its rollups are a cluster of chains, and standalone layer 1s, such as Polygon, each sit in their own cluster.
                </p>


                <p> Read more about the concept of <a href="https://blog.celestia.org/clusters/">clusters</a>.
                </p>

            </div>
        )
    }
}

class GlossarySubpage extends React.Component {
    render() {
        return (
            <Layout footerBoxes={FooterBoxes}>
                <div className={'glossary-subpage'}>
                    <main>
                        <div className={'container'}>
                            <BreadCrumb title={title}/>
                            <h1 className={'main mb-4'}>{title}</h1>

                            <SocialShare title={title} url={this.props.location.href}/>

                            <GlossaryContent/>

                        </div>

                        <div className={'container wide'}>
                            <GlossaryNav url={this.props.location.state && this.props.location.state.url}/>
                        </div>
                    </main>
                </div>
            </Layout>
        )
    }
}

export default GlossarySubpage
