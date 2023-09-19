import style from "./css/Input.module.sass";

function Input({ label, name, value, placeholder, onChange, onFocus }) {
    return (
        <div className={style["container"]}>
            <label className={style["label"]}>{label}</label>

            <div className={style["input"]}>
                <input
                    type="text"
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={onFocus}
                />
            </div>
        </div>
    );
}

Input.defaultProps = {
    label: "",
    name: "",
    value: "",
    placeholder: "",
    onChange: () => {},
    onFocus: () => {},
};

export default Input;
