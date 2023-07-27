import styled from "styled-components"
import brand1 from 'assets/icons/brand/Group 742.svg'
import brand2 from 'assets/icons/brand/Group-1.svg'
import brand3 from 'assets/icons/brand/Group-2.svg'
import brand4 from 'assets/icons/brand/Group.svg'
import brand5 from 'assets/icons/brand/Vector-1.svg'
import brand6 from 'assets/icons/brand/Vector.svg'

const BrandStyled = styled.div`
    height: 230px;
    background-color: #fff;
    .listBrand{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
    }
`
const Brand = () => {
    return <BrandStyled>
        <div className="listBrand">
            <img src={brand1} alt=""/>
            <img src={brand2} alt=""/>
            <img src={brand3} alt=""/>
            <img src={brand4} alt=""/>
            <img src={brand5} alt=""/>
            <img src={brand6} alt=""/>

        </div>
    </BrandStyled>
}
export default Brand