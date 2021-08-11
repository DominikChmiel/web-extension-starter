import * as Sentry from "@sentry/browser";

try {
	Sentry.init({
	    dsn: "http://somednskey@sentry_onpremise_nginx_1:9000/101",
	    release: "something",
	});
} catch (e) {
	console.log(e)
}

export {};
