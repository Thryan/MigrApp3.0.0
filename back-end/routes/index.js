"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express = require("express");
const router = express.Router();
var dao = require("./../oracleDB/dao");
var objoracle = require('oracledb');
router.get('/', (req, res) => {
    var sql = "begin :cursor := PKG_MIG_CONSULTAS.SMDAoRADUSel('101-18-002103'); end;";
    dao.open(sql, { cursor: { type: objoracle.CURSOR, dir: objoracle.BIND_OUT } }, false, res);
    //res.render('index', { title: 'Express' });
    res.end;
});
exports.default = router;
//# sourceMappingURL=index.js.map