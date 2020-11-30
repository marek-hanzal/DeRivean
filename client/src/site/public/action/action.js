import {Server} from "@leight-core/leight";

const doUserRegister = Server.httpPost("public.user.register");
const doUserLogin = Server.httpPost("public.user.login");

export {
	doUserRegister,
	doUserLogin,
};
