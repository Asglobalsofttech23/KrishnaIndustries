import{r as o,c as D,j as e,G as i,d as m,m as M,S as G}from"./index-CTTX9ijT.js";import{a as v}from"./axios-C6NQisi-.js";import{M as j,S as Q,T as R,a as z,b as H,c as N,d as a,e as V}from"./Search-CCLIb58Y.js";import{A as J}from"./AddCustPurch-DYC0Dfbh.js";import{T as p,S as K}from"./TextField-Dktkde7T.js";import{F as L}from"./OutlinedInput-C8Fn8aqk.js";import{P as X}from"./Pagination-D93ObAOZ.js";import{D as F,a as E,b as q}from"./DialogContent-BtWOILlZ.js";const Y=({data:n,onClose:U})=>{const[k,S]=o.useState([]),[C,W]=o.useState([]),[c,P]=o.useState({cust_id:n?n.cust_id:"",pro_id:n?n.pro_id:"",quantity:n?n.quantity:"",price:n?n.price:"",payment_type:n?n.payment_type:"",advance:n?n.advance:"",balance:n?n.balance:"",total:n?n.total:""}),[l,f]=o.useState({cust_id:"",pro_id:"",quantity:"",price:"",payment_type:"",advance:"",balance:"",total:""});o.useEffect(()=>{v.get(`${D.apiUrl}/product/getProductData`).then(s=>{S(s.data)}).catch(s=>{console.log("Customer purchase data is not fetched.")})},[]),o.useEffect(()=>{v.get(`${D.apiUrl}/customer/getCustomerByEmpId/${sessionStorage.getItem("emp_id")}`).then(s=>{W(s.data)}).catch(s=>{console.log("Customer data is not fetched.")})},[]);const _=(s,r)=>{r&&typeof r=="string"&&r.trim()},d=s=>{const{name:r,value:h}=s.target;let u={...c,[r]:h};if(r==="payment_type"&&h==="partial"){const y=parseFloat(u.total||0),g=parseFloat(u.advance||0);u.balance=(y-g).toFixed(2)}else if(r==="advance"){const y=parseFloat(u.total||0),g=parseFloat(h||0);u.balance=(y-g).toFixed(2)}else if(r==="quantity"||r==="price"){const y=parseFloat(u.quantity||0),g=parseFloat(u.price||0);u.total=(y*g).toFixed(2)}const b=_(r,h);P(u),f({...l,[r]:b})},T=s=>{s.preventDefault();let r={};if(Object.keys(c).forEach(h=>{const u=c[h],b=_(h,u);b&&(r=b)}),Object.keys(r).length>0){f(r);return}v.put(`${D.apiUrl}/cust_purch/updateCustPurch/${n.cust_purch_id}`,c).then(h=>{U()}).catch(h=>{console.log("Error:",h)})};return e.jsxs("div",{children:[e.jsx("h1",{className:"text-center",children:"Update Customer Purchase"}),e.jsxs(i,{container:!0,spacing:2,children:[e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{select:!0,fullWidth:!0,name:"cust_id",label:"Select customer",onChange:d,value:c.cust_id,error:!!l.cust_id,helperText:l.cust_id,children:C.map(s=>e.jsx(j,{value:s.cust_id,children:s.cust_name},s.cust_id))})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{select:!0,fullWidth:!0,name:"pro_id",label:"Select Product Name",onChange:d,value:c.pro_id,error:!!l.pro_id,helperText:l.pro_id,children:k.map(s=>e.jsx(j,{value:s.pro_id,children:s.pro_name},s.pro_id))})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,name:"quantity",label:"Quantity",type:"number",onChange:d,value:c.quantity,error:!!l.quantity,helperText:l.quantity})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,name:"price",label:"Price",type:"number",onChange:d,value:c.price,error:!!l.price,helperText:l.price})}),e.jsx(i,{item:!0,xs:6,children:e.jsxs(p,{select:!0,fullWidth:!0,name:"payment_type",label:"Select Payment type",onChange:d,value:c.payment_type,error:!!l.payment_type,helperText:l.payment_type,children:[e.jsx(j,{value:"full",children:"Full Payment"}),e.jsx(j,{value:"partial",children:"Partial Payment"})]})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,name:"total",label:"Total",type:"number",onChange:d,value:c.total,error:!!l.total,helperText:l.total})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,name:"advance",label:"Amount",type:"number",onChange:d,value:c.advance,error:!!l.advance,helperText:l.advance})}),e.jsx(i,{item:!0,xs:6,children:e.jsx(p,{fullWidth:!0,name:"balance",label:"Balance Amount",type:"number",onChange:d,value:c.balance,error:!!l.balance,helperText:l.balance})}),e.jsx(i,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(m,{onClick:T,children:"Submit"})})]})]})},ce=()=>{const[n,U]=o.useState([]),[k,S]=o.useState([]),[C,W]=o.useState(5),[c,P]=o.useState(1),[l,f]=o.useState(!1),[_,d]=o.useState(!1),[T,s]=o.useState(!1),[r,h]=o.useState([]),[u,b]=o.useState();o.useEffect(()=>{v.get(`${D.apiUrl}/cust_purch/getCustPurchData/?emp_id=${sessionStorage.getItem("emp_id")}`).then(t=>{U(t.data),S(t.data)}).catch(t=>{console.log("Customer purchase data is not fetched.")})},[l,_,T]);const y=t=>{const x=n.find(B=>B.cust_purch_id===t);x&&(h(x),d(!0))},g=t=>{b(t),s(!0)},I=()=>{v.delete(`${D.apiUrl}/cust_purch/deleteCustPurch/${u}`).then(t=>{s(!1)}).catch(t=>{console.log("Error deleting data. Please try again later.")})},A=t=>{const x=parseInt(t.target.value,10);x==1?(W(n.length),P(1)):(W(x),P(1))},$=(c-1)*C,w=c*C,O=k.slice($,w);return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-center",children:"Customer Index"}),e.jsxs(i,{container:!0,spacing:2,className:"mt-3",children:[e.jsx(i,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(m,{onClick:()=>f(!0),children:"Purchase Product"})}),e.jsx(i,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(Q,{data:n,setData:S})}),e.jsx(i,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(L,{children:e.jsxs(K,{value:C,onChange:A,children:[e.jsx(j,{value:5,children:"5 Per Page"}),e.jsx(j,{value:10,children:"10 Per Page"}),e.jsx(j,{value:15,children:"15 Per Page"}),e.jsx(j,{value:1,children:"All Per Page"})]})})})]}),e.jsx(R,{component:M,className:"mt-4",children:e.jsxs(z,{children:[e.jsx(H,{children:e.jsxs(N,{children:[e.jsx(a,{style:{fontWeight:"bold"},children:"S.No"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Customer Name"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Customer Mobile"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Customer Email"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Product Name"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Quantity"}),e.jsx(a,{style:{fontWeight:"bold"},children:"price"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Payment Type"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Advance"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Balance"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Total"}),e.jsx(a,{style:{fontWeight:"bold"},children:"Action"})]})}),e.jsx(V,{children:O.map((t,x)=>e.jsxs(N,{children:[e.jsx(a,{children:x+1}),e.jsx(a,{children:t.cust_name}),e.jsx(a,{children:t.cust_mobile}),e.jsx(a,{children:t.cust_email}),e.jsx(a,{children:t.pro_name}),e.jsx(a,{children:t.quantity}),e.jsx(a,{children:t.price}),e.jsx(a,{children:t.payment_type}),e.jsx(a,{children:t.advance}),e.jsx(a,{children:t.balance}),e.jsx(a,{children:t.total}),e.jsxs(a,{children:[e.jsx(m,{onClick:()=>y(t.cust_purch_id),children:"Edit"}),e.jsx(m,{onClick:()=>g(t.cust_purch_id),children:"Delete"})]})]},t.cust_purch_id))})]})}),e.jsx(i,{container:!0,spacing:2,display:"flex",justifyContent:"center",className:"mt-4",children:e.jsx(G,{spacing:2,children:e.jsx(X,{count:Math.ceil(n.length/C),page:c,onChange:(t,x)=>P(x),size:"small",style:{cursor:"pointer","&:hover":{backgroundColor:"transparent"}}})})}),e.jsxs(F,{open:l,onClose:()=>f(!1),maxWidth:"lg",children:[e.jsx(E,{children:e.jsx(J,{onClose:()=>f(!1)})}),e.jsx(q,{children:e.jsx(m,{onClick:()=>f(!1),children:"Close"})})]}),e.jsxs(F,{open:_,onClose:()=>d(!1),maxWidth:"lg",children:[e.jsx(E,{children:e.jsx(Y,{data:r,onClose:()=>d(!1)})}),e.jsx(q,{children:e.jsx(m,{onClick:()=>d(!1),children:"Close"})})]}),e.jsxs(F,{open:T,onClose:()=>s(!1),children:[e.jsx(E,{children:e.jsx("p",{children:"Are you sure you want to delete this Customer data?"})}),e.jsxs(q,{children:[e.jsx(m,{onClick:I,style:{backgroundColor:"red",color:"white"},children:"Delete"}),e.jsx(m,{onClick:()=>s(!1),style:{backgroundColor:"green",color:"white"},children:"Cancel"})]})]})]})};export{ce as default};
