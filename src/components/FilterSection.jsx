import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../helper/FormatPrice";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={updateFilterValue}
        />
      </div>

      <FilterBox>
        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryData.map((curElem, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={curElem}
                  className={curElem === category ? "active" : ""}
                  onClick={updateFilterValue}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter-company">
          <h3>Company</h3>
          <select
            name="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </div>

        <div className="filter-colors colors">
          <h3>Colors</h3>
          <div className="filter-color-style">
            {colorsData.map((curColor, index) => {
              if (curColor === "All") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="color"
                    className="color-all--style"
                    onClick={updateFilterValue}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className={color === curColor ? "color-btn active" : "color-btn"}
                  onClick={updateFilterValue}
                >
                  {color === curColor && <FaCheck className="checkStyle" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter_price">
          <h3>Price</h3>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
      </FilterBox>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
`;

const FilterBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #333;
  }

  .filter-category button,
  .filter-colors button {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #e0e0e0;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .filter-category button.active,
  .filter-colors button.active {
    background-color: #333;
    color: #fff;
  }

  .filter-company--select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    font-size: 1rem;
    color: #333;
  }

  .filter-color-style {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .color-btn {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    outline: none;
    position: relative;
  }

  .color-btn.active::after {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  .checkStyle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1rem;
  }

  .color-all--style {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #e0e0e0;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .filter_price input[type="range"] {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 10px;
    border-radius: 5px;
    background: #ccc;
    outline: none;
    margin-top: 0.5rem;
  }
`;

export default FilterSection;
