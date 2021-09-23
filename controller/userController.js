// 'use strict'

// const models = require('../models')
// const dateFormatter = require('date-and-time')

// const ordinal = require('date-and-time/plugin/ordinal');
// dateFormatter.plugin(ordinal);

// const login = async(req, res) =>{
//     try{
//         const name = req.body.name;

//         const user = await models.user.findOne({
//             where:{
//                 name:name
//             }
//         })

//         if(name && !user){
//             const user = await models.user.create({
//                 name: name,
//                 is_registered: 1
//             })
//         }

//         res.send({
//             message:"registered"
//         })
//     }
//     catch(err){
//         console.log(err);
//     }
// }


// const question1 = async(req, res) =>{
//     try{
        
//         const question1 = await models.question.findOne(
//             {
//                 attributes:['question','a','b','c','d'],
//                 where:{
//                     id: 1
//                 }
//             }
//         )

//         res.json(question1);
//     }catch(err){
//         console.log(err);
//     }
// }


// const question2 = async(req, res) =>{
//     try{
        
//         const question2 = await models.question.findOne(
//             {
//                 attributes:['question','a','b','c','d'],
//                 where:{
//                     id: 2
//                 }
//             }
//         )

//         res.json(question2);
//     }catch(err){
//         console.log(err);
//     }
// }


// const saveHistory = async(req, res) =>{
//     try{

//         const userId  = req.body.user_id
//         const text = req.body.text

//         const summary = await models.history.create({
//             user_id: userId,
//             text: JSON.stringify(text)
//         })

//         const userName = await models.user.findOne({
//             where:{
//                 id: userId
//             },
//             attributes:['name']

//         })

//         res.send({
//             message:"Summary",
//             name: `Hello ${userName.name}`,
//             questions: JSON.parse( summary.text)
//         })
//     } catch(err){
//         console.log(err);
//     }
// }


// const getHistory = async(req, res) =>{
//     try{
//         const userId = req.body.user_id

//         const history = await models.history.findAll({
//             where:{
//                 user_id: userId
//             },
//         })

//         const userName = await models.user.findOne({
//             where:{
//                 id: userId
//             },
//             attributes:['name']

//         })

//         let data = []
//         for( let i=0; i<history.length; i++)
//         {
//             let dateData= dateFormatter.format(history[i].createdAt, 'DDD MMMM h:mm A');
            
//             data.push({
//                 message:`GAME ${i+1} : ${dateData}`,
//                 name: userName.name,
//                 result: JSON.parse(history[i].text)
                
//             })
//         }

//         res.send(data)

//     }catch(err){
//         console.log(err);
//     }
// }

// module.exports = {login, question1, question2, saveHistory, getHistory};