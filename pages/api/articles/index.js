import { articles} from '../../../data'

/* /api/articles */
export default function handler(req, res) {
    res.status(200).json(articles)
  }

  //you can put data from any where like sql data base or any thing