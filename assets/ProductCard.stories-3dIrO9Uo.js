import{j as e}from"./jsx-runtime-DFOoB9QJ.js";import{n as c}from"./image-oXxRKC8O.js";import{L as l}from"./link-BGPO9yXc.js";import"./iframe-DQP-uQIu.js";import"./preload-helper-PPVm8Dsz.js";const t=({product:r,className:n,showPrevPrice:i=!1})=>e.jsxs("div",{className:`transitionEffect relative rounded-2xl p-3 shadow-md ${n}`,children:[e.jsxs("div",{className:"h-[250px] w-full overflow-hidden rounded-2xl lg:h-[220px] 2xl:h-[300px]",children:[r.justIn&&e.jsx("div",{className:"absolute left-6 top-0 rounded-b-lg bg-primary px-3 py-2 text-sm uppercase text-white shadow-md",children:"Just In!"}),e.jsx(l,{className:"h-[250px] w-full lg:h-[220px]",href:`/products/${r.slug}`,children:e.jsx(c,{src:r.coverImage,alt:`${r.name} cover photo`,className:"size-full object-cover object-bottom",width:500,height:500})})]}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-semibold",children:r.name}),e.jsxs("p",{className:`text-neutral-500 ${i?"block":"hidden"} text-sm line-through`,children:["$",r.previousPrice]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-sm text-neutral-500",children:r.category}),e.jsxs("p",{className:"text-lg font-medium text-primary",children:["$",r.currentPrice]})]})]})]});t.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{product:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  slug: string;
  name: string;
  category: string;
  coverImage: StaticImageData | string;
  currentPrice: number;
  previousPrice: number;
  rating: number;
  pieces_sold: number;
  justIn?: boolean;
  onSale?: boolean;
  colorOptions?: string[];
}`,signature:{properties:[{key:"slug",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"category",value:{name:"string",required:!0}},{key:"coverImage",value:{name:"union",raw:"StaticImageData | string",elements:[{name:"StaticImageData"},{name:"string"}],required:!0}},{key:"currentPrice",value:{name:"number",required:!0}},{key:"previousPrice",value:{name:"number",required:!0}},{key:"rating",value:{name:"number",required:!0}},{key:"pieces_sold",value:{name:"number",required:!0}},{key:"justIn",value:{name:"boolean",required:!1}},{key:"onSale",value:{name:"boolean",required:!1}},{key:"colorOptions",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showPrevPrice:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const h={title:"Components/ProductCard",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{product:{control:"object",description:"Product data"},className:{control:"text",description:"Additional CSS classes"},showPrevPrice:{control:"boolean",description:"Show previous price"}}},s={args:{product:{name:"Wireless Headphones",coverImage:"https://media.istockphoto.com/id/1373613814/photo/gamer-work-space-concept-gaming-set-up-top-view-of-a-gaming-gear-keyboard-mouse-gamepad.jpg?s=2048x2048&w=is&k=20&c=XCi-o5lLboImaz0jUOGI6Zhg-E8v6gS-q9jhqyWRCDU=",category:"Electronics",currentPrice:199.99,previousPrice:249.99,justIn:!0,slug:"wireless-headphones",rating:4,pieces_sold:120,onSale:!1}}},a={args:{product:{name:"Gaming Mouse",coverImage:"https://media.istockphoto.com/id/1209783189/photo/gamepads-headphones-and-keyboard-with-mouse-on-old-wood-blue-table.jpg?s=2048x2048&w=is&k=20&c=ktlDSn-mcbKNAnSOqB6gdpVMhcKnFLWKei8H8sgAmQs=",category:"Gaming",currentPrice:79.99,previousPrice:0,justIn:!1,slug:"gaming-mouse",rating:5,pieces_sold:300,onSale:!0},showPrevPrice:!1}},o={args:{product:{name:"Smartwatch Series 7",coverImage:"https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lpY2F0QiHFVNiTQb0iHIxiy9U9CTagpExdvWQduUoRk=",category:"Wearables",currentPrice:399,previousPrice:450,justIn:!0,slug:"smartwatch-series-7",rating:4.5,pieces_sold:80,onSale:!1}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      name: 'Wireless Headphones',
      coverImage: 'https://media.istockphoto.com/id/1373613814/photo/gamer-work-space-concept-gaming-set-up-top-view-of-a-gaming-gear-keyboard-mouse-gamepad.jpg?s=2048x2048&w=is&k=20&c=XCi-o5lLboImaz0jUOGI6Zhg-E8v6gS-q9jhqyWRCDU=',
      category: 'Electronics',
      currentPrice: 199.99,
      previousPrice: 249.99,
      justIn: true,
      slug: 'wireless-headphones',
      rating: 4,
      pieces_sold: 120,
      onSale: false
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      name: 'Gaming Mouse',
      coverImage: 'https://media.istockphoto.com/id/1209783189/photo/gamepads-headphones-and-keyboard-with-mouse-on-old-wood-blue-table.jpg?s=2048x2048&w=is&k=20&c=ktlDSn-mcbKNAnSOqB6gdpVMhcKnFLWKei8H8sgAmQs=',
      category: 'Gaming',
      currentPrice: 79.99,
      previousPrice: 0,
      // Added missing previousPrice
      justIn: false,
      slug: 'gaming-mouse',
      rating: 5,
      pieces_sold: 300,
      onSale: true
    },
    showPrevPrice: false
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      name: 'Smartwatch Series 7',
      coverImage: 'https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lpY2F0QiHFVNiTQb0iHIxiy9U9CTagpExdvWQduUoRk=',
      category: 'Wearables',
      currentPrice: 399,
      previousPrice: 450,
      justIn: true,
      slug: 'smartwatch-series-7',
      rating: 4.5,
      pieces_sold: 80,
      onSale: false
    }
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","NoPreviousPrice","JustInProduct"];export{s as Default,o as JustInProduct,a as NoPreviousPrice,v as __namedExportsOrder,h as default};
