import { Request, Response, NextFunction } from "express";
import { appError } from "./appErros";

const handleError = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof appError){
        return res.status(error.statusCode).json({
            message: error.message
        })
    }

    return res.status(500).json({
        message: 'internal server Error'
    })
}

export default handleError