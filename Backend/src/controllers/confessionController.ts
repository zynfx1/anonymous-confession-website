import { Request, Response } from 'express';
import pool from '../config/database';

export const addNewConfessionFunction = async (req: Request, res: Response) => {
  const { id, name, confession, minutes, seconds, endTime } = req.body;
  try {
    const totalSeconds = minutes * 60 + seconds;
    const timerEndTime = Date.now() + totalSeconds * 1000;

    await pool.query(
      'INSERT INTO card_tb ( card_name, card_confession, card_minutes, card_seconds, timer_end_time ) VALUES (?,?,?,?,?)',
      [name, confession, minutes, seconds, timerEndTime],
    );
    const [getConfession]: any = await pool.query(
      'SELECT id as id,  card_name as name, card_confession as confession, card_minutes as minutes, card_seconds as seconds, timer_end_time as endTime FROM card_tb',
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

export const deleteConfessionFunction = async (req: Request, res: Response) => {
  const idToDelete = req.params.id;
  //confessionDb = confessionDb.filter((con) => con.id !== idToDelete);
  try {
    await pool.query('DELETE FROM card_tb WHERE id = ?', [idToDelete]);
    res.status(200).json({ msg: 'Successfully Deleted card' });
  } catch (error) {
    res.status(500).json({ msg: 'Delete confession card error' });
  }
};

export const activeCardFunction = async (req: Request, res: Response) => {
  try {
    const [allConfessions]: any = await pool.query(
      'SELECT id as id, card_name as name, card_confession as confession, card_minutes as minutes, card_seconds as seconds, timer_end_time as endTime FROM card_tb',
    );
    res.status(200).json({ msg: 'Active card found', con: allConfessions });
  } catch (error) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
