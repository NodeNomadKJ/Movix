import React from "react";
import { useNavigate} from "react-router-dom";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.png";

const Header = () => {
 
const navigate = useNavigate();

    return (
        <header className="header">
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo" />
                </div>
            </ContentWrapper>
        </header>
    );
};

export default Header;
