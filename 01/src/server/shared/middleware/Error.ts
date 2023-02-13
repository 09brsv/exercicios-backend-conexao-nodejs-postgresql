import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiErrors";


export const errors = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Erro interno do servidor'

  error.body 
  ? res.status(statusCode).json({ erros: error.body })
  : res.status(statusCode).json({ message });
};