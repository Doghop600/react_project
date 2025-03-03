import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

const UserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const updateLocalStorage = (updatedUsers) => {
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const handleAddUser = (event) => {
        event.preventDefault();
        if (email && password) {
            const newUsers = [...users, { email, password }];
            setUsers(newUsers);
            updateLocalStorage(newUsers);
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
            updateLocalStorage(updatedUsers);
            setEmail("");
            setPassword("");
            setEditingIndex(null);
        }
    };

    return (
        <>
            <h2>{editingIndex !== null ? "Edit User" : "Add User"}</h2>
            <form>
                <div>
                    <Input 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Input 
                        placeholder="Enter password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <Button onClick={editingIndex !== null ? handleEditUser : handleAddUser}>
                    {editingIndex !== null ? "Update User" : "Add User"}
                </Button>
            </form>
            <Link to="/">Back to Home</Link>
        </>
    );
};

const Home = () => {
    return (
        <>
            <h1>Welcome to User Management</h1>
            <ul>
                <li><Link to="/user-form">Go to User Form</Link></li>
                <li><Link to="/edit-profile">Edit Profile</Link></li>
            </ul>
        </>
    );
};

const EditProfile = () => {
    return (
        <>
            <h2>Edit Profile</h2>
            <p>Profile editing functionality goes here.</p>
            <Link to="/">Back to Home</Link>
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-form" element={<UserForm />} />
                <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
        </Router>
    );
};

export default App;
