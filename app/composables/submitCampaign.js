import { authStore } from "~/store/auth";

export const submitCampaignData = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = authStore();
  const { token } = auth;
  try {
    const data = await $fetch(`/stages`, {
      baseURL: BASE_URL,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: payload,
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
