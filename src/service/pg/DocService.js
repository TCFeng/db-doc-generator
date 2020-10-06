const fs = require('fs')
const path = require('path')
const createHTML = require('create-html')

class DocService {

    genTableDoc(schemaData, params) {
        const tables = schemaData.tableNames.map(item => {
            return `<li><a href='#${item}'>${item}</a></li>`;
        }).join("");

        const tablesDetail = this.genTableDetail(schemaData.schemaData, params.projectName);

        // console.log(schemaData.tableNames);
        const htmlContent = createHTML({
            title: 'Table schema',
            head: `<style type="text/css">
            html, body {
                width: 100%;
                height: 100%;
              }
              .container {
                display: flex;
                height: 100vh;
              }
              .container .menu {
                width: 350px;
                overflow-y: scroll;

                position: fixed;
                top: 10px;
                left: 10px;
                bottom: 10px;
              }

              .container .menu ul li {
                list-style:none;
                padding-top:2px;
              }

              .container .menu > div {
                height: 20px;
              }
              .container .content {
                flex: 1;
                margin-left: 300px;
              }

              table {
                border-collapse: collapse;
                width: 90%;
                margin-bottom: 100px;
              }
              
              table, th, td {
                border: 1px solid black;
                padding: 5px 10px 5px 5px;
                word-break:break-all;
              }

              .bar {
                background-color:#2A323E;
                color:#FFFFFF;
                padding:.8em .5em .4em .8em;
                height:auto;/*height:1.8em;*/
                font-size:11px;
                margin:0;
              }

              a:link, a:visited {
                text-decoration:none;
                color:#4A6782;
              }


                       
            </style>`,
            body: `<div class="container">
            <div class="menu">
                <h1 class="bar">Tables</h1>
                <ul>
                ${tables}
                </ul>
            </div>
            <div class ="content" align="center">${tablesDetail}</div>
          </div>`
        })

        return htmlContent;
    }

    genTableDetail(params, projectName) {

        // 先合併資料，如果seq相同，後面的欄位Key應合併，其他的其實可以全部group by

        
        let htmlContent = `<div><h1>${projectName} Table Schema</h1></div>`;
        params.forEach(table => {

            const columnlist = table.columnlist;
            let columnHtml = '';

            columnlist.forEach(column => {
                columnHtml = columnHtml + `
                    <tr>
                        <td>${column.ordinal_position}</td>
                        <td>${column.column_name}</td>
                        <td>${column.description === null ? '' : column.description}</td>
                        <td>${column.constraint_type === null ? '' : column.constraint_type}</td>
                        <td>${column.column_type === null ? '' : column.column_type}</td>
                        <td>${column.is_nullable}</td>
                    </tr>
                `
            })


            htmlContent = htmlContent + `<table id='${table.tableName}'>
                    <tr>
                        <td width="8%">Table Name</td>
                        <td colspan="7" >${table.tableName}</td>
                    </tr>
                    <tr>
                        <td width="8%">Describe</td>
                        <td colspan="7" >${table.tableDescription}</td>
                    </tr>
                    <tr style="border-bottom: 3px double black">
                        <td width="8%">Seq</td>
                        <td width="17%">Name</td>
                        <td width="45%" style="word-wrap: break-word;">Description</td>
                        <td width="10%">Key</td>
                        <td width="15%">Type</td>
                        <td width="5%">Nullable</td>
                    </tr>
                    ${columnHtml}
                </table>`;
        })

        return htmlContent;
    }



    fixTableData(params) {

        const tableNames = [...(new Set(params.map(({ table_name }) => table_name)))];
        const schemaData = tableNames.map(tableName => {

            const tableDesc = params.find(column => column.table_name === tableName && column.table_description != null);
            return {
                tableName,
                tableDescription: tableDesc == null ? '' : tableDesc.table_description,
                columnlist: params.filter(column => column.table_name === tableName)
            }
        });

        return { tableNames, schemaData }
    }

}

module.exports = DocService