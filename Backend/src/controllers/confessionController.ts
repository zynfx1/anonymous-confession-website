import { Request, Response } from 'express';
import pool from '../config/database';

let confessionDb: any[] = [];

export const addNewConfessionFunction = async (req: Request, res: Response) => {
  const { id, name, confession, minutes, seconds } = req.body;
  try {
    const [rows]: any = await pool.query(
      'INSERT INTO card_tb ( card_name, card_confession, card_minutes, card_seconds ) VALUES (?,?,?,?)',
      [name, confession, minutes, seconds],
    );
    /*await pool.query('INSERT INTO active_card ( card_confession ) VALUES (?)', [
      confession,
    ]);*/
    const [getConfession]: any = await pool.query(
      'SELECT id as id,  card_name as name, card_confession as confession, card_minutes as minutes, card_seconds as seconds FROM card_tb',
    );

    res.status(201).send({
      msg: 'Successfully added confession',
      res: getConfession,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
  //confessionDb.push(req.body);
};

export const deleteConfessionFunction = (req: Request, res: Response) => {
  const idToDelete = req.params.id;
  confessionDb = confessionDb.filter((con) => con.id !== idToDelete);
  res
    .status(200)
    .json({ msg: 'Successfully Deleted card', result: confessionDb });

  console.log('Id deleted: ', confessionDb);
};

export const activeCardFunction = async (req: Request, res: Response) => {
  try {
    const [allConfessions]: any = await pool.query(
      'SELECT id as id, card_name as name, card_confession as confession, card_minutes as minutes, card_seconds as seconds FROM card_tb',
    );
    res.status(200).json({ msg: 'Active card found', con: allConfessions });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
