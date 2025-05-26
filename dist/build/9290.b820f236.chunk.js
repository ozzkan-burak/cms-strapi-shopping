"use strict";(self.webpackChunkcms_strapi_shopping=self.webpackChunkcms_strapi_shopping||[]).push([[9290],{217:(A,D,s)=>{s.d(D,{u:()=>m});var t=s(21272),l=s(1433),d=s(21598);const P=d.n.injectEndpoints({endpoints:a=>({getComponents:a.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:e=>e.data}),getContentTypes:a.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetComponentsQuery:O,useGetContentTypesQuery:g}=P;function m(){const{_unstableFormatAPIError:a}=(0,l.wq)(),e=(0,l.hN)(),o=O(),E=g();t.useEffect(()=>{E.error&&e({type:"warning",message:a(E.error)})},[E.error,a,e]),t.useEffect(()=>{o.error&&e({type:"warning",message:a(o.error)})},[o.error,a,e]);const c=o.isLoading||E.isLoading,C=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind==="collectionType"&&M.isDisplayed),[E?.data]),i=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind!=="collectionType"&&M.isDisplayed),[E?.data]);return{isLoading:c,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:C,singleTypes:i}}},3478:(A,D,s)=>{s.d(D,{u:()=>l});var t=s(75647);function l(d={}){const{id:P="",...O}=d,{data:g,isLoading:m}=(0,t.c)({id:P,populate:"stages",...O}),[a]=(0,t.d)(),[e]=(0,t.e)(),[o]=(0,t.f)(),{workflows:E,meta:c}=g??{};return{meta:c,workflows:E,isLoading:m,createWorkflow:a,updateWorkflow:e,deleteWorkflow:o}}},10974:(A,D,s)=>{s.d(D,{B:()=>U,D:()=>B,H:()=>K,R:()=>y});var t=s(92132),l=s(44940),d=s(12248),P=s(52370),O=s(49436),g=s(82869),m=s(36531),a=s(1433),e=s(9005),o=s(46270),E=s(54894),c=s(21598),C=s(49331),i=s(16333);const M=(0,i.Ay)(l.s)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`,R=({name:r})=>(0,t.jsxs)(l.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.a8)(300),children:[(0,t.jsx)(M,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(e.A,{width:`${8/16}rem`})}),(0,t.jsx)(d.o,{fontWeight:"bold",children:r})]}),B=()=>(0,t.jsx)(c.P,{renderItem:r=>{if(r.type===C.D.STAGE)return(0,t.jsx)(R,{name:typeof r.item=="string"?r.item:null})}}),y=({children:r})=>(0,t.jsx)(P.P,{children:(0,t.jsx)(O.g,{tabIndex:-1,children:(0,t.jsx)(g.s,{children:r})})}),U=({href:r})=>{const{formatMessage:h}=(0,E.A)();return(0,t.jsx)(a.N_,{startIcon:(0,t.jsx)(o.A,{}),to:r,children:h({id:"global.back",defaultMessage:"Back"})})},K=({title:r,subtitle:h,navigationAction:L,primaryAction:T})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.x7,{name:r}),(0,t.jsx)(m.Q,{navigationAction:L,primaryAction:T,title:r,subtitle:h})]})},61693:(A,D,s)=>{s.d(D,{S:()=>e});var t=s(92132),l=s(16333),d=s(52724),P=s(88476),O=s(44940),g=s(12248);const m=(0,l.Ay)(d.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,a=(0,l.Ay)(d.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:E,...c})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(P.c,{}),(0,t.jsx)(a,{as:"button",background:"primary100",padding:5,...c,children:(0,t.jsxs)(O.s,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:E}),(0,t.jsx)(d.a,{paddingLeft:3,children:(0,t.jsx)(g.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})},69290:(A,D,s)=>{s.d(D,{ProtectedReviewWorkflowsPage:()=>J});var t=s(92132),l=s(21272),d=s(44940),P=s(19122),O=s(81888),g=s(61693),m=s(40710),a=s(99690),e=s(19692),o=s(12248),E=s(33340),c=s(61152),C=s(17060),i=s(1433),M=s(5194),R=s(41909),B=s(50612),y=s(54894),U=s(93884),K=s(16333),r=s(21598),h=s(217),L=s(10974),T=s(22147),H=s(49331),Q=s(3478),ls=s(15126),Es=s(63299),ds=s(67014),Ms=s(59080),Ds=s(79275),Ps=s(14718),Os=s(82437),gs=s(2506),ms=s(5790),cs=s(12083),vs=s(35223),fs=s(5409),Cs=s(74930),hs=s(2600),Ts=s(48940),As=s(41286),Ls=s(56336),Ws=s(13426),Is=s(84624),Rs=s(77965),Bs=s(54257),ys=s(71210),Us=s(51187),Ks=s(39404),js=s(58692),xs=s(501),us=s(57646),ps=s(23120),ws=s(44414),Ss=s(25962),$s=s(14664),Ns=s(42588),Fs=s(90325),zs=s(62785),Gs=s(87443),Hs=s(41032),Qs=s(22957),Vs=s(93179),Ys=s(73055),Js=s(15747),Xs=s(85306),Zs=s(26509),ks=s(32058),bs=s(81185),qs=s(82261),st=s(75647);const V=(0,K.Ay)(i.N_)`
  align-items: center;
  height: ${(0,i.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,i.a8)(32)};

  svg {
    height: ${(0,i.a8)(12)};
    width: ${(0,i.a8)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Y=()=>{const{formatMessage:n}=(0,y.A)(),{push:W}=(0,U.W6)(),{trackUsage:w}=(0,i.z1)(),[j,x]=l.useState(null),[X,I]=l.useState(!1),{collectionTypes:Z,singleTypes:k,isLoading:b}=(0,h.u)(),{meta:v,workflows:S,isLoading:u,deleteWorkflow:q}=(0,Q.u)(),[ss,$]=l.useState(!1),{_unstableFormatAPIError:ts}=(0,i.wq)(),p=(0,i.hN)(),{getFeature:os,isLoading:N}=(0,r.m)(),es=(0,r.j)(_=>_.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:F,canDelete:ns}}=(0,i.ec)(es),f=os("review-workflows")?.[H.C],_s=_=>[...Z,...k].find(G=>G.uid===_)?.info.displayName,as=_=>{x(_)},is=()=>{x(null)},rs=async()=>{if(j)try{$(!0);const _=await q({id:j});if("error"in _){p({type:"warning",message:ts(_.error)});return}x(null),p({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{p({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{$(!1)}};return l.useEffect(()=>{!u&&!N&&f&&v&&v?.workflowCount>parseInt(f,10)&&I(!0)},[N,u,v,v?.workflowCount,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.H,{primaryAction:F&&(0,t.jsx)(i.z9,{startIcon:(0,t.jsx)(M.A,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{f&&v&&v?.workflowCount>=parseInt(f,10)?(_.preventDefault(),I(!0)):w("willCreateWorkflow")},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:n({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:n({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(L.R,{children:[u||b?(0,t.jsx)(d.s,{justifyContent:"center",children:(0,t.jsx)(P.a,{children:n({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(O.X,{colCount:3,footer:F&&(0,t.jsx)(g.S,{icon:(0,t.jsx)(M.A,{}),onClick:()=>{f&&v&&v?.workflowCount>=parseInt(f,10)?I(!0):(W("/settings/review-workflows/create"),w("willCreateWorkflow"))},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(m.d,{children:(0,t.jsxs)(a.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(E.s,{children:n({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(c.N,{children:S?.map(_=>(0,l.createElement)(a.Tr,{...(0,i.qM)({fn(z){z.target.nodeName!=="BUTTON"&&W(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(e.Td,{width:(0,i.a8)(250),children:(0,t.jsx)(o.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:(_?.contentTypes??[]).map(_s).join(", ")})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(d.s,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(V,{to:`/settings/review-workflows/${_.id}`,"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(R.A,{})}),S.length>1&&ns&&(0,t.jsx)(C.K,{"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(B.A,{}),noBorder:!0,onClick:()=>{as(String(_.id))}})]})})))})]}),(0,t.jsx)(i.TM,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ss,isOpen:!!j,onToggleDialog:is,onConfirm:rs}),(0,t.jsxs)(T.L.Root,{isOpen:X,onClose:()=>I(!1),children:[(0,t.jsx)(T.L.Title,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(T.L.Body,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},J=()=>{const n=(0,r.j)(W=>W.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(i.kz,{permissions:n,children:(0,t.jsx)(Y,{})})}}}]);
