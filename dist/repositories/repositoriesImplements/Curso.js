"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoClass = void 0;
class CursoClass {
    constructor(nombreCurso, areaTematica, imagenCurso, bannerCurso, fechaCreacion, trailerCurso) {
        this.nombreCurso = nombreCurso;
        this.areaTematica = areaTematica;
        this.imagenCurso = imagenCurso;
        this.bannerCurso = bannerCurso;
        this.fechaCreacion = fechaCreacion;
        this.trailerCurso = trailerCurso;
    }
}
exports.CursoClass = CursoClass;
const cursoPPCIEM = new CursoClass("PPCIEM", "Indutria Petrolera", [{ url: "imagen.png", clave: "imagen1" }], [{ url: "imagen.png", clave: "imagen1" }], "2023-09-19", [{ url: "imagen.png", clave: "imagen1" }]);
console.log(cursoPPCIEM);
