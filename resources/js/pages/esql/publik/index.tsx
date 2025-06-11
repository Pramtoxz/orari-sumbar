import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Eye } from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format, parseISO } from 'date-fns';

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
    esqls: Esql[];
}

export default function PublicEsql({ esqls }: PageProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(esqls);

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

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        
        const filtered = esqls.filter(esql => 
            esql.callsign.toLowerCase().includes(query) ||
            esql.nama.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head title="ESQL Certificate Search" />
            
            {/* Header */}
            <div className="bg-[#CC1616] text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">e-QSL Certificate Search</h1>
                    <p className="text-lg opacity-90">Cari dan unduh sertifikat e-QSL Anda</p>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16">
                {/* Search Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg p-6 mb-8"
                >
                    <div className="max-w-xl mx-auto">
                        <div className="flex gap-4">
                            <Input
                                type="text"
                                placeholder="Cari berdasarkan callsign atau nama..."
                                value={searchQuery}
                                onChange={handleSearch}
                                className="flex-1"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Table Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Callsign</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length > 0 ? (
                                filteredData.map((esql) => (
                                    <TableRow key={esql.id}>
                                        <TableCell className="font-medium">{esql.callsign}</TableCell>
                                        <TableCell>{esql.nama}</TableCell>
                                        <TableCell>{formatDate(esql.tanggal)}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end space-x-2">
                                                <Button 
                                                    variant="outline" 
                                                    size="sm" 
                                                    className="text-[#CC1616] border-[#CC1616] hover:bg-[#CC1616] hover:text-white"
                                                    asChild
                                                >
                                                    <a 
                                                        href={`/publik/esql/${esql.id}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={9} className="text-center py-6">
                                        Tidak ada data ditemukan
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </motion.div>
            </main>
        </div>
    );
} 