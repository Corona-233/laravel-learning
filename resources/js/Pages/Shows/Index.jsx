import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 
export default function Index({ auth, shows }) {
    console.log(shows)

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Shows" />
 
            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">姓名</TableCell>
                            <TableCell align="center">性别</TableCell>
                            <TableCell align="center">民族</TableCell>
                            <TableCell align="center">政治面貌</TableCell>
                            <TableCell align="center">专业班级</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shows.map((show) => (
                        <TableRow
                            key={show.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="center">{show.name}</TableCell>
                            <TableCell align="center">{show.sex}</TableCell>
                            <TableCell align="center">{show.ethnic}</TableCell>
                            <TableCell align="center">{show.outlook}</TableCell>
                            <TableCell align="center">{show.classs}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </AuthenticatedLayout>
    );
}
