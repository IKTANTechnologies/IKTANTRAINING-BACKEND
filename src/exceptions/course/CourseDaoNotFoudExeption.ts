export default class CourseDaoNotFoundException extends Error{
    private error: string;
    public message: string;
    private statusCode: Number;

    constructor(error: string, message: string, statusCode: Number){
        super(message)
        this.error = error;
        this.message = message;
        this.statusCode = statusCode;
    }

    // Getter y Setter de Error
    setError(error: string): void{
        this.error = error;
    }
    getError(): string{
        return this.error;
    }

    // Getter y Setter de statusCode
    setStatusCode(statusCode: Number): void{
        this.statusCode = statusCode;
    }
    getStatusCode(): Number{
        return this.statusCode
    }

}