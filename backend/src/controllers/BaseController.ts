import {Response} from 'express';

export function success(res: Response, body?: any) {
    res.status(200);
    res.json(body)
}

export function created(res: Response, body: any) {
    res.status(201);
    res.json(body)
}

export function error(res: Response, err, httpErrorCode: number = 400) {
    res.status(httpErrorCode);
    res.json(err)
}