import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const date = new Date();
const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
};
var task_arr = [];
var works_task_arr=[];


app.get("/",(req,res)=>{
  var display_date= date.toLocaleString('en-IN', options);
  res.render("index.ejs",{tasks:task_arr,currentDate:display_date });
});

app.get("/blue",(req,res)=>{
  var display_date= date.toLocaleString('en-IN', options);
  res.render("blue.ejs",{tasks:task_arr,currentDate:display_date });
});

app.get("/green",(req,res)=>{
  var display_date= date.toLocaleString('en-IN', options);
  res.render("green.ejs",{tasks:task_arr,currentDate:display_date });
});

app.post("/",(req,res)=>{
  var display_date= date.toLocaleString('en-IN', options);
  var newTask = req.body["task"];
  if (task_arr.includes(newTask)===false){
    task_arr.push(newTask)
  }
  res.render("index.ejs",{tasks:task_arr,currentDate:display_date});
});

app.post("/green",(req,res)=>{
  var display_date= date.toLocaleString('en-IN', options);
  var newTask = req.body["task"];
  if (task_arr.includes(newTask)===false){
    task_arr.push(newTask)
  }
  res.render("green.ejs",{tasks:task_arr,currentDate:display_date});
});

app.post("/blue",(req,res)=>{
  var display_date= date.toLocaleString('en-IN', options);
  var newTask = req.body["task"];
  if (task_arr.includes(newTask)===false){
    task_arr.push(newTask)
  }
  res.render("blue.ejs",{tasks:task_arr,currentDate:display_date});
});

app.get("/work",(req,res)=>{
  res.render("index_w.ejs",{tasks:works_task_arr});
});

app.get("/work_blue",(req,res)=>{
  res.render("blue_w.ejs",{tasks:works_task_arr});
});

app.get("/work_green",(req,res)=>{
  res.render("green_w.ejs",{tasks:works_task_arr});
});

app.post("/work",(req,res)=>{
  var newTask = req.body["task"];
  if (works_task_arr.includes(newTask)===false){
    works_task_arr.push(newTask)
  }
  res.render("index_w.ejs",{tasks:works_task_arr});
});

app.post("/work_green",(req,res)=>{
  var newTask = req.body["task"];
  if (works_task_arr.includes(newTask)===false){
    works_task_arr.push(newTask)
  }
  res.render("green_w.ejs",{tasks:works_task_arr});
});

app.post("/work_blue",(req,res)=>{
  var newTask = req.body["task"];
  if (works_task_arr.includes(newTask)===false){
    works_task_arr.push(newTask)
  }
  res.render("blue_w.ejs",{tasks:works_task_arr});
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
