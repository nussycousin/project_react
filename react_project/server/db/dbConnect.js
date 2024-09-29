const mongoosh = require('mongoose')

const main = async () => {
    try {
        await mongoosh.connect('mongodb://localhost:27017/projectBooks')
        console.log('connect to mongoDB')
    } catch (error) {
        console.error(error)
    }
}
main()