(function(e){function a(a){for(var c,l,s=a[0],r=a[1],g=a[2],m=0,u=[];m<s.length;m++)l=s[m],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&u.push(i[l][0]),i[l]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);d&&d(a);while(u.length)u.shift()();return n.push.apply(n,g||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],c=!0,s=1;s<t.length;s++){var r=t[s];0!==i[r]&&(c=!1)}c&&(n.splice(a--,1),e=l(l.s=t[0]))}return e}var c={},i={app:0},n=[];function l(a){if(c[a])return c[a].exports;var t=c[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=c,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var c in e)l.d(t,c,function(a){return e[a]}.bind(null,c));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/card-match/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=a,s=s.slice();for(var g=0;g<s.length;g++)a(s[g]);var d=r;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"1d23":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),i=Object(c["d"])("h3",null,"Select the card back you would like to play with",-1),n={class:"row my-3"},l=["onClick"],s=["src","alt"],r=Object(c["d"])("h3",null,"Select a suit of cards to play the game with",-1),g={class:"row my-3"},d={class:"col-6 col-sm-3 mb-2 mb-sm-0 text-center"},m=["src"],u={class:"col-6 col-sm-3 mb-2 mb-sm-0 text-center"},o=["src"],p={class:"col-6 col-sm-3 mb-2 mb-sm-0 text-center"},b=["src"],v={class:"col-6 col-sm-3 mb-2 mb-sm-0 text-center"},f=["src"],C={class:"text-center"};function h(e,a,t,h,O,j){var k=Object(c["k"])("game");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["d"])("div",{class:Object(c["f"])(["container text-center",{"d-none":void 0!==O.selectedSuit}])},[i,Object(c["d"])("div",n,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(O.cardBacks,(function(e){return Object(c["g"])(),Object(c["c"])("div",{class:"col-6 mb-2 mb-sm-0 col-sm-2 text-center",key:"card-back_".concat(e.value)},[Object(c["d"])("button",{type:"button",class:"btn btn-link card-button",onClick:function(){return j.setCardBack(e.value)}},[Object(c["d"])("img",{src:e.image,class:Object(c["f"])(["card-image",{"selected-back":O.selectedBack===e.value}]),alt:"".concat(j.capitalize(e.value)," card back")},null,10,s)],8,l)])})),128))]),r,Object(c["d"])("div",g,[Object(c["d"])("div",d,[Object(c["d"])("button",{type:"button",class:"btn btn-link card-button",onClick:a[0]||(a[0]=function(){return j.setSuit("spades")})},[Object(c["d"])("img",{src:O.spadeImg,class:"card-image",alt:"Ace of Spades"},null,8,m)])]),Object(c["d"])("div",u,[Object(c["d"])("button",{type:"button",class:"btn btn-link card-button",onClick:a[1]||(a[1]=function(){return j.setSuit("clubs")})},[Object(c["d"])("img",{src:O.clubImg,class:"card-image",alt:"Ace of Clubs"},null,8,o)])]),Object(c["d"])("div",p,[Object(c["d"])("button",{type:"button",class:"btn btn-link card-button",onClick:a[2]||(a[2]=function(){return j.setSuit("hearts")})},[Object(c["d"])("img",{src:O.heartImg,class:"card-image",alt:"Ace of Hearts"},null,8,b)])]),Object(c["d"])("div",v,[Object(c["d"])("button",{type:"button",class:"btn btn-link card-button",onClick:a[3]||(a[3]=function(){return j.setSuit("diamonds")})},[Object(c["d"])("img",{src:O.diamondImg,class:"card-image",alt:"Ace of Diamonds"},null,8,f)])])]),Object(c["d"])("div",C,[Object(c["d"])("button",{type:"button",class:"btn btn-link",onClick:a[4]||(a[4]=function(){return j.setSuit("all")})},"Or click here to play with all suits")])],2),Object(c["d"])("div",{class:Object(c["f"])(["container",{"d-none":void 0===O.selectedSuit}])},[Object(c["e"])(k,{suit:O.selectedSuit,back:O.selectedBack,newGame:j.newGame},null,8,["suit","back","newGame"])],2)],64)}t("99af"),t("fb6a"),t("caad"),t("2532");var O={class:"row"},j={class:"col text-center d-none d-sm-block"},k=["disabled"],S={class:"col-12 col-sm text-center"},y={class:"col text-center d-none d-sm-block"},D={class:"col-6 d-block d-sm-none"},H=["disabled"],w={class:"col-6 d-block d-sm-none"},A={class:"row"};function G(e,a,t,i,n,l){var s=Object(c["k"])("card");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["d"])("div",O,[Object(c["d"])("div",j,[Object(c["d"])("button",{type:"button",class:"btn btn-outline-primary",onClick:a[0]||(a[0]=function(){return l.resetGame&&l.resetGame.apply(l,arguments)}),disabled:n.gameBeat}," Reset ",8,k)]),Object(c["d"])("div",S,[Object(c["d"])("h2",null,"Score: "+Object(c["l"])(n.score.toLocaleString()),1)]),Object(c["d"])("div",y,[Object(c["d"])("button",{type:"button",class:"btn btn-primary",onClick:a[1]||(a[1]=function(){return l.onNewGame&&l.onNewGame.apply(l,arguments)})}," New Game ")]),Object(c["d"])("div",D,[Object(c["d"])("button",{type:"button",class:"btn btn-outline-primary btn-block my-3",onClick:a[2]||(a[2]=function(){return l.resetGame&&l.resetGame.apply(l,arguments)}),disabled:n.gameBeat}," Reset ",8,H)]),Object(c["d"])("div",w,[Object(c["d"])("button",{type:"button",class:"btn btn-primary btn-block my-3",onClick:a[3]||(a[3]=function(){return l.onNewGame&&l.onNewGame.apply(l,arguments)})}," New Game ")])]),Object(c["d"])("h3",{class:Object(c["f"])(["text-success text-center",{invisible:!n.gameBeat}])},"You win!",2),Object(c["d"])("div",A,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(l.cardSet,(function(e){return Object(c["g"])(),Object(c["c"])("div",{class:"col-4 col-sm-3 col-md-2 col-lg-1 my-3 text-center",key:"card_".concat(e.value,"-").concat(e.id)},[Object(c["e"])(s,{back:t.back,card:e,onClick:l.onCardClick,disableClicks:n.disableClicks,flipped:n.flipped.includes(e.id),solved:n.solved.includes(e.id)},null,8,["back","card","onClick","disableClicks","flipped","solved"])])})),128))])],64)}var x=t("2909"),_=t("5530"),B=t("3835");t("a434"),t("7db0");Object(c["i"])("data-v-a3860878");var J={class:"card-front"},K=["src"],Q={class:"card-back"},I=["src"];function M(e,a,t,i,n,l){return Object(c["g"])(),Object(c["c"])("button",{type:"button",class:Object(c["f"])(["btn btn-link card-button",{clicked:t.flipped||t.solved,solved:t.solved}]),onClick:a[0]||(a[0]=function(){t.solved||t.disableClicks||t.onClick(t.card)})},[Object(c["d"])("div",J,[Object(c["d"])("img",{src:t.card.image,alt:"Card alt text"},null,8,K)]),Object(c["d"])("div",Q,[Object(c["d"])("img",{src:"/card-images/back_".concat(t.back,".png"),alt:"Card back alt"},null,8,I)])],2)}Object(c["h"])();var T={name:"Card",props:{flipped:{type:Boolean,default:!1},solved:{type:Boolean,default:!1},disableClicks:{type:Boolean,default:!1},card:{type:Object,required:!0},back:String,onClick:{type:Function,default:function(){}}}};t("e319");T.render=M,T.__scopeId="data-v-a3860878";var N=T,P=[{image:"/card-images/2C.png",value:"2C"},{image:"/card-images/3C.png",value:"3C"},{image:"/card-images/4C.png",value:"4C"},{image:"/card-images/5C.png",value:"5C"},{image:"/card-images/6C.png",value:"6C"},{image:"/card-images/7C.png",value:"7C"},{image:"/card-images/8C.png",value:"8C"},{image:"/card-images/9C.png",value:"9C"},{image:"/card-images/10C.png",value:"10C"},{image:"/card-images/JC.png",value:"JC"},{image:"/card-images/QC.png",value:"QC"},{image:"/card-images/KC.png",value:"KC"},{image:"/card-images/AC.png",value:"AC"},{image:"/card-images/2S.png",value:"2S"},{image:"/card-images/3S.png",value:"3S"},{image:"/card-images/4S.png",value:"4S"},{image:"/card-images/5S.png",value:"5S"},{image:"/card-images/6S.png",value:"6S"},{image:"/card-images/7S.png",value:"7S"},{image:"/card-images/8S.png",value:"8S"},{image:"/card-images/9S.png",value:"9S"},{image:"/card-images/10S.png",value:"10S"},{image:"/card-images/JS.png",value:"JS"},{image:"/card-images/QS.png",value:"QS"},{image:"/card-images/KS.png",value:"KS"},{image:"/card-images/AS.png",value:"AS"},{image:"/card-images/2H.png",value:"2H"},{image:"/card-images/3H.png",value:"3H"},{image:"/card-images/4H.png",value:"4H"},{image:"/card-images/5H.png",value:"5H"},{image:"/card-images/6H.png",value:"6H"},{image:"/card-images/7H.png",value:"7H"},{image:"/card-images/8H.png",value:"8H"},{image:"/card-images/9H.png",value:"9H"},{image:"/card-images/10H.png",value:"10H"},{image:"/card-images/JH.png",value:"JH"},{image:"/card-images/QH.png",value:"QH"},{image:"/card-images/KH.png",value:"KH"},{image:"/card-images/AH.png",value:"AH"},{image:"/card-images/2D.png",value:"2D"},{image:"/card-images/3D.png",value:"3D"},{image:"/card-images/4D.png",value:"4D"},{image:"/card-images/5D.png",value:"5D"},{image:"/card-images/6D.png",value:"6D"},{image:"/card-images/7D.png",value:"7D"},{image:"/card-images/8D.png",value:"8D"},{image:"/card-images/9D.png",value:"9D"},{image:"/card-images/10D.png",value:"10D"},{image:"/card-images/JD.png",value:"JD"},{image:"/card-images/QD.png",value:"QD"},{image:"/card-images/KD.png",value:"KD"},{image:"/card-images/AD.png",value:"AD"}],q=[{image:"/card-images/2C.png",value:"2C"},{image:"/card-images/3C.png",value:"3C"},{image:"/card-images/4C.png",value:"4C"},{image:"/card-images/5C.png",value:"5C"},{image:"/card-images/6C.png",value:"6C"},{image:"/card-images/7C.png",value:"7C"},{image:"/card-images/8C.png",value:"8C"},{image:"/card-images/9C.png",value:"9C"},{image:"/card-images/10C.png",value:"10C"},{image:"/card-images/JC.png",value:"JC"},{image:"/card-images/QC.png",value:"QC"},{image:"/card-images/KC.png",value:"KC"},{image:"/card-images/AC.png",value:"AC"}],z=[{image:"/card-images/2S.png",value:"2S"},{image:"/card-images/3S.png",value:"3S"},{image:"/card-images/4S.png",value:"4S"},{image:"/card-images/5S.png",value:"5S"},{image:"/card-images/6S.png",value:"6S"},{image:"/card-images/7S.png",value:"7S"},{image:"/card-images/8S.png",value:"8S"},{image:"/card-images/9S.png",value:"9S"},{image:"/card-images/10S.png",value:"10S"},{image:"/card-images/JS.png",value:"JS"},{image:"/card-images/QS.png",value:"QS"},{image:"/card-images/KS.png",value:"KS"},{image:"/card-images/AS.png",value:"AS"}],F=[{image:"/card-images/2H.png",value:"2H"},{image:"/card-images/3H.png",value:"3H"},{image:"/card-images/4H.png",value:"4H"},{image:"/card-images/5H.png",value:"5H"},{image:"/card-images/6H.png",value:"6H"},{image:"/card-images/7H.png",value:"7H"},{image:"/card-images/8H.png",value:"8H"},{image:"/card-images/9H.png",value:"9H"},{image:"/card-images/10H.png",value:"10H"},{image:"/card-images/JH.png",value:"JH"},{image:"/card-images/QH.png",value:"QH"},{image:"/card-images/KH.png",value:"KH"},{image:"/card-images/AH.png",value:"AH"}],R=[{image:"/card-images/2D.png",value:"2D"},{image:"/card-images/3D.png",value:"3D"},{image:"/card-images/4D.png",value:"4D"},{image:"/card-images/5D.png",value:"5D"},{image:"/card-images/6D.png",value:"6D"},{image:"/card-images/7D.png",value:"7D"},{image:"/card-images/8D.png",value:"8D"},{image:"/card-images/9D.png",value:"9D"},{image:"/card-images/10D.png",value:"10D"},{image:"/card-images/JD.png",value:"JD"},{image:"/card-images/QD.png",value:"QD"},{image:"/card-images/KD.png",value:"KD"},{image:"/card-images/AD.png",value:"AD"}],E=[{image:"/card-images/back_blue.png",value:"blue"},{image:"/card-images/back_gray.png",value:"gray"},{image:"/card-images/back_green.png",value:"green"},{image:"/card-images/back_purple.png",value:"purple"},{image:"/card-images/back_red.png",value:"red"},{image:"/card-images/back_yellow.png",value:"yellow"}],L={name:"Game",components:{Card:N},props:{suit:{type:String,required:!0},back:{type:String,default:"blue"},newGame:{type:Function,default:function(){}}},data:function(){return this.timer=null,this.ms=0,{score:0,flipped:[],solved:[],disableClicks:!1,timerActive:!1,gameBeat:!1}},watch:{timerActive:function(e){var a=this;if(e)this.timer=setInterval((function(){a.ms++}),1);else if(clearInterval(this.timer),this.timer=null,this.ms>0){var t=Math.ceil(1e6/this.ms);this.score+=t,this.ms=0}},solved:function(e){e.length===this.cardSet.length&&(this.gameBeat=!0,setTimeout((function(){clearTimeout(),window.document.documentMode?document.documentElement.scrollTop=0:window.scrollTo({top:0,behavior:"smooth"})}),1e3))}},computed:{cardSet:function(){var e=[];switch(this.suit){case"spades":e=z;break;case"clubs":e=q;break;case"hearts":e=F;break;case"diamonds":e=R;break;default:e=P;break}for(var a=e.concat(e),t=[],c=a.length-1;c>=0;c--){var i=Math.floor(Math.random()*(c+1)),n=a.splice(i,1),l=Object(B["a"])(n,1),s=l[0];t.push(Object(_["a"])(Object(_["a"])({},s),{},{id:c}))}return t}},methods:{resetGame:function(){this.score=0,this.flipped=[],this.solved=[],this.disableClicks=!1,this.timerActive=!1,this.gameBeat=!1,null!==this.timer&&(clearInterval(this.timer),this.timer=null),this.ms=0},onNewGame:function(){this.newGame(),this.resetGame()},onCardClick:function(e){var a=this;if(0===this.flipped.length)this.flipped=[e.id],this.timerActive=!0;else if(!this.flipped.includes(e.id)){this.flipped=[].concat(Object(x["a"])(this.flipped),[e.id]);var t=this.cardSet.find((function(e){return e.id===a.flipped[0]}));t.value===e.value?(this.solved=[].concat(Object(x["a"])(this.solved),Object(x["a"])(this.flipped)),this.flipped=[],this.timerActive=!1):(this.disableClicks=!0,setTimeout((function(){clearTimeout(),a.disableClicks=!1,a.flipped=[]}),1e3))}}}};L.render=G;var U=L,Y={name:"App",components:{Game:U},data:function(){return{spadeImg:"/card-images/AS.png",clubImg:"/card-images/AC.png",heartImg:"/card-images/AH.png",diamondImg:"/card-images/AD.png",cardBacks:E,selectedBack:localStorage.getItem("bg_pref")||"blue",selectedSuit:void 0}},methods:{capitalize:function(e){var a=e[0].toUpperCase();return"".concat(a).concat(e.slice(1))},setCardBack:function(e){localStorage.setItem("bg_pref",e),this.selectedBack=e},setSuit:function(e){this.selectedSuit=e},newGame:function(){this.selectedBack=localStorage.getItem("bg_pref")||"blue",this.selectedSuit=void 0}}};t("c2b0");Y.render=h;var V=Y;Object(c["b"])(V).mount("#app")},c2b0:function(e,a,t){"use strict";t("f10e")},e319:function(e,a,t){"use strict";t("1d23")},f10e:function(e,a,t){}});
//# sourceMappingURL=app.8434d5a0.js.map