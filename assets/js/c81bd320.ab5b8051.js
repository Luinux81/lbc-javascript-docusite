"use strict";(self.webpackChunklbc_javascript_docusite=self.webpackChunklbc_javascript_docusite||[]).push([[505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),o=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(a),g=r,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||l;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},s="Strings",i={unversionedId:"Basics/strings",id:"Basics/strings",title:"Strings",description:"A String is a sequence of characters intended to represent text",source:"@site/docs/Basics/strings.md",sourceDirName:"Basics",slug:"/Basics/strings",permalink:"/lbc-javascript-docusite/docs/Basics/strings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Basics/strings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/lbc-javascript-docusite/docs/Basics/variables"},next:{title:"Objetos",permalink:"/lbc-javascript-docusite/docs/Basics/Objetos"}},c={},o=[{value:"Creating Strings",id:"creating-strings",level:2},{value:"Basic String Manipulation",id:"basic-string-manipulation",level:2},{value:"String Indexing",id:"string-indexing",level:3},{value:"The length Property",id:"the-length-property",level:3},{value:"String Concatenation",id:"string-concatenation",level:2},{value:"Common String Methods",id:"common-string-methods",level:3},{value:"slice()",id:"slice",level:4},{value:"substring()",id:"substring",level:4},{value:"substr()",id:"substr",level:4},{value:"replace()",id:"replace",level:4},{value:"replaceAll()",id:"replaceall",level:4},{value:"toUpperCase()",id:"touppercase",level:4},{value:"toLowerCase()",id:"tolowercase",level:4},{value:"concat()",id:"concat",level:4},{value:"trim()",id:"trim",level:4},{value:"trimStart()",id:"trimstart",level:4},{value:"charAt()",id:"charat",level:4},{value:"charCodeAt()",id:"charcodeat",level:4},{value:"split()",id:"split",level:4}],u={toc:o},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"strings"},"Strings"),(0,r.kt)("p",null,"A String is a sequence of characters intended to represent text\nA string is a data type that represents a sequence of characters in JavaScript, which can include letters, numbers, and special characters. They are commonly used to represent text in a program."),(0,r.kt)("h2",{id:"creating-strings"},"Creating Strings"),(0,r.kt)("p",null,"In JavaScript, there are different ways to create a string. You can wrap the text inside single quotes (' '), double quotes (\" \"), or backticks ( ), which are known as template literals. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Single quote string\nlet string1 = 'I am a string!';\n\n// Double quote string\nlet string2 = \"I am a string!\";\n\n// Template literal string\nlet string3 = `I am a string!`;\n")),(0,r.kt)("p",null,"Note that strings created using different quotes are treated equally, meaning they can be compared:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"string1 === string2; // true\nstring1 === string3; // true\nstring2 === string3; // true\n")),(0,r.kt)("p",null,"Additionally, you can create strings using the String() constructor. If called with new, it generates a string object, while calling it without new coerces the value to a primitive string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let str1 = new String('What am I?');\ntypeof str1; // 'object'\n\nlet str2 = String('What am I?');\ntypeof str2; // 'string'\n\nlet str3 = \"What am I?\";\ntypeof str3; // 'string'\n")),(0,r.kt)("p",null,"From now on, we will focus on manipulating primitive strings, which are immutable."),(0,r.kt)("h2",{id:"basic-string-manipulation"},"Basic String Manipulation"),(0,r.kt)("h3",{id:"string-indexing"},"String Indexing"),(0,r.kt)("p",null,"You can access each character of a string using bracket notation and its numeric index, starting from zero."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let str = 'hello';\nstr[0]; // 'h'\nstr[1]; // 'e'\nstr[2]; // 'l'\nstr[3]; // 'l'\nstr[4]; // 'o'\n")),(0,r.kt)("p",null,"Also, you can use the charAt() method to retrieve a specific character:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"str.charAt(0); // 'h'\n")),(0,r.kt)("h3",{id:"the-length-property"},"The length Property"),(0,r.kt)("p",null,"You can get the length of a string using the length property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let sentence = 'The quick brown fox jumps over the lazy dog';\nsentence.length; // 43\n")),(0,r.kt)("h2",{id:"string-concatenation"},"String Concatenation"),(0,r.kt)("p",null,"You can concatenate multiple strings using the + operator or the += operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 'Hello,';\nlet b = ' world!';\nlet c = a + b;\nconsole.log(c); // 'Hello, world!'\n\na += b;\nconsole.log(a); // 'Hello, world!'\n")),(0,r.kt)("p",null,"You can also use template literals to concatenate strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 'Hello,';\nlet b = ' world!';\nlet c = `${a}${b}`;\nconsole.log(c); // 'Hello, world!'\n")),(0,r.kt)("h3",{id:"common-string-methods"},"Common String Methods"),(0,r.kt)("p",null,"JavaScript has many ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_string_methods.asp"},"built-in methods")," for manipulating strings. "),(0,r.kt)("h4",{id:"slice"},"slice()"),(0,r.kt)("p",null,"La funci\xf3n slice() devuelve una porci\xf3n de una cadena especificada por el \xedndice inicial y final. El \xedndice final no est\xe1 incluido. Si se omite el \xedndice final, se devolver\xe1 la porci\xf3n desde el \xedndice inicial hasta el final de la cadena."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "Hola, mundo!";\nconst res = str.slice(0, 4); // Devuelve "Hola"\n')),(0,r.kt)("h4",{id:"substring"},"substring()"),(0,r.kt)("p",null,"La funci\xf3n substring() devuelve una porci\xf3n de una cadena especificada por el \xedndice inicial y final. El \xedndice final no est\xe1 incluido. Si se omite el \xedndice final, se devolver\xe1 la porci\xf3n desde el \xedndice inicial hasta el final de la cadena. A diferencia de slice(), substring() no acepta \xedndices negativos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "Hola, mundo!";\nconst res = str.substring(0, 4); // Devuelve "Hola"\n')),(0,r.kt)("h4",{id:"substr"},"substr()"),(0,r.kt)("p",null,"La funci\xf3n substr() devuelve una porci\xf3n de una cadena especificada por el \xedndice inicial y la longitud de la porci\xf3n. Si se omite la longitud, se devolver\xe1 la porci\xf3n desde el \xedndice inicial hasta el final de la cadena."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "Hola, mundo!";\nconst res = str.substr(0, 4); // Devuelve "Hola"\n')),(0,r.kt)("h4",{id:"replace"},"replace()"),(0,r.kt)("p",null,"La funci\xf3n replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patr\xf3n reemplazadas por una cadena de reemplazo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "Hola, mundo!";\nconst res = str.replace("mundo", "tierra"); // Devuelve "Hola, tierra!"\n')),(0,r.kt)("h4",{id:"replaceall"},"replaceAll()"),(0,r.kt)("p",null,"La funci\xf3n replaceAll() devuelve una nueva cadena con todas las coincidencias de un patr\xf3n reemplazadas por una cadena de reemplazo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "Hola, mundo!";\nconst res = str.replaceAll(",", "."); // Devuelve "Hola. mundo!"\n')),(0,r.kt)("h4",{id:"touppercase"},"toUpperCase()"),(0,r.kt)("p",null,"La funci\xf3n toUpperCase() devuelve una nueva cadena con todos los caracteres en may\xfascula."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "Hola, mundo!";\nconst res = str.toUpperCase(); // Devuelve "HOLA, MUNDO!"\n')),(0,r.kt)("h4",{id:"tolowercase"},"toLowerCase()"),(0,r.kt)("p",null,"La funci\xf3n toLowerCase() devuelve una nueva cadena con todos los caracteres en min\xfascula."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "Hola, mundo!";\nconst res = str.toLowerCase(); // Devuelve "hola, mundo!"\n')),(0,r.kt)("h4",{id:"concat"},"concat()"),(0,r.kt)("p",null,"La funci\xf3n concat() se usa para unir dos o m\xe1s cadenas y devuelve una nueva cadena."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str1 = "Hola";\nconst str2 = "mundo";\nconst res = str1.concat(", ", str2, "!"); // Devuelve "Hola, mundo!"\n')),(0,r.kt)("h4",{id:"trim"},"trim()"),(0,r.kt)("p",null,"La funci\xf3n trim() devuelve una nueva cadena sin los espacios en blanco iniciales y finales."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "   Hola, mundo!   ";\nconst res = str.trim(); // Devuelve "Hola, mundo!"\n')),(0,r.kt)("h4",{id:"trimstart"},"trimStart()"),(0,r.kt)("p",null,"La funci\xf3n trimStart() devuelve una nueva cadena sin los espacios en blanco iniciales."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "   Hola, mundo!   ";\nconst res = str.trimStart(); // Devuelve "Hola, mundo!   "\n')),(0,r.kt)("h4",{id:"charat"},"charAt()"),(0,r.kt)("p",null,"La funci\xf3n charAt() devuelve el car\xe1cter en un \xedndice espec\xedfico dentro de una cadena. El \xedndice de los caracteres comienza en 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const str = 'Hola mundo!';\nconsole.log(str.charAt(1)); // devuelve \"o\"\n")),(0,r.kt)("h4",{id:"charcodeat"},"charCodeAt()"),(0,r.kt)("p",null,"La funci\xf3n charCodeAt() devuelve el valor num\xe9rico del car\xe1cter en un \xedndice espec\xedfico dentro de una cadena. El \xedndice de los caracteres comienza en 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const str = 'Hola mundo!';\nconsole.log(str.charCodeAt(1)); // devuelve 111\n")),(0,r.kt)("h4",{id:"split"},"split()"),(0,r.kt)("p",null,"La funci\xf3n split() divide una cadena en un array de subcadenas basadas en un separador especificado y devuelve el array resultante."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = \'Hola,mundo,!\';\nconst arr = str.split(\',\');\nconsole.log(arr); // devuelve ["Hola", "mundo", "!"]\n')))}d.isMDXComponent=!0}}]);