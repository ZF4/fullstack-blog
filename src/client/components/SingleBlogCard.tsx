import * as React from 'react'
import { IBlog } from '../utils/types'
import {Link} from 'react-router-dom'

const SingleBlogCard: React.FC<HBCProps> = (props: HBCProps) => {
    return (
        <>
            <div className="card shadow-lg m-2">
                <img className="card-img-top" src="https://afrobarometer.org/sites/default/files/styles/large-banner-image/public/intro-images//ab-blog-illustration_transparent.png?itok=ZrQ_o_3s" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.blog.title}</h5>
                    <h6>{props.blog.name}</h6>
                    <p className="card-text">{props.blog.content}</p>
                    <Link to={`/blog/${props.blog.id}/admin`}>
                      <button className="bt btn-sm btn-outline-dark float-right">Admin Options</button>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default SingleBlogCard
interface HBCProps {
    blog: IBlog
}