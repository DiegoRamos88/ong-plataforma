// Máscaras simples para CPF, Telefone e CEP (BR)
// Observação: São máscaras de formatação; a validação formal já é feita pelos padrões HTML5 (pattern/required).

function apenasNumeros(str) {
  return str.replace(/\D/g, '');
}

function aplicarMascaraCPF(valor) {
  const v = apenasNumeros(valor).slice(0, 11);
  const partes = [];
  if (v.length > 3) partes.push(v.slice(0, 3));
  if (v.length > 6) partes.push(v.slice(3, 6));
  if (v.length > 9) partes.push(v.slice(6, 9));
  let resto = v.slice(9, 11);
  let cpf = '';
  if (v.length <= 3) cpf = v;
  else if (v.length <= 6) cpf = `${v.slice(0, 3)}.${v.slice(3)}`;
  else if (v.length <= 9) cpf = `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`;
  else cpf = `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${resto}`;
  return cpf;
}

function aplicarMascaraTelefone(valor) {
  const v = apenasNumeros(valor).slice(0, 11);
  if (v.length <= 10) {
    // (00) 0000-0000
    const p1 = v.slice(0, 2);
    const p2 = v.slice(2, 6);
    const p3 = v.slice(6, 10);
    return v.length > 6 ? `(${p1}) ${p2}-${p3}` : v.length > 2 ? `(${p1}) ${p2}` : v.length > 0 ? `(${p1}` : '';
  } else {
    // (00) 00000-0000
    const p1 = v.slice(0, 2);
    const p2 = v.slice(2, 7);
    const p3 = v.slice(7, 11);
    return `(${p1}) ${p2}-${p3}`;
  }
}

function aplicarMascaraCEP(valor) {
  const v = apenasNumeros(valor).slice(0, 8);
  if (v.length <= 5) return v;
  return `${v.slice(0, 5)}-${v.slice(5, 8)}`;
}

function setFeedback(msg) {
  const el = document.getElementById('feedback');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('sr-only');
  // apply alert role and default to info
  el.classList.add('alert', 'info');
  // remove after timeout (keep DOM aria-live for screen readers)
  setTimeout(() => {
    el.classList.add('sr-only');
    el.classList.remove('alert', 'info');
  }, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');
  const estado = document.getElementById('estado');
  const form = document.querySelector('form');

  if (cpf) cpf.addEventListener('input', (e) => { e.target.value = aplicarMascaraCPF(e.target.value); });
  if (telefone) telefone.addEventListener('input', (e) => { e.target.value = aplicarMascaraTelefone(e.target.value); });
  if (cep) cep.addEventListener('input', (e) => { e.target.value = aplicarMascaraCEP(e.target.value); });

  if (estado) estado.addEventListener('change', (e) => {
    e.target.value = e.target.value.toUpperCase();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        // Deixa o navegador mostrar as mensagens de validação nativas
        setFeedback('Confira os campos destacados antes de enviar.');
      } else {
        e.preventDefault(); // Apenas para o protótipo
        setFeedback('Cadastro enviado com sucesso! (Protótipo)');
        form.reset();
      }
    });
  }
});
