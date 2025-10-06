import{j as e}from"./jsx-runtime-DFOoB9QJ.js";import{a as k}from"./index.esm-Dy7RXuNu.js";import"./iframe-DQP-uQIu.js";import"./preload-helper-PPVm8Dsz.js";const l=({imageUrl:n,badgeText:o,title:c,description:d,tags:m,stock:g,price:p,backgroundColor:u="bg-card-light"})=>e.jsxs("div",{className:`max-w-sm rounded-2xl ${u} shadow-lg overflow-hidden`,children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{alt:c,className:"w-full",src:n}),o&&e.jsx("div",{className:"absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-800 backdrop-blur-sm dark:bg-gray-800/80 dark:text-white",children:o}),e.jsx("button",{type:"button",className:"absolute right-4 top-4 rounded-full bg-white p-2 focus:outline-none backdrop-blur-sm dark:bg-gray-800/80",children:e.jsx(k,{className:"text-gray-700 dark:text-gray-300",size:24})})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"mb-2 text-2xl font-bold text-text-light dark:text-text-dark",children:c}),e.jsx("p",{className:"mb-4 text-subtext-light dark:text-subtext-dark",children:d}),e.jsx("div",{className:"mb-6 flex space-x-2",children:m.map(i=>e.jsx("span",{className:"rounded-full bg-chip-light px-4 py-1.5 text-sm text-subtext-light dark:bg-chip-dark dark:text-subtext-dark",children:i},i))}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm text-subtext-light dark:text-subtext-dark",children:[g," in stock"]}),e.jsxs("p",{className:"text-2xl font-bold text-text-light dark:text-text-dark",children:["USD ",p]})]}),e.jsx("button",{type:"button",className:"rounded-lg bg-primary px-6 py-3 font-semibold text-white",children:"Buy now"})]})]})]});l.__docgenInfo={description:"",methods:[],displayName:"ClockCard",props:{imageUrl:{required:!0,tsType:{name:"string"},description:""},badgeText:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},stock:{required:!0,tsType:{name:"number"},description:""},price:{required:!0,tsType:{name:"number"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'bg-card-light'",computed:!1}}}};const w={title:"Components/ClockCard",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{imageUrl:{control:"text",description:"URL of the clock image"},badgeText:{control:"text",description:'Optional badge text (e.g., "Best Seller")'},title:{control:"text",description:"Title of the clock"},description:{control:"text",description:"Description of the clock"},tags:{control:"object",description:"Array of tags for the clock"},stock:{control:"number",description:"Number of items in stock"},price:{control:"number",description:"Price of the clock"},backgroundColor:{control:"color",description:"Background color of the card (Tailwind class)",options:["bg-card-light","bg-card-dark","bg-red-100","bg-blue-100"],mapping:{"bg-card-light":"bg-card-light","bg-card-dark":"bg-card-dark","bg-red-100":"bg-red-100","bg-blue-100":"bg-blue-100"}}}},t={args:{imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuCRonWpPmW5cm36a8gIulwNm6MXpXhmpF3c6jE8HPMreU7rA6mFGzCuGB86w9TafTCRLc1Q619W7DFlgkwb6Z88XdGx4f1rPokl8-Yi8640uvKf4RhlWDY5qWUsXzH38VI-ZBj6Elbx47kKPXyEqC013fIXsuKaoXK0T_XImXNqt2zsIoLeQGcL6NswY7Po14OSW2WOP7ZsnKWF_-_Uevfohi3KqAg4wj-EKUioROis7F12kvlyK55E8RKqyZm1jOwmlCunSIsr-5WH",badgeText:"Best Seller",title:"Minimalistic clock",description:"The epitome of minimalist design. An ultra-thin wrist clock that strips timekeeping down to its purest form.",tags:["Clock","Minimalistic"],stock:12,price:29.99,backgroundColor:"bg-red-10"}},r={args:{imageUrl:"https://imgs.search.brave.com/GxpkGa1v-8jEpm1mv7mPA2Eo5RrtD8Ah_Mqk7N_NsYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFdEVPd0szUEwu/anBn",badgeText:"New Arrival",title:"Elegant Dark Clock",description:"A sleek and modern clock designed for contemporary spaces.",tags:["Clock","Modern","Dark"],stock:5,price:49.99,backgroundColor:"bg-card-dark"}},s={args:{imageUrl:"https://lh3.googleusercontent.com/aida-public/AB6AXuCRonWpPmW5cm36a8gIulwNm6MXpXhmpF3c6jE8HPMreU7rA6mFGzCuGB86w9TafTCRLc1Q619W7DFlgkwb6Z88XdGx4f1rPokl8-Yi8640uvKf4RhlWDY5qWUsXzH38VI-ZBj6Elbx47kKPXyEqC013fIXsuKaoXK0T_XImXNqt2zsIoLeQGcL6NswY7Po14OSW2WOP7ZsnKWF_-_Uevfohi3KqAg4wj-EKUioROis7F12kvlyK55E8RKqyZm1jOwmlCunSIsr-5WH",title:"Classic Timepiece",description:"A timeless design that complements any decor.",tags:["Classic","Analog"],stock:20,price:19.99}},a={args:{imageUrl:"https://imgs.search.brave.com/05nEI2hDGJggm5IYgAoMkz9mgqukqu3GIkjQNjeCnaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NDQ1NTg3OS9waG90/by93b29kZW4tYnJv/d24tc3RhbmRpbmct/Y2xvY2stb24td2hp/dGUtYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RW9FV1o1Vnl1/MWxoM19VNUFpQnhw/N2toSWVabldWcUtj/THUxeXgyOUUwND0",badgeText:"New Arrival",title:"Elegant Dark StandingClock",description:"A sleek and traditional clock designed for contemporary spaces.",tags:["Clock","Elegant","Dark"],stock:5,price:49.99,backgroundColor:"bg-card-white"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRonWpPmW5cm36a8gIulwNm6MXpXhmpF3c6jE8HPMreU7rA6mFGzCuGB86w9TafTCRLc1Q619W7DFlgkwb6Z88XdGx4f1rPokl8-Yi8640uvKf4RhlWDY5qWUsXzH38VI-ZBj6Elbx47kKPXyEqC013fIXsuKaoXK0T_XImXNqt2zsIoLeQGcL6NswY7Po14OSW2WOP7ZsnKWF_-_Uevfohi3KqAg4wj-EKUioROis7F12kvlyK55E8RKqyZm1jOwmlCunSIsr-5WH',
    badgeText: 'Best Seller',
    title: 'Minimalistic clock',
    description: 'The epitome of minimalist design. An ultra-thin wrist clock that strips timekeeping down to its purest form.',
    tags: ['Clock', 'Minimalistic'],
    stock: 12,
    price: 29.99,
    backgroundColor: "bg-red-10"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: "https://imgs.search.brave.com/GxpkGa1v-8jEpm1mv7mPA2Eo5RrtD8Ah_Mqk7N_NsYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFFdEVPd0szUEwu/anBn",
    badgeText: 'New Arrival',
    title: 'Elegant Dark Clock',
    description: 'A sleek and modern clock designed for contemporary spaces.',
    tags: ['Clock', 'Modern', 'Dark'],
    stock: 5,
    price: 49.99,
    backgroundColor: 'bg-card-dark'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRonWpPmW5cm36a8gIulwNm6MXpXhmpF3c6jE8HPMreU7rA6mFGzCuGB86w9TafTCRLc1Q619W7DFlgkwb6Z88XdGx4f1rPokl8-Yi8640uvKf4RhlWDY5qWUsXzH38VI-ZBj6Elbx47kKPXyEqC013fIXsuKaoXK0T_XImXNqt2zsIoLeQGcL6NswY7Po14OSW2WOP7ZsnKWF_-_Uevfohi3KqAg4wj-EKUioROis7F12kvlyK55E8RKqyZm1jOwmlCunSIsr-5WH',
    title: 'Classic Timepiece',
    description: 'A timeless design that complements any decor.',
    tags: ['Classic', 'Analog'],
    stock: 20,
    price: 19.99
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    imageUrl: "https://imgs.search.brave.com/05nEI2hDGJggm5IYgAoMkz9mgqukqu3GIkjQNjeCnaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NDQ1NTg3OS9waG90/by93b29kZW4tYnJv/d24tc3RhbmRpbmct/Y2xvY2stb24td2hp/dGUtYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RW9FV1o1Vnl1/MWxoM19VNUFpQnhw/N2toSWVabldWcUtj/THUxeXgyOUUwND0",
    badgeText: 'New Arrival',
    title: 'Elegant Dark StandingClock',
    description: 'A sleek and traditional clock designed for contemporary spaces.',
    tags: ['Clock', 'Elegant', 'Dark'],
    stock: 5,
    price: 49.99,
    backgroundColor: 'bg-card-white'
  }
}`,...a.parameters?.docs?.source}}};const y=["Default","DarkMode","NoBadge","Standing"];export{r as DarkMode,t as Default,s as NoBadge,a as Standing,y as __namedExportsOrder,w as default};
