import { useNavigate } from "react-router-dom";

function Button({link}) {
    const navigate = useNavigate();

    return(
        <button id="start" onClick={() => navigate(link)}>
            <span className="button-top">PLAY</span>
        </button>
    );
}

export default Button;