"use strict";(self.webpackChunksymptodoc_ui=self.webpackChunksymptodoc_ui||[]).push([[939],{5636:function(e,t,o){function r(){return{fieldStyles:{color:"#36454F",fontFamily:"Helvetica",fontSize:"12px","&:last-child td, &:last-child th":{border:0}},headerStyles:{color:"#36454F",fontFamily:"Helvetica",fontSize:"12px",fontWeight:"bold"},sxKeys:["symptoms","associated_symptoms","minor"],sxHeaders:["Symptom","Layman terms","System","Delete"],dxKeys:["symptoms","associated_symptoms","minor"],dxHeaders:["Diagnosis","Symptoms","Associated","Minor","Tags"]}}o.d(t,{Z:function(){return r}})},3939:function(e,t,o){o.r(t),o.d(t,{default:function(){return C}});var r=o(1413),a=o(9439),n=o(1582),i=o(5527),s=o(9281),l=o(9836),c=o(6890),d=o(5855),u=o(3994),p=o(3382),f=o(890),g=o(7002),h=o(2791),v=o(1087),m=o(5636),Z=o(4554),x=o(8096),b=o(3238),y=o(388),R=o(184),j=function(e){var t=e.filter,o=e.setFilter,a={value:t,onChange:function(e,t){console.log(t),o(t)},exclusive:!0};return(0,R.jsx)(Z.Z,{sx:{width:"100%",margin:"0 auto",my:"10px"},children:(0,R.jsx)(x.Z,{sx:{width:"80%"},children:(0,R.jsx)(b.Z,(0,r.Z)((0,r.Z)({},a),{},{"aria-label":"Tags",children:["all","general","ent","cvs","resp","gi","gu","msk","neuro","obgyn","endo","blood","psych","onco"].map((function(e){return(0,R.jsx)(y.Z,{value:e,sx:{height:"3.3vh",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px;"},children:e},e)}))}))})})},z=function(e){return Object.values(e).flatMap((function(e){return Object.values(e)}))},C=function(e){var t=e.resource;document.title="Diagnoses";var o=t.read(),Z=(0,m.Z)(),x=Z.fieldStyles,b=Z.headerStyles,y=Z.sxKeys,C=Z.dxHeaders,S=(0,h.useState)("all"),w=(0,a.Z)(S,2),T=w[0],W=w[1];console.log(T);var O=(0,h.useState)(0),k=(0,a.Z)(O,2),B=k[0],F=k[1],M=(0,h.useState)(50),P=(0,a.Z)(M,2),L=P[0],N=P[1],D=(0,h.useMemo)((function(){return("all"===T?z(o):z(o).filter((function(e){return e.tags===T}))).sort((function(e,t){return e.diagnosis.localeCompare(t.diagnosis)})).slice(B*L,(B+1)*L).map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{tags:e.tags})}))}),[o,T,B,L]),H=(0,h.useMemo)((function(){return("all"===T?z(o):z(o).filter((function(e){return e.tags===T}))).length}),[o,T]);return(0,R.jsxs)(n.Z,{direction:"column",children:[(0,R.jsx)(j,{filter:T,setFilter:W}),(0,R.jsx)(i.Z,{sx:{width:"100%"},children:(0,R.jsxs)(s.Z,{children:[(0,R.jsxs)(l.Z,{size:"small","aria-label":"Requests Table",children:[(0,R.jsx)(c.Z,{children:(0,R.jsx)(d.Z,{children:C.map((function(e){return(0,R.jsx)(u.Z,{sx:b,children:"Diagnosis"===e?"Diagnosis (".concat(H,")"):e},e)}))})}),(0,R.jsx)(p.Z,{children:D.map((function(e){return(0,R.jsxs)(d.Z,{children:[(0,R.jsx)(u.Z,{children:(0,R.jsx)(v.rU,{to:"".concat(e.id),children:(0,R.jsx)(f.Z,{sx:x,children:e.diagnosis})})},"diagnosis"),y.map((function(t){return(0,R.jsx)(u.Z,{children:e[t].map((function(t,o){return(0,R.jsx)(f.Z,{sx:(0,r.Z)((0,r.Z)({},x),{},{fontSize:"10px"}),children:t.medical_term},"".concat(e.diagnosis,"-").concat(o))}))},t)})),(0,R.jsx)(u.Z,{children:(0,R.jsx)(f.Z,{sx:x,children:e.tags})},"tags")]},e.id)}))})]}),(0,R.jsx)(g.Z,{component:"div",count:H,rowsPerPage:L,page:B,onPageChange:function(e,t){F(t)},onRowsPerPageChange:function(e){N(parseInt(e.target.value,10)),F(0)},labelRowsPerPage:"Rows per page",rowsPerPageOptions:[10,25,50]})]})})]})}},388:function(e,t,o){o.d(t,{Z:function(){return y}});var r=o(4942),a=o(3366),n=o(7462),i=o(2791),s=o(8182),l=o(4419),c=o(2065),d=o(335),u=o(4036),p=o(1402),f=o(6934),g=o(5878),h=o(1217);function v(e){return(0,h.Z)("MuiToggleButton",e)}var m=(0,g.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),Z=o(184),x=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],b=(0,f.ZP)(d.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["size".concat((0,u.Z)(o.size))]]}})((function(e){var t,o,a=e.theme,i=e.ownerState,s="standard"===i.color?a.palette.text.primary:a.palette[i.color].main;return a.vars&&(s="standard"===i.color?a.vars.palette.text.primary:a.vars.palette[i.color].main,o="standard"===i.color?a.vars.palette.text.primaryChannel:a.vars.palette[i.color].mainChannel),(0,n.Z)({},a.typography.button,{borderRadius:(a.vars||a).shape.borderRadius,padding:11,border:"1px solid ".concat((a.vars||a).palette.divider),color:(a.vars||a).palette.action.active},i.fullWidth&&{width:"100%"},(t={},(0,r.Z)(t,"&.".concat(m.disabled),{color:(a.vars||a).palette.action.disabled,border:"1px solid ".concat((a.vars||a).palette.action.disabledBackground)}),(0,r.Z)(t,"&:hover",{textDecoration:"none",backgroundColor:a.vars?"rgba(".concat(a.vars.palette.text.primaryChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}),(0,r.Z)(t,"&.".concat(m.selected),{color:s,backgroundColor:a.vars?"rgba(".concat(o," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(s,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(o," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,c.Fq)(s,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(o," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,c.Fq)(s,a.palette.action.selectedOpacity)}}}),t),"small"===i.size&&{padding:7,fontSize:a.typography.pxToRem(13)},"large"===i.size&&{padding:15,fontSize:a.typography.pxToRem(15)})})),y=i.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiToggleButton"}),r=o.children,i=o.className,c=o.color,d=void 0===c?"standard":c,f=o.disabled,g=void 0!==f&&f,h=o.disableFocusRipple,m=void 0!==h&&h,y=o.fullWidth,R=void 0!==y&&y,j=o.onChange,z=o.onClick,C=o.selected,S=o.size,w=void 0===S?"medium":S,T=o.value,W=(0,a.Z)(o,x),O=(0,n.Z)({},o,{color:d,disabled:g,disableFocusRipple:m,fullWidth:R,size:w}),k=function(e){var t=e.classes,o=e.fullWidth,r=e.selected,a=e.disabled,n=e.size,i=e.color,s={root:["root",r&&"selected",a&&"disabled",o&&"fullWidth","size".concat((0,u.Z)(n)),i]};return(0,l.Z)(s,v,t)}(O);return(0,Z.jsx)(b,(0,n.Z)({className:(0,s.Z)(k.root,i),disabled:g,focusRipple:!m,ref:t,onClick:function(e){z&&(z(e,T),e.defaultPrevented)||j&&j(e,T)},onChange:j,value:T,ownerState:O,"aria-pressed":C},W,{children:r}))}))},3238:function(e,t,o){o.d(t,{Z:function(){return b}});var r=o(4942),a=o(3366),n=o(7462),i=o(2791),s=(o(8457),o(8182)),l=o(4419),c=o(6934),d=o(1402),u=o(4036);function p(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var f=o(5878),g=o(1217);function h(e){return(0,g.Z)("MuiToggleButtonGroup",e)}var v=(0,f.Z)("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),m=o(184),Z=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],x=(0,c.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,r.Z)({},"& .".concat(v.grouped),t.grouped),(0,r.Z)({},"& .".concat(v.grouped),t["grouped".concat((0,u.Z)(o.orientation))]),t.root,"vertical"===o.orientation&&t.vertical,o.fullWidth&&t.fullWidth]}})((function(e){var t=e.ownerState,o=e.theme;return(0,n.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===t.orientation&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},(0,r.Z)({},"& .".concat(v.grouped),(0,n.Z)({},"horizontal"===t.orientation?(0,r.Z)({"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&.".concat(v.selected," + .").concat(v.grouped,".").concat(v.selected),{borderLeft:0,marginLeft:0}):(0,r.Z)({"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}},"&.".concat(v.selected," + .").concat(v.grouped,".").concat(v.selected),{borderTop:0,marginTop:0}))))})),b=i.forwardRef((function(e,t){var o=(0,d.Z)({props:e,name:"MuiToggleButtonGroup"}),r=o.children,c=o.className,f=o.color,g=void 0===f?"standard":f,v=o.disabled,b=void 0!==v&&v,y=o.exclusive,R=void 0!==y&&y,j=o.fullWidth,z=void 0!==j&&j,C=o.onChange,S=o.orientation,w=void 0===S?"horizontal":S,T=o.size,W=void 0===T?"medium":T,O=o.value,k=(0,a.Z)(o,Z),B=(0,n.Z)({},o,{disabled:b,fullWidth:z,orientation:w,size:W}),F=function(e){var t=e.classes,o=e.orientation,r=e.fullWidth,a=e.disabled,n={root:["root","vertical"===o&&"vertical",r&&"fullWidth"],grouped:["grouped","grouped".concat((0,u.Z)(o)),a&&"disabled"]};return(0,l.Z)(n,h,t)}(B),M=function(e,t){if(C){var o,r=O&&O.indexOf(t);O&&r>=0?(o=O.slice()).splice(r,1):o=O?O.concat(t):[t],C(e,o)}},P=function(e,t){C&&C(e,O===t?null:t)};return(0,m.jsx)(x,(0,n.Z)({role:"group",className:(0,s.Z)(F.root,c),ref:t,ownerState:B},k,{children:i.Children.map(r,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:(0,s.Z)(F.grouped,e.props.className),onChange:R?P:M,selected:void 0===e.props.selected?p(e.props.value,O):e.props.selected,size:e.props.size||W,fullWidth:z,color:e.props.color||g,disabled:e.props.disabled||b}):null}))}))}))}}]);
//# sourceMappingURL=939.3bd71d69.chunk.js.map