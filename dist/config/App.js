"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa las bibliotecas necesarias, incluyendo Express.js
const express_1 = __importDefault(require("express"));
// Crea una clase llamada Server
class App {
    // Constructor de la clase
    constructor() {
        // Inicializa una instancia de Express
        this.app = (0, express_1.default)();
        // Configura el puerto del servidor, usando el puerto proporcionado en las variables de entorno o el puerto 3000 por defecto
        this.port = parseInt(process.env.PORT || '3000');
        // Configura la aplicación y las rutas
        this.config();
        this.routes();
    }
    // Configura la aplicación Express
    config() {
        // Utiliza middleware para parsear automáticamente JSON en las solicitudes
        this.app.use(express_1.default.json());
    }
    // Configura las rutas de la aplicación
    routes() {
        // Define una ruta GET para la raíz ("/") que responde con "¡Hola, mundo!"
        this.app.get('/', (req, res) => {
            res.send('¡Hola, mundo!');
        });
    }
    // Método público para iniciar el servidor
    start() {
        // Inicia el servidor en el puerto especificado
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
// Exporta la clase Server como módulo
exports.default = App;
