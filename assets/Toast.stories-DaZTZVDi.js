import{j as e}from"./jsx-runtime-DFOoB9QJ.js";import{B as i}from"./Button-ChImAzJV.js";import{d as u}from"./index.esm-Dy7RXuNu.js";import"./iframe-DQP-uQIu.js";import"./preload-helper-PPVm8Dsz.js";import"./link-BGPO9yXc.js";const p=({className:o="",...t})=>e.jsx(i,{sizeClass:"px-1",className:`font-normal text-neutral-500 underline dark:text-neutral-300 ${o}`,...t});p.__docgenInfo={description:"",methods:[],displayName:"ButtonLink",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},sizeClass:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"ButtonHTMLAttributes['type']",raw:"ButtonHTMLAttributes<HTMLButtonElement>['type']"},description:""},href:{required:!1,tsType:{name:"any"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showPointer:{required:!1,tsType:{name:"boolean"},description:""}}};const m=({title:o,description:t,actionButtons:l,actionLink:d,onClose:c})=>e.jsxs("div",{className:"flex items-center justify-between rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(u,{className:"size-6 text-green-500"}),e.jsxs("div",{className:"ml-3",children:[e.jsx("p",{className:"text-sm font-medium text-neutral-900 dark:text-neutral-100",children:o}),t&&e.jsx("p",{className:"mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:t}),l&&e.jsx("div",{className:"mt-3 flex space-x-2",children:l}),d&&e.jsx("div",{className:"mt-3 text-sm",children:d})]})]}),c&&e.jsxs("button",{type:"button",className:"-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-2 focus:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white",onClick:c,children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]});m.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actionButtons:{required:!1,tsType:{name:"ReactNode"},description:""},actionLink:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const w={title:"Components/Toast",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"The main title of the toast message."},description:{control:"text",description:"Optional descriptive text for the toast."},actionButtons:{control:!1,description:"Optional ReactNode for action buttons."},actionLink:{control:!1,description:"Optional ReactNode for an action link."},onClose:{action:"closed",description:"Callback function when the toast is closed."}}},s={args:{title:"Item Added",onClose:()=>alert("Toast closed!")}},r={args:{title:"Item Added",description:"The new entry was added to your list.",onClose:()=>alert("Toast closed!")}},a={args:{title:"Item Added",description:"The new entry was added to your list.",actionButtons:e.jsxs(e.Fragment,{children:[e.jsx(i,{sizeClass:"py-2 px-3",className:"bg-neutral-200 hover:bg-neutral-300 text-neutral-800",children:"Open Later"}),e.jsx(i,{sizeClass:"py-2 px-3",className:"bg-primary-600 hover:bg-primary-700 text-white",children:"Open Document"})]}),onClose:()=>alert("Toast closed!")}},n={args:{title:"Item Added",description:"The new entry was added to your list.",actionLink:e.jsx(p,{href:"#",className:"text-primary-600 hover:text-primary-700",children:"Open document"}),onClose:()=>alert("Toast closed!")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Item Added',
    onClose: () => alert('Toast closed!')
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Item Added',
    description: 'The new entry was added to your list.',
    onClose: () => alert('Toast closed!')
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Item Added',
    description: 'The new entry was added to your list.',
    actionButtons: <>
        <Button sizeClass="py-2 px-3" className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800">
          Open Later
        </Button>
        <Button sizeClass="py-2 px-3" className="bg-primary-600 hover:bg-primary-700 text-white">
          Open Document
        </Button>
      </>,
    onClose: () => alert('Toast closed!')
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Item Added',
    description: 'The new entry was added to your list.',
    actionLink: <ButtonLink href="#" className="text-primary-600 hover:text-primary-700">
        Open document
      </ButtonLink>,
    onClose: () => alert('Toast closed!')
  }
}`,...n.parameters?.docs?.source}}};const N=["Default","WithDescription","WithActionButtons","WithActionLink"];export{s as Default,a as WithActionButtons,n as WithActionLink,r as WithDescription,N as __namedExportsOrder,w as default};
