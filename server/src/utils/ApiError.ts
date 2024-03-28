class ApiError extends Error {
    statusCode: number;
    massage: string;
    error: any[];
    data: any;
    success: boolean;
    stack: any;
    constructor(
        statusCode: number,
        massage = "Internal server error",
        error = [] as any[],
        stack: any = null
    ) {
        super(massage);
        this.statusCode = statusCode;
        this.error = error;
        this.massage = massage;
        this.data = null;
        this.success = false;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export { ApiError };
