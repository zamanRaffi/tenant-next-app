const data = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, title: `Item ${i + 1}` }));

export default function handler(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const items = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / limitNumber);

  res.status(200).json({ items, totalPages });
}
