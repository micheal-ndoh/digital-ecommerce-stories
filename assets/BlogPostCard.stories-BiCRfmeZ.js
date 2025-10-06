import{j as e}from"./jsx-runtime-DFOoB9QJ.js";import{n as p}from"./image-oXxRKC8O.js";import{L as m}from"./link-BGPO9yXc.js";import"./iframe-DQP-uQIu.js";import"./preload-helper-PPVm8Dsz.js";const o=({title:a,coverImage:i,date:n,tag:l,brief:c,slug:d})=>e.jsx(m,{href:`/blogs/news/${d}`,children:e.jsxs("div",{className:"flex h-full flex-col overflow-hidden rounded-md bg-white dark:bg-neutral-900 md:flex-row",children:[e.jsx("div",{className:"relative aspect-[4/3] h-full basis-1/2 overflow-hidden bg-neutral-300",children:e.jsx(p,{src:i,alt:"blog post graphic",fill:!0,className:"scale-105 object-cover transition-all duration-300 group-hover:scale-100",sizes:"100%"})}),e.jsx("div",{className:"basis-1/2 p-6 lg:group-first:px-14 lg:group-first:py-10",children:e.jsxs("div",{className:"flex h-full flex-col justify-between",children:[e.jsx("div",{children:e.jsx("span",{className:"inline-block rounded-sm bg-neutral-200 px-2 py-1 text-xs group-first:mb-12 dark:bg-neutral-950",children:l})}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 font-semibold group-hover:text-primary dark:group-hover:text-neutral-400 lg:group-first:text-[40px]",children:a}),e.jsx("p",{className:"line-clamp-4 text-ellipsis text-neutral-500 group-first:block lg:hidden lg:group-first:text-lg",children:c}),e.jsx("div",{className:"mt-3",children:e.jsxs("p",{className:"flex flex-wrap text-sm",children:[e.jsx("span",{className:"pr-2",children:"by Devsphere labs"}),e.jsx("span",{children:n})]})})]})]})})]})});o.__docgenInfo={description:"",methods:[],displayName:"BlogPostCard",props:{title:{required:!0,tsType:{name:"string"},description:""},brief:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"string"},description:""},coverImage:{required:!0,tsType:{name:"union",raw:"string | StaticImageData",elements:[{name:"string"},{name:"StaticImageData"}]},description:""},tag:{required:!0,tsType:{name:"union",raw:"'Style' | 'Fitting' | 'General'",elements:[{name:"literal",value:"'Style'"},{name:"literal",value:"'Fitting'"},{name:"literal",value:"'General'"}]},description:""},slug:{required:!0,tsType:{name:"string"},description:""}}};const b={title:"Blog/BlogPostCard",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{post:{control:"object",description:"Blog post data"}}},t={args:{post:{title:"The Future of E-commerce",brief:"A deep dive into upcoming trends in online retail.",coverImage:"https://media.istockphoto.com/id/1373613814/photo/gamer-work-space-concept-gaming-set-up-top-view-of-a-gaming-gear-keyboard-mouse-gamepad.jpg?s=2048x2048&w=is&k=20&c=XCi-o5lLboImaz0jUOGI6Zhg-E8v6gS-q9jhqyWRCDU=",date:"2023-10-26",tag:"Technology",slug:"the-future-of-e-commerce"}}},s={args:{post:{title:"10 Tips for a Successful Online Store",brief:"Essential advice for new and experienced e-commerce entrepreneurs.",coverImage:"https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lpY2F0QiHFVNiTQb0iHIxiy9U9CTagpExdvWQduUoRk=",date:"2023-09-15",tag:"Business",slug:"10-tips-for-successful-online-store"}}},r={args:{post:{title:"Featured Article: Design Trends",brief:"Exploring the latest design trends in e-commerce interfaces.",coverImage:"https://media.istockphoto.com/id/1209783189/photo/gamepads-headphones-and-keyboard-with-mouse-on-old-wood-blue-table.jpg?s=2048x2048&w=is&k=20&c=ktlDSn-mcbKNAnSOqB6gdpVMhcKnFLWKei8H8sgAmQs=",date:"2023-11-01",tag:"Style",slug:"featured-article-design-trends"}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      title: 'The Future of E-commerce',
      brief: 'A deep dive into upcoming trends in online retail.',
      coverImage: 'https://media.istockphoto.com/id/1373613814/photo/gamer-work-space-concept-gaming-set-up-top-view-of-a-gaming-gear-keyboard-mouse-gamepad.jpg?s=2048x2048&w=is&k=20&c=XCi-o5lLboImaz0jUOGI6Zhg-E8v6gS-q9jhqyWRCDU=',
      date: '2023-10-26',
      tag: 'Technology',
      slug: 'the-future-of-e-commerce'
    } as any
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      title: '10 Tips for a Successful Online Store',
      brief: 'Essential advice for new and experienced e-commerce entrepreneurs.',
      coverImage: 'https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lpY2F0QiHFVNiTQb0iHIxiy9U9CTagpExdvWQduUoRk=',
      date: '2023-09-15',
      tag: 'Business',
      slug: '10-tips-for-successful-online-store'
    } as any
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      title: 'Featured Article: Design Trends',
      brief: 'Exploring the latest design trends in e-commerce interfaces.',
      coverImage: 'https://media.istockphoto.com/id/1209783189/photo/gamepads-headphones-and-keyboard-with-mouse-on-old-wood-blue-table.jpg?s=2048x2048&w=is&k=20&c=ktlDSn-mcbKNAnSOqB6gdpVMhcKnFLWKei8H8sgAmQs=',
      date: '2023-11-01',
      tag: 'Style',
      slug: 'featured-article-design-trends'
    } as any
  }
}`,...r.parameters?.docs?.source}}};const v=["Default","AnotherPost","FeaturedPost"];export{s as AnotherPost,t as Default,r as FeaturedPost,v as __namedExportsOrder,b as default};
