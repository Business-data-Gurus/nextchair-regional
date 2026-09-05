const destinations = {
  md: {
    state: 'Maryland',
    short: 'MD',
    description: 'Launch a polished web presence for your Maryland business without an agency-sized price tag.'
  },
  va: {
    state: 'Virginia',
    short: 'VA',
    description: 'Launch a polished web presence for your Virginia business without an agency-sized price tag.'
  }
};

function page(region) {
  const { state, short, description } = destinations[region];
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Next Chair ${state} | Your Next Customer Is Looking</title>
  <meta name="description" content="${description}">
  <style>
    :root { --ink:#13202a; --blue:#1867b0; --sky:#eaf5ff; --gold:#f2b441; --white:#fff; --muted:#5b6871; }
    *{box-sizing:border-box} body{margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:var(--ink);background:#fff;line-height:1.5} .wrap{max-width:1120px;margin:auto;padding:0 24px} header{padding:22px 0;border-bottom:1px solid #e4edf3;background:#fff} .nav{display:flex;align-items:center;justify-content:space-between;gap:16px} .brand{font-weight:800;font-size:1.3rem;letter-spacing:-.03em}.brand span{color:var(--blue)} .state{font-size:.88rem;color:var(--muted);font-weight:700;letter-spacing:.08em;text-transform:uppercase} .hero{background:linear-gradient(135deg,#0c3557,#1867b0 65%,#2d8dce);color:#fff;padding:82px 0 72px}.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:52px;align-items:center}.eyebrow{color:#b9e1ff;font-weight:800;text-transform:uppercase;letter-spacing:.12em;font-size:.77rem}.hero h1{font-size:clamp(2.4rem,6vw,4.7rem);line-height:.99;letter-spacing:-.06em;margin:14px 0 20px;max-width:720px}.hero p{font-size:1.15rem;max-width:620px;margin:0 0 28px;color:#e0f1ff}.button{display:inline-block;background:var(--gold);color:#16222b;padding:14px 21px;border-radius:8px;font-weight:800;text-decoration:none;border:0;cursor:pointer;font-size:1rem}.button:hover{filter:brightness(1.05)}.offer{background:#fff;color:var(--ink);border-radius:16px;padding:28px;box-shadow:0 18px 45px #061b2e59}.offer h2{margin:0 0 5px;font-size:1.65rem;letter-spacing:-.04em}.price{font-size:3.7rem;font-weight:900;line-height:1;color:var(--blue);letter-spacing:-.07em;margin:15px 0 8px}.price small{font-size:1rem;color:var(--muted);letter-spacing:0;font-weight:700}.offer ul{padding-left:19px;color:#35424b}.offer li{margin:8px 0}.section{padding:72px 0}.section.tint{background:var(--sky)}h2{font-size:clamp(1.9rem,3vw,2.9rem);letter-spacing:-.05em;line-height:1.1;margin:0 0 14px}.lead{font-size:1.1rem;color:var(--muted);max-width:700px;margin:0 0 32px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{background:#fff;border:1px solid #dce9f3;border-radius:13px;padding:25px}.card h3{margin:0 0 8px;font-size:1.16rem}.card p{margin:0;color:var(--muted)}.form-box{background:#13202a;color:#fff;border-radius:18px;padding:36px;display:grid;grid-template-columns:1fr 1fr;gap:38px}.form-box h2{margin-top:0}.form-box p{color:#d4e1e9}.form{display:grid;gap:13px}label{font-weight:700;font-size:.9rem}input,textarea{width:100%;font:inherit;padding:12px;border:1px solid #c9d8e2;border-radius:7px;color:var(--ink);background:#fff}textarea{min-height:95px;resize:vertical}.form .button{width:100%;margin-top:4px}.note{font-size:.85rem;color:#d4e1e9;margin:0}.success{display:none;background:#dff5e7;color:#155c32;border-radius:8px;padding:12px;font-weight:700}.success.show{display:block}.error{display:none;background:#ffe0e0;color:#861d1d;border-radius:8px;padding:12px;font-weight:700}.error.show{display:block}footer{padding:28px 0;color:var(--muted);font-size:.91rem}.phone{color:#fff;font-weight:800;text-decoration:none}@media(max-width:780px){.hero{padding:60px 0}.hero-grid,.form-box{grid-template-columns:1fr;gap:30px}.grid{grid-template-columns:1fr}.hero h1{font-size:3rem}.nav{align-items:flex-start;flex-direction:column}.form-box{padding:26px}}
  </style>
</head>
<body>
  <header><div class="wrap nav"><div class="brand">Next <span>Chair</span></div><div class="state">${state} · Regional launch offer</div></div></header>
  <main>
    <section class="hero"><div class="wrap hero-grid"><div><div class="eyebrow">For ${state} small businesses</div><h1>Your next customer is already looking.</h1><p>${description}</p><a class="button" href="#contact">Claim the $500 launch offer</a></div><aside class="offer"><h2>A practical launch package</h2><div class="price">$500 <small>one-time launch</small></div><ul><li>A focused, professional website</li><li>Clear offer and contact path</li><li>Mobile-ready design</li><li>Lead form delivered to your inbox</li><li>Optional support for $125/month</li></ul></aside></div></section>
    <section class="section tint"><div class="wrap"><h2>Built to make the next step easy.</h2><p class="lead">Next Chair helps local owners establish a credible online front door, so prospects can understand what you do and get in touch without friction.</p><div class="grid"><article class="card"><h3>Clear positioning</h3><p>We turn your service and value into copy customers can quickly understand.</p></article><article class="card"><h3>Designed for action</h3><p>Every page points visitors toward a call, email, or a simple inquiry.</p></article><article class="card"><h3>Support if you want it</h3><p>Keep your site current with optional ongoing support at $125 per month.</p></article></div></div></section>
    <section class="section" id="contact"><div class="wrap form-box"><div><div class="eyebrow">Start your ${short} launch</div><h2>Tell us about your business.</h2><p>Share your details and we will follow up about the $500 launch package. Prefer to talk now? Call <a class="phone" href="tel:+12024231445">(202) 423-1445</a>.</p></div><form class="form" id="lead-form"><div id="success" class="success" role="status">Thank you—we received your request and will be in touch.</div><div id="error" class="error" role="alert"></div><div><label for="name">Name</label><input id="name" name="name" autocomplete="name" required></div><div><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div><div><label for="business">Business name</label><input id="business" name="business" autocomplete="organization"></div><div><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div><div><label for="message">What do you need?</label><textarea id="message" name="message" placeholder="A brief description is perfect."></textarea></div><button class="button" type="submit">Request my launch offer</button><p class="note">Your email is required so we can respond.</p></form></div></div></section>
  </main>
  <footer><div class="wrap">© ${new Date().getFullYear()} Next Chair · ${state}</div></footer>
  <script>
    const form = document.getElementById('lead-form');
    const success = document.getElementById('success');
    const error = document.getElementById('error');
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); success.classList.remove('show'); error.classList.remove('show');
      const button = form.querySelector('button'); button.disabled = true; button.textContent = 'Sending…';
      try {
        const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
        if (!response.ok) throw new Error((await response.json()).error || 'Unable to send your request.');
        form.reset(); success.classList.add('show');
      } catch (err) { error.textContent = err.message; error.classList.add('show'); }
      finally { button.disabled = false; button.textContent = 'Request my launch offer'; }
    });
  </script>
</body>
</html>`;
}

async function handleLead(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(data.name || '').trim();
  const email = String(data.email || '').trim();
  const business = String(data.business || '').trim();
  const phone = String(data.phone || '').trim();
  const message = String(data.message || '').trim();

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: 'Please provide your name and a valid email address.' },
      { status: 400 }
    );
  }

  const region = request.headers.get('Referer')?.includes('/next-chair-va')
    ? 'Virginia'
    : 'Maryland';

  if (!env.RESEND_API_KEY) {
    return Response.json(
      { error: 'Email notifications are not configured yet.' },
      { status: 503 }
    );
  }

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeBusiness = escapeHtml(business || 'Not provided');
  const safePhone = escapeHtml(phone || 'Not provided');
  const safeMessage = escapeHtml(message || 'Not provided').replace(/\n/g, '<br>');
  const notificationEmail = env.NOTIFICATION_EMAIL || 'hello@businessdatagurus.com';

  const text = `New Next Chair ${region} lead

Name: ${name}
Email: ${email}
Business: ${business || 'Not provided'}
Phone: ${phone || 'Not provided'}
Message: ${message || 'Not provided'}`;

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f3f7fa;font-family:Arial,Helvetica,sans-serif;color:#13202a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f7fa;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;background:#0c3557;color:#ffffff;">
                <div style="font-size:21px;line-height:1.2;font-weight:800;">Next Chair</div>
                <div style="padding-top:5px;font-size:13px;line-height:1.4;color:#b9e1ff;">New ${escapeHtml(region)} launch-offer lead</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <h1 style="margin:0 0 18px;font-size:22px;line-height:1.3;color:#13202a;">A new lead has arrived</h1>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="width:130px;padding:11px 0;border-bottom:1px solid #dce9f3;font-size:13px;font-weight:700;color:#5b6871;">Name</td>
                    <td style="padding:11px 0;border-bottom:1px solid #dce9f3;font-size:14px;color:#13202a;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="width:130px;padding:11px 0;border-bottom:1px solid #dce9f3;font-size:13px;font-weight:700;color:#5b6871;">Email</td>
                    <td style="padding:11px 0;border-bottom:1px solid #dce9f3;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#1867b0;text-decoration:none;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="width:130px;padding:11px 0;border-bottom:1px solid #dce9f3;font-size:13px;font-weight:700;color:#5b6871;">Business</td>
                    <td style="padding:11px 0;border-bottom:1px solid #dce9f3;font-size:14px;color:#13202a;">${safeBusiness}</td>
                  </tr>
                  <tr>
                    <td style="width:130px;padding:11px 0;border-bottom:1px solid #dce9f3;font-size:13px;font-weight:700;color:#5b6871;">Phone</td>
                    <td style="padding:11px 0;border-bottom:1px solid #dce9f3;font-size:14px;color:#13202a;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="width:130px;padding:11px 0;font-size:13px;font-weight:700;color:#5b6871;vertical-align:top;">Need</td>
                    <td style="padding:11px 0;font-size:14px;line-height:1.55;color:#13202a;">${safeMessage}</td>
                  </tr>
                </table>
                <div style="padding-top:24px;">
                  <a href="mailto:${safeEmail}?subject=${encodeURIComponent('Re: Your Next Chair launch offer')}" style="display:inline-block;padding:12px 18px;background:#f2b441;border-radius:7px;color:#13202a;font-size:14px;font-weight:700;text-decoration:none;">Reply to ${safeName}</a>
                </div>
                <p style="margin:24px 0 0;font-size:12px;line-height:1.5;color:#5b6871;">This lead was submitted through the Next Chair ${escapeHtml(region)} landing page.</p>
              </td>
            </tr>
            <tr>
              <td style="height:5px;background:#f2b441;font-size:1px;line-height:1px;">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const resend = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Next Chair Leads <ops@businessdatagurus.com>',
      to: [notificationEmail],
      reply_to: email,
      subject: `New Next Chair ${region} lead: ${name}`,
      html,
      text
    })
  });

  const resendBody = await resend.text();

  if (!resend.ok) {
    console.error('Resend lead-email failure:', {
      status: resend.status,
      body: resendBody
    });

    return Response.json(
      { error: 'We could not send your request right now. Please call (202) 423-1445.' },
      { status: 502 }
    );
  }

  console.log('Resend lead email accepted:', resendBody);
  return Response.json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/lead') return handleLead(request, env);
    if (request.method === 'GET' && (url.pathname === '/next-chair-md' || url.pathname === '/next-chair-md/')) return new Response(page('md'), { headers: { 'content-type': 'text/html; charset=UTF-8' } });
    if (request.method === 'GET' && (url.pathname === '/next-chair-va' || url.pathname === '/next-chair-va/')) return new Response(page('va'), { headers: { 'content-type': 'text/html; charset=UTF-8' } });
    return new Response('Not found', { status: 404 });
  }
};