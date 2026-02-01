import { Request, Response } from 'express';

let confessionDb: any[] = [];

export const addNewConfessionFunction = (req: Request, res: Response) => {
  const { name, confession } = req.body;

  confessionDb.push(req.body);
  res.status(200).json({
    msg: 'Successfully added confession',
    result: confessionDb,
  });
  console.log('Confessions: ', confessionDb);
};
