(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(2),r=n(6),i=(n(0),n(230)),a=n(234),s=n(235),l={title:"Subscriptions"},u={id:"graphql/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Before reading this it is recommended to read the nestjs graphql subscriptions docs.",source:"@site/docs/graphql/subscriptions.mdx",permalink:"/nestjs-query/docs/graphql/subscriptions",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/subscriptions.mdx",sidebar:"docs",previous:{title:"Aggregations",permalink:"/nestjs-query/docs/graphql/aggregations"},next:{title:"Relations",permalink:"/nestjs-query/docs/graphql/relations"}},d=[{value:"Enabling Subscriptions",id:"enabling-subscriptions",children:[{value:"Enabling/Disabling Individual Subscriptions",id:"enablingdisabling-individual-subscriptions",children:[]}]},{value:"Filtering Subscriptions",id:"filtering-subscriptions",children:[]},{value:"Custom PubSub Provider",id:"custom-pubsub-provider",children:[]}],p={rightToc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Before reading this it is recommended to read the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.nestjs.com/graphql/subscriptions"}),"nestjs graphql subscriptions docs"),"."))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query")," includes out of the box subscription support. When enabling subscriptions the following subscriptions will be created"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"created{ObjectName}")," - published when the ",Object(i.b)("inlineCode",{parentName:"li"},"createOne")," or ",Object(i.b)("inlineCode",{parentName:"li"},"createMany")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updatedOne{ObjectName}"),"  - published when the ",Object(i.b)("inlineCode",{parentName:"li"},"updateOne")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updatedMany{ObjectName}")," - published when ",Object(i.b)("inlineCode",{parentName:"li"},"updateMany")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deletedOne{ObjectName}")," - published when the ",Object(i.b)("inlineCode",{parentName:"li"},"deleteOne")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deletedMany{ObjectName}"),"  - published when ",Object(i.b)("inlineCode",{parentName:"li"},"deleteMany")," mutation is called.")),Object(i.b)("h2",{id:"enabling-subscriptions"},"Enabling Subscriptions"),Object(i.b)("p",null,"You can enable subscriptions through the auto-generated resolver using the ",Object(i.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," or by manually defining your resolver."),Object(i.b)("p",null,"In both cases you need to set the ",Object(i.b)("inlineCode",{parentName:"p"},"enableSubscriptions")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("p",null,"In the below example the following subscriptions will be exposed."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createdTodoItem")," - published when the ",Object(i.b)("inlineCode",{parentName:"li"},"createOne")," or ",Object(i.b)("inlineCode",{parentName:"li"},"createMany")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updatedOneTodoItem"),"  - published when the ",Object(i.b)("inlineCode",{parentName:"li"},"updateOne")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"updatedManyTodoItems")," - published when ",Object(i.b)("inlineCode",{parentName:"li"},"updateMany")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deletedOneTodoItem")," - published when the ",Object(i.b)("inlineCode",{parentName:"li"},"deleteOne")," mutation is called."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deletedManyTodoItems"),"  - published when ",Object(i.b)("inlineCode",{parentName:"li"},"deleteMany")," mutation is called.")),Object(i.b)(a.a,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"CRUDResolver",value:"resolver"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"module",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts" {17}',title:'"todo-item.module.ts"',"{17}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{\n        DTOClass: TodoItemDTO,\n        EntityClass: TodoItemEntity,\n        CreateDTOClass: TodoItemInputDTO,\n        UpdateDTOClass: TodoItemInputDTO,\n        enableSubscriptions: true,\n      }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),Object(i.b)(s.a,{value:"resolver",mdxType:"TabItem"},Object(i.b)("p",null,"When manually defining your resolver you must also provide a readonly ",Object(i.b)("inlineCode",{parentName:"p"},"pubSub")," property. In this the default ",Object(i.b)("inlineCode",{parentName:"p"},"PubSub")," implementation is injected."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.resolver.ts" {13,17}',title:'"todo-item.resolver.ts"',"{13,17}":!0}),"import { QueryService, InjectQueryService } from '@nestjs-query/core';\nimport { CRUDResolver, InjectPubSub } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { PubSub } from 'graphql-subscriptions';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  CreateDTOClass: TodoItemInputDTO,\n  UpdateDTOClass: TodoItemInputDTO,\n  enableSubscriptions: true,\n}) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n      @InjectPubSub() readonly pubSub: PubSub\n  ) {\n    super(service);\n  }\n}\n")))),Object(i.b)("h3",{id:"enablingdisabling-individual-subscriptions"},"Enabling/Disabling Individual Subscriptions"),Object(i.b)("p",null,"You also have the option to selectively enable or disable individual subscriptions."),Object(i.b)("p",null,"In this example the ",Object(i.b)("inlineCode",{parentName:"p"},"updatedMany")," and ",Object(i.b)("inlineCode",{parentName:"p"},"deletedMany")," subscriptions are disabled."),Object(i.b)(a.a,{defaultValue:"module",values:[{label:"NestjsQueryGraphQLModule",value:"module"},{label:"CRUDResolver",value:"resolver"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"module",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts" {18-19}',title:'"todo-item.module.ts"',"{18-19}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          enableSubscriptions: true,\n          update: { many: { enableSubscriptions: false } },\n          delete: { many: { enableSubscriptions: false } },\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n"))),Object(i.b)(s.a,{value:"resolver",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.resolver.ts" {14-15}',title:'"todo-item.resolver.ts"',"{14-15}":!0}),"import { QueryService, InjectQueryService } from '@nestjs-query/core';\nimport { CRUDResolver, InjectPubSub } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { PubSub } from 'graphql-subscriptions';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  CreateDTOClass: TodoItemInputDTO,\n  UpdateDTOClass: TodoItemInputDTO,\n  enableSubscriptions: true,\n  update: { many: { enableSubscriptions: false } },\n  delete: { many: { enableSubscriptions: false } },\n}) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n      @InjectPubSub() readonly pubSub: PubSub\n  ) {\n    super(service);\n  }\n}\n")))),Object(i.b)("h2",{id:"filtering-subscriptions"},"Filtering Subscriptions"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"created"),", ",Object(i.b)("inlineCode",{parentName:"p"},"updatedOne")," and ",Object(i.b)("inlineCode",{parentName:"p"},"deletedOne")," subscriptions all for a ",Object(i.b)("inlineCode",{parentName:"p"},"Filter")," to be passed in filter for events that match the criteria"),Object(i.b)("p",null,"The filter your provide is the same type that is used when querying for records."),Object(i.b)("p",null,"For example to filter for all created ",Object(i.b)("inlineCode",{parentName:"p"},"TodoItems")," where the like starts with ",Object(i.b)("inlineCode",{parentName:"p"},"Foo")," and is completed, you could do the following."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-graphql"}),'subscription {\n  createdTodoItem(\n    input: { filter: { title: { like: "Foo%" }, completed: { is: true } } }\n  ) {\n    id\n    title\n    description\n    completed\n    created\n    updated\n  }\n}\n')),Object(i.b)("h2",{id:"custom-pubsub-provider"},"Custom PubSub Provider"),Object(i.b)("p",null,"You can override the default ",Object(i.b)("inlineCode",{parentName:"p"},"PubSub")," implementation by creating your own provider and providing it to ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query"),"."),Object(i.b)("p",null,"Below is an example provider."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="redis-pub-sub.provider.ts"',title:'"redis-pub-sub.provider.ts"'}),"import { pubSubToken } from '@nestjs-query/query-graphql';\nimport { RedisPubSub } from 'graphql-redis-subscriptions';\nimport Redis from 'ioredis';\nimport { Provider } from '@nestjs/common';\n\nexport class RedisPubSubProvider {\n  static provider(): Provider {\n    return {\n      provide: pubSubToken(),\n      useValue: new RedisPubSub({\n        publisher: new Redis(),\n        subscriber: new Redis(),\n      }),\n    };\n  }\n}\n\n")),Object(i.b)("p",null,"In order to let ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query")," know about the provider you can set the ",Object(i.b)("inlineCode",{parentName:"p"},"pubSub")," option."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item/todo-item.module.ts" {14}',title:'"todo-item/todo-item.module.ts"',"{14}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { RedisPubSubProvider } from '../redis-pub-sub.provider';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      pubSub: RedisPubSubProvider.provider(),\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          EntityClass: TodoItemEntity,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          enableSubscriptions: true,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}b.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=o,m=p["".concat(a,".").concat(c)]||p[c]||b[c]||i;return n?r.a.createElement(m,s(s({ref:t},u),{},{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},232:function(e,t,n){"use strict";var o=n(0);const r=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},233:function(e,t,n){"use strict";var o=n(0),r=n(232);t.a=function(){return Object(o.useContext)(r.a)}},234:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(233),a=n(231),s=n(92),l=n.n(s);const u=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:p,groupId:b}=e,{tabGroupChoices:c,setTabGroupChoices:m}=Object(i.a)(),[O,j]=Object(o.useState)(s);if(null!=b){const e=c[b];null!=e&&e!==O&&p.some(t=>t.value===e)&&j(e)}const y=e=>{j(e),null!=b&&m(b,e)},f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:Object(a.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},235:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);