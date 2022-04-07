import * as React from "react"
import { Link } from "gatsby"
import {glossaries} from "../datas/glossary/data";

class GlossaryNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const allGlossaries = []
        let prev, next = []

        glossaries.map(glossary =>{
            Object.values(glossary)[0].map(result=>{
                allGlossaries.push(result);
            })
        })

        allGlossaries.map((glossary,index) => {
            if(glossary.url === this.props.url){
                prev = allGlossaries[index-1] ? allGlossaries[index-1] : allGlossaries[allGlossaries.length-1]
                next = allGlossaries[index+1] ? allGlossaries[index+1] : allGlossaries[0]
            }
        })


        return (
            <div>
            {prev && next ? <div className={'row glossary-nav mt-5'}>
                <div className={'col col-12 col-md-6 border-right'}>
                    {prev && <Link to={'/glossary/'+prev.url+'/'} state={{url: prev.url}}>
                        <div className={'glossary'}>
                            <div className={'title'}>
                                {prev.title}
                                <i className={'icon-arrow-down'}></i>
                            </div>
                            {prev.text}
                        </div>
                    </Link>}
                </div>
                <div className={'col col-12 col-md-6'}>
                    <Link to={'/glossary/'+next.url+'/'} state={{url: next.url}}>
                        <div className={'glossary'}>
                            <div className={'title'}>
                                {next.title}
                                <i className={'icon-arrow-down'}></i>
                            </div>
                            {next.text}
                        </div>
                    </Link>
                </div>
            </div> : <div/>}
            </div>
        )
    }
}

export default GlossaryNav
