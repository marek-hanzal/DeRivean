import doPost from "utils/server/doPost";

const doUserRegister = doPost("public.user.register");
const doUserLogin = doPost("public.user.login");

export {
	doUserRegister,
	doUserLogin,
};
