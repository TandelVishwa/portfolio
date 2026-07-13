const API_URL = "https://portfolio-1070.onrender.com/api/contact";

export async function sendContact(formData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}