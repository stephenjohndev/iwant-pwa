(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)o=r[u],s[o]&&h.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},s={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/iwant-pwa/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0cfb":function(t,e,a){},"287b":function(t,e,a){"use strict";var i=a("2b65"),s=a.n(i);s.a},"29b6":function(t,e,a){},"2b65":function(t,e,a){},"2bf0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"switch-up",mode:"out-in",appear:""}},[a("router-view")],1)],1)},n=[],o=(a("cf25"),a("2877")),r={},l=Object(o["a"])(r,s,n,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"overflow-x":"hidden"},attrs:{id:"index"}},[a("div",{staticClass:"fixed top left wide"},[a("br"),a("br"),a("br"),a("br"),a("ul",{staticClass:"remove-list-style"},[a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",style:{backgroundColor:"/"==t.$route.path?"#222":"initial"},on:{click:function(e){t.menu=!1,t.$router.push("/")}}},[a("fa",{staticClass:"margin-right",attrs:{icon:"home","fixed-width":""}}),a("span",{staticClass:"uppercase bold"},[t._v("Home")])],1)]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",style:{backgroundColor:t.$route.path.includes("/Originals")?"#222":"initial"},on:{click:function(e){t.menu=!1,t.$router.push("/Originals")}}},[a("fa",{staticClass:"margin-right",attrs:{icon:"star","fixed-width":""}}),a("span",{staticClass:"uppercase"},[t._v("Originals")])],1)]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",style:{backgroundColor:t.$route.path.includes("/TV")?"#222":"initial"},on:{click:function(e){t.menu=!1,t.$router.push("/TV")}}},[a("fa",{staticClass:"margin-right",attrs:{icon:"tv","fixed-width":""}}),a("span",{staticClass:"uppercase"},[t._v("TV")])],1)]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",style:{backgroundColor:t.$route.path.includes("/Movies")?"#222":"initial"},on:{click:function(e){t.menu=!1,t.$router.push("/Movies")}}},[a("fa",{staticClass:"margin-right",attrs:{icon:"film","fixed-width":""}}),a("span",{staticClass:"uppercase"},[t._v("Movies")])],1)]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",style:{backgroundColor:t.$route.path.includes("/Music")?"#222":"initial"},on:{click:function(e){t.menu=!1,t.$router.push("/Music")}}},[a("fa",{staticClass:"margin-right",attrs:{icon:"music","fixed-width":""}}),a("span",{staticClass:"uppercase"},[t._v("Music")])],1)]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",style:{backgroundColor:t.$route.path.includes("/Live")?"#222":"initial"},on:{click:function(e){t.menu=!1,t.$router.push("/Live")}}},[a("fa",{staticClass:"margin-right",attrs:{icon:"video","fixed-width":""}}),a("span",{staticClass:"uppercase"},[t._v("Live")])],1)]),a("hr"),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",on:{click:function(e){t.menu=!1}}},[a("span",{staticClass:"uppercase"},[t._v("My List")])])]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",on:{click:function(e){t.menu=!1}}},[a("span",{staticClass:"uppercase"},[t._v("Notifications")])])]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",on:{click:function(e){t.menu=!1}}},[a("span",{staticClass:"uppercase"},[t._v("Privacy Policy")])])]),a("li",[a("a",{staticClass:"inline-block padding-x-medium padding-y wide",on:{click:function(e){t.menu=!1}}},[a("span",{staticClass:"uppercase"},[t._v("Terms and Conditions")])])])])]),a("nav",{staticClass:"flex justify-content-space-between fixed top wide z-nav"},[a("a",{staticClass:"padding-medium",on:{click:function(e){t.menu=!t.menu}}},[a("transition",{attrs:{name:"rotate"}},[0==t.menu?a("fa",{key:"1",attrs:{icon:"bars","fixed-width":""}}):t._e(),1==t.menu?a("fa",{key:"2",attrs:{icon:"times","fixed-width":""}}):t._e()],1)],1),a("a",{staticClass:"padding-medium"},[a("fa",{attrs:{icon:"search","fixed-width":""}})],1)]),a("div",{class:{"scaled-index":t.menu},staticStyle:{transition:"transform 0.3s, opacity 0.3s","box-shadow":"0px 0px 10rem rgba(black,0.5)","background-color":"#1e1e1e"},on:{click:function(e){t.menu=!t.menu&&t.menu}}},[a("router-view")],1)])},h=[],p={data:function(){return{menu:!1}}},m=p,f=(a("7fa2"),Object(o["a"])(m,u,h,!1,null,"380625d4",null));f.options.__file="Index.vue";var g=f.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wide page-high",staticStyle:{"overflow-y":"auto"},attrs:{id:"watch"}},[a("nav",{staticClass:"flex justify-content-space-between wide z-nav fixed top",staticStyle:{transition:"transform 0.3s"},attrs:{id:"watch-nav"}},[a("a",{staticClass:"padding-medium",on:{click:function(e){t.$router.back()}}},[a("fa",{attrs:{icon:"arrow-left"}})],1),a("a",{staticClass:"padding-medium"},[a("fa",{attrs:{icon:"search"}})],1)]),a("link",{attrs:{rel:"preload",as:"video",href:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}),a("transition",{attrs:{name:"fade",appear:""}},[a("video",{staticClass:"page-wide",staticStyle:{height:"56vw","transition-delay":"0.5s"},attrs:{id:"video",controls:""}})]),a("div",{staticClass:"padding"},[a("transition",{attrs:{name:"switch-up",appear:""}},[a("div",[a("h2",{staticClass:"margin-bottom-small"},[t._v(t._s(t.show.title))]),a("div",{staticClass:"flex align-items-center"},[a("b",{staticClass:"margin-right-small",staticStyle:{color:"cornflowerblue","font-size":"0.9rem"}},[t._v("Trailer")]),a("span",{staticClass:"margin-right-small",staticStyle:{color:"cornflowerblue","font-size":"0.9rem"}},[t._v("| 03:45 | Next:")]),a("b",{staticClass:"margin-right-small",staticStyle:{color:"cornflowerblue","font-size":"0.9rem"}},[t._v("Episode 1")])]),a("div",{staticClass:"margin-y-medium"},[a("button",{staticClass:"padding-none padding-x-small inline-flex align-items center",class:{"active-icon":t.liked},on:{click:function(e){t.liked=!t.liked}}},[a("fa",{staticClass:"margin-right-small",attrs:{icon:"thumbs-up"}}),a("transition",{attrs:{name:"switch-up-small",mode:"out-in"}},[a("span",{key:t.likes,staticStyle:{"font-size":"0.9rem"}},[t._v(t._s(t.likes))])])],1),a("button",{staticClass:"padding-none padding-x-small inline-flex align-items center",class:{"active-icon":t.disliked},on:{click:function(e){t.disliked=!t.disliked}}},[a("fa",{staticClass:"margin-right-small",attrs:{icon:"thumbs-down"}}),a("transition",{attrs:{name:"switch-up-small",mode:"out-in"}},[a("span",{key:t.dislikes,staticStyle:{"font-size":"0.9rem"}},[t._v(t._s(t.dislikes))])])],1),a("button",{staticClass:"padding-none padding-x-small inline-flex align-items center",on:{click:t.share}},[a("fa",{staticClass:"margin-right-small",attrs:{icon:"share"}}),a("span",{staticStyle:{"font-size":"0.9rem"}},[t._v("Share")])],1)])])]),a("hr",{staticStyle:{"background-color":"#333"}}),a("br"),a("transition",{attrs:{name:"switch-up",appear:""}},[a("h5",{staticClass:"margin-bottom-small",staticStyle:{"transition-delay":"0.1s"}},[t._v("OVERVIEW")])]),a("transition",{attrs:{name:"switch-up",appear:""}},[a("div",{staticStyle:{"transition-delay":"0.2s"}},[a("p",{staticStyle:{color:"#aaa","line-height":"1.3rem"}},[t._v(t._s(t.show.longdesc))]),a("br"),a("div",{staticClass:"flex justify-content-space-between"},[a("span"),a("button",{staticStyle:{color:"cornflowerblue"}},[t._v("Read More")])])])]),a("hr",{staticClass:"margin-top",staticStyle:{"background-color":"#333"}}),a("br"),a("transition",{attrs:{name:"switch-up",appear:""}},[a("div",{staticStyle:{"transition-delay":"0.3s"}},[a("h5",{staticClass:"margin-bottom-small",staticStyle:{"transition-delay":"0.1s"}},[t._v("EPISODES")]),a("select",{staticClass:"select wide"},[a("option",[t._v("Jump To")]),a("option",[t._v("Trailer")]),a("option",[t._v("Episode 1")]),a("option",[t._v("Episode 2")]),a("option",[t._v("Episode 3")])])])]),a("hr",{staticClass:"margin-top-small",staticStyle:{"background-color":"#333"}}),a("br"),a("span",{staticClass:"wide flex align-items-center justify-content-space-between"},[a("h5",[t._v("YOU MAY ALSO LIKE")]),a("button",{staticStyle:{color:"cornflowerblue"},on:{click:function(e){t.$router.push("You Might Like")}}},[t._v("See All")])]),a("div",{staticClass:"div flex",staticStyle:{"overflow-x":"auto"}},t._l(t.shows,function(e){return a("div",{staticClass:"div item relative",on:{click:function(a){t.$router.push("/watch/"+e.id)}}},[a("clazy-load",{attrs:{ratio:0,src:e.thumbUrl}},[a("transition",{attrs:{name:"fade",appear:""}},[a("img",{staticClass:"wide",attrs:{src:e.thumbUrl}})]),a("div",{staticClass:"preloader page-wide page-high",attrs:{slot:"placeholder"},slot:"placeholder"})],1),a("span",{staticClass:"absolute bottom left margin"},[t._v(t._s(e.title))])],1)}),0)],1)],1)},v=[],b=(a("7514"),{shows:[{title:"The General's Daughter",shortdesc:"Watch the latest series.",id:"thegeneralsdaughter",imageUrl:"https://pbs.twimg.com/media/DwjtGopWkAAoMke.jpg",thumbUrl:"https://images.iwant.ph/iwantnow/ott/shows/2019-01-22/OTTthumbs-TGD-289x163.jpg"},{title:"The Gift",shortdesc:"What fate holds back, the heart freely gives.",id:"thegift",imageUrl:"https://sa.kapamilya.com/absnews/abscbnnews/media/2019/business/01/17/20190117-iwant-thegift.jpg?ext=.jpg",thumbUrl:"https://images.iwant.ph/iwantnow/ott/movies/2019-01-11/OTTthumbs-THEGIFT-289x163.png"},{title:"S.P.A.R.K.",shortdesc:"A flicker of friendship... or the glow of young love?",id:"spark",imageUrl:"https://sa.kapamilya.com/absnews/abscbnnews/media/2019/business/01/17/20190117-iwant-spark.jpg?ext=.jpg",thumbUrl:"https://images.iwant.ph/iwantnow/ott/movies/2019-01-11/OTTthumbs-SPARK-289x163.png"}],section_one:[{title:"Allergy In Love",longdesc:"A curious cosplayer becomes infatuated with Jhonson, a popular author, motivational speaker and heartthrob who had a big secret guarded by his close circle of friends. Out to find out the real character of Johnson, she enters his life to find out that Jhonson’s big secret was his allergy to sex. Already smitten in love, they search for methods to find a cure to his odd diagnosis. Their journey takes them to mundane situations. Will they be able to find his cure or will they abstain to avoid death?",id:"allergyinlove",thumbUrl:"https://images.iwant.ph/iwantnow/ott/movies/2019-01-25/OTT-ALLERGYINLOVE-289x162.jpg"},{title:"Glorious",longdesc:"Produced by Dreamscape Digital exclusively for iWant, “Glorious” revolves around Glory (Angel), a 52-year-old woman who falls in love with Niko (Tony), a guy 30 years her junior. They start a risqué May-December love affair, but will struggle to keep their relationship intact amidst social disapproval and judgment.",id:"glorious",thumbUrl:"https://imagesiwantnow.blob.core.windows.net/iwantnow/ott/movies/2018-11-26/OTT-GLORIOUS-RV1-289x162.jpg"},{title:"Everybody Loves Baby Wendy",longdesc:"Wendy, a former child performer, lost her star after her tantrum went public. She grows up thinking that the world still loves her. Forced to provide to her family, she tries to reclaim her former glory by auditioning to reality shows and contests. When her efforts fail, a secret fan provides her a job as a barista in a coffee shop.",id:"everybodylovesbabywendy",thumbUrl:"https://imagesiwantnow.blob.core.windows.net/iwantnow/ott/movies/2018-12-03/OTT-BABYWENDY-TRAILER-289x162.jpg"}],section_two:[{title:"Everybody Loves Baby Wendy",longdesc:"Wendy, a former child performer, lost her star after her tantrum went public. She grows up thinking that the world still loves her. Forced to provide to her family, she tries to reclaim her former glory by auditioning to reality shows and contests. When her efforts fail, a secret fan provides her a job as a barista in a coffee shop.",id:"everybodylovesbabywendy",thumbUrl:"https://imagesiwantnow.blob.core.windows.net/iwantnow/ott/movies/2018-12-03/OTT-BABYWENDY-TRAILER-289x162.jpg"},{title:"S.P.A.R.K.",longdesc:"A flicker of friendship... or the glow of young love?",id:"spark",thumbUrl:"https://images.iwant.ph/iwantnow/ott/movies/2019-01-11/OTTthumbs-SPARK-289x163.png"},{title:"The General's Daughter",longdesc:"The General’s Daughter is a journey of a woman who is caught up in a war between two families – the one she vowed to protect and the other she promised to destroy.",id:"thegeneralsdaughter",thumbUrl:"https://images.iwant.ph/iwantnow/ott/shows/2019-01-22/OTTthumbs-TGD-289x163.jpg"}],showslist:[{title:"The General's Daughter",longdesc:"The General’s Daughter is a journey of a woman who is caught up in a war between two families – the one she vowed to protect and the other she promised to destroy.",id:"thegeneralsdaughter",thumbUrl:"https://images.iwant.ph/iwantnow/ott/shows/2019-01-22/OTTthumbs-TGD-289x163.jpg"},{title:"The Gift",longdesc:"What fate holds back, the heart freely gives.",id:"thegift",thumbUrl:"https://images.iwant.ph/iwantnow/ott/movies/2019-01-11/OTTthumbs-THEGIFT-289x163.png"},{title:"S.P.A.R.K.",longdesc:"A flicker of friendship... or the glow of young love?",id:"spark",thumbUrl:"https://images.iwant.ph/iwantnow/ott/movies/2019-01-11/OTTthumbs-SPARK-289x163.png"},{title:"Allergy In Love",longdesc:"A curious cosplayer becomes infatuated with Jhonson, a popular author, motivational speaker and heartthrob who had a big secret guarded by his close circle of friends. Out to find out the real character of Johnson, she enters his life to find out that Jhonson’s big secret was his allergy to sex. Already smitten in love, they search for methods to find a cure to his odd diagnosis. Their journey takes them to mundane situations. Will they be able to find his cure or will they abstain to avoid death?",id:"allergyinlove",thumbUrl:"https://images.iwant.ph/iwantnow/ott/movies/2019-01-25/OTT-ALLERGYINLOVE-289x162.jpg"},{title:"Glorious",longdesc:"Produced by Dreamscape Digital exclusively for iWant, “Glorious” revolves around Glory (Angel), a 52-year-old woman who falls in love with Niko (Tony), a guy 30 years her junior. They start a risqué May-December love affair, but will struggle to keep their relationship intact amidst social disapproval and judgment.",id:"glorious",thumbUrl:"https://imagesiwantnow.blob.core.windows.net/iwantnow/ott/movies/2018-11-26/OTT-GLORIOUS-RV1-289x162.jpg"},{title:"Everybody Loves Baby Wendy",longdesc:"Wendy, a former child performer, lost her star after her tantrum went public. She grows up thinking that the world still loves her. Forced to provide to her family, she tries to reclaim her former glory by auditioning to reality shows and contests. When her efforts fail, a secret fan provides her a job as a barista in a coffee shop.",id:"everybodylovesbabywendy",thumbUrl:"https://imagesiwantnow.blob.core.windows.net/iwantnow/ott/movies/2018-12-03/OTT-BABYWENDY-TRAILER-289x162.jpg"}]}),y={mounted:function(){var t=document.querySelector("#video");t.src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","connection"in navigator&&("cellular"==navigator.connection.type||t.play().then(function(t){document.querySelector("#watch-nav").style.transform="translateY(-100%)"})),t.onpause=function(){document.querySelector("#watch-nav").style.transform="translateY(0%)"},t.onplay=function(){document.querySelector("#watch-nav").style.transform="translateY(-100%)"},window.addEventListener("orientationchange",function(){t.webkitEnterFullScreen()})},data:function(){return{shows:b.shows,showslist:b.showslist,liked:!1,disliked:!1,likes:48,dislikes:3}},computed:{show:function(){var t=this;return this.showslist.find(function(e){return e.id==t.$route.params.id})}},watch:{liked:function(){this.liked?(this.likes++,this.disliked=!1):this.likes--},disliked:function(){this.disliked?(this.liked=!1,this.dislikes++):this.dislikes--}},methods:{share:function(){if(navigator.share){var t=this.show;navigator.share({title:t.title,text:t.title+" - Watch for free on iWant!",url:"https://lucky8548875.github.io/iwant-pwa/#/watch/"+t.id}).then(function(){return console.log("Successful share")}).catch(function(t){return console.log("Error sharing",t)})}else alert("Sorry, your device doesn't support this feature yet.")}}},k=y,C=(a("ed32"),Object(o["a"])(k,w,v,!1,null,"6677fdd5",null));C.options.__file="Watch.vue";var _=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MainContainer"},[a("div",{staticClass:"ParallaxContainer flex"},[a("carousel",{ref:"carousel",attrs:{autoplay:"",autoplayHoverPause:"",autoplayTimeout:4e3,"per-page":1},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}},t._l(t.shows,function(t){return a("slide",[a("clazy-load",{attrs:{ratio:0,src:t.imageUrl}},[a("transition",{attrs:{name:"fade",appear:""}},[a("img",{staticClass:"page-wide",attrs:{src:t.imageUrl}})]),a("div",{staticClass:"preloader page-wide page-high",attrs:{slot:"placeholder"},slot:"placeholder"})],1)],1)}),1),a("router-link",{staticClass:"homeplay-tappable margin-auto z-nav absolute flex center-child",staticStyle:{left:"50%",top:"35%",transform:"translateX(-50%)",width:"5rem",height:"5rem",border:"2px solid white","border-radius":"50%","box-shadow":"0px 2px 5px rgba(0,0,0,0.4)"},attrs:{to:"watch/"+t.shows[t.currentPage].id}},[a("fa",{staticStyle:{"font-size":"1.5rem","margin-left":"38%"},attrs:{icon:"play"}})],1)],1),a("div",{staticClass:"ContentContainer",staticStyle:{"pointer-events":"none"}},[a("div",{staticClass:"padding",staticStyle:{height:"10rem","pointer-events":"none",background:"linear-gradient(transparent, #1e1e1e 10rem)"}},[a("br"),a("transition",{attrs:{name:"switch-up",mode:"out-in"}},[a("h1",{key:t.currentPage,staticClass:"margin-bottom-small margin-right-xlarge"},[t._v(t._s(t.shows[t.currentPage].title))])]),a("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[a("p",{key:t.currentPage,staticClass:"margin-bottom-small margin-right-xlarge"},[t._v(t._s(t.shows[t.currentPage].shortdesc))])]),a("span",[t._v("★★★★☆ 189 Reviews")]),a("br"),a("br")],1),a("div",{staticClass:"div",staticStyle:{"background-color":"#1e1e1e","pointer-events":"auto"}},[a("div",{staticClass:"padding"},[a("span",{staticClass:"wide flex align-items-center justify-content-space-between"},[a("span",[t._v("You Might Like")]),a("button",{on:{click:function(e){t.$router.push("You Might Like")}}},[t._v("See All")])])]),a("div",{staticClass:"div flex",staticStyle:{"overflow-x":"auto"}},t._l(t.shows,function(e){return a("div",{staticClass:"div item relative",on:{click:function(a){t.$router.push("/watch/"+e.id)}}},[a("clazy-load",{attrs:{ratio:0,src:e.thumbUrl}},[a("transition",{attrs:{name:"fade",appear:""}},[a("img",{staticClass:"wide",attrs:{src:e.thumbUrl}})]),a("div",{staticClass:"preloader page-wide page-high",attrs:{slot:"placeholder"},slot:"placeholder"})],1),a("span",{staticClass:"absolute bottom left margin"},[t._v(t._s(e.title))])],1)}),0),a("div",{staticClass:"padding"},[a("span",{staticClass:"wide flex align-items-center justify-content-space-between"},[a("span",[t._v("Continue Watching")]),a("button",{on:{click:function(e){t.$router.push("Continue Watching")}}},[t._v("See All")])])]),a("div",{staticClass:"div flex",staticStyle:{"overflow-x":"auto"}},t._l(t.section_one,function(e){return a("div",{staticClass:"div item relative",on:{click:function(a){t.$router.push("/watch/"+e.id)}}},[a("clazy-load",{attrs:{ratio:0,src:e.thumbUrl}},[a("transition",{attrs:{name:"fade",appear:""}},[a("img",{staticClass:"wide",attrs:{src:e.thumbUrl}})]),a("div",{staticClass:"preloader page-wide page-high",attrs:{slot:"placeholder"},slot:"placeholder"})],1),a("span",{staticClass:"absolute bottom left margin"},[t._v(t._s(e.title))])],1)}),0),a("div",{staticClass:"padding"},[a("span",{staticClass:"wide flex align-items-center justify-content-space-between"},[a("span",[t._v("Popular")]),a("button",{on:{click:function(e){t.$router.push("Popular")}}},[t._v("See All")])])]),a("div",{staticClass:"div flex",staticStyle:{"overflow-x":"auto"}},t._l(t.section_two,function(e){return a("div",{staticClass:"div item relative",on:{click:function(a){t.$router.push("/watch/"+e.id)}}},[a("clazy-load",{attrs:{ratio:0,src:e.thumbUrl}},[a("transition",{attrs:{name:"fade",appear:""}},[a("img",{staticClass:"wide",attrs:{src:e.thumbUrl}})]),a("div",{staticClass:"preloader page-wide page-high",attrs:{slot:"placeholder"},slot:"placeholder"})],1),a("span",{staticClass:"absolute bottom left margin"},[t._v(t._s(e.title))])],1)}),0)])])])},T=[],S={data:function(){return{currentPage:0,shows:b.shows,section_one:b.section_one,section_two:b.section_two}}},j=S,O=(a("6b39"),Object(o["a"])(j,x,T,!1,null,"4ea72394",null));O.options.__file="Home.vue";var A=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"padding relative page-high page-wide",staticStyle:{"overflow-y":"auto","background-color":"#1e1e1e"}},[a("br"),a("br"),a("br"),a("h2",{staticClass:"margin-left-small"},[t._v(t._s(t.$route.path.replace("/","")))]),a("br"),a("div",{staticClass:"grid-2 margin-left-small"},t._l(t.showslist,function(e){return a("div",{on:{click:function(a){t.$router.push("/watch/"+e.id)}}},[a("div",{staticClass:"div item relative"},[a("clazy-load",{attrs:{ratio:0,src:e.thumbUrl}},[a("transition",{attrs:{name:"fade",appear:""}},[a("img",{staticClass:"wide",attrs:{src:e.thumbUrl}})]),a("div",{staticClass:"preloader wide high",attrs:{slot:"placeholder"},slot:"placeholder"})],1)],1),a("span",[t._v(t._s(e.title))]),a("br"),a("br")])}),0)])},U=[],P={data:function(){return{showslist:b.showslist}}},$=P,L=(a("287b"),Object(o["a"])($,E,U,!1,null,"45af30de",null));L.options.__file="List.vue";var W=L.exports;i["a"].use(d["a"]);var G=new d["a"]({routes:[{path:"/",component:g,children:[{path:"/",component:A},{path:"/:section",component:W}]},{path:"/watch/:id",name:"watch",component:_}]}),R=a("9483");Object(R["a"])("".concat("/iwant-pwa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var M=a("ecee"),D=a("ad3d"),z=a("c074"),B=a("ea07"),Y=a.n(B),I=a("0a63"),N=a.n(I);M["c"].add(z["b"],z["g"],z["d"],z["c"],z["m"],z["l"],z["a"],z["i"],z["f"],z["k"],z["j"],z["h"],z["e"],z["n"]),i["a"].component("fa",D["a"]),i["a"].use(Y.a),i["a"].use(N.a),i["a"].config.productionTip=!1,new i["a"]({router:G,render:function(t){return t(c)}}).$mount("#app")},"6b39":function(t,e,a){"use strict";var i=a("29b6"),s=a.n(i);s.a},"7fa2":function(t,e,a){"use strict";var i=a("ad84"),s=a.n(i);s.a},ad84:function(t,e,a){},cf25:function(t,e,a){"use strict";var i=a("0cfb"),s=a.n(i);s.a},ed32:function(t,e,a){"use strict";var i=a("2bf0"),s=a.n(i);s.a}});