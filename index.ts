import * as Promise from "bluebird"
import * as ftps from "ftps"


export interface IFtpsDepConf {

  host: string // Required
  username?: string // Optional. Use empty username for anonymous access.
  password?: string // Required if username is not empty, except when requiresPassword: false
  protocol?: string // Optional, values : 'ftp', 'sftp', 'ftps', ... default: 'ftp'
  // protocol is added on beginning of host, ex : sftp://domain.com in this case
  port?: string // Optional
  // port is added at the end of the host, ex : sftp://domain.com:28 in this case
  escape?: boolean // optional, used for escaping shell characters (space, $, etc.), default: true
  retries?: number // Optional, defaults to 1 (1 = no retries, 0 = unlimited retries)
  timeout?: number // Optional, Time before failing a connection attempt. Defaults to 10
  retryInterval?: number // Optional, Time in seconds between attempts. Defaults to 5
  retryMultiplier?: number // Optional, Multiplier by which retryInterval is multiplied each time new attempt fails. Defaults to 1
  requiresPassword?: boolean // Optional, defaults to true
  autoConfirm?: boolean // Optional, defaults to false
  cwd?: string // Optional, defaults to the directory from where the script is executed
  additionalLftpCommands?: string // Additional commands to pass to lftp, splitted by ';'
  requireSSHKey?: boolean // This option for SFTP Protocol with ssh key authentication
  sshKeyPath?: string // ssh key path for, SFTP Protocol with ssh key authentication

}


export interface IFtpsClassConf {
  host: string
  port?: number
  username?: string // Optional. Use empty username for anonymous access.
  password?: string // Required if username is not empty, except when requiresPassword: false
}

export interface IFtpClassConf {
  host: string
  port?: number
  username?: string // Optional. Use empty username for anonymous access.
  password?: string // Required if username is not empty, except when requiresPassword: false
}


export class SFtpMan extends ftps {

  constructor(ftpsManConfig: IFtpsClassConf) {




    const ftpsConfig: IFtpsDepConf = {
      host: ftpsManConfig.host,
      port: ftpsManConfig.port.toString() || '22',
      protocol: 'sftp',
      autoConfirm: true
    }


    super(ftpsConfig)
  }



}






export class FtpMan extends ftps {

  constructor(ftpManConfig: IFtpClassConf) {



    const ftpConfig: IFtpsDepConf = {
      host: ftpManConfig.host,
      port: ftpManConfig.port.toString() || '21',
      protocol: 'ftp',
      autoConfirm: true
    }


    super(ftpConfig)
  }



}

