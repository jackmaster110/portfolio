import { Card, Elevation } from "@blueprintjs/core";
import axios from "axios";
import Header from "components/Header";
import ThreeScene from "components/ThreeScene";
import {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from "next";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios
        .get("https://dev.to/api/articles/me/published", {
            headers: {
                "api-key": process.env.DEV_API_KEY
                    ? process.env.DEV_API_KEY
                    : "",
            },
        })
        .then((res) => {
            return res;
        });

    if (res.status === 200) {
        const data = JSON.parse(JSON.stringify(res.data));

        if (!data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                data,
            }, // will be passed to the page component as props
        };
    }

    return {
        notFound: true,
    };
};

function Articles({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [articles, setArticles] = useState<any>([]);

    useEffect(() => {
        setArticles(data);
    }, [data]);

    return (
        <div className="page-container">
            <div className="page">
                <Header />
                <main>
                    <div className="grid">
                        {articles?.map((article: any) => {
                            return (
                                <a key={article.id} href={article.url}>
                                    <Card
                                        className="article-card card"
                                        elevation={Elevation.TWO}
                                    >
                                        <h3>{article.title}</h3>
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
}

export default Articles;
