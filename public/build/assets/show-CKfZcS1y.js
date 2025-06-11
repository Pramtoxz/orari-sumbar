import{j as t,L as c}from"./app-dMuEVQUF.js";import{P as m,e as d}from"./sertifikatorari-DG5jIuGS.js";import{B as x}from"./button-C98edJ5V.js";import{f as a}from"./format-BlyJTOGp.js";import{p as n}from"./parseISO-8c5X91YK.js";import"./createLucideIcon-BDm4NH_M.js";function g({esql:e}){const i=s=>{try{return a(n(s),"dd/MM/yyyy")}catch{return s}},l=s=>{try{return s.includes("T")?a(n(s),"HH:mm"):s}catch{return s}},r=()=>{window.print()};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:`
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
                            padding: 1 !important;
                            margin: 1 !important;
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
                        margin-top: 5%;
                        width: 55%;
                    }
                `}),t.jsxs("div",{className:"min-h-screen bg-gray-50 py-8",children:[t.jsx(c,{title:"Preview Sertifikat ESQL",children:t.jsx("meta",{name:"viewport",content:"width=1024, user-scalable=yes"})}),t.jsx("div",{className:"bg-[#CC1616] text-white py-16 mb-8 no-print min-w-[1024px]",children:t.jsxs("div",{className:"container mx-auto px-4",children:[t.jsx("h1",{className:"text-4xl font-bold mb-4",children:"Preview Sertifikat e-QSL"}),t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("p",{className:"text-lg opacity-90",children:"Lihat dan unduh sertifikat e-QSL Anda"}),t.jsxs(x,{variant:"outline",onClick:r,className:"bg-white text-[#CC1616] hover:bg-gray-100 flex items-center gap-2",children:[t.jsx(m,{className:"w-4 h-4"}),"Simpan sebagai PDF"]})]})]})}),t.jsx("div",{className:"max-w-4xl mx-auto px-4 min-w-[1024px]",children:t.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6 certificate-container",children:t.jsxs("div",{className:"certificate-content",children:[t.jsx("img",{src:d,alt:"Sertifikat ESQL",className:"w-full h-auto"}),t.jsxs("div",{className:"data-overlay",children:[t.jsx("div",{className:"callsign-section",children:t.jsxs("div",{className:"text-center",children:[t.jsx("span",{className:"font-bold text-[#CC1616] text-6xl",style:{fontFamily:"VAG"},children:e.callsign}),t.jsx("div",{className:"h-1 bg-[#CC1616] w-3/4 mx-auto mt-2"})]})}),t.jsx("div",{className:"name-section",children:t.jsx("div",{className:"text-center",children:t.jsx("span",{className:"font-bold text-[#FFFF01] text-2xl",style:{fontFamily:"Istanbul"},children:e.nama})})}),t.jsx("div",{className:"qso-data-section",children:t.jsxs("div",{className:"grid grid-cols-6 text-center",children:[t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:i(e.tanggal)})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:l(e.utc)})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.frekuensi})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:`${e.band}M`})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.mode})}),t.jsx("div",{className:"px-2",children:t.jsx("span",{className:"qso-text font-bold text-[#CC1616] text-sm",style:{fontFamily:"VAG"},children:e.rst})})]})})]})]})})})]})]})}export{g as default};
