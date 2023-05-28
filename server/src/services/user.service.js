const getModels = require('../config/db_config')

let models = null;
(async () => {
    models = await (async () => {
        return await getModels()
    })()
})()