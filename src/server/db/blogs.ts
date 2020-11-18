import { Query } from './index';

const all = async () => Query(`
        SELECT 
        Blogs.*, 
        Authors.name
        FROM Blogs
        JOIN Authors on Authors.id = Blogs.authorid;
`
)

const one = (id: number) => Query(`SELECT 
Blogs.*,
Authors.name
FROM Blogs
JOIN Authors on Authors.id = Blogs.authorid
WHERE Blogs.id = ?;
`, [id])

const insert = (title: string, content: string, authorid: number) => Query(`
INSERT INTO Blogs 
(title, content, authorid) VALUES (?, ?, ?);`,
[title, content, Number(authorid)]);

const destroy = (id: number) => Query(`
DELETE FROM blogs
 WHERE blogs.id = ?
 `, [id]);


 const update = (content: string, id: number) => Query(`
 UPDATE blogs SET content = ?
  WHERE blogs.id = ?
 `, [content, id]);



export default {
    all,
    one,
    insert,
    destroy,
    update
}