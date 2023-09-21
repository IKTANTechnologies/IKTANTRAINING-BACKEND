import * as dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response } from 'express';
import Database from './Database'; // Importa la clase Database

class App {
  private app: Application;
  private port: number;
  private db: Database;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT || '3000');
    this.config();
    this.routes();

    this.db = new Database();
    this.db.connect().then(() => {
      console.log(`Conexión a la base de datos establecida`);
    });
  }

  private config() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('¡Hola, mundo!');
    });
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default App;
