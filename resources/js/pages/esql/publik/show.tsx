import { Head } from '@inertiajs/react';
import { format, parseISO } from 'date-fns';
import esertiImage from '@/assets/sertifikatorari.jpg';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

interface Esql {
    id: number;
    nama: string;
    callsign: string;
    tanggal: string;
    utc: string;
    band: string;
    frekuensi: string;
    mode: string;
    rst: string;
}

interface PageProps {
    esql: Esql;
}

export default function PublicShow({ esql }: PageProps) {
    const formatDate = (dateString: string) => {
        try {
            return format(parseISO(dateString), 'dd/MM/yyyy');
        } catch (error) {
            return dateString;
        }
    };

    const formatTime = (timeString: string) => {
        try {
            if (timeString.includes('T')) {
                return format(parseISO(timeString), 'HH:mm');
            }
            return timeString;
        } catch (error) {
            return timeString;
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            {/* Styling khusus untuk print */}
            <style>
                {`
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
                        margin-top: 5%;
                        width: 55%;
                    }
                `}
            </style>

            <div className="min-h-screen bg-gray-50 py-8">
                <Head title="Preview Sertifikat ESQL">
                    <meta name="viewport" content="width=1024, user-scalable=yes" />
                </Head>
                
                {/* Header dengan tombol - tidak akan diprint */}
                <div className="bg-[#CC1616] text-white py-16 mb-8 no-print min-w-[1024px]">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Preview Sertifikat e-QSL</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-lg opacity-90">Lihat dan unduh sertifikat e-QSL Anda</p>
                            <Button 
                                variant="outline" 
                                onClick={handlePrint}
                                className="bg-white text-[#CC1616] hover:bg-gray-100 flex items-center gap-2"
                            >
                                <Printer className="w-4 h-4" />
                                Simpan sebagai PDF
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Container Sertifikat */}
                <div className="max-w-4xl mx-auto px-4 min-w-[1024px]">
                    <div className="bg-white rounded-lg shadow-lg p-6 certificate-container">
                        <div className="certificate-content">
                            <img 
                                src={esertiImage} 
                                alt="Sertifikat ESQL" 
                                className="w-full h-auto"
                            />
                            
                            <div className="data-overlay">
                                <div className="callsign-section">
                                    <div className="text-center">
                                        <span className="font-bold text-[#CC1616] text-6xl" style={{ fontFamily: 'VAG' }}>{esql.callsign}</span>
                                        <div className="h-1 bg-[#CC1616] w-3/4 mx-auto mt-2"></div>
                                    </div>
                                </div>

                                <div className="name-section">
                                    <div className="text-center">
                                        <span className="font-bold text-[#FFFF01] text-2xl" style={{ fontFamily: 'Istanbul' }}>{esql.nama}</span>
                                    </div>
                                </div>

                                <div className="qso-data-section">
                                    <div className="grid grid-cols-6 text-center">
                                        <div className="px-2">
                                            <span className="qso-text font-bold text-[#CC1616] text-sm" style={{ fontFamily: 'VAG' }}>{formatDate(esql.tanggal)}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="qso-text font-bold text-[#CC1616] text-sm" style={{ fontFamily: 'VAG' }}>{formatTime(esql.utc)}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="qso-text font-bold text-[#CC1616] text-sm" style={{ fontFamily: 'VAG' }}>{esql.frekuensi}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="qso-text font-bold text-[#CC1616] text-sm" style={{ fontFamily: 'VAG' }}>{`${esql.band}M`}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="qso-text font-bold text-[#CC1616] text-sm" style={{ fontFamily: 'VAG' }}>{esql.mode}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="qso-text font-bold text-[#CC1616] text-sm" style={{ fontFamily: 'VAG' }}>{esql.rst}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 