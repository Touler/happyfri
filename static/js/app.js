webpackJsonp([5,3],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=i(57),_=n(a),r=i(139),d=n(r),s=i(153),c=n(s),o=i(155),u=n(o),p=i(56);n(p);i(88),i(152),_.default.use(d.default);var l=new d.default({routes:c.default});new _.default({router:l,store:u.default}).$mount("#app")},56:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(147),_=n(a),r=i(140),d=n(r),s=i(142),c=n(s),o=i(143),u=n(o);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new u.default(function(a,r){e=e.toUpperCase();var s=void 0;if(s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject,"GET"==e){var o="";(0,c.default)(i).forEach(function(e){o+=e+"="+i[e]+"&"}),o=o.substr(0,o.lastIndexOf("&")),t=t+"?"+o,s.open(e,t,n),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.send()}else"POST"==e?(s.open(e,t,n),s.setRequestHeader("Content-type","application/json"),s.send((0,d.default)(i))):r("error type");s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status){var e=s.response;"object"!==("undefined"==typeof e?"undefined":(0,_.default)(e))&&(e=JSON.parse(e)),a(e)}else r(s)}})}},87:function(e,t){},88:function(e,t){},90:function(e,t,i){i(87);var n=i(12)(i(148),i(97),null,null);e.exports=n.exports},97:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("router-view")],1)},staticRenderFns:[]}},148:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},152:function(e,t){"use strict";!function(e,t){var i=e.documentElement,n="orientationchange"in window?"orientationchange":"resize",a=function(){var e=i.clientWidth;e&&(i.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(n,a,!1),e.addEventListener("DOMContentLoaded",a,!1))}(document,window)},153:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(90),_=n(a);t.default=[{path:"/",component:_.default,children:[{path:"",component:function(e){return i.e(1,function(){return e(i(91))})}},{path:"/item",component:function(e){return i.e(0,function(){return e(i(92))})}},{path:"/score",component:function(e){return i.e(2,function(){return e(i(93))})}}]}]},154:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(56);n(a);t.default={addNum:function(e,t){var i=e.commit,n=e.state;i("REMBER_ANSWER",t),n.itemNum<n.itemDetail.length&&i("ADD_ITEMNUM",1)},initializeData:function(e){var t=e.commit;t("INITIALIZE_DATA")}}},155:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(57),_=n(a),r=i(21),d=n(r),s=i(156),c=n(s),o=i(154),u=n(o),p=i(56);n(p);_.default.use(d.default);var l={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"答案D",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"测试A",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"BBBBBB",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"CCCCCC",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"正确答案",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"正确答案",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"A是错的",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"D是对的",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"C说的不对",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"错误答案",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"正确答案",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"错误答案",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"错误答案",is_standard_answer:0}]}],answerid:[]};t.default=new d.default.Store({state:l,actions:u.default,mutations:c.default})},156:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,_=i(146),r=n(_),d="ADD_ITEMNUM",s="REMBER_ANSWER",c="REMBER_TIME",o="INITIALIZE_DATA";t.default=(a={},(0,r.default)(a,d,function(e,t){e.itemNum+=t}),(0,r.default)(a,s,function(e,t){e.answerid.push(t)}),(0,r.default)(a,c,function(e){e.timer=setInterval(function(){e.allTime++},1e3)}),(0,r.default)(a,o,function(e){e.itemNum=1,e.allTime=0,e.answerid=[]}),a)}});