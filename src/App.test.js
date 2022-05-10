import { screen, render, fireEvent } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";


const response = { speaker: "speaker", quote: "test quote"}

const server = setupServer(
    rest.get("http://localhost:4000/clientes", (req, res, ctx) => {
        return res(ctx.json(response))
    })
)

beforeAll(()=> server.listen());
afterEach(()=>server.resetHandlers());
afterAll(() => server.close());


test("Testando pagina inicial",()=>{
    render(<App />)

    const paragraphEl = screen.getByRole("p")
    const buttonEl = screen.getByRole("button")
    const imgLateral = screen.getByRole("img")

    expect(buttonEl).toBeDefined()
    expect(paragraphEl).toBeDefined()
    expect(imgLateral).toBeDefined()

    fireEvent.click(buttonEl)
})

test("chamada de api ao clicar no botão e atualização de texto", async () => {
    render(<App />)

    const buttonEl = screen.getByRole("button")
    const quoteEl = await screen.findByRole('p')

    expect(buttonEl).toBeDefined()
    expect(quoteEl).toBeDefined()

    fireEvent.click(buttonEl)
})