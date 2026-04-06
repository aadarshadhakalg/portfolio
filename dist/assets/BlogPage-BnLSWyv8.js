import{r as o,j as e,L as S,S as v}from"./index-BHrUsHe-.js";const I=()=>{const[l,n]=o.useState([]),[b,d]=o.useState(!0),[r,c]=o.useState(!1),[m,h]=o.useState({hasNextPage:!1,endCursor:null}),j="https://gql.hashnode.com",N=`
    query Publication($after: String) {
      publication(host: "blog.aadarshadhakal.com.np") {
        posts(first: 5, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
            }
          }
        }
      }
    }
  `,g=async(t=null)=>{t&&c(!0);const a="hashnode_posts_list",p=sessionStorage.getItem(a),u=sessionStorage.getItem(`${a}_pageInfo`);if(!t&&p&&u){n(JSON.parse(p)),h(JSON.parse(u)),d(!1);return}try{const x=await(await fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:N,variables:{after:t}})})).json(),s=x.data.publication.posts.edges.map(i=>i.node),y=x.data.publication.posts.pageInfo;t?n(i=>[...i,...s]):(n(s),s&&s.length>0&&(sessionStorage.setItem(a,JSON.stringify(s)),sessionStorage.setItem(`${a}_pageInfo`,JSON.stringify(y)))),h(y)}catch(f){console.error("Error fetching Hashnode posts:",f)}finally{d(!1),c(!1)}};return o.useEffect(()=>{g()},[]),b?e.jsx("div",{className:"blog-posts shimmer-wrapper",children:[1,2,3].map(t=>e.jsxs("div",{style:{marginBottom:"2.5rem",borderBottom:"1px solid var(--border-color)",paddingBottom:"1.5rem"},children:[e.jsx("div",{className:"shimmer-line",style:{width:"150px",height:"16px",marginBottom:"0.8rem"}}),e.jsx("div",{className:"shimmer-line",style:{width:"70%",height:"28px",marginBottom:"0.8rem"}}),e.jsx("div",{className:"shimmer-line",style:{width:"100%",height:"16px",marginBottom:"0.4rem"}}),e.jsx("div",{className:"shimmer-line",style:{width:"90%",height:"16px",marginBottom:"0.4rem"}})]},t))}):e.jsxs("div",{className:"blog-posts",children:[l.length>0?l.map(t=>e.jsxs("div",{style:{marginBottom:"2.5rem",borderBottom:"1px solid var(--border-color)",paddingBottom:"1.5rem"},children:[e.jsx("div",{className:"mono secondary-text",style:{marginBottom:"0.5rem"},children:new Date(t.publishedAt).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}),e.jsx("h3",{className:"serif",style:{fontSize:"1.8rem",marginBottom:"0.5rem"},children:e.jsx(S,{to:`/blog/${t.slug}`,children:t.title})}),e.jsx("p",{className:"secondary-text",children:t.brief})]},t.id)):e.jsx("p",{className:"secondary-text",children:"No posts found."}),e.jsx("div",{style:{marginTop:"2rem",display:"flex",gap:"1.5rem",alignItems:"center"},children:m.hasNextPage&&e.jsx("button",{onClick:()=>g(m.endCursor),disabled:r,className:"cta-button",style:{margin:0,opacity:r?.7:1,cursor:r?"not-allowed":"pointer"},children:r?"Loading...":"Load More"})})]})},P=()=>e.jsxs(v,{title:"Inside the Infrastructure",id:"blog",children:[e.jsxs("div",{style:{maxWidth:"800px",marginBottom:"3rem"},children:[e.jsx("p",{className:"secondary-text",style:{fontSize:"1.2rem",lineHeight:"1.7"},children:"Welcome to my technical blog. Here, I document and share my ongoing explorations into cloud infrastructure, virtualization, storage architectures, and open-source systems engineering. From deep dives into Ceph performance to tutorials on automating Proxmox clusters, this space is dedicated to the 'how' and 'why' of modern infrastructure."}),e.jsx("div",{style:{marginTop:"1rem",borderBottom:"1px solid var(--border-color)",paddingBottom:"1rem"},children:e.jsx("p",{className:"mono",style:{fontSize:"0.8rem",opacity:.6,textTransform:"uppercase"},children:"Keywords: Ceph, OpenStack, Proxmox, Linux, Virtualization, Automation, Infrastructure as Code"})})]}),e.jsx(I,{})]});export{P as default};
