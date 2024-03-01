import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assest/images/logo.png";
import { HeaderDropDown, ResMenuBar } from "@/component";
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
  return (
    <AppBar position="sticky" className="bg-white shadow-none">
      <Toolbar className="flex justify-between">
        <Box>
          <Link href={"#"}>
            <Image src={logo} alt="logo" priority />
          </Link>
        </Box>
        <Box className={`flex gap-4 max-sm:hidden`}>
          <HeaderDropDown title="lang" />
          <Button className="" startIcon={<FaRegCircleUser />}>
            SignUp
          </Button>
        </Box>
        <Box className="sm:hidden">
          <ResMenuBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
