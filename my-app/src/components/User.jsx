import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';

const User = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleAddUser = (event) => {
        event.preventDefault();
        if (email && password) {
            const newUsers = [...users, { email, password }];
            setUsers(newUsers);
            setEmail("");
            setPassword("");
        }
    };

    const handleEditUser = (event) => {
        event.preventDefault();
        if (editingIndex !== null && email && password) {
            const updatedUsers = [...users];
            updatedUsers[editingIndex] = { email, password };
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            setEmail("");
            setPassword("");
            setEditingIndex(null);
        }
    };

    return (
        <>
            <form>
                <h2>{editingIndex !== null ? "Edit User" : "Add User"}</h2>
                <div>
                    <Input placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button onClick={editingIndex !== null ? handleEditUser : handleAddUser}>
                    {editingIndex !== null ? "Update User" : "Add User"}
                </Button>
            </form>
        </>
    );
};

export default User;