"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ftps = require("ftps");
class FtpsMan extends ftps {
    constructor(ftpsManConfig) {
        const ftpsConfig = {
            host: ftpsManConfig.host,
            port: ftpsManConfig.port.toString() || '22',
            protocol: 'sftp',
            autoConfirm: true
        };
        super(ftpsConfig);
    }
}
exports.FtpsMan = FtpsMan;
class FtpMan extends ftps {
    constructor(ftpManConfig) {
        const ftpConfig = {
            host: ftpManConfig.host,
            port: ftpManConfig.port.toString() || '21',
            protocol: 'ftp',
            autoConfirm: true
        };
        super(ftpConfig);
    }
}
exports.FtpMan = FtpMan;
