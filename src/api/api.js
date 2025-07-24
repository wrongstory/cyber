const API_BASE_URL = "https://dummyjson.com";

// 특정 제품 가져오기
export const fetchProductById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// 제품 검색하기
export const searchProducts = async (query) => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
    if (!res.ok) throw new Error("Failed to search products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
