export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false, message: "Method not allowed" });

  const { url } = req.body;
  if (!url) return res.status(400).json({ success: false, message: "URL tidak ada" });

  try {
    const apiUrl = `${process.env.awi9jngl0fhw0xmy}?url=${encodeURIComponent(url)}`;
    const resp = await fetch(apiUrl, { headers: { Authorization: `Bearer ${process.env.hhvbU4ucjglom3n4DvWJTG92IpZ1ihW5}` } });
    const json = await resp.json();

    if (!json || !json.download) throw new Error("Gagal ambil link");

    res.status(200).json({ success: true, download: json.download });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
