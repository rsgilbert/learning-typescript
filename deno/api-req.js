// Run code below like so:
//> deno run --allow-net api-req.js http://www.google.com
const url = Deno.args[0]
const res = await fetch(url)
const body = new Uint8Array(await res.arrayBuffer())
await Deno.stdout.write(body)