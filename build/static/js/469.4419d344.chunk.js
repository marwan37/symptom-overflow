"use strict";(self.webpackChunksymptodoc_ui=self.webpackChunksymptodoc_ui||[]).push([[469],{9836:function(e,t,o){o.d(t,{Z:function(){return y}});var a=o(3366),r=o(7462),n=o(2791),i=o(8182),c=o(4419),l=o(6646),s=o(1402),d=o(6934),p=o(5878),u=o(1217);function v(e){return(0,u.Z)("MuiTable",e)}(0,p.Z)("MuiTable",["root","stickyHeader"]);var f=o(184),m=["className","component","padding","size","stickyHeader"],Z=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,o=e.ownerState;return(0,r.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})})),g="table",y=n.forwardRef((function(e,t){var o=(0,s.Z)({props:e,name:"MuiTable"}),d=o.className,p=o.component,u=void 0===p?g:p,y=o.padding,h=void 0===y?"normal":y,b=o.size,x=void 0===b?"medium":b,w=o.stickyHeader,k=void 0!==w&&w,T=(0,a.Z)(o,m),C=(0,r.Z)({},o,{component:u,padding:h,size:x,stickyHeader:k}),M=function(e){var t=e.classes,o={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,c.Z)(o,v,t)}(C),R=n.useMemo((function(){return{padding:h,size:x,stickyHeader:k}}),[h,x,k]);return(0,f.jsx)(l.Z.Provider,{value:R,children:(0,f.jsx)(Z,(0,r.Z)({as:u,role:u===g?null:"table",ref:t,className:(0,i.Z)(M.root,d),ownerState:C},T))})}))},6646:function(e,t,o){var a=o(2791).createContext();t.Z=a},829:function(e,t,o){var a=o(2791).createContext();t.Z=a},3382:function(e,t,o){o.d(t,{Z:function(){return h}});var a=o(7462),r=o(3366),n=o(2791),i=o(8182),c=o(4419),l=o(829),s=o(1402),d=o(6934),p=o(5878),u=o(1217);function v(e){return(0,u.Z)("MuiTableBody",e)}(0,p.Z)("MuiTableBody",["root"]);var f=o(184),m=["className","component"],Z=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),g={variant:"body"},y="tbody",h=n.forwardRef((function(e,t){var o=(0,s.Z)({props:e,name:"MuiTableBody"}),n=o.className,d=o.component,p=void 0===d?y:d,u=(0,r.Z)(o,m),h=(0,a.Z)({},o,{component:p}),b=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},v,t)}(h);return(0,f.jsx)(l.Z.Provider,{value:g,children:(0,f.jsx)(Z,(0,a.Z)({className:(0,i.Z)(b.root,n),as:p,ref:t,role:p===y?null:"rowgroup",ownerState:h},u))})}))},3994:function(e,t,o){o.d(t,{Z:function(){return w}});var a=o(4942),r=o(3366),n=o(7462),i=o(2791),c=o(8182),l=o(4419),s=o(2065),d=o(4036),p=o(6646),u=o(829),v=o(1402),f=o(6934),m=o(5878),Z=o(1217);function g(e){return(0,Z.Z)("MuiTableCell",e)}var y=(0,m.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),h=o(184),b=["align","className","component","padding","scope","size","sortDirection","variant"],x=(0,f.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,d.Z)(o.size))],"normal"!==o.padding&&t["padding".concat((0,d.Z)(o.padding))],"inherit"!==o.align&&t["align".concat((0,d.Z)(o.align))],o.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,o=e.ownerState;return(0,n.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,s.$n)((0,s.Fq)(t.palette.divider,1),.88):(0,s._j)((0,s.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===o.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===o.variant&&{color:(t.vars||t).palette.text.primary},"footer"===o.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===o.size&&(0,a.Z)({padding:"6px 16px"},"&.".concat(y.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===o.padding&&{width:48,padding:"0 0 0 4px"},"none"===o.padding&&{padding:0},"left"===o.align&&{textAlign:"left"},"center"===o.align&&{textAlign:"center"},"right"===o.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===o.align&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),w=i.forwardRef((function(e,t){var o,a=(0,v.Z)({props:e,name:"MuiTableCell"}),s=a.align,f=void 0===s?"inherit":s,m=a.className,Z=a.component,y=a.padding,w=a.scope,k=a.size,T=a.sortDirection,C=a.variant,M=(0,r.Z)(a,b),R=i.useContext(p.Z),H=i.useContext(u.Z),N=H&&"head"===H.variant,z=w;"td"===(o=Z||(N?"th":"td"))?z=void 0:!z&&N&&(z="col");var S=C||H&&H.variant,j=(0,n.Z)({},a,{align:f,component:o,padding:y||(R&&R.padding?R.padding:"normal"),size:k||(R&&R.size?R.size:"medium"),sortDirection:T,stickyHeader:"head"===S&&R&&R.stickyHeader,variant:S}),P=function(e){var t=e.classes,o=e.variant,a=e.align,r=e.padding,n=e.size,i={root:["root",o,e.stickyHeader&&"stickyHeader","inherit"!==a&&"align".concat((0,d.Z)(a)),"normal"!==r&&"padding".concat((0,d.Z)(r)),"size".concat((0,d.Z)(n))]};return(0,l.Z)(i,g,t)}(j),A=null;return T&&(A="asc"===T?"ascending":"descending"),(0,h.jsx)(x,(0,n.Z)({as:o,ref:t,className:(0,c.Z)(P.root,m),"aria-sort":A,scope:z,ownerState:j},M))}))},9281:function(e,t,o){o.d(t,{Z:function(){return Z}});var a=o(7462),r=o(3366),n=o(2791),i=o(8182),c=o(4419),l=o(1402),s=o(6934),d=o(5878),p=o(1217);function u(e){return(0,p.Z)("MuiTableContainer",e)}(0,d.Z)("MuiTableContainer",["root"]);var v=o(184),f=["className","component"],m=(0,s.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),Z=n.forwardRef((function(e,t){var o=(0,l.Z)({props:e,name:"MuiTableContainer"}),n=o.className,s=o.component,d=void 0===s?"div":s,p=(0,r.Z)(o,f),Z=(0,a.Z)({},o,{component:d}),g=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},u,t)}(Z);return(0,v.jsx)(m,(0,a.Z)({ref:t,as:d,className:(0,i.Z)(g.root,n),ownerState:Z},p))}))},6890:function(e,t,o){o.d(t,{Z:function(){return h}});var a=o(7462),r=o(3366),n=o(2791),i=o(8182),c=o(4419),l=o(829),s=o(1402),d=o(6934),p=o(5878),u=o(1217);function v(e){return(0,u.Z)("MuiTableHead",e)}(0,p.Z)("MuiTableHead",["root"]);var f=o(184),m=["className","component"],Z=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),g={variant:"head"},y="thead",h=n.forwardRef((function(e,t){var o=(0,s.Z)({props:e,name:"MuiTableHead"}),n=o.className,d=o.component,p=void 0===d?y:d,u=(0,r.Z)(o,m),h=(0,a.Z)({},o,{component:p}),b=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},v,t)}(h);return(0,f.jsx)(l.Z.Provider,{value:g,children:(0,f.jsx)(Z,(0,a.Z)({as:p,className:(0,i.Z)(b.root,n),ref:t,role:p===y?null:"rowgroup",ownerState:h},u))})}))},5855:function(e,t,o){o.d(t,{Z:function(){return b}});var a=o(4942),r=o(7462),n=o(3366),i=o(2791),c=o(8182),l=o(4419),s=o(2065),d=o(829),p=o(1402),u=o(6934),v=o(5878),f=o(1217);function m(e){return(0,f.Z)("MuiTableRow",e)}var Z=(0,v.Z)("MuiTableRow",["root","selected","hover","head","footer"]),g=o(184),y=["className","component","hover","selected"],h=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.head&&t.head,o.footer&&t.footer]}})((function(e){var t,o=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,a.Z)(t,"&.".concat(Z.hover,":hover"),{backgroundColor:(o.vars||o).palette.action.hover}),(0,a.Z)(t,"&.".concat(Z.selected),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}),t})),b=i.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiTableRow"}),a=o.className,s=o.component,u=void 0===s?"tr":s,v=o.hover,f=void 0!==v&&v,Z=o.selected,b=void 0!==Z&&Z,x=(0,n.Z)(o,y),w=i.useContext(d.Z),k=(0,r.Z)({},o,{component:u,hover:f,selected:b,head:w&&"head"===w.variant,footer:w&&"footer"===w.variant}),T=function(e){var t=e.classes,o={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,l.Z)(o,m,t)}(k);return(0,g.jsx)(h,(0,r.Z)({as:u,ref:t,className:(0,c.Z)(T.root,a),role:"tr"===u?null:"row",ownerState:k},x))}))}}]);
//# sourceMappingURL=469.4419d344.chunk.js.map