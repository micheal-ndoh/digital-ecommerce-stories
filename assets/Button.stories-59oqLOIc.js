import{B as l}from"./Button-ChImAzJV.js";import"./jsx-runtime-DFOoB9QJ.js";import"./iframe-DQP-uQIu.js";import"./preload-helper-PPVm8Dsz.js";import"./link-BGPO9yXc.js";import"./index.esm-Dy7RXuNu.js";const b={title:"Shared/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Content of the button"},className:{control:"text",description:"Additional CSS classes"},sizeClass:{control:"text",description:"Size classes for the button"},loading:{control:"boolean",description:"Show loading spinner"},disabled:{control:"boolean",description:"Disable the button"},href:{control:"text",description:"Link destination (if button acts as a link)"},showPointer:{control:"boolean",description:"Show a pointer icon"},onClick:{action:"clicked",description:"Click handler for the button"}}},r={args:{children:"Default Button"}},e={args:{children:"Primary Button",className:"bg-primary-600 hover:bg-primary-700 text-white"}},t={args:{children:"Secondary Button",className:"bg-neutral-200 hover:bg-neutral-300 text-neutral-800"}},a={args:{children:"Loading Button",loading:!0}},o={args:{children:"Disabled Button",disabled:!0}},s={args:{children:"Button with Pointer",showPointer:!0}},n={args:{children:"Link Button",href:"/",showPointer:!0}},i={args:{children:"Small Button",sizeClass:"py-2 px-3 text-xs"}},c={args:{children:"Large Button",sizeClass:"py-4 px-8 text-lg"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Button'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    className: 'bg-primary-600 hover:bg-primary-700 text-white'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    className: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    loading: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button with Pointer',
    showPointer: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link Button',
    href: '/',
    showPointer: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    sizeClass: 'py-2 px-3 text-xs'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    sizeClass: 'py-4 px-8 text-lg'
  }
}`,...c.parameters?.docs?.source}}};const S=["Default","Primary","Secondary","Loading","Disabled","WithPointer","AsLink","Small","Large"];export{n as AsLink,r as Default,o as Disabled,c as Large,a as Loading,e as Primary,t as Secondary,i as Small,s as WithPointer,S as __namedExportsOrder,b as default};
