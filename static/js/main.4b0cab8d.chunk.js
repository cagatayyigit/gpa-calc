(this["webpackJsonpgpa-calc"]=this["webpackJsonpgpa-calc"]||[]).push([[0],{132:function(e,a,t){},133:function(e,a,t){},144:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(11),i=t.n(n),o=(t(132),t(133),t(21)),d=t(14),l=t(175),s=t(195),u=t(188),m=t(190),g=t(189),j=t(186),h=t(22),b=[{grade:"A1",score:4},{grade:"A2",score:3.75},{grade:"A3",score:3.5},{grade:"B1",score:3.25},{grade:"B2",score:3},{grade:"B3",score:2.75},{grade:"C1",score:2.5},{grade:"C2",score:2.25},{grade:"C3",score:2},{grade:"D",score:1.75},{grade:"F1",score:0},{grade:"F2",score:0},{grade:"F3",score:0}],O=function(e){localStorage.setItem("grading_scale",JSON.stringify(e))},f=function(){var e=localStorage.getItem("grading_scale");return null===e||""===e?(O(b),b):JSON.parse(e)},x=function(e){for(var a=C.getGradingScale(),t=0;t<a.length;t++)if(a[t].grade===e)return a[t].score;return 0},C={saveGradingScale:O,getGradingScale:f,gradeToScore:x,getColor:function(e){var a=f(),t=Math.min.apply(Math,a.map((function(e){return e.score}))),r=Math.max.apply(Math,a.map((function(e){return e.score}))),c=t+x(e)/(r-t),n=function(e,a,t){var r=e>>16,c=e>>8&255,n=255&e;return(r+t*((a>>16)-r)<<16)+(c+t*((a>>8&255)-c)<<8)+(0|n+t*((255&a)-n))}(parseInt("FF6F31",16),parseInt("57BB8A",16),c).toString(16);return"#".concat(n)}},p=t(200),B=t(199),v=t(185),S=t(179),I=t(180),y=t(178),N=t(184),T=t(183),M=t(197),E=t(202),A=function(e){localStorage.setItem("taken_courses",JSON.stringify(e))},k=function(){var e=localStorage.getItem("taken_courses");return null===e||""===e?[[{code:"F\u0130Z137",name:"Physics  I",grade:"A1",credit:5},{code:"\u0130NG111",name:"Language Skills I",grade:"F2",credit:3}],[{code:"MAT124",name:"Mathematics II",grade:"B2",credit:6},{code:"F\u0130Z138",name:"Physics II",grade:"C1",credit:5},{code:"F\u0130Z117",name:"General Physics Lab.",grade:"D",credit:2}]]:JSON.parse(e)},F=A,G=k,L=function(e){var a=k(),t=Object(o.a)(a);t.forEach((function(a,r){t[r]=t[r].filter((function(a){return a!==e}))})),A(t)},D=function(e,a,t){var r=k(),c=Object(o.a)(r);c[a].push(t),A(c)},P=t(187),R=t(3),w=Object(l.a)((function(e){return{root:{},dialogRow:{marginBottom:e.spacing(2)},dialogGradeField:{marginRight:e.spacing(2)},dialogScoreField:{},formControl:{width:"100%"}}}));function z(e){var a=e.term,t=e.termIdx,n=e.open,i=e.handleAddCourse,o=e.handleClose,l=e.initialCode,s=e.initialName,u=e.initialCredit,m=w(),g=C.getGradingScale(),h=Object(r.useState)(""),b=Object(d.a)(h,2),O=b[0],f=b[1],x=Object(r.useState)(u),A=Object(d.a)(x,2),k=A[0],F=A[1],L=Object(r.useState)(l),D=Object(d.a)(L,2),z=D[0],H=D[1],J=Object(r.useState)(s),_=Object(d.a)(J,2),W=_[0],Z=_[1],q=Object(r.useState)(!0),U=Object(d.a)(q,2),K=U[0],V=U[1],Y=Object(r.useState)(G().length),Q=Object(d.a)(Y,2),X=Q[0],$=Q[1];c.a.useEffect((function(){var e=G().length;$(e)}),[n]),c.a.useEffect((function(){H(l),Z(s),F(u)}),[l,u,s]);return Object(R.jsxs)(B.a,{open:n,onClose:o,"aria-labelledby":"form-dialog-title",children:[Object(R.jsx)(y.a,{id:"form-dialog-title",children:"New Course"}),Object(R.jsxs)(S.a,{children:[Object(R.jsxs)(I.a,{children:["To add a new course to term ",t+1,", please fill the details here."]}),Object(R.jsx)(p.a,{variant:"outlined",autoFocus:!0,error:!K,required:!0,margin:"dense",id:"name",value:z,label:"Course Code",onChange:function(e){var t=!0;a.forEach((function(a,r){a.code===e.target.value&&(t=!1)})),V(t),H(e.target.value)},fullWidth:!0}),Object(R.jsx)(p.a,{autoFocus:!0,variant:"outlined",margin:"dense",required:!0,id:"name",value:W,label:"Course Name",onChange:function(e){Z(e.target.value)},fullWidth:!0}),Object(R.jsx)(p.a,{autoFocus:!0,required:!0,variant:"outlined",margin:"dense",id:"name",label:"Course Credit",value:k,type:"number",step:.1,onChange:function(e){F(e.target.value)},inputProps:{step:.5},fullWidth:!0}),Object(R.jsxs)(T.a,{variant:"outlined",className:m.formControl,children:[Object(R.jsx)(E.a,{id:"demo-simple-select-helper-label",children:"Course Grade"}),Object(R.jsxs)(M.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:O,label:"Course Grade",onChange:function(e){f(e.target.value)},children:[Object(R.jsx)(N.a,{value:"",children:Object(R.jsx)("em",{children:"None"})}),g.map((function(e){return Object(R.jsx)(N.a,{value:e.grade,children:e.grade})}))]})]})]}),Object(R.jsxs)(v.a,{children:[Object(R.jsx)(j.a,{onClick:o,color:"primary",children:"Cancel"}),Object(R.jsx)(P.a,{title:X<=t?"You have only "+X+" term. Create "+(t-X+1)+" more term!":null,children:Object(R.jsx)("span",{children:Object(R.jsx)(j.a,{disabled:X<=t,onClick:function(){!function(e,a,t){K&&(i(e,a,t),o(),f(""),H(""),Z(""),F(""))}(a,t,{code:z,name:W,grade:O,credit:k})},color:"primary",children:"Add"})})})]})]})}var H=Object(l.a)({bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},formControl:{width:"100%"}});function J(e){for(var a=e.term,t=e.termIdx,r=e.handleAddCourse,n=e.handleRemoveTerm,i=H(),o=c.a.useState(!1),l=Object(d.a)(o,2),s=l[0],b=l[1],O=0,f=0,x=0;x<a.length;x++){var p=parseInt(a[x].credit);O+=p,f+=p*C.gradeToScore(a[x].grade)}return Object(R.jsxs)(u.a,{variant:"outlined",className:i.root,children:[Object(R.jsxs)(g.a,{children:[Object(R.jsxs)(h.a,{className:i.title,color:"textSecondary",children:["Term - ",t+1," GPA"]}),Object(R.jsx)(h.a,{variant:"h5",component:"h2",children:(f/O).toPrecision(3)}),Object(R.jsx)(h.a,{className:i.pos,color:"textSecondary",children:"Total Credit: "+O})]}),Object(R.jsxs)(m.a,{children:[Object(R.jsx)(j.a,{variant:"contained",size:"small",color:"primary",onClick:function(){b(!0)},children:"Add Course"}),Object(R.jsx)(j.a,{variant:"outlined",size:"small",onClick:function(){return n(a)},children:"Remove Term"})]}),Object(R.jsx)(z,{initialCode:"",initialName:"",initialCredit:0,term:a,termIdx:t,open:s,handleClose:function(){b(!1)},handleAddCourse:r})]})}var _=t(196),W=Object(l.a)((function(e){return{root:{},dialogRow:{marginBottom:e.spacing(2)},dialogGradeField:{marginRight:e.spacing(2)},dialogScoreField:{}}}));function Z(e){var a=e.open,t=e.handleClose,c=W(),n=Object(r.useState)(C.getGradingScale()),i=Object(d.a)(n,2),l=i[0],s=i[1];return Object(R.jsxs)(B.a,{open:a,onClose:t,children:[Object(R.jsx)(y.a,{children:"Set Grading Scale"}),Object(R.jsxs)(S.a,{children:[Object(R.jsx)(I.a,{children:"Configure your grading scale."}),l.map((function(e,a){var t=e.grade,r=e.score;return Object(R.jsxs)(_.a,{className:c.dialogRow,children:[Object(R.jsx)(p.a,{className:c.dialogGradeField,variant:"outlined",label:"Grade",onChange:function(e){return function(e,a){var t=a.target.value;for(var r in l)if(l[r].grade===e){l[r].grade=t,console.log("Grade changed:",e,t);break}s(JSON.parse(JSON.stringify(l)))}(t,e)},value:t,size:"small",inputMode:"text"},"".concat(a,"g")),Object(R.jsx)(p.a,{className:c.dialogScoreField,variant:"outlined",label:"Score",value:r,onChange:function(e){return function(e,a){for(var t in l)if(l[t].grade===e){l[t].score=a.target.value;break}s(JSON.parse(JSON.stringify(l)))}(t,e)},inputMode:"number",size:"small"},"".concat(a,"s"))]},a)}))]}),Object(R.jsxs)(v.a,{children:[Object(R.jsx)(j.a,{onClick:function(){s(C.getGradingScale()),t()},color:"primary",children:"CANCEL"}),Object(R.jsx)(j.a,{color:"primary",onClick:function(){s([].concat(Object(o.a)(l),[{grade:"",score:0}]))},children:"ADD GRADE"}),Object(R.jsx)(j.a,{onClick:function(){C.saveGradingScale(l),t()},color:"primary",children:"SAVE"})]})]})}var q=Object(l.a)((function(e){return{title:{fontSize:14},pos:{marginBottom:12},formControl:{width:"100%"},root:{}}}));function U(e){for(var a=e.terms,t=e.handleAddTerm,c=q(),n=Object(r.useState)(!1),i=Object(d.a)(n,2),o=i[0],l=i[1],s=0,b=0,O=0;O<a.length;O++)for(var f=a[O],x=0;x<f.length;x++){var p=parseInt(f[x].credit);s+=p,b+=p*C.gradeToScore(f[x].grade)}return Object(R.jsxs)(_.a,{children:[Object(R.jsxs)(u.a,{variant:"outlined",className:c.root,children:[Object(R.jsxs)(g.a,{children:[Object(R.jsx)(h.a,{className:c.title,color:"textSecondary",children:"Cumulative GPA"}),Object(R.jsx)(h.a,{variant:"h2",children:(b/s).toPrecision(3)}),Object(R.jsx)(h.a,{className:c.pos,color:"textSecondary",children:"Total Credit: "+s})]}),Object(R.jsxs)(m.a,{children:[Object(R.jsx)(j.a,{variant:"contained",size:"small",color:"primary",onClick:t,children:"ADD TERM"}),Object(R.jsx)(j.a,{variant:"outlined",size:"small",onClick:function(){l(!0)},children:"SET GRADING SCALE"})]})]}),Object(R.jsx)(Z,{open:o,handleClose:function(){l(!1)}})]})}var K=t(193),V=t(191),Y=t(203),Q=t(192),X=Object(l.a)((function(e){return{root:{padding:1.2},card:{border:function(e){return"1px solid ".concat(C.getColor(e.grade))}},avatar:{backgroundColor:function(e){return C.getColor(e.grade)}},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},creditTypography:{marginLeft:e.spacing(1),color:e.palette.primary.main}}}));function $(e){var a=e.termIdx,t=e.courseIdx,r=e.course,c=e.handleDelete,n=X(r);return Object(R.jsx)("div",{children:Object(R.jsx)(u.a,{variant:"outlined",className:n.card,children:Object(R.jsx)(V.a,{avatar:Object(R.jsx)(Y.a,{className:n.avatar,children:r.grade}),action:Object(R.jsx)(Q.a,{onClick:function(){return c(a,t,r)},children:Object(R.jsx)(K.a,{})}),title:r.code,subheader:Object(R.jsxs)(_.a,{flex:"column",children:[Object(R.jsx)(h.a,{variant:"caption",children:r.name}),Object(R.jsx)(h.a,{className:n.creditTypography,variant:"caption",children:r.credit})]})})})})}var ee=t(68),ae=t(148),te=t(105),re=t(149),ce=t(194),ne=t(97),ie=t.n(ne),oe=[[{code:"BBM101",name:"Introduction to Programming I",grade:"B3",credit:6},{code:"BBM103",name:"Introduction to Programming Laboratory I",grade:"C1",credit:4},{code:"MAT123",name:"Mathematics I",grade:"C1",credit:6},{code:"F\u0130Z137",name:"Physics  I",grade:"C1",credit:5},{code:"BBM105",name:"Introduction to Computer Engineering",grade:"C1",credit:2},{code:"\u0130NG111",name:"Language Skills I",grade:"C1",credit:3},{code:"TKD103",name:"Turkish I",grade:"C1",credit:2},{code:"BEB650",name:"Basic Information and Communication Technologies",grade:"C1",credit:2}],[{code:"BBM102",name:"Introduction to Programming II",grade:"B3",credit:8},{code:"BBM104",name:"Introduction to Programming Laboratory II",grade:"C1",credit:4},{code:"MAT124",name:"Mathematics II",grade:"C1",credit:6},{code:"F\u0130Z138",name:"Physics II",grade:"C1",credit:5},{code:"F\u0130Z117",name:"General Physics Lab.",grade:"C1",credit:2},{code:"\u0130NG112",name:"Language Skills II",grade:"C1",credit:3},{code:"TKD104",name:"Turkish II",grade:"C1",credit:2}],[{code:"BBM201",name:"Data Structures",grade:"B3",credit:5},{code:"BBM203",name:"Software Laboratory I",grade:"C1",credit:2},{code:"BBM205",name:"Discrete Structures",grade:"B3",credit:5},{code:"BBM231",name:"Logic Design",grade:"B3",credit:5},{code:"BBM233",name:"Logic Design Lab",grade:"B3",credit:2},{code:"\u0130ST299",name:"Probability",grade:"B3",credit:5},{code:"A\u0130T203",name:"Atat\xfcrk's Princ. And The History of The Revol. I",grade:"B3",credit:2},{code:"M\xdcH103",name:"Occupational Health and Safety I",grade:"B3",credit:1},{code:"NTECH",name:"Nontechnical Elective",grade:"B3",credit:3}],[{code:"BBM202",name:"Algorithms",grade:"B3",credit:4},{code:"BBM204",name:"Software Laboratory II",grade:"C1",credit:2},{code:"BBM234",name:"Computer Organization",grade:"B3",credit:4},{code:"MAT254",name:"Fundamentals of Linear Algebra",grade:"B3",credit:4},{code:"ELE296",name:"Introduction to Electronic Circ. and Syst.",grade:"B3",credit:5},{code:"\u0130ST292",name:"Statistics",grade:"B3",credit:5},{code:"A\u0130T204",name:"Atat\xfcrk's Princ. And The History of The Revol. II",grade:"B3",credit:2},{code:"M\xdcH104",name:"Occupational Health and Safety II",grade:"B3",credit:1},{code:"NTECH",name:"Nontechnical Elective",grade:"B3",credit:3}],[{code:"BBM301",name:"Programming Languages",grade:"B3",credit:4},{code:"BBM325",name:"Internship I",grade:"C1",credit:5},{code:"BBM341",name:"Systems Programming",grade:"B3",credit:4},{code:"BBM371",name:"Data Management",grade:"B3",credit:4},{code:"BBM",name:"Technical Elective",grade:"B3",credit:6},{code:"BBM",name:"Technical Elective Lab.",grade:"B3",credit:4},{code:"NTECH",name:"Nontechnical Elective",grade:"B3",credit:3}],[{code:"BBM342",name:"Operating Systems",grade:"B3",credit:5},{code:"BBM382",name:"Software Engineering",grade:"C1",credit:5},{code:"BBM384",name:"Software Engineering Lab.",grade:"B3",credit:4},{code:"BBM",name:"Technical Elective",grade:"B3",credit:6},{code:"BBM",name:"Technical Elective",grade:"B3",credit:6},{code:"NTECH",name:"Nontechnical Elective",grade:"B3",credit:4}],[{code:"BBM425",name:"Internship II",grade:"B3",credit:5},{code:"BBM427",name:"Technology Seminars I",grade:"C1",credit:1},{code:"BBM479",name:"Design Project I",grade:"B3",credit:4},{code:"BBM",name:"Technical Elective",grade:"B3",credit:6},{code:"BBM",name:"Technical Elective",grade:"B3",credit:6},{code:"BBM",name:"Technical Elective Lab.",grade:"B3",credit:4},{code:"NTECH",name:"Nontechnical Elective",grade:"B3",credit:4}],[{code:"BBM428",name:"Technology Seminars II",grade:"B3",credit:1},{code:"BBM480",name:"Design Project II",grade:"C1",credit:6},{code:"BBM",name:"Technical Elective",grade:"B3",credit:6},{code:"BBM",name:"Technical Elective",grade:"B3",credit:6},{code:"BBM",name:"Technical Elective Lab.",grade:"B3",credit:4},{code:"BBM",name:"Technical Elective Lab.",grade:"B3",credit:4},{code:"NTECH",name:"Nontechnical Elective",grade:"B3",credit:3}]],de=function(e){localStorage.setItem("curriculum",JSON.stringify(e))},le=de,se=function(){var e=localStorage.getItem("curriculum");return null===e||""===e?(de(oe),oe):JSON.parse(e)},ue=function(){localStorage.removeItem("curriculum"),de(oe)},me=Object(l.a)((function(e){return{root:{},dialogRow:{marginBottom:e.spacing(2)},dialogCourseCodeField:{marginRight:e.spacing(1)},dialogCourseNameField:{marginRight:e.spacing(1)},dialogCourseCreditField:{},termBox:{border:"1px solid grey",marginTop:e.spacing(2),padding:e.spacing(2)},termText:{paddingBottom:e.spacing(2)}}}));function ge(e){var a=e.open,t=e.handleClose,c=me(),n=Object(r.useState)(se()),i=Object(d.a)(n,2),l=i[0],s=i[1],u=Object(o.a)(l),m={step:.5};return Object(R.jsx)("div",{children:Object(R.jsxs)(B.a,{className:c.root,open:a,onClose:t,fullWidth:!0,maxWidth:"md",disableBackdropClick:!0,children:[Object(R.jsx)(y.a,{children:"Edit Curriculum"}),Object(R.jsxs)(S.a,{children:[Object(R.jsx)(I.a,{children:"Add or remove courses for your curriculum."}),l.map((function(e,a){return Object(R.jsxs)(_.a,{className:c.termBox,children:[Object(R.jsxs)(h.a,{className:c.termText,children:["Term ",a+1]}),e.map((function(e,t){var r=e.code,n=e.name,i=e.credit;return Object(R.jsxs)(_.a,{className:c.dialogRow,children:[Object(R.jsx)(p.a,{className:c.dialogCourseCodeField,variant:"outlined",label:"Course code",onChange:function(e){return function(e,a,t){u[e][a].code=t.target.value,s(u)}(a,t,e)},value:r,size:"small",inputMode:"text"},"".concat(a,"_").concat(t,"_code")),Object(R.jsx)(p.a,{className:c.dialogCourseNameField,variant:"outlined",label:"Course name",value:n,onChange:function(e){return function(e,a,t){u[e][a].name=t.target.value,s(u)}(a,t,e)},inputMode:"text",size:"small"},"".concat(a,"_").concat(t,"_name")),Object(R.jsx)(p.a,{className:c.dialogCourseCreditField,variant:"outlined",label:"Course credit",value:i,step:.1,inputProps:m,onChange:function(e){return function(e,a,t){u[e][a].credit=t.target.value,s(u)}(a,t,e)},inputMode:"number",size:"small"},"".concat(a,"_").concat(t,"_credit")),Object(R.jsx)(Q.a,{onClick:function(){return function(e,a){u[e].splice(a,1),s(u)}(a,t)},children:Object(R.jsx)(K.a,{})})]},"".concat(a,"_").concat(t))})),Object(R.jsx)(j.a,{color:"primary",onClick:function(){return function(e){u[e].push({code:"",name:"",grade:"C1",credit:0}),s(u)}(a)},children:"ADD COURSE"})]})}))]}),Object(R.jsxs)(v.a,{children:[Object(R.jsx)(j.a,{onClick:function(){ue(),s(se()),t()},color:"primary",children:"RESET TO DEFAULT"}),Object(R.jsx)(j.a,{onClick:function(){t(),s(se())},color:"primary",children:"CANCEL"}),Object(R.jsx)(j.a,{color:"primary",onClick:function(){u.push([]),s(u)},children:"ADD TERM"}),Object(R.jsx)(j.a,{onClick:function(){le(l),t()},color:"primary",children:"SAVE"})]})]})})}var je=Object(l.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function he(e){var a=e.handleAddCourse,t=(e.handleAddTerm,je()),n=Object(r.useState)(!1),i=Object(d.a)(n,2),o=i[0],l=i[1],s=Object(r.useState)(se()),m=Object(d.a)(s,2),g=m[0],j=m[1],h=function(e){for(var a=G(),t=0;t<a.length;t++)for(var r=a[t],c=0;c<r.length;c++)if(r[c].code===e.code)return!0;return!1},b=c.a.useState(!1),O=Object(d.a)(b,2),f=O[0],x=O[1],C=Object(r.useState)([]),p=Object(d.a)(C,2),B=p[0],v=p[1],S=Object(r.useState)([]),I=Object(d.a)(S,2),y=I[0],N=I[1],T=Object(r.useState)(0),M=Object(d.a)(T,2),E=M[0],A=M[1],k=G();return Object(R.jsxs)(u.a,{variant:"outlined",children:[Object(R.jsx)(V.a,{action:Object(R.jsx)(Q.a,{onClick:function(){l(!0)},children:Object(R.jsx)(ie.a,{})}),title:"Curriculum"}),Object(R.jsx)(ae.a,{className:t.root,subheader:Object(R.jsx)("li",{}),children:g.map((function(e,a){return Object(R.jsx)("li",{className:t.listSection,children:Object(R.jsxs)("ul",{className:t.ul,children:[Object(R.jsx)(ce.a,{children:"Term  ".concat(a+1)}),e.map((function(e){return Object(R.jsx)(te.a,{button:!0,onClick:function(t){v(e),N(k[a]),A(a),x(!0)},disabled:h(e),dense:!0,children:Object(R.jsx)(re.a,{primary:"".concat(e.code," - ").concat(e.name," (").concat(e.credit,")")})},"item-".concat(a,"-").concat(e))}))]})},"section-".concat(a))}))}),Object(R.jsx)(ge,{open:o,handleClose:function(){l(!1);var e=se();j(e),le(e)}}),Object(R.jsx)(z,{initialCode:B.code,initialName:B.name,initialCredit:B.credit,term:y,termIdx:E,open:f,handleClose:function(){x(!1)},handleAddCourse:a})]})}t(91);var be=Object(l.a)((function(e){return{root:{padding:e.spacing(2)},curriculum:{backgroundColor:ee.a[300],height:"100%"},curriculumGrid:{backgroundColor:ee.a[300]},summaryContainer:{marginBottom:e.spacing(2)},pieChart:{alignContent:"center",alignItems:"center",verticalAlign:"center",minHeight:400,minWidth:400,backgroundColor:ee.a[500]}}})),Oe=function(){var e=Object(r.useState)(G()),a=Object(d.a)(e,2),t=a[0],c=a[1];F(t);var n=be(t),i=function(e,a,r){var n=Object(o.a)(t);n.forEach((function(e,a){n[a]=n[a].filter((function(e){return e!==r}))})),c(n),L(r)},l=function(e,a,r){var n=Object(o.a)(t);n[a].push(r),c(n),D(e,a,r)},u=function(){var e=Object(o.a)(t);e.push([]),c(e),F(e)},m=function(e){var a=t.filter((function(a){return a!==e}));c(a),F(a)};return Object(R.jsx)("div",{className:n.root,children:Object(R.jsxs)(s.a,{container:!0,spacing:2,children:[Object(R.jsxs)(s.a,{item:!0,xs:9,children:[Object(R.jsx)(_.a,{className:n.summaryContainer,children:Object(R.jsx)(U,{terms:t,handleAddTerm:u})}),t.map((function(e,a){return Object(R.jsx)(_.a,{children:Object(R.jsxs)(s.a,{container:!0,spacing:2,className:n.term,children:[Object(R.jsx)(s.a,{item:!0,xs:3,children:Object(R.jsx)(J,{term:e,termIdx:a,handleAddCourse:l,handleRemoveTerm:m})}),Object(R.jsx)(s.a,{item:!0,xs:9,children:Object(R.jsx)(s.a,{container:!0,className:n.term,children:Object(R.jsx)(s.a,{container:!0,spacing:1,className:n.term,children:e.map((function(e,t){return Object(R.jsx)(s.a,{item:!0,xs:6,md:3,children:Object(R.jsx)($,{termIdx:a,courseIdx:t,course:e,handleDelete:i})})}))})})})]})})}))]}),Object(R.jsx)(s.a,{item:!0,xs:3,children:Object(R.jsx)(he,{handleAddCourse:l,handleAddTerm:u})})]})})},fe=t(98),xe=t(99),Ce=t(100),pe=t(103),Be=t(104),ve=t(69),Se=t(13),Ie=[{country:"Russia",area:12},{country:"Canada",area:7},{country:"USA",area:7},{country:"China",area:7},{country:"Brazil",area:6},{country:"Australia",area:5},{country:"India",area:2},{country:"Others",area:55}];r.PureComponent;var ye=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)("div",{className:"content",children:Object(R.jsx)(Oe,{})})})};i.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(ye,{})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.4b0cab8d.chunk.js.map