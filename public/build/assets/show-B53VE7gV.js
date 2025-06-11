import{j as t,L as c}from"./app-DWMV4Bz7.js";import{A as d}from"./app-layout-h5gr988D.js";import{P as m,e as x}from"./sertifikatorari-D_Jwap8P.js";import{B as p}from"./button-ZbZsCIY2.js";import{f as s}from"./format-BlyJTOGp.js";import{p as i}from"./parseISO-8c5X91YK.js";import"./index-DfZ7eflC.js";import"./index-N7EIfIIE.js";import"./x-Bi0Zdnm9.js";import"./createLucideIcon-BO-cLNwE.js";import"./app-logo-icon-DiKD6KjM.js";import"./orari-CPRg5lud.js";const f=[{title:"Dashboard",href:"/dashboard"},{title:"Data E-QSL",href:"/esql"},{title:"Lihat Sertifikat",href:"#"}];function A({esql:e}){const n=a=>{try{return s(i(a),"dd/MM/yyyy")}catch{return a}},r=a=>{try{return a.includes("T")?s(i(a),"HH:mm"):a}catch{return a}},l=()=>{window.print()};return t.jsxs(d,{breadcrumbs:f,children:[t.jsx(c,{title:"Lihat Sertifikat ESQL",children:t.jsx("meta",{name:"viewport",content:"width=1024, user-scalable=yes"})}),t.jsx("style",{children:`
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
                        #app-layout {
                            display: none !important;
                        }
                        .certificate-content {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 9999;
                            background: white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    
                    /* Desktop scaling untuk semua ukuran layar */
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
                        margin-top: ;
                    }
                    .qso-data-section {
                        margin-top: 5%;
                        width: 55%;
                    }
                    .print-only {
                        display: none;
                    }
                `}),t.jsxs("div",{className:"p-6",children:[t.jsx("div",{className:"flex justify-end mb-4",children:t.jsxs(p,{variant:"default",onClick:l,className:"flex items-center gap-2",children:[t.jsx(m,{className:"w-4 h-4"}),"Simpan sebagai PDF"]})}),t.jsx("div",{className:"max-w-4xl mx-auto",children:t.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6 certificate-container",children:t.jsxs("div",{className:"certificate-content",children:[t.jsx("img",{src:x,alt:"Sertifikat ESQL",className:"w-full h-auto"}),t.jsxs("div",{className:"data-overlay",children:[t.jsx("div",{className:"callsign-section",children:t.jsxs("div",{className:"text-center",children:[t.jsx("span",{className:"font-bold text-[#CC1616] text-6xl",style:{fontFamily:"VAG"},children:e.callsign}),t.jsx("div",{className:"h-1 bg-[#CC1616] w-3/4 mx-auto mt-2"})]})}),t.jsx("div",{className:"name-section",children:t.jsx("div",{className:"text-center",children:t.jsx("span",{className:"font-bold text-[#FFFF01] text-2xl",style:{fontFamily:"Istanbul"},children:e.nama})})}),t.jsx("div",{className:"qso-data-section",children:t.jsxs("div",{className:"grid grid-cols-6 text-center",children:[t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:n(e.tanggal)})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:r(e.utc)})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.frekuensi})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:`${e.band}M`})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.mode})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.rst})})]})})]})]})})})]})]})}export{A as default};
