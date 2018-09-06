import http from 'http';

const server=http.createServer( (req, res)=>{
    res.write("Duc Pham, Testing");
    setTimeout(()=>{
        res.write(
            'I can Fuck'
        );
        res.end();
    },3000);});
server.listen(8080);
// import https from 'https'
// https.get('https://www.youtube.com',res=>{
//     console.log('Response status code: ',res.statusCode);
//
//     res.on('data',chunk=>{
//         console.log(chunk.toString());
//     })
// });

//
// import config,{nodeEnv,logStars} from './config';
// logStars('DUC PHAM');
//
// // console.log(config,nodeEnv);