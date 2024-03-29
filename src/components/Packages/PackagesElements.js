import styled from 'styled-components';

export const PackagesContainer = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: auto;
    }

    @media screen and (max-width: 480px) {
        height: auto;
    }
`;

export const PackagesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr, 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const PackagesCard = styled.div`
    background: #C85D23;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const PackagesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

export const PackagesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    margin-top: 16px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const PackagesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const PackagesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const PackagesBtnWrap = styled.div`
margin-top: 20px;
margin-bottom: 16px;
`;