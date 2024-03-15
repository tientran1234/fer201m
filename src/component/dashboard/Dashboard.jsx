
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { useState, useEffect } from "react"
import Swal from 'sweetalert2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteItem, getItem } from '../../api/handleApi';
import Navbar from '../home/Navbar';
import { Link } from 'react-router-dom';
const { Column, ColumnGroup } = Table;
const styleCol={
    height:"1000px"
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height:"80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const deleteStudentId = (id) => {
    console.log(id);
    Swal.fire({
        title: "Are you sure ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "blue",
        cancelButtonColor: "red",
        confirmButtonText: "Yes ,delete it !"
    }).then((result) => {
        if (result.value) {
            deleteItem(id)
                .then(() => {
                    setFlag(!flag);
                    Swal.fire("Deleted!", "Your student has been deleted.", "success");
                })
                .catch((error) => {
                    console.error("Error deleting student:", error);
                    Swal.fire("Error", "An error occurred while deleting the student.", "error");
                });
        }
    });
};
function Dashboard() {
    const [flag, setFlag] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        getItem()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {

                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            });

    }, [flag]);
    const deleteStudentId = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "blue",
            cancelButtonColor: "red",
            confirmButtonText: "Yes ,delete it !"
        }).then((result) => {
            if (result.value) {
                deleteItem(id)
                    .then(() => {
                        setFlag(!flag);
                        Swal.fire("Deleted!", "Your student has been deleted.", "success");
                    })
                    .catch((error) => {
                        console.error("Error deleting student:", error);
                        Swal.fire("Error", "An error occurred while deleting the student.", "error");
                    });
            }
        });
    };
    const handleFlagChange = () => {
        setFlag(!flag);
      };
    
    return (
        <div>
            <Navbar/>
         
            <div style={{ marginBottom: 20,marginTop:"100px" }}>
                <Link to="/add">
                <Button type="primary">ADD NEW</Button>
                </Link>
            </div>

            
            <Table dataSource={data}>
                <Column  title="Name" dataIndex="name"/>
                <Column title="Price" dataIndex="price"/>
                <Column title="Description" dataIndex="description" />
                <Column title="Rating" dataIndex="rating"  />
                <Column title="Image"  style={{width:"50%"}}  dataIndex="image"  />
                <Column title="category" dataIndex="category" />
                <Column title="bestseller" dataIndex="bestseller" render={(text)=><span>{text?"true":"false"}</span>}  />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <Link to={`/edit/${record.id}`}>
                            <EditIcon></EditIcon>
                            </Link>

                            <DeleteOutlineIcon style={{cursor:"pointer"}}   onClick={(() => deleteStudentId(record.id))} ></DeleteOutlineIcon>
                          
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default Dashboard

