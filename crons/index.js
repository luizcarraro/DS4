const { CronJob } = require('cron');
const figlet = require('figlet');


function now() {
  const now = new Date();
  // Formata mensagem como hora HH:mm
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}
/**
 * Imprime olá mundo no console com a hora
 */
function helloWorld() {
  console.log('Olá mundo', now(), '\n');
}

/**
 * Roda apenas uma vez a cada minuto
 */
function runOnlyOnceEveryMinute() {
  const msg = now();
  figlet(msg, function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data)
  });
}

const job1 = new CronJob('* * * * * *', helloWorld, null, true, 'America/Sao_Paulo');

const job2 = new CronJob('*/2 * * * * *', runOnlyOnceEveryMinute, null, true, 'America/Sao_Paulo');

// Roda todos os dias de semana as 7:00 da manhã
const job3 = new CronJob('0 0 7 * * 1-5', function () {}, null, true, 'America/Sao_Paulo');

// Roda todo dia 5 de cada mês as 10h da manhã
const job4 = new CronJob('0 0 10 5 * *', function () {}, null, true, 'America/Sao_Paulo');
