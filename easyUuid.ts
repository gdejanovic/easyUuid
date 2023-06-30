class EasyUuid {
    private static counter: number = 0;
  
    public static generate(): string {
      const timestamp: string = Date.now().toString(16);
      const random: string = Math.floor(Math.random() * 1000000000).toString(16);
      const count: string = (EasyUuid.counter++).toString(16);
  
      return `${random}-${random}-${count}-${random}-${timestamp}`;
    }
  }
  
  export default EasyUuid;
  