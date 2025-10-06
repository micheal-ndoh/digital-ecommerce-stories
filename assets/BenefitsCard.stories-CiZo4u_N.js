import{G as c,b as p,c as l}from"./index.esm-Dy7RXuNu.js";import{j as e}from"./jsx-runtime-DFOoB9QJ.js";import"./iframe-DQP-uQIu.js";import"./preload-helper-PPVm8Dsz.js";function d(o){return c({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"}}]})(o)}const n=({Icon:o,text:a,title:i})=>e.jsx("div",{className:"h-full rounded-md group-first:pl-0 lg:pl-8",children:e.jsxs("div",{className:"flex h-full justify-between gap-4 lg:gap-8",children:[e.jsx("div",{children:e.jsx("span",{className:"mb-14 inline-block rounded-md bg-white p-2 text-xl text-blue-500 dark:bg-neutral-900 dark:text-neutral-200",children:e.jsx(o,{})})}),e.jsxs("div",{className:"text-sm xl:text-base",children:[e.jsx("h2",{className:"mb-2 font-bold",children:i}),e.jsx("p",{className:"",children:a})]})]})});n.__docgenInfo={description:"",methods:[],displayName:"BenefitCard",props:{Icon:{required:!0,tsType:{name:"union",raw:"ReactNode | any",elements:[{name:"ReactNode"},{name:"any"}]},description:""},text:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};const g={title:"Components/BenefitCard",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{Icon:{control:!1,description:"Icon component to display"},title:{control:"text",description:"Title of the benefit"},text:{control:"text",description:"Description of the benefit"}}},t={args:{Icon:p,title:"Free Shipping",text:"Enjoy free shipping on all orders over $50."}},r={args:{Icon:l,title:"Secure Payment",text:"All payments are processed securely with encryption."}},s={args:{Icon:d,title:"24/7 Customer Support",text:"Our dedicated support team is available around the clock to assist you."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: IoFastFoodOutline,
    title: 'Free Shipping',
    text: 'Enjoy free shipping on all orders over $50.'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: IoShieldCheckmarkOutline,
    title: 'Secure Payment',
    text: 'All payments are processed securely with encryption.'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    Icon: RiCustomerService2Line,
    title: '24/7 Customer Support',
    text: 'Our dedicated support team is available around the clock to assist you.'
  }
}`,...s.parameters?.docs?.source}}};const C=["FreeShipping","SecurePayment","CustomerSupport"];export{s as CustomerSupport,t as FreeShipping,r as SecurePayment,C as __namedExportsOrder,g as default};
