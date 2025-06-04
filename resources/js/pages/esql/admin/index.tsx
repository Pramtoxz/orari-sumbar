import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Link, router } from '@inertiajs/react';
import { PlusCircle, Pencil, Trash2, Eye, Award } from 'lucide-react';
import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

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
  esql: Esql[];
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
];

export default function Index({ esql }: PageProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [esqlToDelete, setEsqlToDelete] = useState<Esql | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [selectedEsql, setSelectedEsql] = useState<Esql | null>(null);

  const handleDelete = () => {
    if (esqlToDelete) {
      router.delete(`/esql/${esqlToDelete.id}`, {
        onSuccess: () => {
          setDeleteDialogOpen(false);
        },
      });
    }
  };

  const showEsqlDetails = (esql: Esql) => {
    setSelectedEsql(esql);
    setDetailDialogOpen(true);
  };

  // Format tanggal
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'dd/MM/yyyy');
    } catch (error) {
      return dateString;
    }
  };

  // Format waktu UTC
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
      <Head title="Data E-QSL" />
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Data E-QSL</h1>
          <Button asChild>
            <Link href="/esql/create">
              <PlusCircle className="w-4 h-4 mr-2" />
              Tambah Data
            </Link>
          </Button>
        </div>

        <div className="bg-card rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Callsign</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>UTC</TableHead>
                <TableHead>Band</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {esql.length > 0 ? (
                esql.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.nama}</TableCell>
                    <TableCell>{item.callsign}</TableCell>
                    <TableCell>{formatDate(item.tanggal)}</TableCell>
                    <TableCell>{formatTime(item.utc)}</TableCell>
                    <TableCell>{item.band}</TableCell>
                    <TableCell>{item.mode}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => showEsqlDetails(item)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/esql/${item.id}`}>
                            <Award className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/esql/${item.id}/edit`}>
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            setEsqlToDelete(item);
                            setDeleteDialogOpen(true);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8">
                    Tidak ada Data E-QSL
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Dialog Konfirmasi Hapus */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Konfirmasi Hapus</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus Data E-QSL dari {esqlToDelete?.nama}?
              Tindakan ini tidak dapat dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Hapus
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Detail ESQL */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedEsql && (
            <div className="p-6">
              <DialogHeader>
                <DialogTitle>Detail Data E-QSL</DialogTitle>
              </DialogHeader>
              
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Nama</p>
                    <p className="font-medium">{selectedEsql.nama}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Callsign</p>
                    <p className="font-medium">{selectedEsql.callsign}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tanggal</p>
                    <p className="font-medium">{formatDate(selectedEsql.tanggal)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">UTC</p>
                    <p className="font-medium">{formatTime(selectedEsql.utc)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Band</p>
                    <p className="font-medium">{selectedEsql.band}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Frekuensi</p>
                    <p className="font-medium">{selectedEsql.frekuensi}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mode</p>
                    <p className="font-medium">{selectedEsql.mode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">RST</p>
                    <p className="font-medium">{selectedEsql.rst}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setDetailDialogOpen(false)}>
                  Tutup
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/esql/${selectedEsql.id}/edit`}>
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
} 