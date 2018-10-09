const apiService = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    return Error(e);
  }
};

export default apiService;
