"use strict";(self.webpackChunksymptodoc_ui=self.webpackChunksymptodoc_ui||[]).push([[487],{9500:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4165),o=n(5861),s=n(1243),i="https://www.mafishi.io";function c(){function e(){return(e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(i+i+"/api/diagnoses",t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:alert("ADDED Diagnosis.");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(i+"/api/diagnoses/".concat(t),n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:alert("UPDATED Diagnosis.");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete(i+"/api/diagnosis/".concat(t)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:alert("DELETED Diagnosis.");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.post(i+"/api/symptoms",t).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:alert("ADDED Symptom.");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=(0,o.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.patch(i+"/api/symptoms/".concat(t),n).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:alert("UPDATED Symptom.");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.delete(i+"/api/symptoms/".concat(t)).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{addNewDiagnosis:function(t){return e.apply(this,arguments)},updateDiagnosis:function(e,n){return t.apply(this,arguments)},deleteDiagnosis:function(e){return n.apply(this,arguments)},addNewSymptom:function(e){return c.apply(this,arguments)},updateSymptom:function(e,t){return a.apply(this,arguments)},deleteSymptom:function(e){return u.apply(this,arguments)}}}},5636:function(e,t,n){function r(){return{fieldStyles:{color:"#36454F",fontFamily:"Helvetica",fontSize:"12px","&:last-child td, &:last-child th":{border:0}},headerStyles:{color:"#36454F",fontFamily:"Helvetica",fontSize:"12px",fontWeight:"bold"},sxKeys:["symptoms","associated_symptoms","minor"],sxHeaders:["Symptom","Layman terms","System","Delete"],dxKeys:["symptoms","associated_symptoms","minor"],dxHeaders:["Diagnosis","Symptoms","Associated","Minor","Tags"]}}n.d(t,{Z:function(){return r}})},2487:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(4165),o=n(5861),s=n(1413),i=n(9439),c=n(1582),a=n(5527),u=n(9281),l=n(9836),p=n(6890),f=n(5855),h=n(3994),d=n(3382),m=n(890),Z=n(6282),x=n(2791),y=n(1087),g=n(8096),w=n(1942),S=n(4280),v=n(184),j=function(e){var t=e.filter,n=e.setFilter,r=e.setPage,o=function(e,t){console.log(t),n(t||"Show all"),r(0)};return(0,v.jsx)(g.Z,{sx:{width:"90%"},children:(0,v.jsx)(w.Z,{disablePortal:!0,autoHighlight:!0,size:"small",id:"symptoms-filter",value:t,options:["Show all","Constitutional/General","Eyes","Ear/Nose/Throat","Cardiovascular","Respiratory","Gastrointestinal","Genitourinary","Gynecological","Peripheral (extremities)","Hematologic/Lymphatic","Hormonal/Endocrinological","Musculoskeletal","Neurological","Psychiatric","Sexual history","Past Medical History","Skin","Other"],renderInput:function(e){return(0,v.jsx)(S.Z,(0,s.Z)((0,s.Z)({},e),{},{label:"Symptoms filter",sx:{fontFamily:"Poppins",color:"#36454f",marginY:"5px",fontSize:"12px"},value:t}))},onChange:function(e,t){return o(0,t)}})})},D=n(9500),b=n(5636),k=(0,n(9201).Z)((0,v.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),P=function(e){var t=e.resource;document.title="Symptoms";var n=t.read(),g=(0,b.Z)(),w=g.sxHeaders,S=g.fieldStyles,P=g.headerStyles,C=(0,D.Z)().deleteSymptom,E=(0,x.useState)("Show all"),H=(0,i.Z)(E,2),z=H[0],O=H[1],A=(0,x.useState)(0),F=(0,i.Z)(A,2),M=F[0],T=F[1],_=(0,x.useState)(10),R=(0,i.Z)(_,2),G=R[0],N=R[1],L=(0,x.useMemo)((function(){return("Show all"===z?Object.values(n).flat().map((function(e){return Object.values(e)})).flat():Object.values(n[z]||{})).sort((function(e,t){return e.medical_term.localeCompare(t.medical_term)})).slice(M*G,(M+1)*G).map((function(e){return(0,s.Z)((0,s.Z)({},e),{},{tags:e.tags})}))}),[n,z,M,G]),U=(0,x.useMemo)((function(){var e="Show all"===z?Object.values(n):Object.keys(n[z]),t=e.map((function(e){return Object.values(e)})).flat();return"Show all"===z?t.length:e.length}),[n,z]);function I(){return(I=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Are you sure you want to delete this symptom?")){e.next=5;break}return e.next=4,C(n);case 4:t.mutate((function(e){var t=(0,s.Z)({},e);return Object.keys(t).forEach((function(e){t[e]=t[e].filter((function(e){return e.id!==n}))})),t}),!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,v.jsxs)(c.Z,{direction:"column",sx:{width:"100%",height:"100vh",backgroundColor:"#fff"},children:[(0,v.jsx)(j,{filter:z,setFilter:O,setPage:T}),(0,v.jsx)(a.Z,{sx:{width:"100%"},children:(0,v.jsxs)(u.Z,{children:[(0,v.jsxs)(l.Z,{size:"small","aria-label":"Requests Table",children:[(0,v.jsx)(p.Z,{children:(0,v.jsx)(f.Z,{children:w.map((function(e){return(0,v.jsx)(h.Z,{sx:P,children:"Symptom"===e?"Symptom (".concat(U,")"):e},e)}))})}),(0,v.jsx)(d.Z,{children:L.map((function(e){return(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(h.Z,{children:(0,v.jsx)(y.rU,{to:"".concat(e.id),style:{textDecoration:"none"},children:(0,v.jsx)(m.Z,{sx:(0,s.Z)((0,s.Z)({},S),{},{cursor:"pointer","&:hover":{color:"blue"}}),children:e.medical_term})})}),(0,v.jsx)(h.Z,{children:(0,v.jsx)(m.Z,{sx:S,children:e.symptom})}),(0,v.jsx)(h.Z,{children:(0,v.jsx)(m.Z,{onClick:function(){return handleTagClick(e)},sx:(0,s.Z)((0,s.Z)({},S),{},{cursor:"pointer","&:hover":{color:"blue"},fontSize:"10px"}),children:e.tags?e.tags:"Add"})}),(0,v.jsx)(h.Z,{children:(0,v.jsx)(k,{onClick:function(){return function(e){return I.apply(this,arguments)}(e.id)},sx:{cursor:"pointer",fontSize:"16px","&:hover":{color:"red"}}})})]},e.id)}))})]}),(0,v.jsx)(Z.Z,{component:"div",count:U,rowsPerPage:G,page:M,onPageChange:function(e,t){T(t)},onRowsPerPageChange:function(e){N(parseInt(e.target.value,10)),T(0)},labelRowsPerPage:"Rows per page",rowsPerPageOptions:[10,25,50]})]})})]})}}}]);
//# sourceMappingURL=487.984cbf5e.chunk.js.map