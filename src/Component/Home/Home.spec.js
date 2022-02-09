import { sum } from "./Home.Componenet";

it("sum function test",()=>{
    const result=sum(1,2)
    expect(result).toBe(3);
});