"use strict";(self.webpackChunklbc_javascript_docusite=self.webpackChunklbc_javascript_docusite||[]).push([[796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>S});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,S=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(S,l(l({ref:t},u),{},{components:a})):n.createElement(S,l({ref:t},u))}));function S(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},l="Set",s={unversionedId:"Basics/Iterables/Set",id:"Basics/Iterables/Set",title:"Set",description:"Set is a data structure in JavaScript used to store unique values of any type and length. In this reference manual, we will explore how to create and work with sets in JavaScript.",source:"@site/docs/Basics/Iterables/Set.md",sourceDirName:"Basics/Iterables",slug:"/Basics/Iterables/Set",permalink:"/lbc-javascript-docusite/docs/Basics/Iterables/Set",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Basics/Iterables/Set.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maps",permalink:"/lbc-javascript-docusite/docs/Basics/Iterables/Map"},next:{title:"Modulos",permalink:"/lbc-javascript-docusite/docs/Advanced/M\xf3dulos"}},i={},c=[{value:"Creating a Set",id:"creating-a-set",level:2},{value:"Properties and Methods of a Set",id:"properties-and-methods-of-a-set",level:2},{value:"Size",id:"size",level:3},{value:"Adding Elements to a Set",id:"adding-elements-to-a-set",level:3},{value:"Checking if an Element Exists in a Set",id:"checking-if-an-element-exists-in-a-set",level:3},{value:"Removing Elements from a Set",id:"removing-elements-from-a-set",level:3},{value:"Clearing a Set",id:"clearing-a-set",level:3},{value:"Iterating Over a Set",id:"iterating-over-a-set",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set"},"Set"),(0,r.kt)("p",null,"Set is a data structure in JavaScript used to store unique values of any type and length. In this reference manual, we will explore how to create and work with sets in JavaScript."),(0,r.kt)("h2",{id:"creating-a-set"},"Creating a Set"),(0,r.kt)("p",null,"To create a new Set, use the new keyword followed by Set(). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set();\n")),(0,r.kt)("p",null,"To create a Set with initial values, pass an iterable such as an array, set or nodelist to the Set() constructor. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4]);\n")),(0,r.kt)("h2",{id:"properties-and-methods-of-a-set"},"Properties and Methods of a Set"),(0,r.kt)("h3",{id:"size"},"Size"),(0,r.kt)("p",null,"The size property returns the number of elements in the Set. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4]);\nconsole.log(mySet.size); // Output: 4\n")),(0,r.kt)("h3",{id:"adding-elements-to-a-set"},"Adding Elements to a Set"),(0,r.kt)("p",null,"To add an element to a Set, use the add() method. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set();\nmySet.add(1);\nmySet.add('Hello');\n")),(0,r.kt)("p",null,"You can also add multiple elements at once by passing them as arguments to the add() method. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set();\nmySet.add(1, 2, 3);\n")),(0,r.kt)("h3",{id:"checking-if-an-element-exists-in-a-set"},"Checking if an Element Exists in a Set"),(0,r.kt)("p",null,"To check if an element exists in a Set, use the has() method. It returns a boolean indicating whether the element is present or not. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4]);\nconsole.log(mySet.has(3)); // Output: true\nconsole.log(mySet.has(5)); // Output: false\n")),(0,r.kt)("h3",{id:"removing-elements-from-a-set"},"Removing Elements from a Set"),(0,r.kt)("p",null,"To remove an element from a Set, use the delete() method. It returns a boolean indicating whether the element was successfully removed or not. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4]);\nmySet.delete(3);\nconsole.log(mySet); // Output: Set(3) {1, 2, 4}\n")),(0,r.kt)("h3",{id:"clearing-a-set"},"Clearing a Set"),(0,r.kt)("p",null,"To remove all elements from a Set, use the clear() method. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4]);\nmySet.clear();\nconsole.log(mySet); // Output: Set(0) {}\n")),(0,r.kt)("h3",{id:"iterating-over-a-set"},"Iterating Over a Set"),(0,r.kt)("p",null,"Sets are iterable objects. You can use the for..of loop to iterate over a Set. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4]);\nfor (const value of mySet) {\n  console.log(value);\n}\n/*\nOutput:\n1\n2\n3\n4\n*/\n")),(0,r.kt)("p",null,"You can also use the forEach() method to iterate over a Set. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mySet = new Set([1, 2, 3, 4]);\nmySet.forEach((value) => console.log(value));\n/*\nOutput:\n1\n2\n3\n4\n*/\n")))}m.isMDXComponent=!0}}]);