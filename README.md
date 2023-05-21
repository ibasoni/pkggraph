# package-json-graph
![Coverage Badge](https://raw.githubusercontent.com/ibasoni/pkggraph/master/coverage/badge-statements.svg)  
Generate a graph using several package.json files (suitable for mono-repo codebases)

## Start
```
npx package-json-graph
```
This will generate a file `./graph.svg` similar to this one (generated for React repo from Github):  
![React's package json graph](https://raw.githubusercontent.com/ibasoni/pkggraph/master/docs/react-repo-graph.svg)

## Install
```
npm i -D package-json-graph
```

## CLI Options
### --format (default "svg")  
values: "dot" or "svg"
### --out (default "./graph")  
Output file name without extension (the extension is added from the format option)