import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';
import { resolve, join } from 'path'; // Importando funções para manipulação segura de caminhos

const baseDir = resolve('./mod'); // Caminho absoluto da pasta segura

createServer((req, res) => {
    let q = parse(req.url, true);
    let filename = join(baseDir, q.pathname); // Garante que o caminho fique dentro da pasta base

    // Verifica se o arquivo está realmente dentro do baseDir
    if (!filename.startsWith(baseDir)) {
        res.writeHead(403, { 'Content-Type': 'text/html' });
        return res.end("403 Forbidden: Acesso Negado");
    }

    readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080");
});
