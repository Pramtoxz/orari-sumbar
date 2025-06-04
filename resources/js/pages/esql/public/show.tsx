import { Head } from '@inertiajs/react';
import { format, parseISO } from 'date-fns';
import esertiImage from '@/assets/eserti.jpg';
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
                `}
            </style>

            <div className="min-h-screen bg-gray-50 py-8">
                <Head title="Preview Sertifikat ESQL" />
                
                {/* Header dengan tombol - tidak akan diprint */}
                <div className="bg-[#CC1616] text-white py-16 mb-8 no-print">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Preview Sertifikat ESQL</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-lg opacity-90">Lihat dan unduh sertifikat ESQL Anda</p>
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
                <div className="max-w-4xl mx-auto px-4">
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
                                        <span className="font-bold text-black text-2xl">{esql.callsign}</span>
                                    </div>
                                </div>

                                <div className="name-section">
                                    <div className="text-center">
                                        <span className="font-bold text-black text-2xl">{esql.nama}</span>
                                    </div>
                                </div>

                                <div className="qso-data-section">
                                    <div className="grid grid-cols-6 text-center">
                                        <div className="px-2">
                                            <span className="font-bold text-black text-sm">{formatDate(esql.tanggal)}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-sm">{formatTime(esql.utc)}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-sm">{esql.frekuensi}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-sm">{`${esql.band}m`}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-sm">{esql.mode}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-sm">{esql.rst}</span>
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