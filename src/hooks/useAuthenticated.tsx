import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthenticated() {
  const navigate = useNavigate();
  useEffect(() => {
    let authState = JSON.parse(localStorage.getItem("auth-state") || "{}");
    if (!authState || !authState.authState) {
      authState = false;
      navigate("/login");
    }
  });
}
