var express = require('express');
var router = express.Router;
router.post('/books', (req,res,next) => {
    console.log(req.body)
    Book.create(req.body, (err,books) => {
      console.log(err, books)
      if(err) return next(err);
      res.json(books)
    })
  })
  
  router.get('/books', (req,res,next) => {
    Book.find({}, (err,allbooks) => {
      if(err) return next(err);
      console.log(err,allbooks)
      res.json(allbooks);
    })
  })
  
  router.get('/books/:id', (req,res,next) => {
    var id = req.params.id;
    Book.findById(id,(err,eachbook) => {
      if(err) return next(err);
      res.json(eachbook)
    })
  })
  
  router.post('/books/:id/update', (req,res,next) => {
    var id = req.params.id;
    Book.findByIdAndUpdate(id,req.body,(err,updatebook) => {
      if(err) return next(err);
      console.log(req.body)
      res.json(updatebook)
    })
  })
  
  //update book

  router.get('/books/:id/update', (req,res,next) => {
    var id = req.params.id;
    Book.findById(id,(err,updatebook) => {
      if(err) return next(err);
      // console.log(req.body)
      res.json(updatebook)
    })
  })

  // delete book
  
  router.get('/books/:id/delete', (req,res,next) => {
    var id = req.params.id;
    Book.findByIdAndDelete(id,(err,deletebook) => {
      if(err) return next(err);
      // console.log(req.body)
      res.json(deletebook)
    })
  })

module.exports = router;