import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("assignment-1-fibonacci-sequence/:terms")
  getFibonacciSequence(@Param("terms") terms: string): { sequence: number[] } {
    const numTerms = parseInt(terms, 10); 
    const sequence = [0, 1];

    for (let num = 2; num < numTerms; num++) {
      sequence.push(sequence[num - 1] + sequence[num - 2]);
    }

    return { sequence };
  }

  @Get("assignment-2-prime-number/:number")
  getPrimeNumber(@Param('number') number: string): { isPrime: boolean } {
    const num1 = parseInt(number);

    for (let num2 = 2; num2 <= Math.sqrt(num1); num2++) {
      if (num1 % num2 === 0) {
        return { isPrime : false }; 
      }
    }

    return { isPrime : true }; 
  }

}
