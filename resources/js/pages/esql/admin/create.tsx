import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { format } from 'date-fns';

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
        title: 'Tambah Data',
        href: '/esql/create',
    },
];

export default function Create() {
    const today = new Date();
    const { data, setData, post, processing, errors } = useForm({
        nama: '',
        callsign: '',
        tanggal: format(today, 'yyyy-MM-dd'),
        utc: format(today, 'HH:mm'),
        band: '',
        frekuensi: '',
        mode: '',
        rst: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/esql');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tambah Data E-QSL" />
            
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <Button variant="outline" asChild>
                        <Link href="/esql">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Kembali
                        </Link>
                    </Button>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-2xl font-bold mb-6">Tambah Data E-QSL</h1>

                    <div className="bg-card rounded-lg shadow p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="nama">Nama</Label>
                                    <Input
                                        id="nama"
                                        value={data.nama}
                                        onChange={e => setData('nama', e.target.value)}
                                    />
                                    {errors.nama && (
                                        <p className="text-sm text-destructive">{errors.nama}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="callsign">Callsign</Label>
                                    <Input
                                        id="callsign"
                                        value={data.callsign}
                                        onChange={e => setData('callsign', e.target.value)}
                                    />
                                    {errors.callsign && (
                                        <p className="text-sm text-destructive">{errors.callsign}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tanggal">Tanggal</Label>
                                    <Input
                                        id="tanggal"
                                        type="date"
                                        value={data.tanggal}
                                        onChange={e => setData('tanggal', e.target.value)}
                                    />
                                    {errors.tanggal && (
                                        <p className="text-sm text-destructive">{errors.tanggal}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="utc">UTC</Label>
                                    <Input
                                        id="utc"
                                        type="time"
                                        value={data.utc}
                                        onChange={e => setData('utc', e.target.value)}
                                    />
                                    {errors.utc && (
                                        <p className="text-sm text-destructive">{errors.utc}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="band">Band</Label>
                                    <Input
                                        id="band"
                                        type="number"
                                        value={data.band}
                                        onChange={e => setData('band', e.target.value)}
                                    />
                                    {errors.band && (
                                        <p className="text-sm text-destructive">{errors.band}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="frekuensi">Frekuensi</Label>
                                    <Input
                                        id="frekuensi"
                                        value={data.frekuensi}
                                        onChange={e => setData('frekuensi', e.target.value)}
                                    />
                                    {errors.frekuensi && (
                                        <p className="text-sm text-destructive">{errors.frekuensi}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="mode">Mode</Label>
                                    <Input
                                        id="mode"
                                        value={data.mode}
                                        onChange={e => setData('mode', e.target.value)}
                                    />
                                    {errors.mode && (
                                        <p className="text-sm text-destructive">{errors.mode}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="rst">RST</Label>
                                    <Input
                                        id="rst"
                                        type="number"
                                        value={data.rst}
                                        onChange={e => setData('rst', e.target.value)}
                                    />
                                    {errors.rst && (
                                        <p className="text-sm text-destructive">{errors.rst}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <Button type="submit" disabled={processing}>
                                    Simpan
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
} 