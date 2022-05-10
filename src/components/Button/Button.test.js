import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
test('Teste de Botão', () => {
    render(<Button value='Click' type="primary"/>);

    const buttonEl = screen.getByRole("button")

    expect(buttonEl).toBeDefined()
    fireEvent.click(buttonEl)

});
