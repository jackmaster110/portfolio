import { Card, Elevation } from "@blueprintjs/core";
import axios from "axios";
import Header from "components/Header";
import ThreeScene from "components/ThreeScene";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Projects: NextPage = () => {
    const [projects, setProjects] = useState<any>([
        {
            id: 123456789,
        },
    ]);

    useEffect(() => {
        axios
            .get("https://api.github.com/users/jackmaster110/repos")
            .then((res) => {
                setProjects(JSON.parse(JSON.stringify(res.data)));
            });

        if (projects) {
            axios
                .get("https://api.github.com/users/sammyshear/repos")
                .then((res) => {
                    setProjects([
                        ...projects,
                        ...JSON.parse(JSON.stringify(res.data)),
                    ]);
                });
        }
    }, []);

    return (
        <div className="page-container">
            <div className="page">
                <Header />
                <main>
                    <div className="grid">
                        {projects?.map((project: any) => {
                            return (
                                <a key={project.id} href={project.html_url}>
                                    <Card
                                        className="project-card card"
                                        elevation={Elevation.TWO}
                                    >
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                    </Card>
                                </a>
                            );
                        })}
                    </div>
                </main>
            </div>
            <ThreeScene />
        </div>
    );
};

export default Projects;
