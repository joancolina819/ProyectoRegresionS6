const fs = require('fs');
const path = require('path');
const resemble = require('resemblejs');
const v3Folder = 'cypress/screenshots/Regresion/v3';
const v5Folder = 'cypress/screenshots/Regresion/v5';
const v3Files = fs.readdirSync(v3Folder);
const v5Files = fs.readdirSync(v5Folder);
const results = [];
v3Files.forEach((file, index) => {
  const v3Image = fs.readFileSync(`${v3Folder}/${file}`);
  const v5Image = fs.readFileSync(`${v5Folder}/${v5Files[index]}`);
  resemble(v3Image)
    .compareTo(v5Image)
    .ignoreColors()
    .onComplete((result) => {
      console.log(`La comparación de ${file} se completó. El resultado es ${result.misMatchPercentage}% diferente.`);
      results.push({
        name: file,
        misMatchPercentage: result.misMatchPercentage,
        isSameDimensions: result.isSameDimensions,
        dimensionDifference: result.dimensionDifference,
        rawMisMatchPercentage: result.rawMisMatchPercentage,
        diffBounds: result.diffBounds,
        analysisTime: result.analysisTime,
        v3Image: path.join(v3Folder, file),
        v5Image: path.join(v5Folder, v5Files[index])
      });
      if (results.length === v3Files.length) {
        // Generate HTML report
        const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Comparación de imágenes</title>
          <style>
            table {
              font-family: arial, sans-serif;
              border-collapse: collapse;
              width: 100%;
            }
            td, th {
              border: 1px solid #DDDDDD;
              text-align: left;
              padding: 8px;
            }
            tr:nth-child(even) {
              background-color: #DDDDDD;
            }
          </style>
        </head>
        <body>
          <h2>Reporte de comparación de imágenes</h2>
          <table>
            <tr>
              <th>Nombre de archivo</th>
              <th>Porcentaje de diferencia</th>
              <th>¿Mismas dimensiones?</th>
              <th>Diferencia en dimensiones</th>
              <th>Porcentaje de diferencia sin procesar</th>
              <th>Límites de diferencia</th>
              <th>Tiempo de análisis (ms)</th>
              <th>Imagen V3</th>
              <th>Imagen V5</th>
            </tr>
            ${results.map((result) => `
            <tr>
              <td>${result.name}</td>
              <td>${result.misMatchPercentage}</td>
              <td>${result.isSameDimensions}</td>
              <td>${result.dimensionDifference}</td>
              <td>${result.rawMisMatchPercentage}</td>
              <td>${JSON.stringify(result.diffBounds)}</td>
              <td>${result.analysisTime}</td>
              <td><img src="${result.v3Image}" width="200"></td>
              <td><img src="${result.v5Image}" width="200"></td>
            </tr>
            `).join('')}
          </table>
        </body>
        </html>
        `;
        fs.writeFileSync('comparison-reporte.html', html);
      }
    });
});