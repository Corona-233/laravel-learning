import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Form from '@/Components/Form';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import Autocomplete from '@mui/material/Autocomplete';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


export default function Index({ auth, forms }) {
    
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
        name: '',
        sex: '',
        outlook: '',
        classs: '',
        ethnic: '',
        duty: '',
        phone: '',
        hobby: '',
        synopsis: '',
        assumption: '',
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const submit = (e) => {
        e.preventDefault();
        post(route('forms.store'), { onSuccess: () => reset() });
    
    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">  
                
                <form onSubmit={submit}>    
                    
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1.5, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                    
                        <div>
                            
                            <TextField fullWidth
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                label="姓名"
                            />

                            <TextField fullWidth    
                                value={data.sex}
                                onChange={e => setData('sex', e.target.value)}
                                label="性别"
                            />

                            <TextField fullWidth
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                                label="年龄"
                            />

                            <TextField fullWidth
                                value={data.outlook}
                                onChange={e => setData('outlook', e.target.value)}
                                label="政治面貌"
                            />

                            <TextField fullWidth    
                                value={data.classs}
                                onChange={e => setData('classs', e.target.value)}
                                label="专业班级"
                            />
                            
                            <TextField fullWidth
                                value={data.ethnic}
                                onChange={e => setData('ethnic', e.target.value)}
                                label="民族"
                            />
                            
                            <TextField fullWidth
                                value={data.duty}
                                onChange={e => setData('duty', e.target.value)}
                                label="曾任职务"
                            />
                            
                            <TextField fullWidth
                                value={data.phone}
                                onChange={e => setData('phone', e.target.value)}
                                label="手机号码"
                            />
                            
                            <TextField fullWidth
                                value={data.hobby}
                                onChange={e => setData('hobby', e.target.value)}
                                label="个人特长"
                            />

                            <TextField fullWidth
                                value={data.synopsis}
                                onChange={e => setData('synopsis', e.target.value)}
                                label="自我简介"                           
                                multiline
                                rows={4}
                            />
                            
                            <TextField fullWidth
                                value={data.assumption}
                                onChange={e => setData('assumption', e.target.value)}
                                label="工作设想"
                                multiline
                                rows={4}
                            />
                        
                        </div>
                    
                    </Box>

                <div>
                    <PrimaryButton className="mt-4" disabled={processing} variant="outlined" onClick={handleClickOpen} autoFocus>完成</PrimaryButton>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"请稍后......"}
                        </DialogTitle>
                        <DialogContentText id="alert-dialog-description">
                            （单击空白处关闭弹窗）
                        </DialogContentText>
                    </Dialog>
                </div>
                </form>           
            
            </div>       
        
        </AuthenticatedLayout>
    );
}