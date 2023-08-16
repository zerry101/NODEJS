const createController = async (req, res) => {
  const result = await req.data.save();
  res.status(201).json(result);
};
