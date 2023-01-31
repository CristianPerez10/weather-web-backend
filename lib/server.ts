// Start the application
(async () => {
	const App = (await import("./app")).default;

	await App.init();
	const app = App.app;
	const PORT = 3030;

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})();
