const g=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},d=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of d(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=g(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&d(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=g(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=g(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=g(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/\":{\"title\":\"首页\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"这是基于VuePress Theme Hope的中国古代文化的文档整理系统。\"]},{\"header\":\"目前的计划：\",\"slug\":\"目前的计划\",\"contents\":[\"基于殆知阁古代文献, 中医药古籍文本，近700项, 最全中华古诗词数据库等等文档库，整理出一套中华古代文档的markdown格式文档库。\",\"整合一些工具库，让文档库在显示的时候，能够对字展示笔顺（如：汉字笔顺）；显示注音（如：🇨🇳 汉字拼音 ➜ hàn zì pīn yīn）。\",\"目前的计划是使用静态文档系统，后期如果条件允许的话，系统做成动态文档系统，方便用户共同学习、共同整理文档。\"]},{\"header\":\"整理完成情况：\",\"slug\":\"整理完成情况\",\"contents\":[\" 诗藏 100%\",\" 医藏 1%\",\" 易藏\",\" 史藏\",\" 子藏\",\" 集藏\",\" 艺藏\",\" 佛藏\",\" 儒藏\",\" 道藏\"]},{\"header\":\"参考：\",\"slug\":\"参考\",\"contents\":[\"1、殆知阁藏书计划\",\"关于书的分类： 书作为一个独立的分子单位 可以归为不同的种类 这个是多对一的映射关系 例如：某本书 既可以归为“易”也可以同时归为“儒”“道”“术”\",\"藏书以两个大体系为主： 一个是想兄提出的所谓“十全藏”体系 即：佛 儒 道 易 史 子 集 医 艺 杂 另一个采用西方的所谓“杜威十进制图书分类法” 以现在的所谓：政治 经济 文化 科学 数学 体育 艺术等等加以分类\",\"其他的角度 以索引和搜索的形式出现 例如：依据时代 依据地点 依据人物的分类 均以索引出现\",\"智能搜索为4个层面：\\n书籍层面\\n卷层面\\n知识体层面\\n全文层面\"]}]},\"/%E5%84%92%E8%97%8F/\":{\"title\":\"儒藏\",\"contents\":[{\"header\":\"目录\",\"slug\":\"目录\",\"contents\":[\"内容整理中。。。\"]}],\"customFields\":{\"0\":[\"儒藏\"]}}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
