import { rest } from "msw";
import { setupServer } from "msw/node";

import { getQuotes } from "./quotesService";

const response = {teste: "Testing"}


const server = setupServer(
    rest.get("http://localhost:4000/clientes", (req, res, ctx) => {
        return res(ctx.json(response))
    })
)

beforeAll(()=> server.listen());
afterEach(()=>server.resetHandlers());
afterAll(() => server.close());

test("Retorna um jason buscado numa requisição",async ()=>{
    const quote = await getQuotes()
    expect(quote).toStrictEqual(response)
})