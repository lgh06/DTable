# DTable  

Dynamic Table 前(后)端动态表格行列，可行性测试， React + SSR (Next.js)

TODO:  
- every cell, onChange event.  
- modify original data (or copy)  
- save to remote database (or local pouchdb / sqlite / cache)  

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
