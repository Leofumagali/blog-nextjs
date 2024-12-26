import { getAuth, signOut } from "firebase/auth";
import { destroyCookie } from "nookies";

export const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    destroyCookie(null, "authToken", {path: "/"});

    console.log("Logout realizado com sucesso!");
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
};