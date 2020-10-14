const Bull = require('bull');
const primeiraFila = new Bull('primeira-fila');

const jobData = {
  email: 'lacarraro@gmail.com',
};

// primeiraFila.add('enviaEmail', jobData);

primeiraFila.add('jobDemorado', {
  info: 'Qualquer coisa'
});

app.post('/sendEmail', (req, res) => {
  primeiraFila.add('jobDemorado', {
    info: 'Qualquer coisa'
  });

  return res.send('Ok!');
})
