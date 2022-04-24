export class Result {
    constructor(public readonly status: number, public readonly data?: unknown) {}

    static ok(data?: unknown) {
        return data ? new Result(200, data) : new Result(200);
    }
    static created() {
        return  new Result(201);
    }
    static badRequest(data: unknown) {
        return new Result(400, data)
    }
    static internalServerError(data?: unknown) {
        return new Result(500, data)
    }
    static notFound(message?: string) {
        return new Result(404, {message})
    }

    //other status codes
}
