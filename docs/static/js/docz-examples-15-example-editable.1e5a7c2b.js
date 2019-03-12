(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./docz/examples/15-example-editable.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return x});var a=t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),o=t.n(a),r=t("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=t.n(r),s=t("./node_modules/@babel/runtime/helpers/createClass.js"),l=t.n(s),d=t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),u=t.n(d),m=t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),c=t.n(m),p=t("./node_modules/@babel/runtime/helpers/inherits.js"),h=t.n(p),b=t("./node_modules/react/index.js"),f=t.n(b),w=t("./node_modules/@mdx-js/tag/dist/index.js"),_=t("./docz/utils/Playground.jsx"),j=t("./src/material-table.js"),x=function(e){function n(e){var t;return i()(this,n),(t=u()(this,c()(n).call(this,e))).layout=null,t}return h()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=o()(e,["components"]);return f.a.createElement(w.MDXTag,{name:"wrapper",components:n},f.a.createElement(w.MDXTag,{name:"h2",components:n,props:{id:"editable-examples"}},"Editable Examples"),f.a.createElement(_.a,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  columns={[\n    { title: 'Name', field: 'name' },\n    { title: 'Surname', field: 'surname' },\n    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Birth Place',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Zerya Bet\xfcl', surname: 'Baran', birthYear: 2017, birthCity: 34 },\n  ]}\n  editable={{\n    onRowAdd: newData =>\n      new Promise((resolve, reject) => {\n        setTimeout(() => {\n          {\n            /* const data = this.state.data;\n        data.push(newData);\n        this.setState({ data }, () => resolve()); */\n          }\n          resolve()\n        }, 1000)\n      }),\n    onRowUpdate: (newData, oldData) =>\n      new Promise((resolve, reject) => {\n        setTimeout(() => {\n          {\n            /* const data = this.state.data;\n    const index = data.indexOf(oldData);\n    data[index] = newData;                \n    this.setState({ data }, () => resolve()); */\n          }\n          resolve()\n        }, 1000)\n      }),\n    onRowDelete: oldData =>\n      new Promise((resolve, reject) => {\n        setTimeout(() => {\n          {\n            /* let data = this.state.data;\n    const index = data.indexOf(oldData);\n    data.splice(index, 1);\n    this.setState({ data }, () => resolve()); */\n          }\n          resolve()\n        }, 1000)\n      }),\n  }}\n/>",__scope:{props:this?this.props:t,Playground:_.a,MaterialTable:j.b}},f.a.createElement(j.b,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth Place",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Zerya Bet\xfcl",surname:"Baran",birthYear:2017,birthCity:34}],editable:{onRowAdd:function(e){return new Promise(function(e,n){setTimeout(function(){e()},1e3)})},onRowUpdate:function(e,n){return new Promise(function(e,n){setTimeout(function(){e()},1e3)})},onRowDelete:function(e){return new Promise(function(e,n){setTimeout(function(){e()},1e3)})}}})))}}]),n}(f.a.Component);x.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docz/utils/Playground.jsx":function(e,n,t){"use strict";var a=t("./node_modules/docz/dist/index.m.js"),o=t("./node_modules/codemirror/lib/codemirror.js");t.n(o).a.defaults.viewportMargin=1/0,n.a=a.e}}]);
//# sourceMappingURL=docz-examples-15-example-editable.2b83b0dfa820716f1348.js.map