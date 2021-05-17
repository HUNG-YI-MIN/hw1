//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    ctx.globalAlpha=1;
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //城堡主體繪製開始
  
  //正中央大主體
//左長方形
  ctx.fillStyle = "#3F829D"
  ctx.fillRect(100,100,40,250) //(x軸,y軸,寬,高)
//窗戶
  
  ctx.fillStyle = "#344549"
  ctx.fillRect(105,105,35,15)
  ctx.fillStyle = "#4C9CBD"
  ctx.fillRect(105,125,30,15)
  ctx.fillRect(105,145,30,15)
  ctx.fillRect(105,165,30,15)
  ctx.fillRect(105,185,30,15)
  ctx.fillRect(105,205,30,15)
  ctx.fillRect(105,225,30,15)
  ctx.fillRect(105,245,30,15)
  ctx.fillRect(105,265,30,15)
  ctx.fillRect(105,285,30,15)
  ctx.fillRect(105,305,30,15)
  ctx.fillRect(105,325,30,15)


//右長方形
  ctx.fillStyle = "#3F829D"
  ctx.fillRect(250,100,40,250)
  ctx.fillStyle = "#344549" //(x軸,y軸,寬,高)
  ctx.fillRect(252.5,105,35,15)
  ctx.fillStyle = "#4C9CBD"
  ctx.fillRect(255,125,30,15)
  ctx.fillRect(255,145,30,15)
  ctx.fillRect(255,165,30,15)
  ctx.fillRect(255,185,30,15)
  ctx.fillRect(255,205,30,15)
  ctx.fillRect(255,225,30,15)
  ctx.fillRect(255,245,30,15)
  ctx.fillRect(255,265,30,15)
  ctx.fillRect(255,285,30,15)
  ctx.fillRect(255,305,30,15)
  ctx.fillRect(255,325,30,15)
//主體
  ctx.fillStyle = "#3E81A0"
  ctx.fillRect(140,80,110,270) //(x軸,y軸,寬,高)
  
  // Create gradient
  var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd.addColorStop(0, "white");
  grd.addColorStop(1, "#4C9CBD");

  // Fill with gradient
  ctx.fillStyle = grd;
  
  ctx.fillRect(150,89,90,15)
  ctx.fillRect(150,109,90,15)
  ctx.fillRect(150,129,90,15)
  ctx.fillRect(150,149,90,15)
  ctx.fillRect(150,169,90,15)
  ctx.fillRect(150,189,90,15)
  ctx.fillRect(150,209,90,15)
  ctx.fillRect(150,229,90,15)
  ctx.fillRect(150,249,90,15)
  ctx.fillRect(150,269,90,15)
  ctx.fillRect(150,289,90,15)
  ctx.fillRect(150,309,90,15)
  ctx.fillRect(150,329,90,15)


//圓弧拱門
    //拱門繪製
    
    ctx.beginPath()
    //右半邊
    // ctx.moveTo(250,350)
    //圓弧拱門
    ctx.arc(195,80,55,Math.PI,Math.PI*2,false)
    ctx.closePath()
    ctx.fillStyle="#3E81A0"
    ctx.fill()
    

//小圓弧拱門
//拱門繪製
    
    ctx.beginPath()
    //右半邊
    // ctx.moveTo(250,350)
    //圓弧拱門
    ctx.arc(195,80,45,Math.PI,Math.PI*2,false)
    ctx.closePath()
    ctx.fillStyle="#344549"
    ctx.globalAlpha=1;
    ctx.fill()
    
//左陰影
 ctx.beginPath()
      ctx.moveTo(140,100)
      ctx.lineTo(140,340)
      ctx.lineTo(100,100)
    ctx.closePath()
    ctx.globalAlpha=0.2;
    ctx.fillStyle="#000000"
    ctx.fill()

//右陰影
 ctx.beginPath()
      ctx.moveTo(250,100)
      ctx.lineTo(250,340)
      ctx.lineTo(290,100)
    ctx.closePath()
    ctx.globalAlpha=0.2;
    ctx.fillStyle="#000000"
    ctx.fill()

  
  //太陽
  ctx.globalAlpha=1;
      ctx.beginPath()
        ctx.arc(300,80-mouse.y/3,10,Math.PI,Math.PI*4,false)
        // ctx.moveTo(325,175)
        // ctx.lineTo(325,125-mouse.y/3)
        // ctx.lineTo(350,125 - (time%5)-mouse.y/3)
        // ctx.lineTo(325,150-mouse.y/3)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()

  //巴士
    ctx.globalAlpha=1;
    ctx.fillStyle="orange"
    let carx = time%440-40
    ctx.fillRect(carx,340,60,25)
    ctx.strokeRect(carx,340,60,25)
    ctx.fillStyle="yellow"
    ctx.fill()
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+50,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})






















// //先抓到畫面上的cv元素
// var canvas = document.getElementById("mycanvas")
// var ctx = canvas.getContext("2d")

// //設定尺寸
// canvas.width= 400
// canvas.height= 400

// var time=0
// function draw(){
//   time++
//   ctx.clearRect(0,0,400,400) //清除畫布上的軌跡  
//   //座標繪製
//   ctx.beginPath()
//   for(var i=0;i<10;i++){
//     let pos = i*50 //每格50劃一條線
//     ctx.moveTo(pos,0) //x軸起點
//     ctx.lineTo(pos,400) //x軸終點
//     ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
//     //
//     ctx.moveTo(0,pos) //y軸起點
//     ctx.lineTo(400,pos) //y軸終點
//     ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
//   }
//   ctx.strokeStyle = "rgba(0,0,0,0.1)"
//   ctx.stroke()


// //地面上的線
//   ctx.beginPath() //清掉先前路徑
//   ctx.moveTo(25,350)
//   ctx.lineTo(375,350)
//   ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
//   ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
//   ctx.stroke()
  



// //正中央大主體
// //左長方形
//   ctx.fillStyle = "#3F829D"
//   ctx.fillRect(100,100,40,250) //(x軸,y軸,寬,高)
// //窗戶
  
//   ctx.fillStyle = "#344549"
//   ctx.fillRect(105,105,35,15)
//   ctx.fillStyle = "#4C9CBD"
//   ctx.fillRect(105,125,30,15)
//   ctx.fillRect(105,145,30,15)
//   ctx.fillRect(105,165,30,15)
//   ctx.fillRect(105,185,30,15)
//   ctx.fillRect(105,205,30,15)
//   ctx.fillRect(105,225,30,15)
//   ctx.fillRect(105,245,30,15)
//   ctx.fillRect(105,265,30,15)
//   ctx.fillRect(105,285,30,15)
//   ctx.fillRect(105,305,30,15)
//   ctx.fillRect(105,325,30,15)


// //右長方形
//   ctx.fillStyle = "#3F829D"
//   ctx.fillRect(250,100,40,250)
//   ctx.fillStyle = "#344549" //(x軸,y軸,寬,高)
//   ctx.fillRect(252.5,105,35,15)
//   ctx.fillStyle = "#4C9CBD"
//   ctx.fillRect(255,125,30,15)
//   ctx.fillRect(255,145,30,15)
//   ctx.fillRect(255,165,30,15)
//   ctx.fillRect(255,185,30,15)
//   ctx.fillRect(255,205,30,15)
//   ctx.fillRect(255,225,30,15)
//   ctx.fillRect(255,245,30,15)
//   ctx.fillRect(255,265,30,15)
//   ctx.fillRect(255,285,30,15)
//   ctx.fillRect(255,305,30,15)
//   ctx.fillRect(255,325,30,15)
// //主體
//   ctx.fillStyle = "#3E81A0"
//   ctx.fillRect(140,80,110,270) //(x軸,y軸,寬,高)
  
//   // Create gradient
//   var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
//   grd.addColorStop(0, "white");
//   grd.addColorStop(1, "#4C9CBD");

//   // Fill with gradient
//   ctx.fillStyle = grd;
  
//   ctx.fillRect(150,89,90,15)
//   ctx.fillRect(150,109,90,15)
//   ctx.fillRect(150,129,90,15)
//   ctx.fillRect(150,149,90,15)
//   ctx.fillRect(150,169,90,15)
//   ctx.fillRect(150,189,90,15)
//   ctx.fillRect(150,209,90,15)
//   ctx.fillRect(150,229,90,15)
//   ctx.fillRect(150,249,90,15)
//   ctx.fillRect(150,269,90,15)
//   ctx.fillRect(150,289,90,15)
//   ctx.fillRect(150,309,90,15)
//   ctx.fillRect(150,329,90,15)


// //圓弧拱門
//     //拱門繪製
    
//     ctx.beginPath()
//     //右半邊
//     // ctx.moveTo(250,350)
//     //圓弧拱門
//     ctx.arc(195,80,55,Math.PI,Math.PI*2,false)
//     ctx.closePath()
//     ctx.fillStyle="#3E81A0"
//     ctx.fill()
    

// //小圓弧拱門
// //拱門繪製
    
//     ctx.beginPath()
//     //右半邊
//     // ctx.moveTo(250,350)
//     //圓弧拱門
//     ctx.arc(195,80,45,Math.PI,Math.PI*2,false)
//     ctx.closePath()
//     ctx.fillStyle="#344549"
//     ctx.fill()
    
// //左陰影
//  ctx.beginPath()
//       ctx.moveTo(140,100)
//       ctx.lineTo(140,340)
//       ctx.lineTo(100,100)
//     ctx.closePath()
//     ctx.globalAlpha=0.2;
//     ctx.fillStyle="#000000"
//     ctx.fill()

// //右陰影
//  ctx.beginPath()
//       ctx.moveTo(250,100)
//       ctx.lineTo(250,340)
//       ctx.lineTo(290,100)
//     ctx.closePath()
//     ctx.globalAlpha=0.2;
//     ctx.fillStyle="#000000"
//     ctx.fill()

//     //左城門旗子
//       ctx.beginPath()
//         ctx.moveTo(75,175)
//         ctx.lineTo(75,125-mouse.y/5)
//         ctx.lineTo(100,140 - (time%3)-mouse.y/5)
//         ctx.lineTo(75,150-mouse.y/5)
//       ctx.closePath()
//       ctx.fillStyle="#D3222F"
//       ctx.fill()
//       ctx.strokStyle = "black"
//       ctx.stroke()  
  
//   //右城門旗子
//       ctx.beginPath()
//         ctx.moveTo(325,175)
//         ctx.lineTo(325,125-mouse.y/3)
//         ctx.lineTo(350,140 - (time%5)-mouse.y/3)
//         ctx.lineTo(325,150-mouse.y/3)
//       ctx.closePath()
//       ctx.fillStyle="#D3222F"
//       ctx.fill()
//       ctx.strokStyle = "black"
//       ctx.stroke() 
  
//   //車子
//     ctx.fillStyle="white"
//     let carx = time%440-40
//     ctx.fillRect(carx,340,40,25)
//     ctx.strokeRect(carx,340,40,25)
  
//     ctx.beginPath()
//     ctx.arc(carx+10,365,5,0,Math.PI*2)
//     ctx.arc(carx+30,365,5,0,Math.PI*2)
  
//     ctx.fillStyle="black"
//     ctx.fill()
//     ctx.stroke()
  
//     //確認滑鼠事件有抓取到
//     ctx.beginPath()
//     ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
//     ctx.fillStyle="black"
//     ctx.fill()
    
// }
// // draw()

// //設定連續繪製
// setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

// //定義變數為物件，x,y分別紀錄滑鼠位置
// var mouse = {
//   x: 0,
//   y: 0
// } 

// //事件監聽，取得滑鼠位置
// canvas.addEventListener("mousemove",function(evt){
//   mouse.x = evt.offsetX  //相對於畫布上的距離
//   mouse.y = evt.offsetY
// })


