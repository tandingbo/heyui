webpackJsonp([17],{197:function(e,t,o){var n=o(0)(o(766),o(957),null,null);n.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/demos/message/modal9.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] modal9.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},766:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{opened:!1}},methods:{confirm:function(){this.$Message("点击确定了。"),this.close()},close:function(){this.opened=!1}}}},957:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("button",{staticClass:"h-btn",on:{click:function(t){e.opened=!0}}},[e._v("打开弹出框")]),e._v(" "),o("Modal",{attrs:{"has-divider":!0},model:{value:e.opened,callback:function(t){e.opened=t},expression:"opened"}},[o("div",{slot:"header"},[e._v("标题")]),e._v(" "),o("div",{directives:[{name:"width",rawName:"v-width",value:600,expression:"600"},{name:"height",rawName:"v-height",value:1e3,expression:"1000"}]},[e._v("这是一个普通的弹出框")]),e._v(" "),o("div",{slot:"footer"},[o("button",{staticClass:"h-btn",on:{click:e.close}},[e._v("取消")]),o("button",{staticClass:"h-btn h-btn-primary",on:{click:e.confirm}},[e._v("确定")])])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});