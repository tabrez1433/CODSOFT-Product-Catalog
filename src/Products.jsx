import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";

const Products = () => {
  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <FilterSection />
        </Sidebar>
        <MainContent>
          <SortWrapper>
            <Sort />
          </SortWrapper>
          <ProductList />
        </MainContent>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f9f9f9;
  padding: 2rem 0;
`;

const Container = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  flex: 0 0 300px; /* Sidebar width */
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex: 0 0 100%; /* Take full width on mobile */
    margin-bottom: 2rem;
  }
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
`;

const SortWrapper = styled.div`
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-bottom: 1rem;
  }
`;

export default Products;
