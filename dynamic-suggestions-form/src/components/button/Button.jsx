import style from "./css/Button.module.sass";

function Button({ text, onClick }) {
    return (
        <button className={style["button"]} onClick={onClick}>
            {text}
        </button>
    );
}

Button.defaultProps = {
    text: "button component",
    onClick: () => {},
};

export default Button;
