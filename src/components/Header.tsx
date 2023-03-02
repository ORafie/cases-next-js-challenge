import React, {useEffect, useState} from "react";

import {
    alpha,
    AppBar,
    Box,
    Button,
    Drawer,
    Fab,
    Link,
    SxProps,
    Theme,
    Toolbar,
    useMediaQuery,
} from "@mui/material";
import NextLink from "next/link";
import {LoginOutlined, Menu} from "@mui/icons-material";
import {useRouter} from "next/router";
import Image from "next/image";
import {useTheme} from "@mui/material/styles";
import {useBackgroundColor} from "@/styles/colors";

function Logo() {
    return (
        <Link
            sx={{display: "block", width: [185, 260]}}
            href="/src/pages"
            title="back to homepage"
        >
            <Image
                src="https://scribit.cdn.prismic.io/scribit/5be52c28-c859-4c19-8c05-75dd33d52287_Scribit_logo_PRO_toolkit_Logo-lockup-liggend-kleur_geel%26donkerblauw.svg"
                alt="scribit pro logo"
                width={260} height={56}/>
        </Link>
    );
}

type LinkProps = {
    href: string
    name: string
}

function NavLink({href, name}: LinkProps) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    let sx: SxProps<Theme> = {
        textTransform: "none",
    };
    if (matches) {
        sx = {
            ...sx,
            justifyContent: "start",
            paddingX: 4,
            paddingY: 2,
        };
    }

    const router = useRouter();
    if (href === router.asPath) {
        sx.textDecoration = "none";
        sx.backgroundColor = alpha(
            theme.palette.primary.main,
            theme.palette.action.hoverOpacity
        );
    }

    return (
        <NextLink href={href} passHref legacyBehavior>
            <Button sx={sx}>{name}</Button>
        </NextLink>
    );
}

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen((prev) => !prev);
    const {asPath, locale} = useRouter();
    useEffect(() => setDrawerOpen(false), [asPath, locale]);

    return (
        <Box sx={{display: "flex"}} className="rs_skip">
            <AppBar
                component="nav"
                color="transparent"
                elevation={0}
                position="static"
            >
                <Toolbar
                    variant="dense"
                    sx={{height: [80, 120], maxHeight: [80, 120]}}
                >
                    {/* a11y: on a homepage the logo is always the most important heading, so render as a h1 */}
                    <Box sx={{flexGrow: 1}} component={asPath === "/" ? "h1" : "h2"}>
                        <Logo/>
                    </Box>
                    <Box
                        sx={{
                            gap: 2,
                            display: {xs: "none", md: "flex", alignItems: "center"},
                        }}
                    >
                        <NavLink href="#" name="Software"/>
                        <NavLink href="#" name="Pro Services"/>
                        <NavLink href="#" name="Academy"/>
                        <NavLink href="#" name="Prices"/>
                        <Image
                            src="/menu-divider.svg"
                            height="50"
                            width="22"
                            alt="menu-divider"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                flex: 1,
                                height:40,
                                textTransform: "none",
                                borderRadius: 64,
                            }}
                            startIcon={<LoginOutlined />}
                        >
                            Sign in
                        </Button>
                    </Box>
                    <Box sx={{gap: 2, display: {xs: "flex", md: "none"}}}>
                        <Fab
                            size="medium"
                            color="primary"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                        >
                            <Menu/>
                        </Fab>
                    </Box>
                    <Drawer
                        sx={{display: {xs: "flex", md: "none"}}}
                        onClose={toggleDrawer}
                        open={drawerOpen}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: 270,
                            }}
                        >
                            <Box
                                sx={{
                                    background: useBackgroundColor("grey"),
                                    paddingX: 3,
                                    paddingY: 4,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "stretch",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        flex: 1,
                                        height:40,
                                        textTransform: "none",
                                        borderRadius: 64,
                                    }}
                                    startIcon={<LoginOutlined />}
                                >
                                    Sign in
                                </Button>
                            </Box>
                            <NavLink href="#" name="Software"/>
                            <NavLink href="#" name="Pro Services"/>
                            <NavLink href="#" name="Academy"/>
                            <NavLink href="#" name="Prices"/>
                        </Box>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

Header.defaultProps = {
    alternateLanguages: [],
};

export default Header;
