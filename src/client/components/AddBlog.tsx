import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import blogs from '../../server/db/blogs';
import { IBlog } from "../utils/types";

const AddBlog: React.FC<IBlogProps> = (props: IBlogProps) => {
    const [blog, setBlog] = React.useState({
        id: "",
        title: "",
        content: ""
    });

    const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setBlog({
        id: e.target.value,
        title: blog.title,
        content: blog.content
    });
    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setBlog({
        id: blog.id,
        title: e.target.value,
        content: blog.content
    });
    const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => setBlog({
        id: blog.id,
        title: blog.title,
        content: e.target.value
    });


    const saveChirp = async () => {
        await fetch("/api/chirps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        });

        props.history.push("/");
    };

    return (
        <div className="container">
            <div className="card shadow-lg m-2">
                <div className="card-body">
                    <div className="row">
                        <textarea className="card-text" defaultValue={blog.id} cols={9} rows={1} onChange={onIdChange}></textarea>
                    </div>
                    <div className="row">
                        <textarea className="card-text" defaultValue={blog.title} cols={9} rows={1} onChange={onTitleChange}></textarea>
                    </div>
                    <div className="row">
                        <textarea className="card-text" defaultValue={blog.content} cols={50} rows={15} onChange={onContentChange}></textarea>
                    </div>
                    <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={saveChirp}>Save</button>
                </div>
            </div>
        </div>
    )
}

interface IBlogProps extends RouteComponentProps<{ id: string}> { };
interface IBlogState extends RouteComponentProps{ 
    id: string,
    title: string,
    content: string
};

export default AddBlog