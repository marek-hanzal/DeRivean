import {createServer, RestSerializer} from "miragejs";
import {v4 as uuid4} from "uuid";

const MirageServer = ({environment = "development"} = {}) => createServer({
	environment,

	serializers: {
		application: RestSerializer,
	},

	identityManagers: class {
		constructor() {
			this.set = new Set();
		}

		fetch() {
			let uuid = uuid4();
			while (this.set.has(uuid)) {
				uuid = uuid4();
			}
			this.set.add(uuid);
			return uuid;
		}

		set(id) {
			if (this.set.has(id)) {
				throw new Error(`UUID ${id} has already been used.`);
			}
			this.set.add(id);
		}

		reset() {
			this.set.clear();
		}
	},

	inflector: {
		pluralize: word => word,
		singularize: word => word,
	},

	seeds(server) {
		server.loadFixtures();
	},

	routes() {
		/**
		 * Passthrough all requests not defined in Mirage's routes (thus proxying all the stuff to Kotlin backend).
		 */
		this.passthrough("**", process.env.REACT_APP_BACKEND + "/**");

		/**
		 * Fake client.json file which makes default configuration of the client.
		 */
		this.get("/client.json", _ => ({
			discovery: "/api/discovery",
		}));
	},
});

export default MirageServer;
