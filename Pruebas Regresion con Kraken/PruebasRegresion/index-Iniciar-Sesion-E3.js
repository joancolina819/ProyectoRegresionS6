const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){

        let datetime = new Date().toISOString().replace(/:/g,".");
        let resultInfo = {}
        
        for(let i=1;i <= 7; i++)
        {
          const data = await compareImages(
              fs.readFileSync(`./CompararImagenes/Iniciar_Sesion-E3-V3/screenshots/${i}.png`),
              fs.readFileSync(`./CompararImagenes/Iniciar_Sesion-E3-V5/screenshots/${i}.png`),
              options
          );
   
          resultInfo[i] = {
              isSameDimensions: data.isSameDimensions,
              dimensionDifference: data.dimensionDifference,
              rawMisMatchPercentage: data.rawMisMatchPercentage,
              misMatchPercentage: data.misMatchPercentage,
              diffBounds: data.diffBounds,
              analysisTime: data.analysisTime
          }
          fs.writeFileSync(`./results/${i}.png`, data.getBuffer());
        }
    
    fs.writeFileSync(`./results/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../CompararImagenes/Iniciar_Sesion-E3-V3/screenshots/${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../CompararImagenes/Iniciar_Sesion-E3-V5/screenshots/${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

const cantImagenes=[1,2,3,4,5,6,7];

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="./results"> Iniciar Sesion</a>
            </h1>
            <p>Pruebas Executed: ${datetime}</p>
            <div id="visualizer">
            ${cantImagenes.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}