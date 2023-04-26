const ideas=require("../models/idea.model");
// search all idea
exports.fetchAllIdeas=(req , res)=>{
    res.status(200).send(ideas);
}
let idCount=1;
// create new idea
exports.createIdea=(req,res)=>{
// read the requst body
const idea=req.body;
// need to generate the next idea id
idea.id=++idCount;
// save to list of existing ideas
ideas[idCount]=idea;
// return the response
res.status(201).send(ideas[idCount]);
}
// update idea
exports.updateIdea =(req,res)=>{
    // to read former id
    const ideaId =req.params.id;
    // if idea is present modify else error
    if(ideas[ideaId]){
        ideas[ideaId]=req.body;
        res.status(200).send(ideas[ideaId]);
    }else{
        res.status(400).send({
            message:'idea not correct'
        })
    }
}
exports.deleteIdea=(req,res)=>{
    // check if present
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message:"success"
        })
    }else{
        res.status(400).send({
            message:"wrong"
        })
    }
}
