// Receiver
class Light {
    turnOn() {
      console.log('Luz ligada');
    }
  
    turnOff() {
      console.log('Luz desligada');
    }
  }
  
  // Command
  class LightCommand {
    constructor(light) {
      this.light = light;
    }
  
    execute() {}
  }
  
  // Concrete Commands
  class TurnOnCommand extends LightCommand {
    execute() {
      this.light.turnOn();
    }
  }
  
  class TurnOffCommand extends LightCommand {
    execute() {
      this.light.turnOff();
    }
  }
  
  // Invoker
  class RemoteControl {
    setCommand(command) {
      this.command = command;
    }
  
    pressButton() {
      this.command.execute();
    }
  }
  
  // Exemplo de uso:
  
  const light = new Light();
  
  const turnOnCommand = new TurnOnCommand(light);
  const turnOffCommand = new TurnOffCommand(light);
  
  const remoteControl = new RemoteControl();
  
  remoteControl.setCommand(turnOnCommand);
  remoteControl.pressButton(); // Saída: Luz ligada
  
  remoteControl.setCommand(turnOffCommand);
  remoteControl.pressButton(); // Saída: Luz desligada