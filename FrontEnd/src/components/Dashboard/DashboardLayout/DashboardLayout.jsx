import styled from "styled-components";
import { Sidebar } from "../Sidebar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { DashboardHeader } from "../DashboardHeader";
import { ProfileColumn } from "../ProfileColumn";
import { useMediaQuery } from "react-responsive";
const Container = styled.div`
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  background-size: 400% 400%;
  justify-content: center;
`;

const StyleLayout = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  min-height: 1450px;
  max-width: 1728px;
  width: 100%;
  display: flex;
  flex-direction: row;
  .right {
    float: right;
    width: 75%;
  }
  @media screen and (max-width: 1224px) {
    .right {
      width: 90%;
    }
  }
`;
const SideBarStyled = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.04);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  float: left;
  width: 25%;
  height: 1450px;
  @media screen and (max-width: 1224px) {
    width: 10%;
  }
`;
export const DashboardLayout = () => {
  const location = useLocation();
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  const { id, orderId } = useParams();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1620px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1620px)",
  });
  const mainboardUrl = `/mainboard/${user}`;
  return (
    <Container
      style={
        location.pathname === `/mainboard/${user}/video-player/${id}` ||
        location.pathname === `/mainboard/${user}/video-call`
          ? {
              background: "rgba(0, 0, 0, 0.70)",
              backdropFilter: "blur(17.5px)",
            }
          : null
      }
    >
      <StyleLayout>
        {(location.pathname === `/mainboard/${user}/video-player/${id}` ||
          location.pathname === `/mainboard/${user}/video-call`) && (
          <>
            <SideBarStyled style={{ width: "10%", maxWidth: "123px" }}>
              <Sidebar />
            </SideBarStyled>
            <div
              className="right"
              style={{
                width: "94%",
                background: "rgba(0, 0, 0, 0.70)",
                backdropFilter: "blur(17.5px)",
              }}
            >
              {location.pathname !==
                `/mainboard/${user}/video-player/${id}` &&
                location.pathname !== `/mainboard/${user}/video-call` && (
                  <DashboardHeader />
                )}
              <Outlet />
            </div>
          </>
        )}
        {isTabletOrMobile &&
          location.pathname !== mainboardUrl &&

          location.pathname !== `/mainboard/${user}/video-player/${id}` &&
          location.pathname !== `/mainboard/${user}/video-call` && (

            <>
              <SideBarStyled style={{ width: "25%" }}>
                <Sidebar />
              </SideBarStyled>
              <div
                className="right"
                style={{
                  width: "75%",
                }}
              >
                {location.pathname !==
                  `/mainboard/${user}/video-player/${id}` &&
                  location.pathname !== `/mainboard/${user}/video-call` && (
                    <DashboardHeader />
                  )}
                <Outlet />
              </div>
            </>
          )}
        {isDesktopOrLaptop &&
          location.pathname !== `/mainboard/${user}/video-player/${id}` &&
          location.pathname !== `/mainboard/${user}/video-call` && (
            <SideBarStyled>
              <Sidebar user={user} />
            </SideBarStyled>
          )}{" "}
        {isDesktopOrLaptop &&
          location.pathname !== mainboardUrl &&

          location.pathname !== `/mainboard/${user}/video-player/${id}` &&
          location.pathname !== `/mainboard/${user}/video-call` && (

            <>
              <div className="right">
                <DashboardHeader />
                <Outlet />
              </div>
            </>
          )}

        {location.pathname === mainboardUrl &&
            (
            <>
              {isDesktopOrLaptop && (
                <>
                  <div className="right" style={{ width: "50%" }}>
                    <DashboardHeader />
                    <Outlet />
                  </div>
                  <ProfileColumn />
                </>
              )}
              {isTabletOrMobile && (
                <>
                  <SideBarStyled style={{ width: "25%" }}>
                    <Sidebar />
                  </SideBarStyled>{" "}
                  <div className="right">
                    <DashboardHeader />
                    <Outlet />
                  </div>
                </>
              )}
            </>
          )}

      </StyleLayout>
    </Container>
  );
};
