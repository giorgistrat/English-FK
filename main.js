(()=>{"use strict";(()=>{function a(a,t){return function(a){if(Array.isArray(a))return a}(a)||function(a,t){var r=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=r){var i,o,e=[],n=!0,c=!1;try{for(r=r.call(a);!(n=(i=r.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(a){c=!0,o=a}finally{try{n||null==r.return||r.return()}finally{if(c)throw o}}return e}}(a,t)||i(a,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(a){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}function r(a){return function(a){if(Array.isArray(a))return o(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||i(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(a,t){if(a){if("string"==typeof a)return o(a,t);var r=Object.prototype.toString.call(a).slice(8,-1);return"Object"===r&&a.constructor&&(r=a.constructor.name),"Map"===r||"Set"===r?Array.from(a):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(a,t):void 0}}function o(a,t){(null==t||t>a.length)&&(t=a.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=a[r];return i}function e(i,o,e,n){var c,d=null;try{d=document.createElement(i)}catch(a){throw new Error("Unable to create HTMLElement! Give a proper tag name")}o&&(c=d.classList).add.apply(c,r(o.split(" "))),e&&Array.isArray(e)?e.forEach((function(a){return a&&d.appendChild(a)})):e&&"object"===t(e)?d.appendChild(e):e&&"string"==typeof e&&(d.innerHTML=e),n&&n.appendChild(d);for(var g=arguments.length,s=new Array(g>4?g-4:0),u=4;u<g;u++)s[u-4]=arguments[u];return s.length&&s.forEach((function(t){var r=a(t,2),i=r[0],o=r[1];""===o&&d.setAttribute(i,""),i.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck|src|alt/)?d.setAttribute(i,o):d.dataset[i]=o})),d}var n=function a(t){var r=t.word,i=t.translation,o=t.image,n=t.audioSrc;!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.word=r,this.translation=i,this.image=o,this.audioSrc=n,this.frontHeader=e("div","card-header","".concat(this.word)),this.backHeader=e("div","card-header","".concat(this.translation)),this.btnRotate=e("div","btn-rotate"),this.btnRotate.style.backgroundImage="url(img/rotate.svg)",this.front=e("div","front",[this.frontHeader,this.btnRotate]),this.front.style.backgroundImage="url(".concat(o,")"),this.back=e("div","back",this.backHeader),this.back.style.backgroundImage="url(".concat(o,")"),this.div=e("div","card",[this.front,this.back]),this.container=e("div","card-container",this.div)};const c=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes","Emotions","Food","Transport"],[{category:"Action (set A)",word:"cry",translation:"ტირილი",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{category:"Action (set A)",word:"dance",translation:"ცეკვა",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{category:"Action (set A)",word:"dive",translation:"ყვინთვა",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{category:"Action (set A)",word:"draw",translation:"ხატვა",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{category:"Action (set A)",word:"fish",translation:"თევზაობა",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{category:"Action (set A)",word:"fly",translation:"ფრენა",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{category:"Action (set A)",word:"hug",translation:"ჩახუტება",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{category:"Action (set A)",word:"jump",translation:"ხტომა",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{category:"Action (set B)",word:"open",translation:"გაღება",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{category:"Action (set B)",word:"play",translation:"თამაში",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{category:"Action (set B)",word:"point",translation:"მითითება",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{category:"Action (set B)",word:"ride",translation:"მართვა",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{category:"Action (set B)",word:"run",translation:"სირბილი",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{category:"Action (set B)",word:"sing",translation:"სიმღერა",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{category:"Action (set B)",word:"skip",translation:"გამოტოვება",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{category:"Action (set B)",word:"swim",translation:"ცურვა",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{category:"Animal (set A)",word:"cat",translation:"კატა",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{category:"Animal (set A)",word:"chick",translation:"წიწილა",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{category:"Animal (set A)",word:"chicken",translation:"ქათამი",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{category:"Animal (set A)",word:"dog",translation:"ძაღლი",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{category:"Animal (set A)",word:"horse",translation:"ცხენი",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{category:"Animal (set A)",word:"pig",translation:"ღორი",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{category:"Animal (set A)",word:"rabbit",translation:"კურდღელი",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{category:"Animal (set A)",word:"sheep",translation:"ცხვარი",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{category:"Animal (set B)",word:"bird",translation:"ჩიტი",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{category:"Animal (set B)",word:"fish",translation:"თევზი",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{category:"Animal (set B)",word:"frog",translation:"ბაყაყი",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{category:"Animal (set B)",word:"giraffe",translation:"ჟირაფი",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{category:"Animal (set B)",word:"lion",translation:"ლომი",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{category:"Animal (set B)",word:"mouse",translation:"თაგვი",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{category:"Animal (set B)",word:"turtle",translation:"კუ",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{category:"Animal (set B)",word:"dolphin",translation:"დელფინი",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{category:"Clothes",word:"skirt",translation:"ბოლოკაბა",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{category:"Clothes",word:"pants",translation:"შარვალი",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{category:"Clothes",word:"blouse",translation:"ბლუზა",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{category:"Clothes",word:"dress",translation:"კაბა",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{category:"Clothes",word:"boot",translation:"ბათინკი",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{category:"Clothes",word:"shirt",translation:"მაისური",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{category:"Clothes",word:"coat",translation:"ქურთუკი",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{category:"Clothes",word:"shoe",translation:"ფეხსაცმელი",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{category:"Emotions",word:"sad",translation:"მოწყენილი",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{category:"Emotions",word:"angry",translation:"გაბრაზებული",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{category:"Emotions",word:"happy",translation:"ბედნიერი",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{category:"Emotions",word:"tired",translation:"დაღლილი",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{category:"Emotions",word:"surprised",translation:"გახარებული",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{category:"Emotions",word:"scared",translation:"შეშინებული",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{category:"Emotions",word:"smile",translation:"ღიმილი",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{category:"Emotions",word:"laugh",translation:"სიცილი",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{category:"Food",word:"apple",translation:"ვაშლი",image:"img/apple.jpg",audioSrc:"audio/apple.mp3"},{category:"Food",word:"milk",translation:"რძე",image:"img/milk.jpg",audioSrc:"audio/milk.mp3"},{category:"Food",word:"banana",translation:"ბანანი",image:"img/banana.jpg",audioSrc:"audio/banana.mp3"},{category:"Food",word:"bread",translation:"პური",image:"img/bread.jpg",audioSrc:"audio/bread.mp3"},{category:"Food",word:"cake",translation:"ტორტი",image:"img/cake.jpg",audioSrc:"audio/cake.mp3"},{category:"Food",word:"cheese",translation:"ყველი",image:"img/cheese.jpg",audioSrc:"audio/cheese.mp3"},{category:"Food",word:"ice cream",translation:"ნაყინი",image:"img/icecream.jpg",audioSrc:"audio/icecream.mp3"},{category:"Food",word:"orange",translation:"ფორთოხალი",image:"img/orange.jpg",audioSrc:"audio/orange.mp3"}],[{category:"Transport",word:"airplane",translation:"თვითმფრინავი",image:"img/airplane.jpg",audioSrc:"audio/airplane.mp3"},{category:"Transport",word:"bicycle",translation:"ველოსიპედი",image:"img/bicycle.jpg",audioSrc:"audio/bicycle.mp3"},{category:"Transport",word:"bus",translation:"ავტობუსი",image:"img/bus.jpg",audioSrc:"audio/bus.mp3"},{category:"Transport",word:"car",translation:"მანქანა",image:"img/car.jpg",audioSrc:"audio/car.mp3"},{category:"Transport",word:"motorcycle",translation:"მოტოციკლეტი",image:"img/motorcycle.jpg",audioSrc:"audio/motorcycle.mp3"},{category:"Transport",word:"ship",translation:"გემი",image:"img/ship.jpg",audioSrc:"audio/ship.mp3"},{category:"Transport",word:"train",translation:"მატარებელი",image:"img/train.jpg",audioSrc:"audio/train.mp3"},{category:"Transport",word:"truck",translation:"სატვირთო",image:"img/truck.jpg",audioSrc:"audio/truck.mp3"}]];function d(a,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function g(a,t,r){return t in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}var s=document.querySelector(".burger-list"),u=document.querySelector(".main-page"),m=document.querySelector(".category-page"),l=function(){function a(){var t=this;!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),g(this,"generateMainPage",(function(){t.clearPage(),c[0].forEach((function(a,t){e("div","main-card",e("div",null,a),u,["id","".concat(t)]).style.backgroundImage="url(img/".concat(t,".jpg)")}))})),g(this,"openMenuCard",(function(a){var r=a.target.closest(".main-card");if(r){t.currentCategory=r.firstElementChild.textContent;var i=+r.id;t.clearPage(),t.generateCategoryPage(i)}})),g(this,"openMenuItem",(function(a){var r=a.target.closest(".burger-item");if(r)if(t.currentCategory=r.textContent,"Main menu"===r.textContent)t.generateMainPage();else{var i=c[0].indexOf(r.textContent);t.generateCategoryPage(i)}})),g(this,"rotateCard",(function(a){var t=a.target.closest(".card");t.classList.add("rotated"),t.addEventListener("mouseleave",(function(){t.classList.remove("rotated")}))})),g(this,"cardEventHandler",(function(a){var t,r;if("front"===a.target.classList.value)return t=a.target.firstElementChild.textContent,(r=new Audio).src="./audio/".concat(t,".mp3"),void r.play()})),this.isPlay=!1,this.gameIsOn=!1,this.categoryCards=[],this.playWords=[],this.currentCategory=null,this.menuItems=null}var t,r;return t=a,(r=[{key:"init",value:function(){return this.menuItems=document.querySelectorAll(".burger-item"),this.subscribeEventListeners(),this}},{key:"subscribeEventListeners",value:function(){s.addEventListener("click",this.openMenuItem),u.addEventListener("click",this.openMenuCard),m.addEventListener("click",this.rotateCard),m.addEventListener("click",this.cardEventHandler)}},{key:"generateCategoryPage",value:function(a){var t=this;this.clearPage(),c[a+1].sort((function(){return Math.random()-.5})).forEach((function(a){var r=new n(a);t.categoryCards.push(r),t.playWords.push(r.word),m.append(r.container)}))}},{key:"clearPage",value:function(){this.categoryCards=[],this.playWords=[],u.innerHTML="",m.innerHTML=""}}])&&d(t.prototype,r),a}();window.addEventListener("DOMContentLoaded",(function(){var a,t,r,i,o;a=document.querySelector(".burger__overlay"),t=document.querySelector(".burger"),r=document.querySelector(".burger-menu"),i=document.querySelectorAll(".burger-item"),o=document.querySelector(".burger-icon"),t.addEventListener("click",(function(){o.classList.toggle("is-active"),r.classList.toggle("open"),r.classList.toggle("hide"),a.classList.toggle("unvisible")})),i.forEach((function(a){return a.addEventListener("click",(function(){t.click()}))})),(new l).init().generateMainPage()}))})()})();