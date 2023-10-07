import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { ChannelCard, SearchBar } from "./";
import { useEffect, useState } from "react";

const Navbar = () => {
    // const [hide, setHide] = useState(true);

    let userLogin = localStorage.getItem("USER_LOGIN");

    // useEffect(() => {
    //   if (userLogin) {
    //     setHide(false);
    //   } else {
    //     setHide(true);

    //   }
    // }, [userLogin])
    const handleLogout = () => {
        localStorage.removeItem("USER_LOGIN");
        window.location.reload();
    };
    console.log(!userLogin);
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{ background: "#000", top: 0, justifyContent: "space-between" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />

            <div>
                <div hidden={userLogin ? true : false}>
                    <Link to="/login" className="text-white">
                        Login |{" "}
                    </Link>
                    <Link to="/signup" className="text-white">
                        {" "}
                        Sign Up
                    </Link>
                </div>
                <div className="dropdown" hidden={userLogin ? false : true}>
                    <Avatar type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                    <ul className="dropdown-menu">
                        <Link to={"channel/1"}>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Kênh cá nhân
                                </a>
                            </li>
                        </Link>
                        <Link to={"info/1"}>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Upload video
                                </a>
                            </li>
                        </Link>
                        <li>
                            <a className="dropdown-item" href="#" onClick={handleLogout}>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Stack>
    );
};

export default Navbar;
