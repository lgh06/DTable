# DTable  

Dynamic Table 前(后)端动态表格行列，可行性测试， React + SSR (Next.js)


### TODO  
四步走战略：  
1. 能查
    - 根据某block_id 查询到多条数据 (进行中)
    - 分页 
    - 筛选  

1. 能建、能增
    - 新建block，可以对block命名  
    - 能在已有行最后，新增新行  
    - 能在已有列最后，一个一个增加新列  

1. 能改
    - 可以对block重新命名  
    - 改变每个表格单元格内的值，点击确定菜单保存。
    - 改变行顺序，拖动改变行顺序
    - 改变列顺序，新增dropdown菜单改变列顺序  

1. 能优雅地改
    - 直接拖动某列，改变列顺序
    - websocket改造，状态改变，自动保存更改  
    - 撤销，重做，历史版本保存
    - 历史版本恢复

### see also:  
https://github.com/vercel/next.js/tree/canary/examples/with-redux  next & redux template  
https://redux-toolkit.js.org/rtk-query/overview  Redux Toolkit, RTK query  


https://nextjs.org/docs/api-routes/dynamic-api-routes  next.js API routes  


https://docs.mongodb.com/manual/crud/  MongoDB manual CRUD  
https://docs.mongodb.com/drivers/node/current/usage-examples/find/  MongoDB NodeJS driver, find  


https://react-table.tanstack.com/docs/quick-start  React-Table  
https://codesandbox.io/s/5vxlnjrw1n?file=/DraggableTable.js  
React-Table - HOC DraggableTable, A react-table with draggable columns  

https://github.com/lgh06/web-prompter/  Another my project using React.  

# !!废弃!! 使用Parse-server  
配合parse-server后端使用。  
// Node.js version 15.x  
// MongoDB 5.x  
// 一行一行粘贴在命令行里  
```  
npx nrm use taobao  
npm install -g parse-server  
npm install -g mongodb-runner  ## 如果已有mongodb  这行可以省略  
mongodb-runner start  ##  如果已有mongodb  这行可以省略  
parse-server --appId aAppId --masterKey aSecretKey --databaseURI mongodb://localhost:27017/parseserverdb  
```


# Redux Toolkit TypeScript Example

This example shows how to integrate Next.js with [Redux Toolkit](https://redux-toolkit.js.org).

The **Redux Toolkit** is a standardized way to write Redux logic (create actions and reducers, setup the store with some default middlewares like redux devtools extension). This example demonstrates each of these features with Next.js

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-redux&project-name=with-redux&repository-name=with-redux)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-redux with-redux-app
# or
yarn create next-app --example with-redux with-redux-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
