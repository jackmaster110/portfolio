import Header from "components/Header";
import ThreeScene from "components/ThreeScene";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="page-container">
            <div className="page">
                <Header />
                <main>
                    <h1>About Me</h1>
                    <p>
                        I am Sammy Shear, I am a developer with experience in
                        languages such as Java, Python, JavaScript (+
                        TypeScript), C#, as well as frameworks such as Angular
                        and React. Currently my fascination is with Web
                        Development, but I also have experience in Software and
                        Game Development.
                    </p>
                </main>
            </div>
            <ThreeScene />
        </div>
    );
};

export default Home;
