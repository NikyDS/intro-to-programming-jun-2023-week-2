import { Injectable, signal, effect } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BankAccount {

    private balance = signal(0);

    constructor() {
        let savedBalance = localStorage.getItem('balance');
        if (savedBalance != null) {
            this.balance.set(parseFloat(savedBalance));
        }
        effect(() => {
            localStorage.setItem('balance', this.balance().toString());
        })
    }

    getBalance() {
        return this.balance.asReadonly();
    }

    makeDeposit(amount: number) {
        // send it to an API,
        // calculate a bonus
        this.balance.set(this.balance() + amount);
    }

    makeWithdrawal(amount: number) {
        this.balance.set(this.balance() - amount);
    }
}