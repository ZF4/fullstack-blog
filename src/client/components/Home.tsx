import * as React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import type { IBlog } from '../utils/types'
import SingleBlogCard from './SingleBlogCard';

const Home: React.FC<IHomeProps> = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([])

    useEffect(() => {
        (async () => {
            try {
                let r = await fetch('/api/blogs');
                let blogs = await r.json();
                setBlogs(blogs);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return blogs.map((blog, id) => <SingleBlogCard key={id} blog={blog} />)
}

export interface IHomeProps {
    blogs: Array<IBlog>
}

export default Home;