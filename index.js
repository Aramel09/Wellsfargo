function WellsFargoEverydayChecking(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  
  WellsFargoEverydayChecking.prototype.addMoney = function (value) {
    this.balance = this.balance + value;
  };
  
  WellsFargoEverydayChecking.prototype.minusMoney = function (value) {
    this.balance = this.balance - value;
  };
  
  WellsFargoEverydayChecking.prototype.showBalance = function () {
    console.log(this.balance);
    return this.balance;
  };

  function WellsFargoEverydayCheckingPlus(name, balance){
    WellsFargoEverydayChecking.call(this, name, balance)
  }

  WellsFargoEverydayCheckingPlus.prototype = Object.create(WellsFargoEverydayChecking.prototype)
  WellsFargoEverydayCheckingPlus.prototype.constructor = WellsFargoEverydayCheckingPlus

  const example = new WellsFargoEverydayCheckingPlus("Alejandro", 100)
  console.log(example)

  WellsFargoEverydayCheckingPlus.prototype.minusMoney = function(value)
  {
      this.balance = this.balance - value   
      if (this.balance < 0){
        this.balance = this.balance - 5
      }
      if (this.balance <= -1)
      {console.log("An overdraft fee has been applied to your account")}
  };

  example.minusMoney(102)
  example.showBalance()

  const newAccount = new WellsFargoEverydayCheckingPlus("Aragorn", 0)
  console.log(newAccount)

  newAccount.minusMoney(20)
  newAccount.showBalance()

  newAccount.addMoney(100)
  newAccount.showBalance()