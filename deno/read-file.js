import { copy } from 'https://deno.land/std@0.115.1/io/util.ts'

// const filenames = Deno.args;
const filenames = ['./api-req.js', './read-file.js']
for(const filename of filenames) {
    const file = await Deno.open(filename)
    await copy(file, Deno.stdout)
    file.close()
}