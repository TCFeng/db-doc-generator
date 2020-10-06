const DBService = require('./pg/DBService');
const DocService = require('./pg/DocService');

class PgDocService {

    // 1. DB 連線，取得Client
    static async getDoc(params) {
        let htmltext;
        const dBService = new DBService();
        const docService = new DocService();
        try {
            const tableData = await dBService.getTableSchema(params);
            const schemaData = docService.fixTableData(tableData);
            htmltext = docService.genTableDoc(schemaData, params);
        } catch (error) {
            return {
                errorMsg: 'DB Connect Error'
            };
        }
        console.log({htmltext});
        return {
            htmltext
        };
    }
    
}

module.exports = PgDocService;