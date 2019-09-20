var objoracle = require('oracledb');
const cns = {
    user: "SVE_MIGR",
    password: "SVE_MIGR",
    connectString: "kannon.zofri.cl/qa"
};
function error(err, rs, cn) {
    if (err) {
        console.log(err.message);
        rs.contentType('application/json').status(500);
        rs.send(err.message);
        if (cn != null)
            close(cn);
        return -1;
    }
    else {
        return 0;
    }
}
function open(sql, binds, dml, rs) {
    objoracle.getConnection(cns, function (err, cn) {
        if (error(err, rs, null) == -1)
            return;
        cn.execute(sql, binds, { autoCommit: dml, prefetchRows: 1000 }, function (err, result) {
            if (error(err, rs, cn) == -1)
                return;
            rs.contentType('application/json').status(200);
            if (dml) {
                rs.send(JSON.stringify(result.rowsAffected));
            }
            else {
                var json = {};
                json['data'] = [];
                function processResultSet() {
                    result.outBinds.cursor.getRows(1000, function (err, rows) {
                        if (err)
                            throw err;
                        console.log(JSON.stringify(rows) + '*************************');
                        if (rows.length) {
                            let nombres = result.outBinds.cursor.metaData;
                            rows.forEach(function (row) {
                                var r = {};
                                row.forEach(function (col, idx) {
                                    r[nombres[idx]['name']] = col;
                                });
                                json['data'].push(r);
                            });
                            processResultSet(); //try to get more rows from the result set
                            return; //exit recursive function prior to closing result set
                        }
                        console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
                        console.log(result.outBinds.cursor.metaData);
                        rs.send(JSON.stringify(json));
                        /* result.resultSet.close(function (err) {
                             if (err) console.error(err.message);
                             */
                        close(cn);
                        // });
                    });
                }
                processResultSet();
                /*let nombres = result.metaData;
                let filas = result.rows
                let json = new Array();
                json['data'] = "";
                var row = {}

                filas.forEach(function (fila) {
                    fila.forEach(function (col, idx) {
                        row[nombres[idx]['name']] = col;
                    });
                    json.push(row);
                });*/
            }
            //close(cn);
        });
    });
}
function fetchRowsFromRS(connection, resultSet, numRows) {
    resultSet.getRows(// get numRows rows
    numRows, function (err, rows) {
        if (err) {
            console.log(err);
            //doClose(connection, resultSet); // always close the ResultSet
        }
        else if (rows.length === 0) { // no rows, or no more rows
            //doClose(connection, resultSet); // always close the ResultSet
        }
        else if (rows.length > 0) {
            console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
            console.log(rows);
            fetchRowsFromRS(connection, resultSet, numRows);
        }
    });
}
function close(cn) {
    cn.release(function (err) {
        if (err) {
            console.log(err.message);
        }
    });
}
exports.open = open;
exports.close = close;
//# sourceMappingURL=dao.js.map