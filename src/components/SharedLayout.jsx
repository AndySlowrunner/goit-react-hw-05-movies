import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./App/App.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>

    )
};