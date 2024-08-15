import { soma, multiply } from './soma';

describe('soma', () => {
    it('deve somar 1 ao numero informado.', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o numero por dois', () => {
        const value = multiply(2, 2)
        expect(value).toBe(4)
    })

    it('deve multiplicar o numero por tres', () => {
        const value = multiply(2, 3)
        expect(value).toBe(6)
    })

    it('Deve informar um erro, como o multiplicador diferente de dois ou tres', () => {
        const value = multiply(2, 4)
        expect(value).toBe('Multiplicador nao aceito')
    })
})