

export const getStages = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;

  try {
    const data = await $fetch(`/stages`, {
      baseURL: BASE_URL,
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      //   "Content-Type": "application/json",
      // },
      params: {
        page: 1,
        limit: 50,
        sortBy: "order",
        sortOrder: "asc",
      },
    });
    if (data?.success) {
      
      return { data: data, error: null };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
    
  }
};
