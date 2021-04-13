var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width=400;
canvas.height=400;

function draw(){
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50
    ctx.moveTo(pos,0)
    ctx.lineTo(pos,400)
    ctx.fillText(pos,pos,10)
    
    ctx.moveTo(0,pos)
    ctx.lineTo(400,pos)
    ctx.fillText(pos,10,pos) 
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //地面上的線
ctx.beginPath()
ctx.moveTo(25,350)
ctx.lineTo(375,350)
ctx.lineWidth=2
ctx.strokeStyle="black"
ctx.stroke()
  
  //左城門
  ctx.fillStyle="#E4B165"
  ctx.fillRect(50,200,50,150)
  ctx.strokeRect(50,200,50,150)
  //左城門頭蓋
  ctx.fillStyle="#2c728a"
  ctx.fillRect(40,175,70,25)
  ctx.strokeRect(40,175,70,25)
  //右城門
  ctx.fillStyle="#E4B165"
  ctx.fillRect(300,200,50,150)
  ctx.strokeRect(300,200,50,150)
  //左城門頭蓋
  ctx.fillStyle="#2c728a"
  ctx.fillRect(290,175,70,25)
  ctx.strokeRect(290,175,70,25)
  //拱門
  
  
  ctx.beginPath()
  ctx.moveTo(100,250)
  ctx.lineTo(300,250)
  ctx.lineTo(300,350)
  ctx.lineTo(250,350)
       ctx.arc(200,350,50,Math.PI*2,Math.PI,true)
  
  ctx.lineTo(150,350)
  ctx.lineTo(100,350)
  ctx.closePath
  
  ctx.fillStyle="#945238"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  //方形主體
  ctx.beginPath()
  ctx.moveTo(150,125)
  ctx.lineTo(250,125)
  ctx.lineTo(250,250)
  ctx.lineTo(150,250)
  ctx.closePath()
  ctx.fillStyle="#E4B165"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //三角形尖塔
  ctx.beginPath()
  ctx.moveTo(150,125)
  ctx.lineTo(200,50)
  ctx.lineTo(250,125)
  ctx.closePath()
  ctx.fillStyle="#2c728a"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
 
}


 
 
draw()