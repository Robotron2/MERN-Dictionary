export const homePageController = async (req, res) => {
	res.status(201).json({ message: "Welcome to my MERN dictionary app!" })
}
