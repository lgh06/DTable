import { getDB } from '../../lib/dbClient';

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

    return collection.findOne({block_id: req.body.block_id}).then(doc => {
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