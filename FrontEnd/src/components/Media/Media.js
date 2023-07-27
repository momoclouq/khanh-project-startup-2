import styled from "styled-components"
const MediaStyled = styled.div`
    width: 66px;
    height: 66px;
    border-radius: 66px;
    border: 1px solid #9DEAE2;
    /* img{
        width: 17.175px;
        height: 34px;
    } */
    display: flex;
    justify-content: center;
    align-items: center;
`

const Media = ({ icon }) => {
    return <MediaStyled>
        <div>
            <img src={icon} />
        </div>
    </MediaStyled>
}

export default Media;