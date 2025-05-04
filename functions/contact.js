async function createAirtableRecord(env, body) {
  const url = `https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`;
  try {
    const result = fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_VIROOP_CONTACT_FORM_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    return result;
  } catch (error) {
    console.error("Error writing to airtable", error);
  }
}

async function submitHandler(request, env) {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
    });
  }
  const body = await request.formData();

  const { first_name, last_name, email, phone, message } =
    Object.fromEntries(body);

  // The keys in "fields" are case-sensitive, and
  // should exactly match the field names you set up
  // in your Airtable table, such as "First Name".
  const reqBody = {
    fields: {
      "First Name": first_name,
      "Last Name": last_name,
      Email: email,
      "Phone Number": phone,
      Message: message,
    },
  };
  await createAirtableRecord(env, reqBody);
}

export async function onRequestPost({ request, env }) {
  const url = new URL(request.url);
  if (url.pathname === "/contact" || url.pathname === "/contact/") {
    const response = await submitHandler(request, env);
    return new Response(JSON.stringify({ status: "success" }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  return new Response("Not found", { status: 404 });
}
