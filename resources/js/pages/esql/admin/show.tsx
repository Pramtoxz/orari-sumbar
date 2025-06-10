import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Data E-QSL',
        href: '/esql',
    },
    {
        title: 'Lihat Sertifikat',
        href: '#',
    },
];

export default function Show({ esql }: PageProps) {
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
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Lihat Sertifikat ESQL">
                <meta name="viewport" content="width=1024, user-scalable=yes" />
            </Head>
            
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
                        margin-top: 1%;
                    }
                    .qso-data-section {
                        margin-top: 5%;
                        width: 55%;
                    }
                    .print-only {
                        display: none;
                    }
                `}
            </style>
            
            <div className="p-6">
                <div className="flex justify-end mb-4">
                    <Button 
                        variant="default" 
                        onClick={handlePrint}
                        className="flex items-center gap-2"
                    >
                        <Printer className="w-4 h-4" />
                        Simpan sebagai PDF
                    </Button>
                </div>
                
                <div className="max-w-4xl mx-auto">
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
        </AppLayout>
    );
}