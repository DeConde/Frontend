// const http = require('http');
// const hostname = 'xxx.xxx.x.xxx';
// const port = 3000;

// const web = `
// <!DOCTYPE html>
// <html lang="ru">
//  <head>
//   <title> Александр Македонский </title>
//   <link rel="icon" href="Македонский.ico"/>
//   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
//   <meta name="description" content="Александр Македонский, Александр Великий, Филипп II, Сражения Александра Македонского,диадохи, македонская фаланга, педзетайры, гетайры, гипасписты"/>
//   <meta name="keywords" content="Александр Македонский, Александр Великий, Филипп II, Сражения Александра Македонского,диадохи, македонская фаланга, педзетайры, гетайры, гипасписты"/>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="C.css">
//  </head>
//  <body>
//    <nav class="menu">
//     <ul>
//      <li><a href="">Главная</a></li>
//      <li><a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D0%B8%D0%BF%D0%BF_II_%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9" target="blank">Филипп II</a></li>
//      <li><a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B8%D0%B9" target="blank">Александр Великий</a></li>
//      <li><a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B0%D0%B4%D0%BE%D1%85%D0%B8" target="blank">Диадохи</a></li>
//      <li><a href="#">Разное</a>
//       <ul>
//        <li><a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0_%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE" target="blank">Сражения</a></li>
//        <li><a href="H.C.2.html" target="blank">Изображения</a></li>
//        <li><a href="">Другое</a></li>
//       </ul>
//      </li>
//     </ul>
//    </nav>
//    <article>
//     <p> Педзетайры - (др.-греч. πεζεταιροι) «пешие товарищи», так называли бойцов македонской фаланги (боевое построение пехоты в армии древней Македонии с IV до начала II в. до н. э.), 
//  основным оружием которых в плотном строю являлась сарисса (македонское название длинного копья). Так как сариссу необходимо было держать обеими руками, круглый слабовыпуклый
//  щит из меди диаметром 60 см., или обитый медью, вешался на левый локоть и возможно на шейный ремень. У педзетайров имелись также короткие мечи.  Доспех бойца представлял собой нагрудную броню,
//  либо из цельной пластины, либо из железной кольчуги.</p>
//      <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D1%84%D0%B0%D0%BB%D0%B0%D0%BD%D0%B3%D0%B0" target="blank"><img src="Педзетайры.jpg" alt="Педзетайры"title="Педзетайры" width="1000" height="600"/></a> 
//     <p> Гипасписты - «щитоносцы», по вооружению были близки к гоплитам, имели копьё, ксифос, шлем, круглый выпуклый щит аспис диаметром 90 см., панцирь, книмиды-поножи. В бою тесно взаимодействовали гетайрами и прикрывали фланги педзетайров.</p>
//      <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B8%D0%BF%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D1%82%D1%8B" target="blank"><img src="Гипаспист.jpg" alt="Гипасписты" title="Гипасписты" width="390" height="630"/></a>
//     <p> Гетайры - (др.-греч. ἑταῖροι) «товарищи, свита», тяжеловооруженные всадники составляющие ударную силу армии Александра Македоского. Так как сёдла и стремена в те времена ещё не были изобретены, гетайры вместо седла использовали шкуры. Основным оружием являлось кавалерийское копье. Так же был прямой меч длиной около 60 см являлся вспомогательным оружием и висел высоко на левом боку на перевязи через правое плечо. Из доспехов носили панцирь и шлем.</p>
//      <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D1%82%D0%B0%D0%B9%D1%80%D1%8B" target="blank"> <img src="Гетайры.jpg" alt="Гетайры" title="Гетайры" width="800" height="600"/> </a>	
//    </article>
//   <footer>© Copyright 2016. All Rights Reserved</footer>
//  </body>
// </html> `
 
// const server = http.createServer((req, res) => {
 
//  res.statusCode = 200;
 
//  res.setHeader('Content-Type', 'text/html', 'utf8');
//  res.end(web);
// });
 
// server.listen(port, hostname, () => {
//  console.log('Я получил оффер в Google!!!!!');
// });


let fs = require('fs');
let http = require('http');
const hostname = 'xxx.xxx.x.xxx';
const port = 3000;

let server = http.createServer( function(req, res){
 res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
 let myReadShort = fs.createReadStream(__dirname + '/H.C.html','utf-8');

  myReadShort.pipe(res);

});
server.listen(port, hostname);
console.log('Я получил оффер в Google!!!!!');



