const AsyncHandler = (requestHandler: any) => {
    return (req: Express.Request, res: Express.Response, next: any) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err: any) =>
            next(err)
        );
    };
};

export { AsyncHandler };
