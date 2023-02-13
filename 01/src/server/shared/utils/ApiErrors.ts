export class ApiError extends Error {
  public readonly body: {} | undefined;
  public readonly statusCode: number;
  constructor(message: string, statusCode: number, body?: {} | undefined) {
    super(message);
    this.statusCode = statusCode;
    this.body = body;
  }
}
