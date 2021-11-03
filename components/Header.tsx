import React from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import Link from "next/link";

export default function Header() {
    return (
        <Navbar className="navbar">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Sammy Shear Portfolio</Navbar.Heading>
                <Navbar.Divider />
                <Link href="/">
                    <Button className="bp3-minimal" icon="home" text="Home" />
                </Link>
                <Link href="/projects">
                    <Button
                        className="bp3-minimal"
                        icon="folder-open"
                        text="Projects"
                        onClick={() => {}}
                    />
                </Link>
                <Link href="/articles">
                    <Button
                        className="bp3-minimal"
                        icon="document"
                        text="Articles"
                        onClick={() => {}}
                    />
                </Link>
            </Navbar.Group>
        </Navbar>
    );
}
