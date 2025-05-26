"use strict";(self.webpackChunkcms_strapi_shopping=self.webpackChunkcms_strapi_shopping||[]).push([[3064],{2466:(S,p,a)=>{a.d(p,{o:()=>T});var s=a(16333);const r="alpha",i="beta",o="delta",h="epsilon",e="omega",t="pi",g="sigma",u=[r,i,o,h,e,t,g],y=({ellipsis:m=!1})=>m&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,l=({variant:m=e,theme:n})=>{switch(m){case r:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case i:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case h:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case e:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case t:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case g:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var d=a(78058);const f={fontSize:!0,fontWeight:!0},T=s.Ay.span.withConfig({shouldForwardProp:(m,n)=>!f[m]&&n(m)})`
  ${l}
  ${y}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:m,fontWeight:n})=>(0,d.K)(m.fontWeights,n,void 0)};
  font-size: ${({theme:m,fontSize:n})=>(0,d.K)(m.fontSizes,n,void 0)};
  line-height: ${({theme:m,lineHeight:n})=>(0,d.K)(m.lineHeights,n,n)};
  color: ${({theme:m,textColor:n})=>m.colors[n||"neutral800"]};
  text-align: ${({textAlign:m})=>m};
  text-decoration: ${({textDecoration:m})=>m};
  text-transform: ${({textTransform:m})=>m};
`},21898:(S,p,a)=>{a.r(p),a.d(p,{default:()=>re});var s=a(92132),r=a(21272),i=a(82616),o=a(49436),h=a(36531),e=a(82869),t=a(1433),g=a(54894),u=a(74930),y=a(69224),l=a(56914),d=a(88996),f=a(88441),T=a(95690),m=a(37750),n=a(23859),P=a(92274),z=a(9871),H=a(36726),X=a(41007),D=a(62723),Y=a(2506),J=a(33544),x=a.n(J),M=a(12083);const Z=M.Ik().shape({options:M.Ik().shape({from:M.Ik().shape({name:M.Yj().required(t.iW.required),email:M.Yj().email(t.iW.email).required(t.iW.required)}).required(),response_email:M.Yj().email(t.iW.email),object:M.Yj().required(t.iW.required),message:M.Yj().required(t.iW.required)}).required(t.iW.required)}),U=({template:c,onToggle:$,onSubmit:v})=>{const{formatMessage:j}=(0,g.A)();return(0,s.jsxs)(d.k,{onClose:$,labelledBy:`${j({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${j({id:(0,l.gT)(c.display),defaultMessage:c.display})}`,children:[(0,s.jsx)(f.r,{children:(0,s.jsxs)(X.B,{label:`${j({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${j({id:(0,l.gT)(c.display),defaultMessage:c.display})}`,children:[(0,s.jsx)(D.m,{children:j({id:(0,l.gT)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,s.jsx)(D.m,{isCurrent:!0,children:j({id:(0,l.gT)(c.display),defaultMessage:c.display})})]})}),(0,s.jsx)(Y.l1,{onSubmit:v,initialValues:c,validateOnChange:!1,validationSchema:Z,enableReinitialize:!0,children:({errors:b,values:A,handleChange:C,isSubmitting:W})=>(0,s.jsxs)(t.lV,{children:[(0,s.jsx)(T.c,{children:(0,s.jsxs)(m.x,{gap:5,children:[(0,s.jsx)(n.E,{col:6,s:12,children:(0,s.jsx)(t.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:A.options.from.name,error:b?.options?.from?.name,type:"text"})}),(0,s.jsx)(n.E,{col:6,s:12,children:(0,s.jsx)(t.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:A.options.from.email,error:b?.options?.from?.email,type:"text"})}),(0,s.jsx)(n.E,{col:6,s:12,children:(0,s.jsx)(t.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:A.options.response_email,error:b?.options?.response_email,type:"text"})}),(0,s.jsx)(n.E,{col:6,s:12,children:(0,s.jsx)(t.ah,{intlLabel:{id:(0,l.gT)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:A.options.object,error:b?.options?.object,type:"text"})}),(0,s.jsx)(n.E,{col:12,s:12,children:(0,s.jsx)(P.T,{label:j({id:(0,l.gT)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:C,value:A.options.message,error:b?.options?.message&&j({id:b.options.message,defaultMessage:b.options.message})})})]})}),(0,s.jsx)(z.j,{startActions:(0,s.jsx)(H.$,{onClick:$,variant:"tertiary",children:"Cancel"}),endActions:(0,s.jsx)(H.$,{loading:W,type:"submit",children:"Finish"})})]})})]})};U.propTypes={template:x().shape({display:x().string,icon:x().string,options:x().shape({from:x().shape({name:x().string,email:x().string}),message:x().string,object:x().string,response_email:x().string})}).isRequired,onSubmit:x().func.isRequired,onToggle:x().func.isRequired};const k=U;var q=a(81888),_=a(40710),K=a(99690),E=a(19692),F=a(33340),L=a(12248),ee=a(61152),I=a(73228),O=a(17060),te=a(70603),w=a(41909),se=a(54514);const N=({canUpdate:c,onEditClick:$})=>{const{formatMessage:v}=(0,g.A)();return(0,s.jsxs)(q.X,{colCount:3,rowCount:3,children:[(0,s.jsx)(_.d,{children:(0,s.jsxs)(K.Tr,{children:[(0,s.jsx)(E.Th,{width:"1%",children:(0,s.jsx)(F.s,{children:v({id:(0,l.gT)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,s.jsx)(E.Th,{children:(0,s.jsx)(L.o,{variant:"sigma",textColor:"neutral600",children:v({id:(0,l.gT)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,s.jsx)(E.Th,{width:"1%",children:(0,s.jsx)(F.s,{children:v({id:(0,l.gT)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,s.jsxs)(ee.N,{children:[(0,s.jsxs)(K.Tr,{...(0,t.qM)({fn:()=>$("reset_password")}),children:[(0,s.jsx)(E.Td,{children:(0,s.jsx)(I.I,{children:(0,s.jsx)(te.A,{"aria-label":v({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,s.jsx)(E.Td,{children:(0,s.jsx)(L.o,{children:v({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,s.jsx)(E.Td,{...t.dG,children:(0,s.jsx)(O.K,{onClick:()=>$("reset_password"),label:v({id:(0,l.gT)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:c&&(0,s.jsx)(w.A,{})})})]}),(0,s.jsxs)(K.Tr,{...(0,t.qM)({fn:()=>$("email_confirmation")}),children:[(0,s.jsx)(E.Td,{children:(0,s.jsx)(I.I,{children:(0,s.jsx)(se.A,{"aria-label":v({id:(0,l.gT)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,s.jsx)(E.Td,{children:(0,s.jsx)(L.o,{children:v({id:(0,l.gT)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,s.jsx)(E.Td,{...t.dG,children:(0,s.jsx)(O.K,{onClick:()=>$("email_confirmation"),label:v({id:(0,l.gT)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:c&&(0,s.jsx)(w.A,{})})})]})]})]})};N.propTypes={canUpdate:x().bool.isRequired,onEditClick:x().func.isRequired};const ae=N,ie=async()=>{const{get:c}=(0,t.GD)(),{data:$}=await c((0,l.X3)("email-templates"));return $},ne=c=>{const{put:$}=(0,t.GD)();return $((0,l.X3)("email-templates"),c)},oe=()=>(0,s.jsx)(t.kz,{permissions:y.J.readEmailTemplates,children:(0,s.jsx)(le,{})}),le=()=>{const{formatMessage:c}=(0,g.A)(),{trackUsage:$}=(0,t.z1)(),{notifyStatus:v}=(0,i.W)(),j=(0,t.hN)(),{lockApp:b,unlockApp:A}=(0,t.MA)(),C=(0,r.useRef)($),W=(0,u.useQueryClient)();(0,t.L4)();const[de,me]=(0,r.useState)(!1),[Q,he]=(0,r.useState)(null),{isLoading:ce,allowedActions:{canUpdate:ge}}=(0,t.ec)({update:y.J.updateEmailTemplates}),{status:pe,data:G}=(0,u.useQuery)("email-templates",()=>ie(),{onSuccess(){v(c({id:(0,l.gT)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){j({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ue=ce||pe!=="success",B=()=>{me(R=>!R)},fe=R=>{he(R),B()},V=(0,u.useMutation)(R=>ne({"email-templates":R}),{async onSuccess(){await W.invalidateQueries("email-templates"),j({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),C.current("didEditEmailTemplates"),A(),B()},onError(){j({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),A()},refetchActive:!0}),{isLoading:xe}=V,$e=R=>{b(),C.current("willEditEmailTemplates");const ve={...G,[Q]:R};V.mutate(ve)};return ue?(0,s.jsxs)(o.g,{"aria-busy":"true",children:[(0,s.jsx)(t.x7,{name:c({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(h.Q,{title:c({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(e.s,{children:(0,s.jsx)(t.Bl,{})})]}):(0,s.jsxs)(o.g,{"aria-busy":xe,children:[(0,s.jsx)(t.x7,{name:c({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(h.Q,{title:c({id:(0,l.gT)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsxs)(e.s,{children:[(0,s.jsx)(ae,{onEditClick:fe,canUpdate:ge}),de&&(0,s.jsx)(k,{template:G[Q],onToggle:B,onSubmit:$e})]})]})},re=oe},26771:(S,p,a)=>{a.d(p,{a:()=>h});var s=a(16333),r=a(70114),i=a(78058);const o={color:!0,cursor:!0,height:!0,width:!0},h=s.Ay.div.withConfig({shouldForwardProp:(e,t)=>!o[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>(0,i.K)(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>(0,i.K)(e.colors,t,t)};
  color: ${({theme:e,color:t})=>(0,i.K)(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>(0,r.A)("padding",t,e)}
  ${({theme:e,paddingTop:t})=>(0,r.A)("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>(0,r.A)("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>(0,r.A)("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>(0,r.A)("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>(0,r.A)("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>(0,r.A)("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>(0,r.A)("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>(0,r.A)("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:g})=>t?e.borderRadius:g};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>(0,i.K)(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:g,borderWidth:u})=>{if(t&&!g&&typeof u>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>(0,i.K)(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>(0,i.K)(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>(0,i.K)(t.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:t})=>(0,i.K)(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},41007:(S,p,a)=>{a.d(p,{B:()=>l});var s=a(92132),r=a(21272),i=a(16333),o=a(26771),h=a(2466);const e=()=>(0,s.jsx)(o.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(h.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var t=a(70114);const g={direction:!0},u=(0,i.Ay)(o.a).withConfig({shouldForwardProp:(d,f)=>!g[d]&&f(d)})`
  align-items: ${({alignItems:d="center"})=>d};
  display: ${({display:d="flex",inline:f})=>f?"inline-flex":d};
  flex-direction: ${({direction:d="row"})=>d};
  flex-shrink: ${({shrink:d})=>d};
  flex-wrap: ${({wrap:d})=>d};
  ${({gap:d,theme:f})=>(0,t.A)("gap",d,f)};
  justify-content: ${({justifyContent:d})=>d};
`,y=(0,i.Ay)(u)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:d})=>`calc(-1*${d.spaces[2]})`};
  }
`,l=({label:d,children:f,...T})=>{const m=r.Children.toArray(f);return(0,s.jsx)(o.a,{"aria-label":d,...T,children:(0,s.jsx)(y,{as:"ol",children:r.Children.map(m,(n,P)=>{const z=m.length>1&&P+1<m.length;return(0,s.jsxs)(u,{inline:!0,as:"li",children:[n,z&&(0,s.jsx)(e,{})]})})})})};l.displayName="Breadcrumbs"},56914:(S,p,a)=>{a.d(p,{mr:()=>o,X3:()=>t,gT:()=>g.A});var s=a(77965),r=a.n(s);const o=u=>Object.keys(u).reduce((y,l)=>{const d=u[l].controllers,f=Object.keys(d).reduce((T,m)=>(r()(d[m])||(T[m]=d[m]),T),{});return r()(f)||(y[l]={controllers:f}),y},{});var h=a(4655);const t=u=>`/${h.A}/${u}`;var g=a(97552)},62723:(S,p,a)=>{a.d(p,{m:()=>o});var s=a(92132),r=a(26771),i=a(2466);const o=({children:h,isCurrent:e=!1,...t})=>(0,s.jsx)(r.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(i.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...t,children:h})});o.displayName="Crumb"},70114:(S,p,a)=>{a.d(p,{A:()=>s});const s=(r,i,o)=>{if(!i)return;let h=Array.isArray(i)?i:[];if(!Array.isArray(i)&&typeof i=="object"&&(h=[i?.desktop,i?.tablet,i?.mobile]),h.length>0)return h.reduce((t,g,u)=>{if(g)switch(u){case 0:return`${t}${r}: ${o.spaces[g]};`;case 1:return`${t}${o.mediaQueries.tablet}{${r}: ${o.spaces[g]};}`;case 2:return`${t}${o.mediaQueries.mobile}{${r}: ${o.spaces[g]};}`;default:return t}return t},"");const e=o.spaces[i]||i;return`${r}: ${e};`}},78058:(S,p,a)=>{a.d(p,{K:()=>i});function s(o,h){return typeof o=="string"?!1:h in o}function r(o){return o&&typeof o=="object"&&!Array.isArray(o)}function i(o,h,e){return h&&s(o,h)?o[h]:e}}}]);
