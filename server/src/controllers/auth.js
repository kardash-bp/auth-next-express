export const register = (req, res) => {
  console.log(req.body)
  res.status(201).json('auth test controller!')
}
