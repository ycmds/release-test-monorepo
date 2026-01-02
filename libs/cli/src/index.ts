#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { plus } from '@macrobe/plus';
import { multiply } from '@macrobe/multiply';
import { formatSum } from '@macrobe/format';
import { print } from '@macrobe/print';

yargs(hideBin(process.argv))
  .command('plus <a> <b>', 'add two numbers', {}, (argv) => {
    print(formatSum(Number(argv.a), Number(argv.b)));
  })
  .command('multiply <a> <b>', 'multiply two numbers', {}, (argv) => {
    print(`${argv.a} × ${argv.b} = ${multiply(Number(argv.a), Number(argv.b))}`);
  })
  .demandCommand()
  .help()
  .parse();
