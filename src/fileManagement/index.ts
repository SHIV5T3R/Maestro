import * as _locations from './fileLocations';
import {createFile as _createFile} from './createFile';
import {createFolder as _createFolder} from './createFolder'
import {deleteFolder as _deleteFolder} from './deleteFolder';
import {deleteFile as _deleteFile} from './deleteFile';
import {moveFile as _moveFile} from './moveFile';
import {copyFile as _copyFile} from './copyFile';
import {renameFile as _renameFile} from './renameFile';
import {info as _info} from './info';

export namespace FM{
    export const locations = _locations;
    export const createFile = _createFile;
    export const deleteFile = _deleteFile;
    export const createFolder = _createFolder;
    export const deleteFolder = _deleteFolder;
    export const moveFile = _moveFile;
    export const renameFile = _renameFile;
    export const copyFile = _copyFile;
    export const info = _info;
}

export default FM;
