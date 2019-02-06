const body = document.querySelector('body');

const draw = () => {
    const canvas = document.getElementById('canvas');
    if (!canvas.getContext) {
        return;
    }

    const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 10, 50, 50);

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // ctx.fillRect(30, 30, 50, 50);

    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();


    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fillRect(10, 10, 50, 50);

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // ctx.fillRect(30, 30, 50, 50);

    // ctx.beginPath();
    // ctx.arc(75, 75, 50, Math.PI / 2, Math.PI, true);
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(125, 125);
    // ctx.lineTo(125, 45);
    // ctx.lineTo(45, 125);
    // ctx.closePath();
    // ctx.stroke();

    // for (let i = 0; i < 4; i += 1) {
    //     for (let j = 0; j < 3; j += 1) {
    //         ctx.beginPath();
    //         const x = 25 + (50 * j);
    //         const y = 25 + (50 * i);
    //         const radius = 20;
    //         const startAngle = 0;
    //         const endAngle = Math.PI + ((Math.PI * j) / 2);
    //         const anticlockwise = i % 2 !== 0;

    //         ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    //         if (i > 1) {
    //             ctx.fill();
    //         } else {
    //             ctx.stroke();
    //         }
    //     }
    // }

    // ctx.beginPath();
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(75, 40);
    // ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    // ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    // ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    // ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    // ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    // ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    // ctx.fillStyle = 'rgb(200, 0, 0)';
    // ctx.fill();

    // roundedRect(ctx, 12, 12, 150, 150, 15);
    // roundedRect(ctx, 19, 19, 150, 150, 9);
    // roundedRect(ctx, 53, 53, 49, 33, 10);
    // roundedRect(ctx, 53, 119, 49, 16, 6);
    // roundedRect(ctx, 135, 53, 49, 33, 10);
    // roundedRect(ctx, 135, 119, 25, 49, 10);

    // ctx.beginPath();
    // ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    // ctx.lineTo(31, 37);
    // ctx.fill();

    // for (let i = 0; i < 8; i += 1) {
    //     ctx.fillRect(51 + (i * 16), 35, 4, 4);
    // }

    // for (let i = 0; i < 6; i += 1) {
    //     ctx.fillRect(115, 51 + (i * 16), 4, 4);
    // }

    // for (let i = 0; i < 8; i += 1) {
    //     ctx.fillRect(51 + (i * 16), 99, 4, 4);
    // }

    // ctx.beginPath();
    // ctx.moveTo(83, 116);
    // ctx.lineTo(83, 102);
    // ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    // ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    // ctx.lineTo(111, 116);
    // ctx.lineTo(106.333, 111.333);
    // ctx.lineTo(101.666, 116);
    // ctx.lineTo(97, 111.333);
    // ctx.lineTo(92.333, 116);
    // ctx.lineTo(87.666, 111.333);
    // ctx.lineTo(83, 116);
    // ctx.fill();

    // ctx.fillStyle = 'white';
    // ctx.beginPath();
    // ctx.moveTo(91, 96);
    // ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    // ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    // ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    // ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    // ctx.moveTo(103, 96);
    // ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    // ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    // ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    // ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    // ctx.fill();

    // ctx.fillStyle = 'black';
    // ctx.beginPath();
    // ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    // ctx.fill();

    // function roundedRect(ctx, x, y, width, height, radius) {
    //     ctx.beginPath();
    //     ctx.moveTo(x, y + radius);
    //     ctx.lineTo(x, y + (height - radius));
    //     ctx.arcTo(x, y + height, x + radius, y + height, radius);
    //     ctx.lineTo(x + (width - radius), y + height);
    //     ctx.arcTo(x + width, y + height, x + width, y + (height-radius), radius);
    //     ctx.lineTo(x + width, y + radius);
    //     ctx.arcTo(x + width, y, x + (width - radius), y, radius);
    //     ctx.lineTo(x + radius, y);
    //     ctx.arcTo(x, y, x, y + radius, radius);
    //     ctx.stroke();
    // }

    // const rectangle = new Path2D();
    // rectangle.rect(10, 10, 50, 50);

    // const circle = new Path2D();
    // circle.moveTo(125, 35);
    // circle.arc(100, 35, 25, 0, 2 * Math.PI);

    // const someSVG = new Path2D('M10 10 h 80 v 80 h -80 Z');

    // // ctx.stroke(rectangle);
    // // ctx.fill(circle);
    // ctx.stroke(someSVG);

    // for (let i = 0; i < 6; i += 1) {
    //     for (let j = 0; j < 6; j += 1) {
    //         ctx.strokeStyle = `rgb(0, ${Math.floor(255 - (42.5 * i))}, ${Math.floor(255 - (42.5 * j))})`;
    //         ctx.beginPath();
    //         ctx.arc(12.5 + (j * 25), 12.5 + (i * 25), 10, 0, Math.PI * 2, true);
    //         ctx.stroke();
    //     }
    // }
    // ctx.fillStyle = '#FD0';
    // ctx.fillRect(0, 0, 75, 75);
    // ctx.fillStyle = '#6C0';
    // ctx.fillRect(75, 0, 75, 75);
    // ctx.fillStyle = '#09F';
    // ctx.fillRect(0, 75, 75, 75);
    // ctx.fillStyle = '#F30';
    // ctx.fillRect(75, 75, 75, 75);
    // ctx.fillStyle = '#FFF';

    // // set transparency value
    // ctx.globalAlpha = 0.2;

    // // Draw semi transparent circles
    // for (let i = 0; i < 7; i += 1) {
    //     ctx.beginPath();
    //     ctx.arc(75, 75, 10 + (10 * i), 0, Math.PI * 2, true);
    //     ctx.fill();
    // }
    // const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
    // lingrad.addColorStop(0, '#00ABEB');
    // lingrad.addColorStop(0.5, '#fff');
    // lingrad.addColorStop(0.5, '#26C000');
    // lingrad.addColorStop(1, '#fff');
    // ctx.fillStyle = lingrad;
    // ctx.fillRect(10, 10, 130, 130);

    // const img = new Image();
    // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg/230px-Kitten_in_Rizal_Park%2C_Manila.jpg';

    // img.addEventListener('load', () => {
    //     ctx.drawImage(img, 0, 0);
    //     ctx.beginPath();
    //     ctx.moveTo(30, 96);
    //     ctx.lineTo(70, 66);
    //     ctx.lineTo(103, 76);
    //     ctx.lineTo(170, 15);
    //     ctx.stroke();
    // }, false);
};

body.onload = draw;