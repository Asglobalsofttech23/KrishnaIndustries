import{r as s,j as e,G as u,c as f}from"./index-CTTX9ijT.js";import{a as h}from"./axios-C6NQisi-.js";function g(){const[l,i]=s.useState(null),[m,c]=s.useState(null),[o,a]=s.useState(null),p=t=>{i(t.target.files[0])},d=async t=>{if(t.preventDefault(),!l){a("Please select a file to upload");return}a(null);const n=new FormData;n.append("file",l);try{const r=await h.post(`${f.apiURL}/upload/upload`,n,{headers:{"Content-Type":"multipart/form-data"}});c(r.data)}catch(r){a("Error uploading file"),console.error(r)}};return e.jsx("div",{children:e.jsx(u,{container:!0,spacing:3,className:"p-4",children:e.jsxs("div",{className:"upload-wrapper",children:[e.jsx("h3",{children:"Upload & View Excel Sheets"}),e.jsxs("form",{onSubmit:d,children:[e.jsx("input",{type:"file",onChange:p}),e.jsx("button",{type:"submit",children:"Upload"})]}),o&&e.jsx("div",{className:"error",children:o})]})})})}export{g as default};