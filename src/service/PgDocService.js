const DBService = require('./pg/DBService');

class PgDocService {

    // 1. DB 連線，取得Client
    static async getDoc(params) {
        const client = new DBService();
        try {
            await client.connect(params);
            const result = await client.query('select * from hcm_user_info limit 1');
            console.log(result.rows);
        } catch (error) {
            console.log('fail', error);
            throw error;
        } finally {
            await client.close();
        }




    }
    // 2. 產生文件，利用Client做事
    // 3. 關閉DB，關閉Client
    // 4. 回傳文件
}

module.exports = PgDocService;