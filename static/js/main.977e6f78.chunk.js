(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1XxUo",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3cF9T"}},21:function(e,t,a){e.exports={Button:"Button_Button__3v7b1"}},22:function(e,t,a){e.exports={Container:"Container_Container__3088k"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__BAm1M"}},24:function(e,t,a){e.exports={Notification:"Notification_Notification__2PBT8"}},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1x55F",SearchForm:"Searchbar_SearchForm__3jyjj",button:"Searchbar_button__2Qs6c",buttonLabel:"Searchbar_buttonLabel__18561",input:"Searchbar_input__3Ylvl"}},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(20),o=a.n(c),i=a(11),s=a(4),u=a(5),l=a(7),m=a(6),h=a(9),b=a.n(h);b.a.defaults.baseURL="https://pixabay.com/api/";var g=function(e,t){return b.a.get("?q=".concat(e,"&page=").concat(t,"&key=").concat("20826556-19d7dce6dc96816ed1b7dccf7","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},j=a(21),p=a.n(j),f=a(0),d=function(e){var t=e.onClick;return Object(f.jsx)("button",{type:"button",onClick:t,className:p.a.Button,children:"Load more"})},_=a(22),y=a.n(_),v=function(e){var t=e.children;return Object(f.jsx)("div",{className:y.a.Container,children:t})},x=a(10),I=a.n(x),O=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL;return Object(f.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:t,alt:a,"data-url":n,className:I.a.ImageGalleryItem__image})})},S=a(23),N=a.n(S),C=function(e){var t=e.images;return Object(f.jsx)("ul",{className:N.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(f.jsx)(O,{webformatURL:a,tags:n,largeImageURL:r},t)}))})},k=a(24),G=a.n(k),q=function(e){var t=e.message;return Object(f.jsx)("p",{className:G.a.Notification,children:t})},w=a(3),L=a.n(w),F=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInputChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(f.jsx)("header",{className:L.a.Searchbar,children:Object(f.jsxs)("form",{className:L.a.SearchForm,onSubmit:this.handleFormSubmit,children:[Object(f.jsx)("button",{type:"submit",className:L.a.button,children:Object(f.jsx)("span",{className:L.a.buttonLabel,children:"Search"})}),Object(f.jsx)("input",{className:L.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange,value:e})]})})}}]),a}(n.Component),U=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={page:1,query:"",images:[],error:""},e.fetchImages=function(){var t=e.state,a=t.query,n=t.page;return g(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))}))},e.handleFormData=function(t){var a=t.query;e.setState({page:1,query:a,images:[],error:""})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.query!==t.query&&this.fetchImages().catch((function(e){return a.setState({error:e})})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error;return Object(f.jsxs)(v,{children:[Object(f.jsx)(F,{onSubmit:this.handleFormData}),a&&Object(f.jsx)(q,{message:a}),Object(f.jsx)(C,{images:t}),t[0]&&Object(f.jsx)(d,{onClick:this.fetchImages})]})}}]),a}(n.Component);a(48),a(49);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.977e6f78.chunk.js.map