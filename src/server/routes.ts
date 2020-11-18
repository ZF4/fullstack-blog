import * as express from 'express';
import db, { Connection } from './db';

import DB from './db'

const router = express.Router();

router.get('/blogs', async (req: express.Request,res: express.Response) => {
    try{
        let blogs = await DB.Blogs.all();
        res.json(blogs);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/blogs/:id', async (req: express.Request,res: express.Response) => {
    console.log("test");
    try{
        const id: number = Number(req.params.id);
        const data = await db.Blogs.one(id)
        res.status(200).send(data[0]);
    }catch(e){
        console.log(e);
        res.status(500).send(e);
    }
})

router.post("/blogs/", async (req: express.Request, res: express.Response) => {
    try {
        const postAuth = await db.Authors.insert(req.body.name, req.body.email);
        const post = await db.Blogs.insert(req.body.title,req.body.content, postAuth.insertId);
        res.json(post)
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);

        await db.Blogs.destroy(id);
        // await db.Authors.destroy(id);

        res.send(`Blog ${id} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});





export default router;