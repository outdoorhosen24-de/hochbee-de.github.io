(window.webpackJsonp=window.webpackJsonp||[]).push([[24,20],{262:function(t,e,o){o(263)},263:function(t,e,o){"use strict";var r=o(5),n=o(1),l=o(13),c=o(3),d=o(25),v=o(8),f=o(110),m=o(14),h=o(50),y=o(111),D=o(194),C=o(6),x=o(32),_=C("replace"),S=RegExp.prototype,E=n.TypeError,T=c(y),w=c("".indexOf),P=c("".replace),A=c("".slice),R=Math.max,$=function(t,e,o){return o>t.length?-1:""===e?o:w(t,e,o)};r({target:"String",proto:!0},{replaceAll:function(t,e){var o,r,n,c,y,C,F,O,I,L=d(this),U=0,K=0,M="";if(null!=t){if((o=f(t))&&(r=m(d("flags"in S?t.flags:T(t))),!~w(r,"g")))throw E("`.replaceAll` does not allow non-global regexes");if(n=h(t,_))return l(n,t,L,e);if(x&&o)return P(m(L),t,e)}for(c=m(L),y=m(t),(C=v(e))||(e=m(e)),F=y.length,O=R(1,F),U=$(c,y,0);-1!==U;)I=C?m(e(y,U,c)):D(y,c,U,[],void 0,e),M+=A(c,K,U)+I,K=U+F,U=$(c,y,U+O);return K<c.length&&(M+=A(c,K)),M}})},266:function(t,e,o){"use strict";o.r(e);var r={name:"seoText",props:{seoData:Object}},n=o(18),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row g-5"},[o("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},["content"in t.seoData.seotext?o("div",t._l(t.seoData.seotext.content,(function(text,e){return o("div",{key:e},[o("div",{staticClass:"mb-3 mt-5 h2",domProps:{innerHTML:t._s(text.title)}}),t._v(" "),o("p",{staticClass:"mb-4",domProps:{innerHTML:t._s(text.text)}})])})),0):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e,o){"use strict";o.r(e);o(33),o(69),o(262),o(30),o(43);var r=o(19),n=o(109),main=o(270),l={name:"categoryComponent",head:function(){var t,e,o,n,l,c;return{title:(null===(t=this.seoData)||void 0===t||null===(e=t.seo)||void 0===e?void 0:e.title)||r.categorySeo.defaultTitle.replaceAll("$PRODUKT",this.categoryData.name).replaceAll("$HERSTELLER",this.categoryData.brand).replaceAll("$KATEGORIE",this.categoryData.name),meta:[{hid:"description",name:"description",content:(null===(o=this.seoData)||void 0===o||null===(n=o.seo)||void 0===n?void 0:n.metaDescription)||r.categorySeo.defaultMetaDescription.replaceAll("$PRODUKT",this.categoryData.name).replaceAll("$HERSTELLER",this.categoryData.brand).replaceAll("$KATEGORIE",this.categoryData.name)},{hid:"robots",name:"robots",content:(null===(l=this.seoData)||void 0===l||null===(c=l.seo)||void 0===c?void 0:c.robots)||r.categorySeo.defaultRobots}]}},components:{Pagination:o.n(main).a},data:function(){var t=this.$route.params.slug,e=n.a.categories.getCategoryFromSlug(t);return{products:n.a.products.getProductsFromCategory(e).slice(0,r.numberMaximumProductsPerCategory),categoryData:e,seoData:n.a.seo.getSeoForCategoryFromSlug(t),page:1}},methods:{handleFilterSelection:function(t){this.products=t}}},c=o(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid py-5"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row g-5"},[o("div",{staticClass:"col-lg-2 fadeInUp"},[o("CategorySidebar"),t._v(" "),o("Filters",{attrs:{products:t.products},on:{selected:t.handleFilterSelection}})],1),t._v(" "),o("div",{staticClass:"col-lg-10 fadeInUp"},[o("div",{staticClass:"text-center fadeInUp"},[o("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n              Kategorie\n            ")]),t._v(" "),o("h1",{staticClass:"mb-5 h2"},[t._v("\n              "+t._s(t.categoryData.name)+"\n            ")])]),t._v(" "),o("Products",{attrs:{products:t.products.slice(12*(t.page-1),12*t.page),page:t.page}}),t._v(" "),o("Pagination",{staticClass:"mt-5 d-flex justify-content-center text-center",attrs:{data:t.products,"per-page":12,records:t.products.length},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])])]),t._v(" "),t.seoData&&t.seoData.seo?o("SeoText",{attrs:{seoData:t.seoData.seo}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:o(265).default,Filters:o(269).default,Products:o(259).default,SeoText:o(266).default})}}]);