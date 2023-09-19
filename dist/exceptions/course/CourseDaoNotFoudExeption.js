"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CourseDaoNotFoundException extends Error {
    constructor(error, message, statusCode) {
        super(message);
        this.error = error;
        this.message = message;
        this.statusCode = statusCode;
    }
    // Getter y Setter de Error
    setError(error) {
        this.error = error;
    }
    getError() {
        return this.error;
    }
    // Getter y Setter de statusCode
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
    }
    getStatusCode() {
        return this.statusCode;
    }
}
exports.default = CourseDaoNotFoundException;
