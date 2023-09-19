import style from "./css/Button.module.sass";

function Button({ text }) {
    return <button className={style["button"]}>{text}</button>;
}

Button.defaultProps = {
    text: "button component",
};

export default Button;
