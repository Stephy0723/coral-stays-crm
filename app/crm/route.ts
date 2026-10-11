import html from '../../web/crm.html?raw';
export const dynamic='force-dynamic';
export async function GET(request:Request){if(!request.headers.get('oai-authenticated-user-id'))return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fcrm',request.url),302);return new Response(html,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})}
