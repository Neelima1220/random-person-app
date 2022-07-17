import React, { useState } from 'react';
import {
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaLock,
  FaPhone,
  FaEnvelopeOpen,
} from 'react-icons/fa';
import './style.css';
import { PersonsData } from './data';
export default function App() {
  const [data, setData] = useState(PersonsData);
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(data[current].image);
  const [name, setName] = useState(data[current].name);
  const [email, setEmail] = useState(data[current].email);
  const [age, setAge] = useState(data[current].age);
  const [address, setAddress] = useState(data[current].address);
  const [phone, setPhone] = useState(data[current].phone);
  const [password, setPassword] = useState(data[current].password);
  return (
    <div className="user-container">
      <img src={image} className="imageStyles" alt={data[current].image} />
      <div>
        <FaUser />
        <FaEnvelopeOpen />
        <FaCalendarTimes />
        <FaMap />
        <FaPhone />
        <FaLock />
      </div>
    </div>
  );
}
