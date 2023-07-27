import styled from "styled-components";
import { SearchBar } from "../SearchBar";
import { ReactComponent as BellIcon } from "../../../assets/icons/dashboardicon/bell-icon.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/dashboardicon/Setting-Icon.svg";
import { ReactComponent as AvtHeadIcon } from "../../../assets/icons/dashboardicon/Avt-Icon.svg";
import { useMediaQuery } from "react-responsive";

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 58px 69px 0px 62px;
  .header-right {
    display: flex;
    flex-direction: row;
    gap: 41px;
  }
  @media screen and (max-width: 612px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const DashboardHeader = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 612px)" });
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  const logout = () => {
    // Clear the token from local storage to log out the user
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Optionally, you can redirect the user to the login page or any other page
    // window.location.href = '/login';
  };

  const handleLogout = () => {
    logout(); // Call the logout function to log out the user
    window.location.reload();
  };
  return (
    <HeaderStyled>
      {!isSmallScreen && (
        <>
          <SearchBar setPlaceholder="Search tutor" />
          <div className="header-right">
          { token ?
        (
        <p style={{ cursor: "pointer" }} onClick={handleLogout}>
          LogOut
        </p>) :
        (<></>)
        }
            <BellIcon cursor="pointer" />
            <SettingIcon cursor="pointer" />
            <AvtHeadIcon cursor="pointer" />
          </div>
        </>
      )}
      {isSmallScreen && (
        <>
          <div className="header-right">
          { token ?
        (
        <p style={{ cursor: "pointer" }} onClick={handleLogout}>
          LogOut
        </p>) :
        (<></>)
        }
            <BellIcon cursor="pointer" />
            <SettingIcon cursor="pointer" />
            <AvtHeadIcon cursor="pointer" />
          </div>
          <SearchBar setPlaceholder="Search tutor" />
        </>
      )}
    </HeaderStyled>
  );
};
