import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { NewspaperIcon, UsersIcon, RadioIcon, EyeIcon } from '@heroicons/react/24/outline';

interface DashboardProps {
    stats: {
        totalBerita: number;
        beritaMingguIni: number;
        totalUsers: number;
        totalEsql: number;
        esqlHariIni: number;
        beritaTerbaru: Array<{
            id: number;
            judul: string;
            gambar: string | null;
            waktu: string;
            penulis: string;
        }>;
    };
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ stats }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                {/* Kartu Statistik */}
                <div className="grid gap-4 md:grid-cols-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Berita</CardTitle>
                                <NewspaperIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">{stats.totalBerita}</div>
                                <p className="text-xs text-muted-foreground">
                                    +{stats.beritaMingguIni} berita minggu ini
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pengunjung Hari Ini</CardTitle>
                                <EyeIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">-</div>
                                <p className="text-xs text-muted-foreground">
                                    Statistik belum tersedia
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Pengguna</CardTitle>
                                <UsersIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">{stats.totalUsers}</div>
                                <p className="text-xs text-muted-foreground">
                                    Pengguna terdaftar
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">ESQL Records</CardTitle>
                                <RadioIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-600">{stats.totalEsql}</div>
                                <p className="text-xs text-muted-foreground">
                                    +{stats.esqlHariIni} records hari ini
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Aktivitas Terbaru */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Berita Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {stats.beritaTerbaru.map((berita) => (
                                    <div key={berita.id} className="flex items-center gap-4">
                                        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                                            {berita.gambar ? (
                                                <img
                                                    src={berita.gambar}
                                                    alt={berita.judul}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <PlaceholderPattern className="h-full w-full" />
                                            )}
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {berita.judul}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {berita.waktu} oleh {berita.penulis}
                                            </p>
                                        </div>
                                        <a
                                            href={`/berita/${berita.id}`}
                                            className="ml-auto text-sm font-medium text-red-600 hover:underline"
                                        >
                                            Lihat
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Grafik Aktivitas */}
                <div className="grid gap-4 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Statistik Pengunjung</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex h-[200px] w-full items-center justify-center">
                                    <p className="text-sm text-muted-foreground">Statistik akan segera tersedia</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Aktivitas ESQL</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex h-[200px] w-full items-center justify-center">
                                    <p className="text-sm text-muted-foreground">Grafik aktivitas akan segera tersedia</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </AppLayout>
    );
}
