import React from 'react';
import { RouteComponentProps, useParams} from 'react-router-dom';

import {IBlog} from '../utils/types';



const Admin: React.FC<IBlogProps> = (props: IBlogProps) => {
   const [blog, setBlog] = React.useState({
       id: "",
       title: "",
       content: "",
   });

   const { id } = useParams();

   React.useEffect(() => {
       (async() => {
           try {
               let res = await fetch(`/api/blogs/${id}`)
               let blog = await res.json();
               setBlog(blog);
           }catch (err) {
               console.log(err);
           }
       })();
   },[]);
   
   const deleteBlog = async (id: string) => {
       await fetch(`/api/blogs/${id}`, {
           method: "DELETE"
       });

       props.history.push("/");
   }


   const editBlog = async (id: string) => {
       await fetch(`/api/blogs/${id}`, {
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(blog.content)
       });

       props.history.push("/");
   }


   const onTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBlog({
    id: blog.id,
    title: e.target.value,
    content: blog.content
});
   const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBlog({
    id: blog.id,
    title: blog.title,
    content: e.target.value
});

return (
    <div className="container">
        <div className="card shadow-lg m-2">
            <div className="card-body">
                <div className="row">
                    <h5 className="card-title">@{blog.name}</h5>
                </div>
                <div className="row">
                    <textarea className="card-text" defaultValue={blog.title} cols={20} rows={1} onChange={(e) => onTitleChange(e)}></textarea>
                </div>
                <div className="row">
                    <textarea className="card-text" defaultValue={blog.content} cols={50} rows={15} onChange={(e) => onContentChange(e)}></textarea>
                </div>
                <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => editBlog(blog.id)}>Save</button>
                <button className="btn btn-sm btn-outline-dark float-right mx-1" onClick={() => deleteBlog(blog.id)}>Delete</button>
            </div>
        </div>
    </div>
)


}
interface IBlogProps extends RouteComponentProps<{ id: string}> { }
interface IBlogState extends RouteComponentProps{ 
    id: string,
    title: string,
    content: string
}

export default Admin;