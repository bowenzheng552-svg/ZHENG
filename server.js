const http=require('http');
const fs=require('fs');
const path=require('path');
const dir='C:/Users/JOYY/Documents/Codex/2026-07-02/x-hou/outputs';
http.createServer((req,res)=>{
    let fp=path.join(dir,req.url==='/'?'index.html':decodeURIComponent(req.url));
    try{
        let data=fs.readFileSync(fp);
        let ext=path.extname(fp).toLowerCase();
        let m={'text/html; charset=utf-8':['.html'],'text/css':['.css'],'text/javascript':['.js'],'image/png':['.png'],'image/jpeg':['.jpg','.jpeg']};
        let ct='text/plain';
        for(let k in m){if(m[k].includes(ext)){ct=k;break}}
        res.writeHead(200,{'Content-Type':ct});
        res.end(data);
    }catch(e){
        res.writeHead(404);
        res.end('Not found');
    }
}).listen(3000);
