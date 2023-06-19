

// const RN = jest.requireActual("react-native"); // use original implementation, which comes with mocks out of the box
// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

import { FM } from '../../src/fileManagement/index';
const testFileDirectory = FM.locations.TEMPORARY_DIRECTORY_PATH;

it("should be able to create temp folder",(async ()=>{
    await FM.createFolder("__tests__/fileManagement/temp");
}))

it('should be able to create the temp directory', async ()=>{
    await FM.createFolder(FM.locations.TEMPORARY_DIRECTORY_PATH);
});

test("it should be able to create files", async ()=>{
    const testFileName = "test.txt";
    const testFilePath = testFileDirectory + "/" + testFileName;
    await FM.createFile(testFilePath, "this is a test file");
    const info = await FM.info(testFilePath);
    expect(info.isFile()).toBe(true);
})


test("it should be able to create folders", async ()=>{
    const testFolderPath = testFileDirectory + "/" + "testFolder";
    await FM.createFolder(testFolderPath);
    const info = await FM.info(testFolderPath);
    expect(info.isDirectory()).toBe(true)
})



test("it should be able to move files", async ()=>{
    const testFileName = "test.txt";
    const testFilePath = testFileDirectory + "/" + testFileName;
    const destination = testFileDirectory + "/" + "test_moved.txt";
    await FM.moveFile(testFilePath, destination);
    const info = await FM.info(destination);
    expect(info.isFile()).toBe(true)
})

test("it should be able to move folders", ()=>{
    throw Error('TODO')
})

test("it should be able to duplicate (copy) files", ()=>{
    throw Error('TODO')

})

test("it should be able to duplicate (copy) folders", ()=>{
    throw Error('TODO')

})

test("it should be able to rename files", ()=>{
    throw Error('TODO')

})

test("it should be able to rename folders", ()=>{
    throw Error('TODO')

})


test("it should be able to delete files", async ()=>{
    const testFileName = "test.txt";
    const testFilePath = testFileDirectory + "/" + testFileName;
    await FM.deleteFile(testFilePath);
    let error = null;
    try{
        const info = await FM.info(testFilePath);
    }catch(e){
        error = e;
    }
    expect(error).not.toBe(null);
})

test("it should be able to delete folders", async ()=>{
    const testFolderPath = testFileDirectory + "/" + "testFolder";
    await FM.deleteFolder(testFolderPath);
    let error = null;
    try{
        const info = await FM.info(testFolderPath);
    }catch(e){
        error = e;
    }
    expect(error).not.toBe(null);
})



test("it should be able to recursively delete temp folder",async ()=>{
    await FM.deleteFolder("__tests__/fileManagement/temp");
})