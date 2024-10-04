const express=require("express");
const cors=require("cors");
const nodemailer=require("nodemailer");
const app=express();
app.use(cors());
app.use(express.json());
app.post("/se",(req,res)=>{
let data=[req.body.name,req.body.phone,req.body.query];
let from ="swetpandey18092003@gmail.com";
let to="mauryasakshi@gmail.com";
let subject="enquiry from "+req.body.name;
let text="name=" +req.body.name+"phone="+req.body.phone+" "+"query="+req.body.query;
let transporter=nodemailer.createTransport({
service:"gmail",
auth:{
user:"mauryasakshi797@gmail.com",
pass:"kxex zqdg lmsc joxd"
}
});
let mailOptions={
from:from,
to:to,
subject:subject,
text:text
}
transporter.sendMail(mailOptions,(err,info)=>{
if(err) {
res.status(500).json(err);
}
else {
res.status(200).json("mail send");
}
});
});
app.listen(9000,()=>{console.log("ready @ 9000")});