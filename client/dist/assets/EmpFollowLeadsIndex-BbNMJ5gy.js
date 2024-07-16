import{r as l,c as x,j as e,G as n,d as w,B as Z,w as ee,S as te}from"./index-BFgOO9FV.js";import{a as j}from"./axios-CMf68hJO.js";import{h as p}from"./moment-G82_0lEo.js";import{S as ae,T as se,a as le,b as ne,c as R,d as a,e as re}from"./Search-BptgNfeq.js";import{T as d,S as oe}from"./TextField-uMyB6taY.js";import{M as o}from"./MenuItem-DdWCPvaA.js";import{T as de,a as _}from"./Tabs-RtGtfztt.js";import{F as ie}from"./OutlinedInput-CU74RVD_.js";import{P as ce}from"./Pagination-Jcemn9fm.js";const De=()=>{const[Y,g]=l.useState([]),[f,h]=l.useState([]),[m,T]=l.useState(5),[y,D]=l.useState(1),[$,B]=l.useState([]),[U,q]=l.useState([]),[G,O]=l.useState([]),[u,E]=l.useState(p().format("YYYY-MM-DD")),[b,M]=l.useState(),[S,A]=l.useState(),[P,I]=l.useState(""),[C,k]=l.useState(""),[v,N]=l.useState(""),[i,V]=l.useState(1);l.useEffect(()=>{j.get(`${x.apiUrl}/leads/empFollowLeadsForAdmin`).then(t=>{const s=Array.from(new Set(t.data.map(r=>r.emp_id))).map(r=>t.data.find(W=>W.emp_id===r));B(s);const L=new Set(t.data.map(r=>r.leads_state));q([...L]);const F=new Set(t.data.map(r=>r.leads_city));O([...F])}).catch(t=>{console.log("Leads data is not fetched.",t)})},[]),l.useEffect(()=>{i==1?j.get(`${x.apiUrl}/leads/empFollowLeadsForAdmin
        `).then(t=>{console.log("Follow Leads Data :",t),g(t.data),h(t.data)}).catch(t=>{console.log("Following Leads Data is not fetched.")}):i==2&&j.get(`${x.apiUrl}/leads/empFollowLeadsForAdmin?reminderDate=${u}
        `).then(t=>{console.log("Follow Leads Data :",t),g(t.data),h(t.data)}).catch(t=>{console.log("Following Leads Data is not fetched.")})},[i]);const z=()=>{const t=P!==""?P:"null",s=C!==""?C:"null",L=v!==""?v:"null",F=u!==""?u:"null",r=b!==""?p(b).format("YYYY-MM-DD 00:00:00"):"null",W=S!==""?p(S).format("YYYY-MM-DD 23:59:50"):"null";j.get(`${x.apiUrl}/leads/empFollowLeadsForAdmin`,{params:{state:t,city:s,emp_id:L,reminderDate:F,startDate:r,endDate:W}}).then(c=>{console.log("Follow Leads Data:",c),g(c.data),h(c.data),console.log("Data:",c.data)}).catch(c=>{console.log("Following Leads Data is not fetched.")})},H=()=>{M(""),A(""),I(""),k(""),N(""),E("")},Q=t=>{const s=parseInt(t.target.value,10);s==1?(T(Y.length),D(1)):(T(s),D(1))},J=(y-1)*m,K=y*m,X=f?f.slice(J,K):[];return e.jsxs("div",{style:{padding:"10px"},children:[e.jsx("h1",{className:"text-center",children:"Followed Leads Index"}),e.jsxs(n,{container:!0,spacing:3,children:[i==3?e.jsxs(e.Fragment,{children:[e.jsx(n,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,label:"Start Date",type:"date",value:b,InputLabelProps:{shrink:!0},onChange:t=>M(t.target.value)})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,label:"End Date",type:"date",value:S,InputLabelProps:{shrink:!0},onChange:t=>A(t.target.value)})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,select:!0,label:"Employee Name",name:"emp_name",onChange:t=>N(t.target.value),value:v,children:$.map((t,s)=>e.jsx(o,{value:t.emp_id,children:t.emp_name},s))})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,label:"Reminder Date",name:"reminderDate",type:"date",onChange:t=>E(t.target.value),value:u,InputLabelProps:{shrink:!0}})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,select:!0,label:"Select State",name:"state",onChange:t=>I(t.target.value),value:P,children:U.map((t,s)=>e.jsx(o,{value:t,children:t},s))})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(d,{fullWidth:!0,select:!0,label:"Select City",name:"city",onChange:t=>k(t.target.value),value:C,children:G.map((t,s)=>e.jsx(o,{value:t,children:t},s))})}),e.jsxs(n,{item:!0,xs:12,display:"flex",justifyContent:"center",children:[e.jsx(w,{onClick:z,children:"Filter"}),e.jsx(w,{onClick:H,children:"Clear"})]})]}):e.jsx(e.Fragment,{}),e.jsx(n,{item:!0,xs:4,children:e.jsx(ae,{data:Y,setData:h})}),e.jsx(n,{item:!0,xs:4,display:"flex",justifyContent:"end",children:e.jsx(Z,{sx:{width:"100%",bgcolor:"background.paper"},children:e.jsxs(de,{value:i,onChange:(t,s)=>V(s),centered:!0,children:[e.jsx(_,{label:"All",value:1}),e.jsx(_,{label:"Today Remember Leads",value:2}),e.jsx(_,{label:"Apply filter",value:3})]})})}),e.jsx(n,{item:!0,xs:4,display:"flex",justifyContent:"end",children:e.jsx(ie,{children:e.jsxs(oe,{value:m,onChange:Q,children:[e.jsx(o,{value:5,children:"5 Per Page"}),e.jsx(o,{value:10,children:"10 Per Page"}),e.jsx(o,{value:15,children:"15 Per Page"}),e.jsx(o,{value:1,children:"All Per Page"})]})})})]}),e.jsx(se,{component:ee,style:{marginTop:"20px"},children:e.jsxs(le,{children:[e.jsx(ne,{children:e.jsxs(R,{children:[e.jsx(a,{style:{fontWeight:"bold"},children:"S.No"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Employee Name"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Leads Name"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Leads Mobile"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Leads Email"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Leads Company"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Address"}),e.jsx(a,{style:{fontWeight:"bold"},children:"State"}),e.jsx(a,{style:{fontWeight:"bold"},children:"City"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Product Name"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Query"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Remember"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Reminder Date"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Action"})]})}),e.jsx(re,{children:X.map((t,s)=>e.jsxs(R,{children:[e.jsx(a,{children:s+1}),e.jsx(a,{children:t.emp_name}),e.jsx(a,{children:t.leads_name}),e.jsx(a,{children:t.leads_mobile}),e.jsx(a,{children:t.leads_email}),e.jsx(a,{children:t.leads_company}),e.jsx(a,{children:t.leads_address}),e.jsx(a,{children:t.leads_state}),e.jsx(a,{children:t.leads_city}),e.jsx(a,{children:t.product_name}),e.jsx(a,{children:t.leads_query}),e.jsx(a,{children:t.remember}),e.jsx(a,{children:p(t.reminder_date).format("YYYY-MM-DD")}),e.jsx(a,{children:e.jsx(w,{children:"Edit"})})]},s))})]})}),e.jsx(n,{container:!0,spacing:2,display:"flex",justifyContent:"center",className:"mt-4",children:e.jsx(te,{spacing:2,children:e.jsx(ce,{count:Math.ceil(f.length/m),page:y,onChange:(t,s)=>D(s),size:"small",style:{cursor:"pointer","&:hover":{backgroundColor:"transparent"}}})})})]})};export{De as default};