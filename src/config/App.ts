// Importa las bibliotecas necesarias, incluyendo Express.js
import express, { Application, Request, Response } from 'express';

// Crea una clase llamada Server
class App {
  private app: Application;
  private port: number;

  // Constructor de la clase
  constructor() {
    // Inicializa una instancia de Express
    this.app = express();
    // Configura el puerto del servidor, usando el puerto proporcionado en las variables de entorno o el puerto 3000 por defecto
    this.port = parseInt(process.env.PORT || '3000');
    // Configura la aplicación y las rutas
    this.config();
    this.routes();
  }

  // Configura la aplicación Express
  private config() {
    // Utiliza middleware para parsear automáticamente JSON en las solicitudes
    this.app.use(express.json());
  }

  // Configura las rutas de la aplicación
  private routes() {
    // Define una ruta GET para la raíz ("/") que responde con "¡Hola, mundo!"
    this.app.get('/', (req: Request, res: Response) => {
      res.send('¡Hola, mundo!');
    });
  }

  // Método público para iniciar el servidor
  public start() {
    // Inicia el servidor en el puerto especificado
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

// Exporta la clase Server como módulo
export default App;
