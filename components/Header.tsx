import React from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";

export default function Header() {
    return (
        <Navbar className="navbar">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Sammy Shear Portfolio</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <Button
                    className="bp3-minimal"
                    icon="folder-open"
                    text="Projects"
                />
                <Button
                    className="bp3-minimal"
                    icon="document"
                    text="Articles"
                />
            </Navbar.Group>
        </Navbar>
    );
}
