(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),l=a(0),i=a.n(l),s=a(162),c=a.n(s),o=a(173),m=a(296),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return i.a.createElement(m.Follow,{username:e,options:{count:!!t||"none"}})},t}(l.Component),d=a(38),p=a.n(d),E=a(379),h=a.n(E),f=a(199),g=a.n(f),v=a(161),b=a.n(v),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(p()(p()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(p()(p()(a))),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},a.render=function(){var e=this.props.postNode;if(!b.a.disqusShortname)return null;var t=e.frontmatter,a=g()(b.a.siteUrl,b.a.pathPrefix,e.fields.slug);return i.a.createElement(h.a,{shortname:b.a.disqusShortname,identifier:t.title,title:t.title,url:a,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(l.Component),y=a(381),x=a.n(y),k=a(36),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return i.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return i.a.createElement(k.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+x()(e)},i.a.createElement("button",null,e))}))},t}(l.Component),C=a(450),A=a(451),D=a(452),P=a(453),L=a(454),S=a(455),T=a(456),_=a(457),I=a(458),M=a(459),U=a(460),R=a(461),B=a(462),O=a(463),Y=a(464),z=a(465),q=(a(394),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,l=g()(b.a.siteUrl,b.a.pathPrefix,a),s=n?36:48,c=function(e){return i.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))};return i.a.createElement("div",{className:"social-links"},i.a.createElement(C.a,{url:l,title:r.title},i.a.createElement(A.a,{round:!0,size:s}),i.a.createElement(D.a,{url:l},function(e){return c(e)})),i.a.createElement(P.a,{url:l,title:r.title},i.a.createElement(L.a,{round:!0,size:s})),i.a.createElement(S.a,{url:l},i.a.createElement(T.a,{round:!0,size:s}),i.a.createElement(_.a,{url:l},function(e){return c(e)})),i.a.createElement(I.a,{url:l,quote:t.excerpt},i.a.createElement(M.a,{round:!0,size:s}),i.a.createElement(U.a,{url:l},function(e){return c(e)})),i.a.createElement(R.a,{url:l,title:r.title,description:t.excerpt},i.a.createElement(B.a,{round:!0,size:s}),i.a.createElement(O.a,{url:l},function(e){return c(e)})),i.a.createElement(Y.a,{url:l},i.a.createElement(z.a,{round:!0,size:s})))},t}(l.Component)),F=a(240);a(446),a(447);a.d(t,"default",function(){return K}),a.d(t,"pageQuery",function(){return Z});var K=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,a=t.frontmatter;return a.id||(a.id=e),a.category_id||(a.category_id=b.a.postDefaultCategoryID),i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("title",null,a.title+" | "+b.a.siteTitle)),i.a.createElement(F.a,{postPath:e,postNode:t,postSEO:!0}),i.a.createElement("div",null,i.a.createElement("h1",null,a.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement("div",{className:"post-meta"},i.a.createElement(w,{tags:a.tags}),i.a.createElement(q,{postPath:e,postNode:t})),i.a.createElement(u,{config:b.a}),i.a.createElement(N,{postNode:t}))))},t}(i.a.Component),Z="3288223027"},161:function(e,t,a){a(37);var n={siteTitle:"National Restaurant Mal Odmor",siteTitleShort:"Mal Odmor",siteTitleAlt:"National Restaurant Mal Odmor",siteLogo:"/logos/logo-1024.png",siteUrl:"https://vagr9k.github.io",pathPrefix:"/malodmor",siteDescription:"National Restaurant Mal Odmor.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://malodmor.github.io/malodmor",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/malodmor",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:malodmork@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},165:function(e,t,a){},166:function(e,t,a){e.exports={container:"container-module--container--1h9Cl"}},167:function(e,t,a){e.exports={subtitle:"intro-module--subtitle--zxook bulma--subtitle--3P97l"}},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(8),r=a.n(n),l=a(0),i=a.n(l),s=a(162),c=a.n(s),o=a(161),m=a.n(o),u=(a(165),a(160),a(166)),d=a.n(u),p=function(e){var t=e.children;return i.a.createElement("body",{id:"home",className:"has-navbar-fixed-top"},i.a.createElement("div",{className:d.a.container},i.a.createElement("section",{className:"hero is-light is-fullheight"},t)))},E=a(167),h=a.n(E),f=function(){return i.a.createElement("div",{className:"hero-body is-brown container has-text-centered"},i.a.createElement("div",{className:"column is-6 is-offset-3"},i.a.createElement("h1",{className:"title"},"Нешто вкусно се готви..."),i.a.createElement("form",{id:"form",action:"//freecodecamp.com/email-submit",method:"POST"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("p",{className:"control is-expanded"},i.a.createElement("input",{id:"email",className:"input",type:"email",name:"email",placeholder:"Внесете ја вашата е-пошта"})),i.a.createElement("p",{className:"control"},i.a.createElement("a",{href:"#"},i.a.createElement("input",{type:"submit",id:"submit",className:"button is-danger",value:"Известете ме"})))))),i.a.createElement("h2",{className:h.a.subtitle},"За сите љубители на вкусна храна, сочни рецепти, кулинарски совети, промотивни понуди и многу повеќе.")))},g=(a(168),function(){return i.a.createElement("section",{className:"videoPresentation"},i.a.createElement("video",{id:"video",width:"720",height:"360",controls:"controls"},i.a.createElement("source",{src:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",type:"video/mp4"}),"Your browser does not support the video tag."))}),v=(a(77),a(193)),b=a(194),N=a(36),y=(a(169),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=[e.dataset.target][0];t=document.getElementById(t),e.classList.toggle("is-active"),t.classList.toggle("is-active")})})},a.render=function(){return i.a.createElement("div",{className:"hero-head"},i.a.createElement("header",{id:"header"},i.a.createElement("nav",{id:"nav-bar",className:"navbar is-fixed-top"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("a",{className:"navbar-item",href:"../"},i.a.createElement("img",{id:"header-img",src:"https://raw.githubusercontent.com/malodmor/malodmor.github.io/master/mal-odmor-logo.svg",alt:"Logo"})),i.a.createElement("span",{className:"navbar-burger burger","data-target":"navbarMenu"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{id:"navbarMenu",className:"navbar-menu"},i.a.createElement("div",{className:"navbar-end"},i.a.createElement("span",{className:"navbar-item"},i.a.createElement(N.Link,{to:"#header",className:"button is-dark is-outlined nav-link"},i.a.createElement("span",{className:"icon"},i.a.createElement(v.a,{icon:b.b})),i.a.createElement("span",null,"Почетна"))),i.a.createElement("span",{className:"navbar-item"},i.a.createElement(N.Link,{to:"#menu",className:"button is-dark is-outlined nav-link"},i.a.createElement("span",{className:"icon"},i.a.createElement(v.a,{icon:b.c})),i.a.createElement("span",null,"Мени"))),i.a.createElement("span",{className:"navbar-item"},i.a.createElement(N.Link,{to:"#services",className:"button is-dark is-outlined nav-link"},i.a.createElement("span",{className:"icon"},i.a.createElement(v.a,{icon:b.a})),i.a.createElement("span",null,"Услуги")))))))))},t}(l.Component)),x=(a(170),function(){return i.a.createElement("section",{id:"menu",className:"hero is-light is-fullheight"},i.a.createElement("div",{className:"container  has-text-centered"},i.a.createElement("h2",{className:"title p-b-sm"},"МЕНИ"),i.a.createElement("div",{className:"colored-line"}),i.a.createElement("div",{className:"subtitle"},"Препорачани Специјалитети"),i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-one-third"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:"https://lh3.googleusercontent.com/B3v-6RInnkKksbgxd6QiXptjlIKFXw7ytcyY-ZDP1KtJvUlhVQms12zEjIBuP_oG9s8LIH7IsjhAEgKh__M4Zf6O1ryNZltbc_EZuASyx4WhyKQV-0igAy6Xp1kgf6BqT6_1EDEEPA=w2400",alt:"Smoked Ribs",width:"1280",height:"960"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-4 has-text-centered p-b-sm"},"Чадено Ребро во Фурна"))),i.a.createElement("div",{className:"content"},"Чадено ребро во фурна со прилог помфрит и мешана салата, пиперка во павлака, мавровско овчо сирење, пекарско лепче и пиво по избор.",i.a.createElement("hr",null),i.a.createElement("a",null,"@malodmor"),i.a.createElement("a",{href:"#"},"#food")," ",i.a.createElement("a",{href:"#"},"#delicious"),i.a.createElement("br",null))))),i.a.createElement("div",{className:"column is-one-third"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:"https://lh3.googleusercontent.com/5dGmGTiI_GfgVOl0uQNWCoQ-_EybnhVv3osLP08S4VLZwqzAnlsAbHh2y22KBMosGHZb6tmPZLd0Hi5DcwsfWr7cU2LKCtkspm5OUUuxRLMDgJbGhC0yviaKZ46R2h8mRvR0hmzqxA=w2400",alt:"Placeholder",width:"1280",height:"960"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-4 has-text-centered p-b-sm"},"Галичка Плескавица"))),i.a.createElement("div",{className:"content"},"Галичка Плескавица, мешана салата, помфрит, лепче и пијалок по избор. ",i.a.createElement("hr",null),i.a.createElement("a",null,"@malodmor"),".",i.a.createElement("a",{href:"#"},"#burger")," ",i.a.createElement("a",{href:"#"},"#tasty"),i.a.createElement("br",null))))),i.a.createElement("div",{className:"column is-one-third"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:"https://bulma.io/images/placeholders/1280x960.png",alt:"Placeholder"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-4 has-text-centered p-b-sm"},"Колбас од Дивеч"))),i.a.createElement("div",{className:"content"},"Колбас од Дивеч, мешана салата, помфрит, лепче и пијалок поизбор.",i.a.createElement("hr",null),i.a.createElement("a",null,"@malodmor"),i.a.createElement("a",{href:"#"},"#sausage")," ",i.a.createElement("a",{href:"#"},"#game"),i.a.createElement("br",null))))))))}),k=(a(171),function(){return i.a.createElement("section",{id:"services",className:"hero is-light"},i.a.createElement("div",{className:"container"},"Services section..."))}),w=(a(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,i.a.createElement("strong",null,"Mal Odmor")," by"," ",i.a.createElement("a",{href:"https://smihajlo.github.io/"},"Mihajlo Simevski"),". The source code is licensed",i.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed"," ",i.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),".")))},t}(l.Component));a.d(t,"a",function(){return C});var C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:m.a.siteDescription})),i.a.createElement(p,null,i.a.createElement(y,null),i.a.createElement(f,null),i.a.createElement(g,null),i.a.createElement(x,null),i.a.createElement(k,null)),i.a.createElement(w,null))},t}(i.a.Component)},240:function(e,t,a){"use strict";var n=a(8),r=a.n(n),l=a(0),i=a.n(l),s=a(162),c=a.n(s),o=a(199),m=a.n(o),u=a(161),d=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,l=r.postNode,s=r.postPath,o=r.postSEO;if(o){var u=l.frontmatter;e=u.title,t=u.description?u.description:l.excerpt,a=u.cover,n=m()(d.a.siteUrl,d.a.pathPrefix,s)}else e=d.a.siteTitle,t=d.a.siteDescription,a=d.a.siteLogo;a=m()(d.a.siteUrl,d.a.pathPrefix,a);var p=m()(d.a.siteUrl,d.a.pathPrefix),E=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:""}];return o&&E.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:a}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),i.a.createElement("meta",{property:"og:url",content:o?n:p}),o?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:a}),i.a.createElement("meta",{property:"fb:app_id",content:d.a.siteFBAppID?d.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:d.a.userTwitter?d.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:a}))},t}(l.Component);t.a=p},394:function(e,t,a){},446:function(e,t,a){},447:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-7cefda378234a0727bbd.js.map