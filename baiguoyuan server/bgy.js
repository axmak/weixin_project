//express模块
const express=require("express");
//mysql模块
const mysql=require("mysql"); 
//创建连接池
const pool = mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	port:3306,
	database:"bgy",
	password:""
})
const cors=require("cors");
const session=require("express-session");
//创建express对象
var server=express();
//绑定端口 3030
server.listen(3333);
//指定一个静态目录，保存图片资源，项目中所有的图片都需要放在服务器端
server.use(express.static("public"));

server.get("/nav",(req,res)=>{
	var sql="select * from bgy_nav"
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		if(result.length>0){
		res.send(result)
		}
	})
})

server.get("/getProduct",(req,res)=>{
	var fid=req.query.fid;
	var sql="select * from bgy_product where fid=?";
	pool.query(sql,[fid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	})
})

server.get("/getto",(req,res)=>{
	var pno=req.query.pno;
	var pagesize=req.query.pagesize;
	if(!pno){
		pno=1;
	}
	if(!pagesize){
		pagesize=2;
	}
	var offset=(pno-1)*pagesize;
	pagesize=parseInt(pagesize);
	var sql="select * from bgy_to limit ?,?";
	pool.query(sql,[offset,pagesize],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	})
})

server.get("/search",(req,res)=>{
	var key=req.query.key;
	var sql="select * from bgy_to where tdetails like concat('%',?,'%')";
	pool.query(sql,[key],(err,result)=>{
		if(result.length>0){
			res.send(result);
		}
	})
})