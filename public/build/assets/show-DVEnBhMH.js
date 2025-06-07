import{j as e,L as o}from"./app-BvTM6FSz.js";import{e as d}from"./eserti-x504T3fq.js";import{B as m}from"./button-CodEV9xv.js";import{c as x}from"./createLucideIcon-Dv6GQh2H.js";import{f as s}from"./format-BlyJTOGp.js";import{p as i}from"./parseISO-8c5X91YK.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],p=x("Printer",h);function v({esql:t}){const n=a=>{try{return s(i(a),"dd/MM/yyyy")}catch{return a}},c=a=>{try{return a.includes("T")?s(i(a),"HH:mm"):a}catch{return a}},r=()=>{window.print()};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
                        margin-top: 25%;
                    }
                    .name-section {
                        margin-top: 2%;
                    }
                    .qso-data-section {
                        margin-top: 7.5%;
                        width: 55%;
                    }
                `}),e.jsxs("div",{className:"min-h-screen bg-gray-50 py-8",children:[e.jsx(o,{title:"Preview Sertifikat ESQL"}),e.jsx("div",{className:"bg-[#CC1616] text-white py-16 mb-8 no-print",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Preview Sertifikat ESQL"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"text-lg opacity-90",children:"Lihat dan unduh sertifikat ESQL Anda"}),e.jsxs(m,{variant:"outline",onClick:r,className:"bg-white text-[#CC1616] hover:bg-gray-100 flex items-center gap-2",children:[e.jsx(p,{className:"w-4 h-4"}),"Simpan sebagai PDF"]})]})]})}),e.jsx("div",{className:"max-w-4xl mx-auto px-4",children:e.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6 certificate-container",children:e.jsxs("div",{className:"certificate-content",children:[e.jsx("img",{src:d,alt:"Sertifikat ESQL",className:"w-full h-auto"}),e.jsxs("div",{className:"data-overlay",children:[e.jsx("div",{className:"callsign-section",children:e.jsx("div",{className:"text-center",children:e.jsx("span",{className:"font-bold text-black text-2xl",children:t.callsign})})}),e.jsx("div",{className:"name-section",children:e.jsx("div",{className:"text-center",children:e.jsx("span",{className:"font-bold text-black text-2xl",children:t.nama})})}),e.jsx("div",{className:"qso-data-section",children:e.jsxs("div",{className:"grid grid-cols-6 text-center",children:[e.jsx("div",{className:"px-2",children:e.jsx("span",{className:"font-bold text-black text-sm",children:n(t.tanggal)})}),e.jsx("div",{className:"px-2",children:e.jsx("span",{className:"font-bold text-black text-sm",children:c(t.utc)})}),e.jsx("div",{className:"px-2",children:e.jsx("span",{className:"font-bold text-black text-sm",children:t.frekuensi})}),e.jsx("div",{className:"px-2",children:e.jsx("span",{className:"font-bold text-black text-sm",children:`${t.band}m`})}),e.jsx("div",{className:"px-2",children:e.jsx("span",{className:"font-bold text-black text-sm",children:t.mode})}),e.jsx("div",{className:"px-2",children:e.jsx("span",{className:"font-bold text-black text-sm",children:t.rst})})]})})]})]})})})]})]})}export{v as default};
