import {promises as fs} from 'fs'

export default {
    mkdir: jest.fn(),
    moveFile: jest.fn(),
    copyFile: jest.fn(),
    pathForBundle: jest.fn(),
    pathForGroup: jest.fn(),
    getFSInfo: jest.fn(),
    getAllExternalFilesDirs: jest.fn(),
    unlink: jest.fn(),
    exists: jest.fn(),
    stopDownload: jest.fn(),
    resumeDownload: jest.fn(),
    isResumable: jest.fn(),
    stopUpload: jest.fn(),
    completeHandlerIOS: jest.fn(),
    readDirAssets: jest.fn(),
    existsAssets: jest.fn(),
    readdir: jest.fn(),
    setReadable: jest.fn(),
    stat: jest.fn(),
    readFile: jest.fn(),
    read: jest.fn(),
    readFileAssets: jest.fn(),
    hash: jest.fn(),
    copyFileAssets: jest.fn(),
    copyFileAssetsIOS: jest.fn(),
    copyAssetsVideoIOS: jest.fn(),
    writeFile: jest.fn(),
    appendFile: jest.fn(),
    write: jest.fn(),
    downloadFile: jest.fn(),
    uploadFiles: jest.fn(),
    touch: jest.fn(),
    MainBundlePath: jest.fn(),
    CachesDirectoryPath: jest.fn(),
    DocumentDirectoryPath: jest.fn(),
    ExternalDirectoryPath: jest.fn(),
    ExternalStorageDirectoryPath: jest.fn(),
    TemporaryDirectoryPath: jest.fn(),
    LibraryDirectoryPath: jest.fn(),
    PicturesDirectoryPath: jest.fn(),
}

export const mkdir = (path:string) => {
    return fs.mkdir(path);
}
export const moveFile =  (oldPath:string, newPath:string)=>{
    return fs.rename(oldPath, newPath);
}
export const copyFile =  (source:string, destination:string)=>{
    return fs.copyFile(source, destination);
}
export const pathForBundle =  jest.fn()
export const pathForGroup =  jest.fn()
export const getFSInfo =  jest.fn()
export const getAllExternalFilesDirs =  jest.fn()
export const unlink =  async (filePath:string) => {
    return fs.rm(filePath, {
        recursive: true,
        force: true
    })
}
export const exists =  jest.fn()
export const stopDownload =  jest.fn()
export const resumeDownload =  jest.fn()
export const isResumable =  jest.fn()
export const stopUpload =  jest.fn()
export const completeHandlerIOS =  jest.fn()
export const readDirAssets =  jest.fn()
export const existsAssets =  jest.fn()
export const readdir =  jest.fn()
export const setReadable =  jest.fn()
export const stat =  (path:string)=>{
    return fs.stat(path);
}
export const readFile =  jest.fn()
export const read =  jest.fn()
export const readFileAssets =  jest.fn()
export const hash =  jest.fn()
export const copyFileAssets =  jest.fn()
export const copyFileAssetsIOS =  jest.fn()
export const copyAssetsVideoIOS =  jest.fn()
export const writeFile =  (filePath:string, content:string, encoding:string) => {
    return fs.writeFile(filePath, content)
};
export const appendFile =  jest.fn()
export const write =  jest.fn()
export const downloadFile =  jest.fn()
export const uploadFiles =  jest.fn()
export const touch =  jest.fn()
export const MainBundlePath =  "./__tests__/fileManagement/temp/main"
export const CachesDirectoryPath =  "./__tests__/fileManagement/temp/cache"
export const DocumentDirectoryPath = "./__tests__/fileManagement/temp/document"
export const ExternalDirectoryPath =  "./__tests__/fileManagement/temp/external"
export const ExternalStorageDirectoryPath = "./__tests__/fileManagement/temp/externalStorage"
export const TemporaryDirectoryPath =  "./__tests__/fileManagement/temp/temp"
export const LibraryDirectoryPath =  "./__tests__/fileManagement/temp/library"
export const PicturesDirectoryPath = "./__tests__/fileManagement/temp/pictures"
