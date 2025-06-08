import{j as t,L as c}from"./app-CiL86YGQ.js";import{e as d}from"./eserti-DEFDTAQ5.js";import{B as m}from"./button-DyAuMnz_.js";import{c as x}from"./createLucideIcon-DiL1hKTL.js";import{f as s}from"./format-BlyJTOGp.js";import{p as n}from"./parseISO-8c5X91YK.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],p=x("Printer",h);function v({esql:e}){const i=a=>{try{return s(n(a),"dd/MM/yyyy")}catch{return a}},r=a=>{try{return a.includes("T")?s(n(a),"HH:mm"):a}catch{return a}},l=()=>{window.print()};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
                    @font-face {
                        font-family: 'VAG';
                        src: url('/js/assets/font/VAG.ttf') format('truetype');
                        font-weight: normal;
                        font-style: normal;
                    }
                    
                    @media print {
                        @page {
                            size: A4 landscape;
                            margin: 0;
                        }
                        body {
                            margin: 0;
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                        .no-print {
                            display: none !important;
                        }
                        .print-only {
                            display: block !important;
                        }
                        .print-container {
                            width: 100%;
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: white;
                        }
                        .certificate-container {
                            padding: 0 !important;
                            margin: 0 !important;
                            box-shadow: none !important;
                            background: none !important;
                        }
                    }
                    
                    /* Desktop scaling untuk semua ukuran layar */
                    html, body {
                        min-width: 1024px;
                        overflow-x: auto;
                    }
                    
                    .print-only {
                        display: none;
                    }
                    .certificate-content {
                        position: relative;
                        width: 100%;
                        height: 100%;
                    }
                    .data-overlay {
                        position: absolute;
                        inset: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .callsign-section {
                        margin-top: 26%;
                    }
                    .name-section {
                        margin-top: 1%;
                    }
                    .qso-data-section {
                        margin-top: 6.5%;
                        width: 55%;
                    }
                `}),t.jsxs("div",{className:"min-h-screen bg-gray-50 py-8",children:[t.jsx(c,{title:"Preview Sertifikat ESQL",children:t.jsx("meta",{name:"viewport",content:"width=1024, user-scalable=yes"})}),t.jsx("div",{className:"bg-[#CC1616] text-white py-16 mb-8 no-print min-w-[1024px]",children:t.jsxs("div",{className:"container mx-auto px-4",children:[t.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Preview Sertifikat ESQL"}),t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("p",{className:"text-lg opacity-90",children:"Lihat dan unduh sertifikat ESQL Anda"}),t.jsxs(m,{variant:"outline",onClick:l,className:"bg-white text-[#CC1616] hover:bg-gray-100 flex items-center gap-2",children:[t.jsx(p,{className:"w-4 h-4"}),"Simpan sebagai PDF"]})]})]})}),t.jsx("div",{className:"max-w-4xl mx-auto px-4 min-w-[1024px]",children:t.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6 certificate-container",children:t.jsxs("div",{className:"certificate-content",children:[t.jsx("img",{src:d,alt:"Sertifikat ESQL",className:"w-full h-auto"}),t.jsxs("div",{className:"data-overlay",children:[t.jsx("div",{className:"callsign-section",children:t.jsx("div",{className:"text-center",children:t.jsx("span",{className:"font-bold text-[#CC1616] text-6xl",style:{fontFamily:"VAG"},children:e.callsign})})}),t.jsx("div",{className:"name-section",children:t.jsx("div",{className:"text-center",children:t.jsx("span",{className:"font-bold text-[#FFFF01] text-2xl",style:{fontFamily:"Istanbul"},children:e.nama})})}),t.jsx("div",{className:"qso-data-section",children:t.jsxs("div",{className:"grid grid-cols-6 text-center",children:[t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:i(e.tanggal)})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:r(e.utc)})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.frekuensi})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:`${e.band}m`})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.mode})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.rst})})]})})]})]})})})]})]})}export{v as default};
