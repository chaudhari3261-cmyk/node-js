const massage = " Ritesh chaudhari ";
const no_of_time = 5;
const delay = 1000;

for (let i = 1;i<=no_of_time;i++)
{ setTimeout(() => {
    console.log(i,":- ",massage);
    },i*delay);
}