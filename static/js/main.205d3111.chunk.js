(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1XxUo",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3cF9T"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3HN3v",Modal:"Modal_Modal__GUdek"}},23:function(e,t,a){e.exports={Button:"Button_Button__3v7b1"}},24:function(e,t,a){e.exports={Container:"Container_Container__3088k"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__BAm1M"}},27:function(e,t,a){e.exports={Notification:"Notification_Notification__2PBT8"}},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=a(14),l=a(4),s=a(5),u=a(7),d=a(6),h=a(11),m=a.n(h);m.a.defaults.baseURL="https://pixabay.com/api/";var b=function(e,t){return m.a.get("?q=".concat(e,"&page=").concat(t,"&key=").concat("20826556-19d7dce6dc96816ed1b7dccf7","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},g=a(23),j=a.n(g),f=a(0),p=function(e){var t=e.onClick;return Object(f.jsx)("button",{type:"button",onClick:t,className:j.a.Button,children:"Load more"})},y=a(24),v=a.n(y),_=function(e){var t=e.children;return Object(f.jsx)("div",{className:v.a.Container,children:t})},O=a(12),x=a.n(O),I=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL;return Object(f.jsx)("li",{className:x.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:t,alt:a,"data-url":n,className:x.a.ImageGalleryItem__image})})},k=a(25),S=a.n(k),C=function(e){var t=e.images,a=e.onClick;return Object(f.jsx)("ul",{className:S.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(f.jsx)(I,{webformatURL:a,tags:n,largeImageURL:r},t)}))})},w=a(13),M=a.n(w),N=document.getElementById("modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModalEsc=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:M.a.Overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:M.a.Modal,children:this.props.children})}),N)}}]),a}(n.Component),G=a(26),q=a.n(G),U=function(){return Object(f.jsx)(q.a,{type:"Circles",color:"#3f51b5",height:100,width:100})},B=a(27),F=a.n(B),E=function(e){var t=e.message;return Object(f.jsx)("p",{className:F.a.Notification,children:t})},R=a(8),D=a.n(R),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInputChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(f.jsx)("header",{className:D.a.Searchbar,children:Object(f.jsxs)("form",{className:D.a.SearchForm,onSubmit:this.handleFormSubmit,children:[Object(f.jsx)("button",{type:"submit",className:D.a.button,children:Object(f.jsx)("span",{className:D.a.buttonLabel,children:"Search"})}),Object(f.jsx)("input",{className:D.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange,value:e})]})})}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,query:"",images:[],error:"",loader:!1,showModal:!1,url:"",tag:""},e.fetchImages=function(){var t=e.state,a=t.query,n=t.page;return e.setState({loader:!0}),b(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1,error:""}}))})).finally((function(){return e.setState({loader:!1})}))},e.handleFormData=function(t){var a=t.query;e.setState({page:1,query:a,images:[],error:""})},e.handleImageClick=function(t){var a=t.target;if("IMG"===a.nodeName){var n=a.dataset.url,r=a.alt;e.setState({url:n,tag:r,loader:!0}),e.toggleModal()}},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e.hideLoaderInModal=function(){return e.setState({loader:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.query!==t.query&&this.fetchImages().catch((function(e){return a.setState({error:e})})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.loader,r=e.showModal,o=e.url,c=e.tag;return Object(f.jsxs)(_,{children:[r&&Object(f.jsxs)(L,{onClose:this.toggleModal,onClick:this.handleImageClick,children:[n&&Object(f.jsx)(U,{}),Object(f.jsx)("img",{src:o,alt:c,onLoad:this.hideLoaderInModal})]}),Object(f.jsx)(A,{onSubmit:this.handleFormData}),a&&Object(f.jsx)(E,{message:"Something wrong :("}),Object(f.jsx)(C,{images:t,onClick:this.handleImageClick}),n&&!r&&Object(f.jsx)(U,{}),!n&&t[0]&&Object(f.jsx)(p,{onClick:this.fetchImages})]})}}]),a}(n.Component);a(71),a(72),a(73);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1x55F",SearchForm:"Searchbar_SearchForm__3jyjj",button:"Searchbar_button__2Qs6c",buttonLabel:"Searchbar_buttonLabel__18561",input:"Searchbar_input__3Ylvl"}}},[[74,1,2]]]);
//# sourceMappingURL=main.205d3111.chunk.js.map