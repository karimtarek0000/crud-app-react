"use strict";(self.webpackChunknotes_redux_router=self.webpackChunknotes_redux_router||[]).push([[409],{2409:function(e,t,n){n.r(t);var r=n(4165),a=n(5861),s=n(885),o=n(2791),l=n(3855),c=n(3402),u=n(9434),i=n(7689),d=n(783),p=n(719),f=n(184);t.default=function(){var e=(0,i.s0)(),t=(0,o.useState)(""),n=(0,s.Z)(t,2),x=n[0],h=n[1],m=(0,o.useState)(""),v=(0,s.Z)(m,2),Z=v[0],b=v[1],j=(0,u.I0)(),g=(0,u.v9)((function(e){return e.notesSlice})).loading,k=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,j((0,p.addNote)({title:x,desc:Z})).unwrap();case 4:e("/"),c.Am.success("Has been added note successfully"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c.Am.error("Error please try again!");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(l.Z,{onSubmit:k,children:[(0,f.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,f.jsx)(l.Z.Label,{children:"Title note"}),(0,f.jsx)(l.Z.Control,{value:x,name:"note",onChange:function(e){h(e.target.value)},type:"text",placeholder:"Title note"})]}),(0,f.jsxs)(l.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,f.jsx)(l.Z.Label,{children:"Description note"}),(0,f.jsx)(l.Z.Control,{value:Z,name:"description",onChange:function(e){b(e.target.value)},type:"text",as:"textarea",placeholder:"Write note"})]}),(0,f.jsx)(d.default,{loading:g,title:"Add note",disabled:!(x&&Z)})]})})}}}]);
//# sourceMappingURL=409.7029f1d1.chunk.js.map