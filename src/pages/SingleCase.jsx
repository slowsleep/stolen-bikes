import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import caseList from "../utils/mock/caseList.json";
import { getElementById } from "../utils/features/getElementById";

const SingleCase = () => {
    const { id } = useParams();
    const [oneCase, setOneCase] = useState("");

    useEffect(() => {
        setOneCase(getElementById(id, caseList.cases));
    }, []);

    return (
        <div>
            <h1>Сообщение о краже: {id}</h1>
            <p>Статус: {oneCase.status}</p>
            <p>Номер лицензии: {oneCase.licenseNumber}</p>
            <p>Тип: {oneCase.type}</p>
            <p>ФИО владельца: {oneCase.ownerFullName}</p>
            <p>clientId: {oneCase.clientId}</p>
            <p>Создан: {oneCase.createdAt}</p>
            <p>Изменен: {oneCase.updatedAt}</p>
            <p>Цвет: {oneCase.color}</p>
            <p>Дата кражи: {oneCase.date}</p>
            <p>Ответственный сотрудник: {oneCase.officer}</p>
            <p>Описание: {oneCase.description}</p>
            <p>Заключение: {oneCase.resolution}</p>
        </div>
    );
};

export default SingleCase;
