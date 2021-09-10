import { Suspense } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import LoginView from "../components/Login"

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Login = () => {
    return (
        <MainContainer>
            <Suspense fallback={<Loading />}>
                <LoginView />
            </Suspense>
        </MainContainer>
    )
} 
export default Login; 
