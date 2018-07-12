var myCanvas = document.getElementById("art")

var canvas = myCanvas.getContext("2d")
canvas.beginPath()

canvas.arc(200,200,150,0,360,false)
canvas.moveTo(160,150)

canvas.arc(150,150,10,0,360,false)
canvas.moveTo(260,150)

canvas.arc(250,150,10,0,360,false)
canvas.moveTo(200,150)

canvas.lineTo(200,250)
canvas.moveTo(300,220)

canvas.arc(200,220,100,0,Math.PI,false)
canvas.stroke()
