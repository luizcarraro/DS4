const Bull = require('bull');
const { setQueues, UI } = require('bull-board');
const app = require('express')();

const fila = new Bull('primeira-fila');

// Função fictícia para simular um processo lento
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Configura bull-board
setQueues([fila]);
app.use('/bull', UI);

fila.on('completed', (job, result) => {
  console.log(`Job ${job.id} completou com o resultado: ${result}`);
});

fila.on('failed', function (job, err) {
  // A job failed with reason `err`!
  console.log(`O job ${job.id} falhou com o erro`, err);
})

fila.process('enviaEmail', async (job) => {
  console.log('Envia o email para ', job.data.email);
  return Promise.resolve('Email enviado.');
});

fila.process('jobDemorado', async (job) => {
  console.log('Esse job vai demorar');

  await sleep(2000);
  job.progress(10); // 10% processado
  await sleep(2000);
  job.progress(25);
  await sleep(2000);
  job.progress(37);
  await sleep(2000);
  job.progress(40);
  await sleep(2000);
  job.progress(80);
  await sleep(2000);
  job.progress(98);

  return Promise.resolve('Job demorado finalizado.');
});



app.listen(3000, (err) => {
  console.log('Fila Bull iniciada com sucesso.');
});