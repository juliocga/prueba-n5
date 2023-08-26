export const fetchData = async () => {
  const response = await fetch('/api/products')
  const result = await response.json();
  return result.products;
}

export const saveData = async (data) => {
  const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export const updateData = async (data) => {
  const response = await fetch('/api/products', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}
