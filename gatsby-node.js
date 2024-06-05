exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;

	createRedirect({
		fromPath: `/deploy`,
		toPath: `/build#deploy`,
		isPermanent: true,
	});

	createRedirect({
		fromPath: `/developer-portal`,
		toPath: `/build`,
		isPermanent: true,
	});

	createRedirect({
		fromPath: `/what-is-celestia`,
		toPath: `/underneath`,
		isPermanent: true,
	});
};
