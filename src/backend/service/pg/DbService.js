const { Client } = require('pg');

class DbService {

    async getTableSchema(params) {

        try {
            const { rows } = await this.query(params, `
            select r.ordinal_position, r.table_name, r.column_name, r.table_description, r.column_type, r.is_nullable, string_agg(r.constraint_type, ';<br> ') as constraint_type, r.description from (
      
              SELECT a.ordinal_position, a.table_name, a.column_name, e.table_description,
                            case 
                                when domain_name is not null then domain_name
                                when data_type='character varying' THEN 'varchar('||character_maximum_length||')'
                                when data_type='numeric' THEN 'numeric('||numeric_precision||','||numeric_scale||')'
                                else data_type
                            end as column_type, 
                            a.is_nullable, c.constraint_type, e.description
                            FROM information_schema.columns as a
                            left join information_schema.key_column_usage as b on a.table_schema = b.table_schema and a.table_name = b.table_name and a.column_name = b.column_name 
                            left join information_schema.table_constraints as c on a.table_schema = b.table_schema and b.table_name = c.table_name and b.constraint_name = c.constraint_name
                            left join (
                                select d.table_schema,d.table_name,d.column_name,pgd.description, obj_description(pgd.objoid) as table_description 
                                FROM pg_catalog.pg_statio_all_tables as st
                                  inner join pg_catalog.pg_description pgd on (pgd.objoid=st.relid)
                                  inner join information_schema.columns d on (pgd.objsubid=d.ordinal_position
                                and  d.table_schema=st.schemaname and d.table_name=st.relname)
                            ) as e on a.table_schema = e.table_schema and a.table_name = e.table_name and a.column_name = e.column_name
                            where a.table_schema = 'public' 
              
              ) as r group by r.ordinal_position, r.table_name, r.column_name, r.table_description, r.column_type, r.is_nullable,  r.description order by r.table_name, r.ordinal_position 

                    `);

            return rows;
        } catch (err) {
            console.log('Database ' + err)
        }

    }

    async query(params, q) {

        const client = new Client({
            user: params.user,
            host: params.host,
            database: params.dbName,
            password: params.password,
            port: params.port,
        });

        await client.connect()
        let res
        try {
            try {
                res = await client.query(q)
            } catch (err) {
                throw err
            }
        } finally {
            client.end();
        }
        return res
    }

}

module.exports = DbService;