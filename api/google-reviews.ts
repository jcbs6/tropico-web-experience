export default async function handler(req: any, res: any) {
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  const PLACE_ID = "ChIJFSYgpDo5Yg0RMQy_HlZh-gY";

  if (!GOOGLE_API_KEY) {
    return res.status(500).json({
      error: "Missing GOOGLE_API_KEY",
    });
  }

  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${PLACE_ID}` +
      `&fields=rating,user_ratings_total,reviews` +
      `&key=${GOOGLE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Google API Error:", data);

      return res.status(500).json({
        error: data.status,
      });
    }

    res.setHeader(
      "Cache-Control",
      "s-maxage=86400, stale-while-revalidate"
    );

    return res.status(200).json({
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    });
  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}