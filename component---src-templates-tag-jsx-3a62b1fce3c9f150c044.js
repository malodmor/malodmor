(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"pageQuery",function(){return E});var n=a(8),r=a.n(n),l=a(0),s=a.n(l),c=a(162),i=a.n(c),o=a(173),m=a(202),d=a(161),u=a.n(d),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return s.a.createElement(o.a,null,s.a.createElement("div",{className:"tag-container"},s.a.createElement(i.a,{title:'Posts tagged as "'+e+'" | '+u.a.siteTitle}),s.a.createElement(m.a,{postEdges:t})))},t}(s.a.Component),E="3824571933"},161:function(e,t,a){a(37);var n={siteTitle:"National Restaurant Mal Odmor",siteTitleShort:"Mal Odmor",siteTitleAlt:"National Restaurant Mal Odmor",siteLogo:"/logos/logo-1024.png",siteUrl:"https://vagr9k.github.io",pathPrefix:"/malodmor",siteDescription:"National Restaurant Mal Odmor.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://malodmor.github.io/malodmor",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/malodmor",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:malodmork@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},165:function(e,t,a){},166:function(e,t,a){e.exports={container:"container-module--container--1h9Cl"}},167:function(e,t,a){e.exports={subtitle:"intro-module--subtitle--zxook bulma--subtitle--3P97l"}},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(8),r=a.n(n),l=a(0),s=a.n(l),c=a(162),i=a.n(c),o=a(161),m=a.n(o),d=(a(165),a(160),a(166)),u=a.n(d),h=function(e){var t=e.children;return s.a.createElement("body",{id:"home",className:"has-navbar-fixed-top"},s.a.createElement("div",{className:u.a.container},s.a.createElement("section",{className:"hero is-light is-fullheight"},t)))},E=a(167),p=a.n(E),v=function(){return s.a.createElement("div",{className:"hero-body is-brown container has-text-centered"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement("h1",{className:"title"},"Нешто вкусно се готви..."),s.a.createElement("form",{id:"form",action:"//freecodecamp.com/email-submit",method:"POST"},s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("p",{className:"control is-expanded"},s.a.createElement("input",{id:"email",className:"input",type:"email",name:"email",placeholder:"Внесете ја вашата е-пошта"})),s.a.createElement("p",{className:"control"},s.a.createElement("a",{href:"#"},s.a.createElement("input",{type:"submit",id:"submit",className:"button is-danger",value:"Известете ме"})))))),s.a.createElement("h2",{className:p.a.subtitle},"За сите љубители на вкусна храна, сочни рецепти, кулинарски совети, промотивни понуди и многу повеќе.")))},g=(a(168),function(){return s.a.createElement("section",{className:"videoPresentation"},s.a.createElement("video",{id:"video",width:"720",height:"360",controls:"controls"},s.a.createElement("source",{src:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",type:"video/mp4"}),"Your browser does not support the video tag."))}),f=(a(77),a(193)),b=a(194),N=a(36),y=(a(169),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=[e.dataset.target][0];t=document.getElementById(t),e.classList.toggle("is-active"),t.classList.toggle("is-active")})})},a.render=function(){return s.a.createElement("div",{className:"hero-head"},s.a.createElement("header",{id:"header"},s.a.createElement("nav",{id:"nav-bar",className:"navbar is-fixed-top"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{className:"navbar-item",href:"../"},s.a.createElement("img",{id:"header-img",src:"https://raw.githubusercontent.com/malodmor/malodmor.github.io/master/mal-odmor-logo.svg",alt:"Logo"})),s.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenu"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))),s.a.createElement("div",{id:"navbarMenu",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("span",{className:"navbar-item"},s.a.createElement(N.Link,{to:"#header",className:"button is-dark is-outlined nav-link"},s.a.createElement("span",{className:"icon"},s.a.createElement(f.a,{icon:b.b})),s.a.createElement("span",null,"Почетна"))),s.a.createElement("span",{className:"navbar-item"},s.a.createElement(N.Link,{to:"#menu",className:"button is-dark is-outlined nav-link"},s.a.createElement("span",{className:"icon"},s.a.createElement(f.a,{icon:b.c})),s.a.createElement("span",null,"Мени"))),s.a.createElement("span",{className:"navbar-item"},s.a.createElement(N.Link,{to:"#services",className:"button is-dark is-outlined nav-link"},s.a.createElement("span",{className:"icon"},s.a.createElement(f.a,{icon:b.a})),s.a.createElement("span",null,"Услуги")))))))))},t}(l.Component)),k=(a(170),function(){return s.a.createElement("section",{id:"menu",className:"hero is-light is-fullheight"},s.a.createElement("div",{className:"container  has-text-centered"},s.a.createElement("h2",{className:"title p-b-sm"},"МЕНИ"),s.a.createElement("div",{className:"colored-line"}),s.a.createElement("div",{className:"subtitle"},"Препорачани Специјалитети"),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-one-third"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-image"},s.a.createElement("figure",{className:"image is-4by3"},s.a.createElement("img",{src:"https://lh3.googleusercontent.com/B3v-6RInnkKksbgxd6QiXptjlIKFXw7ytcyY-ZDP1KtJvUlhVQms12zEjIBuP_oG9s8LIH7IsjhAEgKh__M4Zf6O1ryNZltbc_EZuASyx4WhyKQV-0igAy6Xp1kgf6BqT6_1EDEEPA=w2400",alt:"Smoked Ribs",width:"1280",height:"960"}))),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-content"},s.a.createElement("p",{className:"title is-4 has-text-centered p-b-sm"},"Чадено Ребро во Фурна"))),s.a.createElement("div",{className:"content"},"Чадено ребро во фурна со прилог помфрит и мешана салата, пиперка во павлака, мавровско овчо сирење, пекарско лепче и пиво по избор.",s.a.createElement("hr",null),s.a.createElement("a",null,"@malodmor"),s.a.createElement("a",{href:"#"},"#food")," ",s.a.createElement("a",{href:"#"},"#delicious"),s.a.createElement("br",null))))),s.a.createElement("div",{className:"column is-one-third"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-image"},s.a.createElement("figure",{className:"image is-4by3"},s.a.createElement("img",{src:"https://lh3.googleusercontent.com/5dGmGTiI_GfgVOl0uQNWCoQ-_EybnhVv3osLP08S4VLZwqzAnlsAbHh2y22KBMosGHZb6tmPZLd0Hi5DcwsfWr7cU2LKCtkspm5OUUuxRLMDgJbGhC0yviaKZ46R2h8mRvR0hmzqxA=w2400",alt:"Placeholder",width:"1280",height:"960"}))),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-content"},s.a.createElement("p",{className:"title is-4 has-text-centered p-b-sm"},"Галичка Плескавица"))),s.a.createElement("div",{className:"content"},"Галичка Плескавица, мешана салата, помфрит, лепче и пијалок по избор. ",s.a.createElement("hr",null),s.a.createElement("a",null,"@malodmor"),".",s.a.createElement("a",{href:"#"},"#burger")," ",s.a.createElement("a",{href:"#"},"#tasty"),s.a.createElement("br",null))))),s.a.createElement("div",{className:"column is-one-third"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-image"},s.a.createElement("figure",{className:"image is-4by3"},s.a.createElement("img",{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder"}))),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-content"},s.a.createElement("p",{className:"title is-4 has-text-centered p-b-sm"},"Колбас од Дивеч"))),s.a.createElement("div",{className:"content"},"Колбас од Дивеч, мешана салата, помфрит, лепче и пијалок поизбор.",s.a.createElement("hr",null),s.a.createElement("a",null,"@malodmor"),s.a.createElement("a",{href:"#"},"#sausage")," ",s.a.createElement("a",{href:"#"},"#game"),s.a.createElement("br",null))))))))}),x=(a(171),function(){return s.a.createElement("section",{id:"services",className:"hero is-light"},s.a.createElement("div",{className:"container"},"Services section..."))}),w=(a(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("p",null,s.a.createElement("strong",null,"Mal Odmor")," by"," ",s.a.createElement("a",{href:"https://smihajlo.github.io/"},"Mihajlo Simevski"),". The source code is licensed",s.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed"," ",s.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),".")))},t}(l.Component));a.d(t,"a",function(){return C});var C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement("meta",{name:"description",content:m.a.siteDescription})),s.a.createElement(h,null,s.a.createElement(y,null),s.a.createElement(v,null),s.a.createElement(g,null),s.a.createElement(k,null),s.a.createElement(x,null)),s.a.createElement(w,null))},t}(s.a.Component)},202:function(e,t,a){"use strict";a(77);var n=a(8),r=a.n(n),l=a(0),s=a.n(l),c=a(36),i=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return s.a.createElement("div",null,e.map(function(e){return s.a.createElement(c.Link,{to:e.path,key:e.title},s.a.createElement("h1",null,e.title))}))},t}(s.a.Component);t.a=i}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-3a62b1fce3c9f150c044.js.map