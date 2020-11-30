import {Server} from "@leight-core/leight";

const doUserRegister = Server.createPost("public.user.register");
const doUserLogin = Server.createPost("public.user.login");

export {
	doUserRegister,
	doUserLogin,
};
