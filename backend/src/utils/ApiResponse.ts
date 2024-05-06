class ApiResponse {
    statusCode: number;
    data: any;
    message: string;
    success: boolean | number;
    constructor(statusCode: number, data: any, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export { ApiResponse };
