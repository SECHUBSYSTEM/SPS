(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{448:function(e,t,s){Promise.resolve().then(s.bind(s,3703))},3703:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var a=s(9368),r=s(6041),n=s(577),l=s(8939),i=s(4488),o=s(4653);function c(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,o.m6)((0,i.W)(t))}let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:c("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});d.displayName="Card",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:c("flex flex-col space-y-1.5 p-6",s),...r})}).displayName="CardHeader",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:c("text-2xl font-semibold leading-none tracking-tight",s),...r})}).displayName="CardTitle",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:c("text-sm text-muted-foreground",s),...r})}).displayName="CardDescription",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:c("p-6 pt-0",s),...r})}).displayName="CardContent",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:c("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter";let m=r.forwardRef((e,t)=>{let{className:s,type:r,...n}=e;return(0,a.jsx)("input",{type:r,className:c("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...n})});m.displayName="Input";let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("textarea",{className:c("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...r})});x.displayName="Textarea";var u=s(6649);let f=(0,s(9325).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),p=r.forwardRef((e,t)=>{let{className:s,variant:r,size:n,asChild:l=!1,...i}=e,o=l?u.g7:"button";return(0,a.jsx)(o,{className:c(f({variant:r,size:n,className:s})),ref:t,...i})});p.displayName="Button";var g=s(327),h={src:"/_next/static/media/bg-header.bede5df3.png",height:130,width:582,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEXb2Nj39fXj4eCkjYny8PD//Pvp4+Pgs6zl1dWBdyJZAAAABHRSTlPT09DTll+99QAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAaSURBVHicY2Bh42BhZWVnYWBgYGBiZGRmAgACcQA1/DcMwwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2};function b(){let[e,t]=(0,r.useState)(""),[s,n]=(0,r.useState)(""),[l,i]=(0,r.useState)(""),[o,c]=(0,r.useState)(""),[d,u]=(0,r.useState)(!1),f=async a=>{a.preventDefault(),u(!0),c("Sending...");try{let a="https://served.net.au";console.log("Sending request to:",a);let r=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e,email:s,message:l})});if(console.log("Response status:",r.status),!r.ok){let e=await r.json().catch(()=>null);throw Error((null==e?void 0:e.error)||"HTTP error! status: ".concat(r.status))}await r.json(),c("Message sent successfully!"),t(""),n(""),i("")}catch(e){console.error("Contact form error:",e),c(e.message||"An error occurred. Please try again.")}finally{u(!1)}};return(0,a.jsxs)("div",{className:"space-y-2 grid gap-6 grid-cols-2 text-[#777777] [font-family:'Comic_Sans_MS',sans-serif]",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("h2",{className:"text-base md:text-lg self-center 2xl:text-xl mb-2 text-black",children:"Contact Us"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("p",{className:"text-sm",children:[(0,a.jsx)("span",{className:"font-bold pr-2.5",children:"Mobile:"})," 0402 00 5522"]}),(0,a.jsxs)("p",{className:"text-sm",children:[(0,a.jsx)("span",{className:"font-bold pr-4",children:"Email:"})," Rod@served.net.au"]}),(0,a.jsxs)("p",{className:"text-sm",children:[(0,a.jsx)("span",{className:"font-bold",children:"Website:"})," www.served.net.au"]}),(0,a.jsxs)("p",{className:"text-sm flex items-center",children:[(0,a.jsx)("span",{className:"font-bold pr-7",children:"Post:"}),(0,a.jsx)("br",{}),"PO Box 818",(0,a.jsx)("br",{}),"Tugun Qld 4224"]}),(0,a.jsx)("p",{className:"items-center text-center text-black pt-4 mt-4 text-sm md:text-lg 2xl:text-xl",children:"We Serve Better!"})]})]}),(0,a.jsxs)("form",{onSubmit:f,className:"space-y-2",children:[(0,a.jsx)(m,{placeholder:"Your Name",value:e,onChange:e=>t(e.target.value),className:"h-6 text-sm font-sans",required:!0,disabled:d}),(0,a.jsx)(m,{type:"email",placeholder:"Your Email",value:s,onChange:e=>n(e.target.value),className:"h-6 text-sm font-sans",required:!0,disabled:d}),(0,a.jsx)(x,{placeholder:"Your Message",value:l,onChange:e=>i(e.target.value),className:"h-16 text-sm font-sans",required:!0,disabled:d}),(0,a.jsx)(p,{type:"submit",variant:"secondary",className:"w-full h-6 text-sm bg-[#555555] text-white/60 hover:bg-[#555555] hover:text-white/90 [font-family:'Comic_Sans_MS',sans-serif]",disabled:d,children:d?"SENDING...":"SEND MESSAGE"}),o&&(0,a.jsx)("p",{className:"text-center text-sm mt-2 ".concat(o.includes("error")||o.includes("failed")?"text-red-500":o.includes("success")?"text-green-500":""),children:o})]})]})}function v(){let[e,t]=(0,r.useState)(0),[s,i]=(0,r.useState)(!1),[o,c]=(0,r.useState)(0);(0,r.useEffect)(()=>{c(e)},[e]);let m=[{name:"Home",content:(0,a.jsxs)("div",{className:"flex space-y-1 text-[#777777] flex-col [font-family:'Comic_Sans_MS',sans-serif]",children:[(0,a.jsx)("h2",{className:"text-sm md:text-lg 2xl:text-xl text-black self-center",children:"Welcome to Served Process Servers"}),(0,a.jsx)("h3",{className:"text-sm md:text-lg 2xl:text-xl text-black text-center self-center",children:"The Gold Coast and Northern New South Wales premier Process Serving company."}),(0,a.jsx)("p",{className:"text-sm",children:"We are specialists in the field of process serving providing the most effective and efficient service on the Gold Coast and Northern New South Wales."}),(0,a.jsx)("p",{className:"text-sm",children:"We are bound by the national privacy principles which ensures professionally prepared and delivered documents served on time."}),(0,a.jsx)("p",{className:"text-sm",children:"We are a fully Licenced Commercial Agency."}),(0,a.jsx)("p",{className:"text-sm",children:"We also hold a Private Investigator and Security Licence."}),(0,a.jsx)("p",{className:"items-center text-center mt-4 text-sm md:text-lg 2xl:text-xl text-black",children:"We serve you better!"})]})},{name:"About",content:(0,a.jsxs)("div",{className:"space-y-2 text-[#777777] flex flex-col [font-family:'Comic_Sans_MS',sans-serif]",children:[(0,a.jsx)("h2",{className:"text-base md:text-lg 2xl:text-xl self-center text-black mb-2",children:"Legal Support Services ~ Process Serving"}),(0,a.jsx)("p",{className:"text-sm",children:"We achieve prompt service of all legal documents for all sectors of the legal industry and general public."}),(0,a.jsx)("p",{className:"text-sm",children:"We have an Australia-wide network of licenced affiliate process servers to call upon for instructions outside the Gold Coast Region. We are dedicated to confidentiality and our licenced agents act in accordance with the law and all court rules. Our clients are kept fully informed on all matters on a regular basis."}),(0,a.jsx)("p",{className:"text-sm",children:"All documents are handled in the strictest of confidence. We pride ourselves on our professionalism and integrity."}),(0,a.jsx)("p",{className:"items-center text-center text-black mt-4 text-sm md:text-lg 2xl:text-xl",children:"Served On Time!"})]})},{name:"Contact",content:(0,a.jsx)(b,{})}],x=a=>{s||(i(!0),c(e),t(a),setTimeout(()=>i(!1),2e3))};return(0,a.jsxs)("div",{className:"fixed inset-0 flex flex-col justify-center items-center overflow-y-scroll overflow-x-hidden",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-no-repeat bg-center",style:{backgroundImage:'url("/bg-body.jpg")'}}),(0,a.jsxs)("div",{className:"relative w-[700px] h-[500px] max-w-[95vw] max-h-[90vh]",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-no-repeat z-0",style:{backgroundImage:'url("/papers.png")',backgroundSize:"100% 100%",filter:"drop-shadow(8px 28px 10px rgba(0, 0, 0, 0.8))"}}),(0,a.jsx)("div",{className:"absolute right-0 top-12 flex flex-col gap-[1] -mr-[1.08rem]",children:[{bgImage:"/nav-home.png",activeImage:"/nav-home-active.png",index:0},{bgImage:"/nav-about.png",activeImage:"/nav-about-active.png",index:1},{bgImage:"/nav-work.png",activeImage:"/nav-work-active.png",index:2}].map(t=>{let{bgImage:r,activeImage:l,index:i}=t;return(0,a.jsxs)("div",{className:"relative py-0",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-no-repeat mt-4 bg-center",style:{backgroundImage:"url(".concat(r,")"),width:"50px",height:"35px",transform:"scale(1.08)",filter:"drop-shadow(2px 4px 3px rgba(0, 0, 0, 0.3))"}}),(0,a.jsx)(n.E.div,{className:"absolute inset-0 bg-no-repeat mt-4 bg-center",style:{backgroundImage:"url(".concat(l,")"),width:"50px",height:"35px",opacity:e===i?1:0,transform:"scale(1.08)"},animate:{opacity:e===i?1:0,x:e===i?5:0,scale:e===i?1.15:1.08},transition:{duration:.2}}),(0,a.jsx)(n.E.button,{className:"relative z-20 w-[50px] h-[35px] mt-4 cursor-pointer",onClick:()=>x(i),disabled:s,whileHover:{scale:1.1},transition:{duration:.2}})]},i)})}),(0,a.jsx)(l.M,{initial:!1,children:m.map((t,s)=>(0,a.jsx)(n.E.div,{className:"absolute inset-0",style:{zIndex:s===e?3:s===o?2:1},initial:s===e&&{x:0,y:0},animate:{zIndex:s===e?3:s===o?2:1,x:s===e?[0,-850,0]:0,y:s===e?[0,-60,-40,-20,0]:0},transition:{duration:s===e?2:0,times:s===e?[0,.5,1]:[0],ease:"easeInOut",zIndex:{delay:s===e?0:.5}},children:(0,a.jsxs)(d,{className:"absolute border-0 z-20 outline-0 p-0 bg-transparent",style:{backgroundImage:'url("/bg-main.png")',backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"430px",width:"610px",transform:"scale(1.07)",transformOrigin:"center center",margin:"40px 0 0 45px"},children:[(0,a.jsx)("div",{className:"w-full mt-3 mb-2",children:(0,a.jsx)("div",{className:"flex justify-center items-center",children:(0,a.jsx)("div",{className:"w-[90%] pt-2",children:(0,a.jsx)(g.default,{src:h,alt:"Served Process Servers",width:800,height:100,className:"w-full h-auto object-contain",priority:!0})})})}),(0,a.jsx)("div",{className:"px-6 text-gray-700 overflow-y-auto max-h-[calc(100%-120px)]",children:t.content})]})},t.name))})]})]})}}},function(e){e.O(0,[787,111,487,744],function(){return e(e.s=448)}),_N_E=e.O()}]);