const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test('A função calcularMediaAluno deve estar definida', () => {
  expect(calcularMediaAluno).toBeDefined();
});

test('Deve lançar erro se a1 ou a2 forem undefined', () => {
  expect(() => calcularMediaAluno(undefined, 5)).toThrow('Notas a1 ou a2 não informadas');
  expect(() => calcularMediaAluno(5, undefined)).toThrow('Notas a1 ou a2 não informadas');
});

test('Deve lançar erro se a1 ou a2 forem negativos', () => {
  expect(() => calcularMediaAluno(-2, 7)).toThrow('Notas a1 ou a2 não podem ser negativas');
  expect(() => calcularMediaAluno(7, -3)).toThrow('Notas a1 ou a2 não podem ser negativas');
});

test('Deve calcular a média base se a3 não for informada', () => {
  const resultado = calcularMediaAluno(6, 8);
  expect(resultado).toBeCloseTo(6 * 0.4 + 8 * 0.6);
});

test('Deve lançar erro se a3 for negativa', () => {
  expect(() => calcularMediaAluno(5, 6, -3)).toThrow('Nota a3 não pode ser negativa');
});

test('Deve retornar maior média possível entre a1/a2 com a3 - caso a1 e a3', () => {
  const resultado = calcularMediaAluno(7, 4, 8);
  const media1 = 0.4 * 7 + 0.6 * 4;
  const media2 = 0.4 * 7 + 0.6 * 8;
  const media3 = 0.4 * 8 + 0.6 * 4;
  expect(resultado).toBeCloseTo(Math.max(media1, media2, media3));
});

test('Deve retornar maior média possível entre a1/a2 com a3 - caso a2 e a3', () => {
  const resultado = calcularMediaAluno(5, 7, 9);
  const media1 = 0.4 * 5 + 0.6 * 7;
  const media2 = 0.4 * 5 + 0.6 * 9;
  const media3 = 0.4 * 9 + 0.6 * 7;
  expect(resultado).toBeCloseTo(Math.max(media1, media2, media3));
});


