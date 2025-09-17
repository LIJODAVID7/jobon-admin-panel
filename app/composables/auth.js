import { authStore } from "~/store/auth";

export const userLogin = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = authStore();
  auth.loginLoading(true);
  try {
    const data = await $fetch("/admin/login", {
      baseURL: BASE_URL,
      method: "POST",
      body: payload,
    });
    if (data?.success) {
      auth.addUser({ user: data?.data?.admin, token: data?.data?.token });
      return { data: data, error: null };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
    auth.loginLoading(false);
  }
};
export const createUser = async (payload) => {
  const BASE_URL = useRuntimeConfig().public.apiBase;
  const auth = authStore();
  const { token } = auth;
  auth.loginLoading(true);
  try {
    const data = await $fetch("/admin", {
      baseURL: BASE_URL,
      method: "POST",
      body: payload,
       headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(data)
    if (data?.success) {
      // auth.addUser({ user: data?.data?.admin, token: data?.data?.token });
      return { data: data, error: null };
    } else {
      throw new Error("API response unsuccessful");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: null, error };
  } finally {
    auth.loginLoading(false);
  }
};
