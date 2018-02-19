"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Promise = require("bluebird");
const ftps = require("ftps");
class FtpManMethods extends ftps {
    constructor(opts) {
        super(opts);
    }
    promisedGet(source, destination) {
        const that = this;
        return new Promise((resolve, reject) => {
            super.get(source, destination).exec((err, res) => {
                if (err)
                    return reject(err);
                if (!res)
                    return reject('no answer');
                if (res.error)
                    return reject(res.error);
                resolve(res.data);
            });
        });
    }
}
exports.FtpManMethods = FtpManMethods;
class SFtpMan extends FtpManMethods {
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
exports.SFtpMan = SFtpMan;
class FtpMan extends FtpManMethods {
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
