/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();
var dao = require("./../oracleDB/dao");
var objoracle = require('oracledb');

router.get('/', (req: express.Request, res: express.Response) => {
    var sql = "begin :cursor := PKG_MIG_CONSULTAS.SMDAoRADUSel('101-18-002103'); end;";
    dao.open(sql, { cursor: { type: objoracle.CURSOR, dir: objoracle.BIND_OUT } }, false, res);


    //res.render('index', { title: 'Express' });

    res.end;
});

export default router;