import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
    .load('https://prod.spline.design/VfrG29ka0to40KsN/scene.splinecode')
    .then(()=>{
        let spline = app.findObjectByName('Group 3')
      })