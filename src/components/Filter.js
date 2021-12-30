import React from "react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

function Filter({ setFilterProducts }) {
  const { products } = useGlobalContext();
  const [filters, setFilters] = useState([]);
  const [prices, setPrices] = useState({ min: 0, max: 0, value: 0 });
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    const allFilters = [];
    products.map((item) => {
      for (let i in item) {
        if (
          !allFilters.includes(i) &&
          i !== "id" &&
          i !== "img" &&
          i !== "title" &&
          i !== "desc" &&
          i !== "features" &&
          i !== "amount" &&
          i !== undefined
        ) {
          allFilters.push(i);
        }
      }
    });

    createFilterComponents(allFilters);
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      const allPrices = products.map((product) => product.price);
      const minPrice = Math.min(...allPrices);
      const maxPrice = Math.max(...allPrices);
      setPrices({ min: minPrice, max: maxPrice, value: maxPrice });
    } else {
      setPrices({ min: 0, max: 0, value: 0 });
    }
  }, [products]);

  function createFilterComponents(allFilters) {
    const newFilters = [];

    allFilters.forEach((item) => {
      switch (item) {
        case "color":
          const colors = [...new Set(products.map((item) => item.color))];
          const colorFilter = { name: "COR", filterType: "color", options: colors };
          newFilters.push(colorFilter);
          break;
        case "brand":
          const brands = [...new Set(products.map((item) => item.brand))];
          const brandFilter = { name: "MARCA", filterType: "brand", options: brands };
          newFilters.push(brandFilter);
          break;

        default:
          break;
      }
    });

    setFilters(newFilters);
  }

  function handleFilter(e) {
    const target = e.target;
    if (target.checked) {
      const addFilter = { type: target.name, value: target.title };
      setActiveFilters((prevFilters) => [...prevFilters, addFilter]);
    } else if (!target.checked) {
      const removeFilter = activeFilters.filter((item) => item.value !== target.title);
      setActiveFilters(removeFilter);
    }
  }

  function handlePrice(e) {
    setPrices({ ...prices, value: e.target.value });
    const priceFilter = { type: "price", value: e.target.value };
    const findPriceFilter = activeFilters.find((filter) => filter.type === "price");
    if (findPriceFilter) {
      setActiveFilters((prevFilters) =>
        prevFilters.map((filter) => {
          if (filter.type === "price") {
            return { type: "price", value: e.target.value };
          }
          return filter;
        })
      );
    } else {
      setActiveFilters((prevFilters) => [...prevFilters, priceFilter]);
    }
  }

  useEffect(() => {
    let allProdsFilt = products;
    const colors = activeFilters.filter((filter) => filter.type === "color");
    const brands = activeFilters.filter((filter) => filter.type === "brand");
    const prices = activeFilters.find((filter) => filter.type === "price");

    if (colors.length > 0) {
      let newGroup = [];
      colors.forEach((item) => {
        const { type, value } = item;
        const newColors = allProdsFilt.filter((product) => product[type] === value);
        newGroup = [...newGroup, ...newColors];
      });
      allProdsFilt = newGroup;
    }
    if (brands.length > 0) {
      let newGroup = [];
      brands.forEach((item) => {
        const { type, value } = item;
        const newBrands = allProdsFilt.filter((product) => product[type] === value);
        newGroup = [...newGroup, ...newBrands];
      });
      allProdsFilt = newGroup;
    }
    if (prices) {
      const { type, value } = prices;
      const newPrices = allProdsFilt.filter((product) => product[type] <= value);
      allProdsFilt = newPrices;
    }

    setFilterProducts(allProdsFilt);
  }, [activeFilters]);

  return (
    <aside id="filter" className="filter">
      <div className="accordion accordion-flush" id="accordionFlushFilter">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              PREÇO:
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushFilter"
          >
            <div className="accordion-body">
              <div className="d-flex flex-row-reverse">
                <span className="price-text current-price badge bg-primary mb-1">
                  R$ {prices.value},00
                </span>
              </div>
              <input
                type="range"
                className="form-range"
                id="filter-price"
                min={prices.min}
                max={prices.max}
                value={prices.value}
                onChange={handlePrice}
                title={prices.value}
              />
              <div className="d-flex justify-content-between">
                <span className="price-text">R$ {prices.min},00</span>
                <span className="price-text">R$ {prices.max},00</span>
              </div>
            </div>
          </div>
        </div>
        {filters.map((filter, index) => {
          return (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`flush-heading${filter.name}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${filter.name}`}
                >
                  {filter.name}:
                </button>
              </h2>
              <div
                id={`flush-collapse${filter.name}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushFilter"
              >
                <div className="accordion-body">
                  {filter.options.map((option, index) => {
                    if (option) {
                      return (
                        <div key={index}>
                          <input
                            type="checkbox"
                            id={`filter-${option}`}
                            title={option}
                            name={filter.filterType}
                            onChange={handleFilter}
                          />
                          <label htmlFor={`filter-${option}`} className="ms-2">
                            {option.toUpperCase()}
                          </label>
                        </div>
                      );
                    }
                    return;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default Filter;
