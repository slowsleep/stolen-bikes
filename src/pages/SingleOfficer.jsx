import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import officerList from "../utils/mock/officerList.json";
import { getElementById } from "../utils/features/getElementById";

const SingleOfficer = () => {
    const { id } = useParams();
    const [officer, setOfficer] = useState("");

    useEffect(() => {
        setOfficer(getElementById(id, officerList.officers));
    }, []);

    return (
        <div>
            <h1>Сотрудник: {id}</h1>
            <p>E-mail: {officer.email}</p>
            <p>Имя: {officer.firstName}</p>
            <p>Фамилия: {officer.lastName}</p>
            <p>Пароль: {officer.password}</p>
            <p>clientId: {officer.clientId}</p>
            <p>Подтвержден: {officer.approved}</p>
        </div>
    );
};

export default SingleOfficer;
