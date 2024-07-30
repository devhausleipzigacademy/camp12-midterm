import { useEffect, useState } from "react";

export function useJwt() {
	const [token, setToken] = useState("");

	useEffect(() => {
		const authState = localStorage.getItem("auth-state");
		if (authState) {
			const tokenFromLS = JSON.parse(authState).token;
			setToken(tokenFromLS);
		}
	}, []);
	return token;
}
