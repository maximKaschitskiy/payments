import { getSession } from "next-auth/react";

const authMiddle = (handler) => async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    return handler(req, res);
  } else {
    res.statusCode = 403;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Protected content" }));
    return;
  }
};

export default authMiddle;