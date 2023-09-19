import Button from "components/button/Button";
import Input from "components/input/Input";
import style from "./css/Template.module.sass";

function Template() {
    return (
        <div className={style["container"]}>
            <div className={style["con-input"]}>
                {[1, 1, 1].map((x, y) => (
                    <Input key={y} />
                ))}

                <i
                    className={`${style["delete-btn"]} fa-solid fa-trash-can`}
                ></i>
            </div>
            <Button
                text={
                    <div>
                        <i className="fa-solid fa-plus"></i>
                        <p>Add New Section</p>
                    </div>
                }
            />
        </div>
    );
}

export default Template;
