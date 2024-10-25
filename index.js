const result_1 = require('./src/result_1')
const result_2 = require('./src/result_2')
const result_3 = require('./src/result_3')
const fs_promise = require('fs').promises

const write_1 = async () => {
    const filepath_1 = "SSK_1.json"
    const data = await result_1.getResult_1()
    try {
        await fs_promise.writeFile(filepath_1, JSON.stringify(data, null, 2))
        console.log('SSK data successfully written to SSK_1.json')
    } catch (err) {
        console.log('Error writing theater data to SSK_1.json')
    }
}

const write_2 = async () => {
    const filepath_2 = "SSK_2.json"
    const data = await result_2.getResult_2()
    try {
        await fs_promise.writeFile(filepath_2, JSON.stringify(data, null, 2))
        console.log('SSK data successfully written to SSK_2.json')
    } catch (err) {
        console.log('Error writing theater data to SSK_2.json')
    }
}

const write_3 = async () => {
    const filepath_3 = "SSK_3.json"
    const data = await result_3.getResult_3()
    try {
        await fs_promise.writeFile(filepath_3, JSON.stringify(data, null, 2))
        console.log('SSK data successfully written to SSK_3.json')
    } catch (err) {
        console.log(err)
        console.log('Error writing theater data to SSK_3.json')
    }
}

async function main() {
    await write_1()
    await write_2()
    await write_3()
}

main()