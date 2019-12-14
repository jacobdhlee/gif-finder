import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  width: 100%;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
`;

export const Input = styled.input`
  max-width: 600px;
  height: 54px;
  width: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #B0BEC5;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  color: #424242;
  font-size: 17px;
  padding: 15px;
  box-sizing: border-box;
  outline:none;
  &::placeholder {
    color: #BDBDBD
  }
`

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 52px;
  border-radius: 5px;
  border: 1px solid #B0BEC5;
  margin-left: -5px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const DisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  max-width: 1400px;
  height: 1000px;
  overflow: scroll;
  &.none {
    display: none;
  }
  @media(max-width: 1390px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 200px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DotBorder = styled.div`
  width: 300px;
  height: 200px;
  border: 5px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const EmptyMessage = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const ErrorMessage = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #F44336;
  margin-top: 20px;
`;
