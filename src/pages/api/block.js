const monk = require('monk');
const url = 'mongodb://localhost:27017/blockdb';
const db = monk(url);


export default function handler(req, res) {
  // let meta = db.get('block_meta');
  // let real = db.get('block_real');

  // console.log(req.query, req.body);
  if(req.body && req.body.block_id){
    let collection;
    if(req.body.type === 'block_meta'){
      collection = db.get('block_meta');
    }else if (req.body.type === 'block_real'){
      collection = db.get('block_real');
    }
    if(collection)
      return collection.findOne({block_id: req.body.block_id}).then(doc => {
        if(doc){
          return res.status(200).json(doc)
        }else{
          return res.status(200).json({err: 'not found'})
        }
      })
    else
      return res.status(200).json({err: 'not found'})

  }else{
    res.status(404).json({ error: 'Not Found' })
  }
  // return meta.find({}).then(docs => {
  //   return res.status(200).json(docs)
  // })

}