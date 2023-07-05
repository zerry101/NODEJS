const name = "Mr.Random0";
const name1 = "Mr.Random1";
const name2 = "Mr.Random2";
export const randNumber = () => {
const strArr=[]

    // for (let i=0 ;i<100; i++) {
        const rNumber = Math.random() * 100;
        const str=`${Math.floor(rNumber)}% and  Original is ${rNumber}`;
        // strArr.push(str);
    // }
    return str;
}
// module.exports=name;
export default name;
export { name1, name2 };