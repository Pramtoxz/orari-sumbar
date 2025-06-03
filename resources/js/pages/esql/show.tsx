import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { format, parseISO } from 'date-fns';
import esertiImage from '@/assets/eserti.jpg';

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

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Lihat Sertifikat ESQL" />
            
            <div className="p-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Background Image */}
                        <img 
                            src={esertiImage} 
                            alt="Sertifikat ESQL" 
                            className="w-full h-auto"
                        />
                        
                        {/* Data Overlay */}
                        <div className="absolute inset-0">
                            <div className="w-full h-full flex flex-col items-center">
                                {/* Nama di atas QSL TO */}
                                <div className="relative" style={{ top: '290px' }}>
                                    <div className="text-center">
                                        <span className="font-bold text-black text-2xl">{esql.nama}</span>
                                    </div>
                                </div>

                                {/* Callsign di bawah QSL TO */}
                                <div className="relative" style={{ top: '200px' }}>
                                    <div className="text-center">
                                        <span className="font-bold text-black text-2xl">{esql.callsign}</span>
                                    </div>
                                </div>

                                {/* Data QSO dalam kotak */}
                                <div className="relative" style={{ top: '320px', width: '60%' }}>
                                    <div className="grid grid-cols-5 text-center">
                                        <div className="px-2">
                                            <span className="font-bold text-black text-lg">{formatDate(esql.tanggal)}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-lg">{formatTime(esql.utc)}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-lg">{formatTime(esql.frekuensi)}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-lg">{`${esql.band}m`}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-lg">{esql.mode}</span>
                                        </div>
                                        <div className="px-2">
                                            <span className="font-bold text-black text-lg">{esql.rst}</span>
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