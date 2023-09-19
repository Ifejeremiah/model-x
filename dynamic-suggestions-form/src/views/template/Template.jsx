import Button from "components/button/Button";
import Input from "components/input/Input";
import style from "./css/Template.module.sass";
import { useState } from "react";

function Template() {
    const [skills, setSkills] = useState([
        { name: "", years: "", competency: "" },
    ]);

    const inputList = [
        { label: "Skill", placeholder: "Add Skill " },
        {
            label: "Years of professional experience",
            placeholder: "Enter experience years ",
        },
        { label: "Competency", placeholder: "Enter Competency" },
    ];

    function addField() {
        const newField = { name: "", years: "", competency: "" };
        setSkills([...skills, newField]);
    }

    function removeField(index) {
        const data = skills.filter((x, y) => y !== index);
        setSkills(data);
    }

    return (
        <div className={style["container"]}>
            {skills.length > 0 &&
                skills.map((skill, idx) => (
                    <div className={style["con-input"]} key={idx}>
                        {inputList.map((x, y) => (
                            <Input
                                key={y}
                                label={x.label}
                                placeholder={`${x.placeholder} ${
                                    y === 0 ? idx + 1 : ""
                                }`}
                            />
                        ))}
                        <i
                            onClick={() => removeField(idx)}
                            className={`${style["delete-btn"]} fa-solid fa-trash-can`}
                        ></i>
                    </div>
                ))}
            <Button
                text={
                    <div>
                        <i className="fa-solid fa-plus"></i>
                        <p>Add New Section</p>
                    </div>
                }
                onClick={addField}
            />
        </div>
    );
}

export default Template;
