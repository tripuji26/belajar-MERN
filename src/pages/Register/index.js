import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Input, Button, Link, Gap } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title">Registrasi</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap heigth={20} />
        <Input label="Email" placeholder="Email" />
        <Gap heigth={20} />
        <Input label="Password" placeholder="Password" />
        <Gap heigth={50} />
        <Button title="Register" />
        <Gap heigth={100} />
        <Link title="Kembali Ke Login" />
      </div>
    </div>
  );
};

export default Register;
