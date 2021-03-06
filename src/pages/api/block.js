import { getDB } from '../../lib';

// 后端 api/block 接口
// http://localhost:3000/api/block
// see also https://nextjs.org/docs/api-routes/dynamic-api-routes
export default async function handler(req, res) {
  // let meta = db.get('block_meta');
  // let real = db.get('block_real');

  // console.log(req.query, req.body);
  if(req.body && req.body.block_id){
    let collection;
    let db = await getDB();
    if(req.body.type === 'block_meta'){
      collection = db.collection('block_meta');
    }else if (req.body.type === 'block_real'){
      collection = db.collection('block_real');
    }
    let options = {};
    if (req.body.sort){
      options.sort = req.body.sort;
    }

    // https://docs.mongodb.com/manual/tutorial/query-documents/  
    // https://docs.mongodb.com/drivers/node/current/usage-examples/find/
    // https://docs.mongodb.com/manual/aggregation/
    // https://stackoverflow.com/questions/65316265/mongodb-sorting-nested-array-fields
    return collection.find({block_id: req.body.block_id}, options).toArray().then(doc => {
      if(doc){
        return res.status(200).json(doc)
      }else{
        return res.status(200).json({err: 'not found'})
      }
    })


  }else{
    res.status(404).json({ error: 'Not Found' })
  }
  // return meta.find({}).then(docs => {
  //   return res.status(200).json(docs)
  // })

}