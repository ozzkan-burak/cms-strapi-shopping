(self.webpackChunkcms_strapi_shopping=self.webpackChunkcms_strapi_shopping||[]).push([[8750],{2466:(b,p,t)=>{"use strict";t.d(p,{o:()=>z});var n=t(16333);const o="alpha",r="beta",a="delta",l="epsilon",e="omega",s="pi",u="sigma",g=[o,r,a,l,e,s,u],x=({ellipsis:c=!1})=>c&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,f=({variant:c=e,theme:i})=>{switch(c){case o:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[5]};
        line-height: ${i.lineHeights[2]};
      `;case r:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[4]};
        line-height: ${i.lineHeights[1]};
      `;case a:return`
        font-weight: ${i.fontWeights.semiBold};
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[2]};
      `;case l:return`
        font-size: ${i.fontSizes[3]};
        line-height: ${i.lineHeights[6]};
      `;case e:return`
        font-size: ${i.fontSizes[2]};
        line-height: ${i.lineHeights[4]};
      `;case s:return`
        font-size: ${i.fontSizes[1]};
        line-height: ${i.lineHeights[3]};
      `;case u:return`
        font-weight: ${i.fontWeights.bold};
        font-size: ${i.fontSizes[0]};
        line-height: ${i.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${i.fontSizes[2]};
      `}};var d=t(78058);const j={fontSize:!0,fontWeight:!0},z=n.Ay.span.withConfig({shouldForwardProp:(c,i)=>!j[c]&&i(c)})`
  ${f}
  ${x}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:c,fontWeight:i})=>(0,d.K)(c.fontWeights,i,void 0)};
  font-size: ${({theme:c,fontSize:i})=>(0,d.K)(c.fontSizes,i,void 0)};
  line-height: ${({theme:c,lineHeight:i})=>(0,d.K)(c.lineHeights,i,i)};
  color: ${({theme:c,textColor:i})=>c.colors[i||"neutral800"]};
  text-align: ${({textAlign:c})=>c};
  text-decoration: ${({textDecoration:c})=>c};
  text-transform: ${({textTransform:c})=>c};
`},4191:(b,p,t)=>{var n=t(87864),o=t(86386),r=t(45353),a=t(29884),l=t(74565),e=t(52689),s=t(48126),u=t(82388),g=t(82261);function x(f,d,j){d.length?d=n(d,function(i){return g(i)?function(U){return o(U,i.length===1?i[0]:i)}:i}):d=[u];var z=-1;d=n(d,e(r));var c=a(f,function(i,U,D){var N=n(d,function(Q){return Q(i)});return{criteria:N,index:++z,value:i}});return l(c,function(i,U){return s(i,U,j)})}b.exports=x},26771:(b,p,t)=>{"use strict";t.d(p,{a:()=>l});var n=t(16333),o=t(70114),r=t(78058);const a={color:!0,cursor:!0,height:!0,width:!0},l=n.Ay.div.withConfig({shouldForwardProp:(e,s)=>!a[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,r.K)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,r.K)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,r.K)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,o.A)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,o.A)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,o.A)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,o.A)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,o.A)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,o.A)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,o.A)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,o.A)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,o.A)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:u})=>s?e.borderRadius:u};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,r.K)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:u,borderWidth:g})=>{if(s&&!u&&typeof g>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,r.K)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,r.K)(s.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:s})=>(0,r.K)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},29884:(b,p,t)=>{var n=t(97449),o=t(91522);function r(a,l){var e=-1,s=o(a)?Array(a.length):[];return n(a,function(u,g,x){s[++e]=l(u,g,x)}),s}b.exports=r},41007:(b,p,t)=>{"use strict";t.d(p,{B:()=>f});var n=t(92132),o=t(21272),r=t(16333),a=t(26771),l=t(2466);const e=()=>(0,n.jsx)(a.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(l.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=t(70114);const u={direction:!0},g=(0,r.Ay)(a.a).withConfig({shouldForwardProp:(d,j)=>!u[d]&&j(d)})`
  align-items: ${({alignItems:d="center"})=>d};
  display: ${({display:d="flex",inline:j})=>j?"inline-flex":d};
  flex-direction: ${({direction:d="row"})=>d};
  flex-shrink: ${({shrink:d})=>d};
  flex-wrap: ${({wrap:d})=>d};
  ${({gap:d,theme:j})=>(0,s.A)("gap",d,j)};
  justify-content: ${({justifyContent:d})=>d};
`,x=(0,r.Ay)(g)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:d})=>`calc(-1*${d.spaces[2]})`};
  }
`,f=({label:d,children:j,...z})=>{const c=o.Children.toArray(j);return(0,n.jsx)(a.a,{"aria-label":d,...z,children:(0,n.jsx)(x,{as:"ol",children:o.Children.map(c,(i,U)=>{const D=c.length>1&&U+1<c.length;return(0,n.jsxs)(g,{inline:!0,as:"li",children:[i,D&&(0,n.jsx)(e,{})]})})})})};f.displayName="Breadcrumbs"},45635:(b,p,t)=>{var n=t(87212),o=t(4191),r=t(39226),a=t(3956),l=r(function(e,s){if(e==null)return[];var u=s.length;return u>1&&a(e,s[0],s[1])?s=[]:u>2&&a(s[0],s[1],s[2])&&(s=[s[0]]),o(e,n(s,1),[])});b.exports=l},48126:(b,p,t)=>{var n=t(64958);function o(r,a,l){for(var e=-1,s=r.criteria,u=a.criteria,g=s.length,x=l.length;++e<g;){var f=n(s[e],u[e]);if(f){if(e>=x)return f;var d=l[e];return f*(d=="desc"?-1:1)}}return r.index-a.index}b.exports=o},56914:(b,p,t)=>{"use strict";t.d(p,{mr:()=>a,X3:()=>s,gT:()=>u.A});var n=t(77965),o=t.n(n);const a=g=>Object.keys(g).reduce((x,f)=>{const d=g[f].controllers,j=Object.keys(d).reduce((z,c)=>(o()(d[c])||(z[c]=d[c]),z),{});return o()(j)||(x[f]={controllers:j}),x},{});var l=t(4655);const s=g=>`/${l.A}/${g}`;var u=t(97552)},58862:(b,p,t)=>{"use strict";t.r(p),t.d(p,{ProvidersPage:()=>le,default:()=>Be});var n=t(92132),o=t(21272),r=t(82616),a=t(52370),l=t(49436),e=t(36531),s=t(82869),u=t(81888),g=t(40710),x=t(99690),f=t(19692),d=t(12248),j=t(33340),z=t(61152),c=t(17060),i=t(1433),U=t(41909),D=t(412),N=t.n(D),Q=t(39404),ce=t.n(Q),I=t(54894),G=t(74930),ge=t(88996),me=t(88441),pe=t(95690),fe=t(44940),ve=t(37750),be=t(23859),xe=t(9871),se=t(36726),ye=t(41007),$e=t(62723),je=t(2506),Pe=t(33544),h=t.n(Pe),Me=t(76456),Te=t(42256);const V=({description:v,disabled:P,intlLabel:A,error:R,name:T,onChange:E,placeholder:C,providerToEditName:F,type:B,value:y})=>{const{formatMessage:L}=(0,I.A)(),W=T==="noName"?`${window.strapi.backendURL}/api/connect/${F}/callback`:y,K=L({id:A.id,defaultMessage:A.defaultMessage},{provider:F,...A.values}),S=v?L({id:v.id,defaultMessage:v.defaultMessage},{provider:F,...v.values}):"";if(B==="bool")return(0,n.jsx)(Me.l,{"aria-label":T,checked:y,disabled:P,hint:S,label:K,name:T,offLabel:L({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:L({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:_=>{E({target:{name:T,value:_.target.checked}})}});const q=C?L({id:C.id,defaultMessage:C.defaultMessage},{...C.values}):"",w=R?L({id:R,defaultMessage:R}):"";return(0,n.jsx)(Te.k,{"aria-label":T,disabled:P,error:w,label:K,name:T,onChange:E,placeholder:q,type:B,value:W})};V.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},V.propTypes={description:h().shape({id:h().string.isRequired,defaultMessage:h().string.isRequired,values:h().object}),disabled:h().bool,error:h().string,intlLabel:h().shape({id:h().string.isRequired,defaultMessage:h().string.isRequired,values:h().object}).isRequired,name:h().string.isRequired,onChange:h().func.isRequired,placeholder:h().shape({id:h().string.isRequired,defaultMessage:h().string.isRequired,values:h().object}),providerToEditName:h().string.isRequired,type:h().string.isRequired,value:h().oneOfType([h().bool,h().string])};const Ae=V,X=({headerBreadcrumbs:v,initialData:P,isSubmiting:A,layout:R,isOpen:T,onSubmit:E,onToggle:C,providerToEditName:F})=>{const{formatMessage:B}=(0,I.A)();return T?(0,n.jsxs)(ge.k,{onClose:C,labelledBy:"title",children:[(0,n.jsx)(me.r,{children:(0,n.jsx)(ye.B,{label:v.join(", "),children:v.map((y,L,W)=>(0,n.jsx)($e.m,{isCurrent:L===W.length-1,children:y},y))})}),(0,n.jsx)(je.l1,{onSubmit:y=>E(y),initialValues:P,validationSchema:R.schema,validateOnChange:!1,children:({errors:y,handleChange:L,values:W})=>(0,n.jsxs)(i.lV,{children:[(0,n.jsx)(pe.c,{children:(0,n.jsx)(fe.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,n.jsx)(ve.x,{gap:5,children:R.form.map(K=>K.map(S=>(0,n.jsx)(be.E,{col:S.size,xs:12,children:(0,n.jsx)(Ae,{...S,error:y[S.name],onChange:L,value:W[S.name],providerToEditName:F})},S.name)))})})}),(0,n.jsx)(xe.j,{startActions:(0,n.jsx)(se.$,{variant:"tertiary",onClick:C,type:"button",children:B({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,n.jsx)(se.$,{type:"submit",loading:A,children:B({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};X.defaultProps={initialData:null,providerToEditName:null},X.propTypes={headerBreadcrumbs:h().arrayOf(h().string).isRequired,initialData:h().object,layout:h().shape({form:h().arrayOf(h().array),schema:h().object}).isRequired,isOpen:h().bool.isRequired,isSubmiting:h().bool.isRequired,onSubmit:h().func.isRequired,onToggle:h().func.isRequired,providerToEditName:h().string};const Ce=X;var ne=t(69224),$=t(56914);const Le=async v=>{try{const{get:P}=(0,i.GD)(),{data:A}=await P((0,$.X3)("providers"));return A}catch{throw v({type:"warning",message:{id:"notification.error"}}),new Error("error")}},ze=v=>{const{put:P}=(0,i.GD)();return P((0,$.X3)("providers"),v)};var Re=t(45635),Se=t.n(Re);const Ee=v=>Se()(Object.keys(v).reduce((P,A)=>{const{icon:R,enabled:T,subdomain:E}=v[A],C=R==="envelope"?["fas","envelope"]:["fab",R];return E!==void 0?P.push({name:A,icon:C,enabled:T,subdomain:E}):P.push({name:A,icon:C,enabled:T}),P},[]),"name");var m=t(12083);const ie={id:(0,$.gT)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},re={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},J={id:(0,$.gT)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},k={id:(0,$.gT)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ae={id:(0,$.gT)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,$.gT)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},O={id:(0,$.gT)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,$.gT)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Z={email:{form:[[{intlLabel:k,name:"enabled",type:"bool",description:J,size:6}]],schema:m.Ik().shape({enabled:m.lc().required(i.iW.required)})},providers:{form:[[{intlLabel:k,name:"enabled",type:"bool",description:J,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:ie,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:m.Ik().shape({enabled:m.lc().required(i.iW.required),key:m.Yj().when("enabled",{is:!0,then:m.Yj().required(i.iW.required),otherwise:m.Yj()}),secret:m.Yj().when("enabled",{is:!0,then:m.Yj().required(i.iW.required),otherwise:m.Yj()}),callback:m.Yj().when("enabled",{is:!0,then:m.Yj().required(i.iW.required),otherwise:m.Yj()})})},providersWithSubdomain:{form:[[{intlLabel:k,name:"enabled",type:"bool",description:J,size:6,validations:{required:!0}}],[{intlLabel:ae,name:"key",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,$.gT)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:O,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,$.gT)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,$.gT)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:ie,placeholder:re,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:m.Ik().shape({enabled:m.lc().required(i.iW.required),key:m.Yj().when("enabled",{is:!0,then:m.Yj().required(i.iW.required),otherwise:m.Yj()}),secret:m.Yj().when("enabled",{is:!0,then:m.Yj().required(i.iW.required),otherwise:m.Yj()}),subdomain:m.Yj().when("enabled",{is:!0,then:m.Yj().required(i.iW.required),otherwise:m.Yj()}),callback:m.Yj().when("enabled",{is:!0,then:m.Yj().required(i.iW.required),otherwise:m.Yj()})})}},le=()=>{const{formatMessage:v}=(0,I.A)();(0,i.L4)();const{notifyStatus:P}=(0,r.W)(),A=(0,G.useQueryClient)(),{trackUsage:R}=(0,i.z1)(),T=(0,o.useRef)(R),[E,C]=(0,o.useState)(!1),[F,B]=(0,o.useState)(!1),[y,L]=(0,o.useState)(null),W=(0,i.hN)(),{lockApp:K,unlockApp:S}=(0,i.MA)(),{isLoading:q,allowedActions:{canUpdate:w}}=(0,i.ec)({update:ne.J.updateProviders}),{isLoading:_,data:Y,isFetching:We}=(0,G.useQuery)("get-providers",()=>Le(W),{onSuccess(){P(v({id:(0,$.gT)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Ue=_||We,Fe=(0,G.useMutation)(ze,{async onSuccess(){await A.invalidateQueries("get-providers"),W({type:"info",message:{id:(0,$.gT)("notification.success.submit")}}),T.current("didEditAuthenticationProvider"),B(!1),ee(),S()},onError(){W({type:"warning",message:{id:"notification.error"}}),S(),B(!1)},refetchActive:!1}),H=(0,o.useMemo)(()=>Ee(Y),[Y]),Ke=H.length,ue=(0,o.useMemo)(()=>{if(!y)return!1;const M=H.find(te=>te.name===y);return N()(M,"subdomain")},[H,y]),Oe=v({id:(0,$.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"}),we=(0,o.useMemo)(()=>y==="email"?Z.email:ue?Z.providersWithSubdomain:Z.providers,[y,ue]),ee=()=>{C(M=>!M)},he=M=>{w&&(L(M.name),ee())},De=async M=>{B(!0),K(),T.current("willEditAuthenticationProvider");const te={...Y,[y]:M};Fe.mutate({providers:te})};return(0,n.jsxs)(a.P,{children:[(0,n.jsx)(i.x7,{name:Oe}),(0,n.jsxs)(l.g,{children:[(0,n.jsx)(e.Q,{title:v({id:(0,$.gT)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Ue||q?(0,n.jsx)(i.Bl,{}):(0,n.jsx)(s.s,{children:(0,n.jsxs)(u.X,{colCount:3,rowCount:Ke+1,children:[(0,n.jsx)(g.d,{children:(0,n.jsxs)(x.Tr,{children:[(0,n.jsx)(f.Th,{children:(0,n.jsx)(d.o,{variant:"sigma",textColor:"neutral600",children:v({id:"global.name",defaultMessage:"Name"})})}),(0,n.jsx)(f.Th,{children:(0,n.jsx)(d.o,{variant:"sigma",textColor:"neutral600",children:v({id:(0,$.gT)("Providers.status"),defaultMessage:"Status"})})}),(0,n.jsx)(f.Th,{children:(0,n.jsx)(d.o,{variant:"sigma",children:(0,n.jsx)(j.s,{children:v({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,n.jsx)(z.N,{children:H.map(M=>(0,n.jsxs)(x.Tr,{...(0,i.qM)({fn:()=>he(M),condition:w}),children:[(0,n.jsx)(f.Td,{width:"45%",children:(0,n.jsx)(d.o,{fontWeight:"semiBold",textColor:"neutral800",children:M.name})}),(0,n.jsx)(f.Td,{width:"65%",children:(0,n.jsx)(d.o,{textColor:M.enabled?"success600":"danger600","data-testid":`enable-${M.name}`,children:M.enabled?v({id:"global.enabled",defaultMessage:"Enabled"}):v({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,n.jsx)(f.Td,{...i.dG,children:w&&(0,n.jsx)(c.K,{onClick:()=>he(M),noBorder:!0,icon:(0,n.jsx)(U.A,{}),label:"Edit"})})]},M.name))})]})})]}),(0,n.jsx)(Ce,{initialData:Y[y],isOpen:E,isSubmiting:F,layout:we,headerBreadcrumbs:[v({id:(0,$.gT)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),ce()(y)],onToggle:ee,onSubmit:De,providerToEditName:y})]})},Be=()=>(0,n.jsx)(i.kz,{permissions:ne.J.readProviders,children:(0,n.jsx)(le,{})})},62723:(b,p,t)=>{"use strict";t.d(p,{m:()=>a});var n=t(92132),o=t(26771),r=t(2466);const a=({children:l,isCurrent:e=!1,...s})=>(0,n.jsx)(o.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(r.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:l})});a.displayName="Crumb"},64958:(b,p,t)=>{var n=t(91662);function o(r,a){if(r!==a){var l=r!==void 0,e=r===null,s=r===r,u=n(r),g=a!==void 0,x=a===null,f=a===a,d=n(a);if(!x&&!d&&!u&&r>a||u&&g&&f&&!x&&!d||e&&g&&f||!l&&f||!s)return 1;if(!e&&!u&&!d&&r<a||d&&l&&s&&!e&&!u||x&&l&&s||!g&&s||!f)return-1}return 0}b.exports=o},70114:(b,p,t)=>{"use strict";t.d(p,{A:()=>n});const n=(o,r,a)=>{if(!r)return;let l=Array.isArray(r)?r:[];if(!Array.isArray(r)&&typeof r=="object"&&(l=[r?.desktop,r?.tablet,r?.mobile]),l.length>0)return l.reduce((s,u,g)=>{if(u)switch(g){case 0:return`${s}${o}: ${a.spaces[u]};`;case 1:return`${s}${a.mediaQueries.tablet}{${o}: ${a.spaces[u]};}`;case 2:return`${s}${a.mediaQueries.mobile}{${o}: ${a.spaces[u]};}`;default:return s}return s},"");const e=a.spaces[r]||r;return`${o}: ${e};`}},74565:b=>{function p(t,n){var o=t.length;for(t.sort(n);o--;)t[o]=t[o].value;return t}b.exports=p},75821:(b,p,t)=>{var n=t(91522);function o(r,a){return function(l,e){if(l==null)return l;if(!n(l))return r(l,e);for(var s=l.length,u=a?s:-1,g=Object(l);(a?u--:++u<s)&&e(g[u],u,g)!==!1;);return l}}b.exports=o},78058:(b,p,t)=>{"use strict";t.d(p,{K:()=>r});function n(a,l){return typeof a=="string"?!1:l in a}function o(a){return a&&typeof a=="object"&&!Array.isArray(a)}function r(a,l,e){return l&&n(a,l)?a[l]:e}},97449:(b,p,t)=>{var n=t(85373),o=t(75821),r=o(n);b.exports=r}}]);
