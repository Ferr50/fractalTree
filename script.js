const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
var age = 0;
var thickness = 1;

function drawTree(x, y, len, angle, branchWidth, color1, color2){
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.lineWidth = branchWidth;
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0,0);
    ctx.lineTo(0, -len);
    ctx.stroke();

    if(len < 5){
        ctx.beginPath();
        ctx.arc(0, -len, 10, 0, Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }

    drawTree(0, -len, len * 0.75, angle + 15, branchWidth * 0.8);
    drawTree(0, -len, len * 0.75, angle - 15, branchWidth * 0.8);

    ctx.restore();
}


function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    drawTree(canvas.width/2, canvas.height - 80, age, 0, thickness, 'brown', 'green');

    if(age<170){
        age += 0.1;
    }

    if(thickness<30){
        thickness += 0.018;
    }
    
}

animate();